import DailyNews from './components/DailyNews';
import BrowseAll from './components/BrowseAll/BrowseAll';
import Selections from './components/Selections';

function App() {
	return (
		<div className='App'>
			<header>
				<h1 className='app-title'>Discover</h1>
			</header>
			<DailyNews></DailyNews>
			<BrowseAll></BrowseAll>
			<Selections></Selections>
		</div>
	);
}

export default App;
