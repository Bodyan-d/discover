import React from 'react';
import Masonry from 'react-masonry-css';
import { useEffect, useState } from 'react';
import fetchImages from '../../api/fetchImages';

function BrowseAll() {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [fetching, setFetching] = useState(true);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	});

	useEffect(() => {
		async function fetch(page) {
			const images = await fetchImages(page);
			if (total === images.totalHits) {
				setData(prev => [...prev, {}]);
			}
			setData(prev => [...prev, ...images.hits]);
			setTotal(page);
			setPage(prev => prev + 1);
		}

		if (fetching) {
			fetch(page);
		}

		setFetching(false);

		return () => {};
	}, [fetching]);

	function handleScroll({ target }) {
		if (
			target.documentElement.scrollHeight -
				(target.documentElement.scrollTop + window.innerHeight) <
			600
		) {
			setFetching(true);
		}
	}

	// async function handleBtnClick(e) {
	// 	const images = await fetchImages(page);
	// 	setData([...data, ...images.hits]);

	// 	setPage(page + 1);
	// }

	return (
		<section className='main-section'>
			<h4 className='browse-title'>Browse all</h4>
			<ul className='imge-list'>
				<Masonry
					breakpointCols={2}
					className='my-masonry-grid'
					columnClassName='my-masonry-grid_column'
				>
					{data &&
						data.map(({ webformatURL, width, height, user, id }) => {
							return (
								<li key={Math.random() + parseInt(id)}>
									{' '}
									<img
										className='item-image'
										src={webformatURL}
										alt={user}
										width={width}
									/>
								</li>
							);
						})}
				</Masonry>
			</ul>
			{/* <button onClick={handleBtnClick} type='button' className='btn '>
				see more
			</button> */}
		</section>
	);
}

export default BrowseAll;
