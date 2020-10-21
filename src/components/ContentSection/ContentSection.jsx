import React from 'react';
import classNames from 'classnames';

// STYLE
import './ContentSection.scss';

function ContentSection(props) {
	const { children, light, left, right, spaced, height, vertical } = props;
	return (
		<section
			className={classNames('ContentSection', {
				'ContentSection--dark': !light,
				'ContentSection--light': light,
				'ContentSection--center': !left && !right && !spaced,
				'ContentSection--right': right,
				'ContentSection--left': left,
				'ContentSection--spaced': spaced,
				'ContentSection--vertical': vertical && !left && !right && !spaced,
			})}
			style={{
				height: `${height}`,
			}}>
			{children}
		</section>
	);
}

export { ContentSection };
