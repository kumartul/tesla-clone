import React from 'react';

import Home from './components/Home';
import Account from './components/Account';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';

import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import './style/App.css';

const App = () => {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/account' element={<Account />} />
					<Route exact path='/signin' element={<SignIn />} />
					<Route exact path='/createaccount' element={<CreateAccount />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
