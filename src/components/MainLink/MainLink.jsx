import React from 'react';
import classNames from 'classnames';

// STYLE
import './MainLink.scss';

function MainLink(props) {
	const { to, logo, light, children } = props;
	return (
		<a
			className={classNames('MainLink', {
				'MainLink--dark': !light,
				'MainLink--light': light,
			})}
			href={to}
			target="_blank">
			{logo ? <span className="MainLink__logo">{logo}</span> : null}
			{children}
		</a>
	);
}

export { MainLink };
