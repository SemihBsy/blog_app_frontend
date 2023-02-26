import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Single from './components/posts/single';
import Search from './components/posts/search';
import Admin from './Admin';
import Create from './components/admin/create';
import Edit from './components/admin/edit';
import Delete from './components/admin/delete';

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<Header />
			<Routes>
				<Route exact path="/" element={<App />} />
				<Route exact path="/admin" element={<Admin />} />
				<Route exact path="/admin/create" element={<Create />} />
				<Route exact path="/admin/edit/:id" element={<Edit />} />
				<Route exact path="/admin/delete/:id" element={<Delete />} />
				<Route path="/register/" element={<Register />} />
				<Route path="/login/" element={<Login />} />
				<Route path="/logout/" element={<Logout />} />
				<Route path="/post/:slug" element={<Single />} />
				<Route path="/search/" element={<Search />} />
			</Routes>
			<Footer />
		</React.StrictMode>
	</Router>,
	document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
