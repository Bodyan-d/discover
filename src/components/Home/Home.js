import DailyNews from '../DailyNews';
import BrowseAll from '../BrowseAll';
import Selections from '../Selections';

function Home() {
	return (
		<div className='Home'>
			<header>
				<h1 className='app-title'>Discover</h1>
			</header>
			<DailyNews></DailyNews>
			<BrowseAll></BrowseAll>
		</div>
	);
}

export default Home;
