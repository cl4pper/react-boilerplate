import React from 'react';
import classNames from 'classnames';

// STYLE
import './PageTitle.scss';

function PageTitle(props) {
	const { children, light, subtitle } = props;

	return (
		<div
			className={classNames('PageTitle', {
				'PageTitle--dark': !light,
				'PageTitle--light': light,
			})}>
			<h1 className="PageTitle__title">{children}</h1>
			{subtitle ? <p className="PageTitle__subtitle">{subtitle}</p> : null}
		</div>
	);
}

export { PageTitle };
