import React, { Component } from 'react';
import { connect } from 'react-redux';

// STYLE
import './app.scss';

// COMPONENTS
import { ReactComponent as ReactLogo } from '@assets/images/react-logo.svg';
import { ReactComponent as GithubLogo } from '@assets/images/github-logo.svg';
import { ReactComponent as Linkedin } from '@assets/images/linkedin-logo.svg';
import { CommitsList } from '@containers';
import { PageTitle, ContentSection, MainLink } from '@components';

class AppContainer extends Component {
	render() {
		const { strings } = this.props;

		return (
			<div className="app">
				<ContentSection dark height="50vh" vertical>
					<PageTitle subtitle="by cl4pper" light>
						{strings.title} <ReactLogo className="ReactLogo" />
					</PageTitle>
					<div className="app__subsection">
						<MainLink to="https://github.com/cl4pper/react-boilerplate" light logo={<GithubLogo />}>
							GitHub
						</MainLink>
						<MainLink
							to="https://www.linkedin.com/in/matheus-pereira-de-souza-19895316a/"
							light
							logo={<Linkedin />}>
							LinkedIn
						</MainLink>
					</div>
				</ContentSection>
				<ContentSection light spaced height="50vh">
					<CommitsList />
				</ContentSection>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	strings: state.strings.data,
});

const App = connect(mapStateToProps)(AppContainer);

export default App;
