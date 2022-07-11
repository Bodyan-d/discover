import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home/Home';
// import Search from './components/Search';
// import Chats from './components/Chats/Chats';
// import Profile from './components/Profile/Profile';
// import Selections from './components/Selections/Selections';

function App() {
	return (
		<div className='App'>
			<div className='content'>
				<Outlet />
			</div>
			<Routes>
				<Route path='/' element={<Selections />}>
					<Route path='/' element={<Home />} />
					{/* <Route path='search' element={<Search />} /> */}
					<Route path='chats' element={<Chats />} />
					<Route path='profile' element={<Profile />} />
					{/* <Route path='' element={<Dashboard />} /> */}
				</Route>
			</Routes>
		</div>
	);
}

export default App;
