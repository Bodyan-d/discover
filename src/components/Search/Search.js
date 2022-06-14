import { useState } from 'react';

import { fetchImagesSearch } from '../../api/fetchImages';

function Search() {
	const [search, setSearch] = useState('');
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [btnClass, setBtnClass] = useState('more-btn hidden');
	const [titleClass, setTitleClass] = useState('browse-title hidden');

	function handleChange({ target }) {
		setSearch(target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		async function fetch(page, search) {
			const images = await fetchImagesSearch(page, search);

			if (data.length >= images.totalHits) {
				return;
			}
			setData(images.hits);

			setPage(prev => prev + 1);
		}

		fetch(page, search);

		setBtnClass(prev => prev.split(' ')[0]);
		setTitleClass(prev => prev.split(' ')[0]);
	}

	async function handleBtnClick(e) {
		const images = await fetchImagesSearch(page, search);
		setData([...data, ...images.hits]);

		setPage(prev => prev + 1);
	}

	return (
		<section className='search'>
			<header>
				<h1 className='app-title'>Search</h1>
			</header>

			<form className='search-form' onSubmit={handleSubmit}>
				<input
					className='search-input'
					value={search}
					type='text'
					autoComplete='on'
					onChange={handleChange}
				/>
			</form>
			<h4 className={titleClass}>All results</h4>
			<ul className='grid-container'>
				{data &&
					data.map(({ previewURL, width, height, user, id }) => {
						return (
							<li className='grid-item' key={Math.random() + parseInt(id)}>
								<img
									loading='eager'
									className='grid-image'
									src={previewURL}
									alt={user}
									width={width}
								/>
							</li>
						);
					})}
			</ul>

			<button onClick={handleBtnClick} type='button' className={btnClass}>
				<p className='btn-title'>see more</p>
			</button>
		</section>
	);
}

export default Search;
