import React, { Component } from 'react';
import { connect } from 'react-redux';

// STYLE
import './CommitsList.scss';

// STORE
import { githubRequest } from '@store/modules/github';

// COMPONENTS
import { CommitItem } from '@components';

class CommitsListContainer extends Component {
	componentDidMount() {
		this.props.loadData();
	}

	render() {
		const { commits, strings } = this.props;

		console.log(commits[0]);

		return (
			<div className="CommitsList">
				<h2 className="CommitsList__title">{strings.commitsList}</h2>
				<li className="CommitsList__list">
					{commits.slice(0, 5).map((commit, index) => (
						<CommitItem
							key={index}
							date={commit.commit.author.date}
							commit={commit.commit.message}
						/>
					))}
				</li>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	loadData: () => dispatch(githubRequest()),
});

const mapStateToProps = (state) => ({
	commits: state.github.data,
	strings: state.strings.data,
});

const CommitsList = connect(mapStateToProps, mapDispatchToProps)(CommitsListContainer);

export { CommitsList };
