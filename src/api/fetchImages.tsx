const fetchImages = async (page: number) => {
	try {
		const response = await fetch(
			`https://pixabay.com/api/?key=21922241-ac53faccd58a6508b64890669&page=${page}&per_page=30&orientation=vertical`
		);
		const images = await response.json();

		return images;
	} catch (error: any) {
		console.log(error.message);
		return error.message;
	}
};

type TfetchImagesSearch = (page: number, category: string) => Promise<any>;

const fetchImagesSearch: TfetchImagesSearch = async (page, category) => {
	try {
		const response = await fetch(
			`https://pixabay.com/api/?key=21922241-ac53faccd58a6508b64890669&page=${page}&per_page=30&category=${category}`
		);
		const images = await response.json();

		return images;
	} catch (error: any) {
		console.log(error.message);
		return error.message;
	}
};

export { fetchImages, fetchImagesSearch };
