import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'
import Navigation from './components/Navigation'
import Detail from './routes/Detail'

function App(){
	return (
		<BrowserRouter>
			<Navigation />
			<Route path="/" exact={true} component={Home} />
			<Route path="/about" component={About}/>
			<Route path="/movie/:movieId" component={Detail}/>
		</BrowserRouter>
	)
}

export default App