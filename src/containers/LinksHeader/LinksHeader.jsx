import * as React from 'react'

// STYLE
import './LinksHeader.scss'

// COMPONENTS
import { RouteComponent } from '../../components/RouteLink/RouteLink'

const LinksHeader = () => {
	return (
		<div className="LinksHeader">
			<RouteComponent to="/" label="Home"></RouteComponent>
			<RouteComponent to="/list" label="List"></RouteComponent>
		</div>
	)
}

export { LinksHeader }