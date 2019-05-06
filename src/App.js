import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'

// STYLE
import './app.scss'

// STORE
import store from './store'

// COMPONENTS
import PageTitle from './components/PageTitle/PageTitle'
import RoadmapList from './components/RoadmapList/RoadmapList';
import Counter from './components/Counter/Counter';

export default class App extends Component {
	// no CONSTRUCTOR - if you do not initialize state or do not bind methods
	render() {
		return (
			<Provider store={store}>
				<div className="app">
					<PageTitle title="React Component" />
					<Counter></Counter>
					<RoadmapList />
				</div>
			</Provider>
		)
	}
}