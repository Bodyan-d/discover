const fetchImages = async page => {
	try {
		const response = await fetch(
			`https://pixabay.com/api/?key=21922241-ac53faccd58a6508b64890669&page=${page}&per_page=30&orientation=vertical`
		);
		const images = await response.json();

		return images;
	} catch (error) {
		console.log(error.message);
		return error.message;
	}
};

const fetchImagesSearch = async (page, category) => {
	try {
		const response = await fetch(
			`https://pixabay.com/api/?key=21922241-ac53faccd58a6508b64890669&page=${page}&per_page=30&category=${category}`
		);
		const images = await response.json();

		return images;
	} catch (error) {
		console.log(error.message);
		return error.message;
	}
};

export { fetchImages, fetchImagesSearch };
