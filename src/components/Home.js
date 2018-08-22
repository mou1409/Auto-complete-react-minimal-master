import React from "react";
import { connect } from "react-redux";
import AutoComplete from './AutoComplete';

// Home page component
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.onUserSearch = this.onUserSearch.bind(this);
    this.selecteGitHubUser = this.selecteGitHubUser.bind(this);
  }

  onUserSearch(query) {
    this.props.dispatch({
      type: 'FETCH_GIT_USERS',
      query: query,
    });
  }

  selecteGitHubUser(user) {
    this.props.dispatch({
      type: 'SELECT_GIT_HUB_USER',
      selectedGitHubUser: user,
    });
  }
  // render
  render() {
    const {selectedGitHubUser} = this.props;
    return (
      <div className="page-home">
        <AutoComplete {...this.props} onUserSearch={this.onUserSearch} selecteGitHubUser={this.selecteGitHubUser} />

       <div className="selected-data"> <p>SelectedGitHubUser: {selectedGitHubUser.login}</p></div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('42', state);
  return {
    gitHubUsersList: state.autoComplete.gitHubUsers,
    selectedGitHubUser: state.autoComplete.selectedGitHubUser
  };
}
export default connect(mapStateToProps)(Home);
