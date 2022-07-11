import React from 'react';
import Masonry from 'react-masonry-css';
import { useEffect, useState } from 'react';
import { fetchImages } from '../../api/fetchImages';

type TData = {
	id: number;
	pageURL: string;
	type: string;
	tags: string;
	previewURL: string;
	previewWidth: number;
	previewHeight: number;
	webformatURL: string;
	webformatWidth: number;
	webformatHeight: number;
	largeImageURL: string;
	imageWidth: number;
	imageHeight: number;
	imageSize: number;
	views: number;
	downloads: number;
	collections: number;
	likes: number;
	comments: number;
	user_id: number;
	user: string;
	userImageURL: number;
};

interface IData {
	total: number;
	totalHits: number;
	hits: TData[];
}

function BrowseAll() {
	const [data, setData] = useState<IData[]>([]);
	const [page, setPage] = useState(1);
	const [fetching, setFetching] = useState(true);
	console.log(data);

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	});

	useEffect(() => {
		async function fetch(page: number) {
			const images = await fetchImages(page);

			if (data.length >= images.totalHits) {
				return;
			}
			setData(prev => [...prev, ...images.hits]);

			setPage(prev => prev + 1);
		}

		if (fetching) {
			fetch(page);
		}

		setFetching(false);

		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetching]);

	function handleScroll(evt) {
		console.log(evt);

		if (
			evt.target.documentElement.scrollHeight -
				(evt.target.documentElement.scrollTop + window.innerHeight) <
			1000
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
					{/* {data &&
						data.map(({ previewURL, width, height, user, id }) => {
							return (
								<li key={Math.random() + parseInt(id)}>
									<img
										loading='eager'
										className='item-image'
										src={previewURL}
										alt={user}
										width={width}
									/>
								</li>
							);
						})} */}
				</Masonry>
			</ul>
			{/* <button onClick={handleBtnClick} type='button' className='btn '>
				see more
			</button> */}
		</section>
	);
}

export default BrowseAll;
