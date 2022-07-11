function DailyNews() {
	return (
		<section className='news-section'>
			<h4 className='section-title'>What’s new today</h4>
			<ul className='daily-news'>
				<li className='daily-post'>
					<img
						className='posted-image'
						src='https://picsum.photos/seed/lolik/1980/1980'
						alt='post'
					/>
					<div className='about-image'>
						<img
							className='author-image'
							src='https://picsum.photos/seed/luky/200/300'
							alt='avatar'
						/>
						<span>
							<h5 className='author-name'>Ridhwan Nordin</h5>
							<p className='author-username'>@ridzjcob</p>
						</span>
					</div>
				</li>
			</ul>
		</section>
	);
}

export default DailyNews;
