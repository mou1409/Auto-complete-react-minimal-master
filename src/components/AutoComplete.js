import React from "react";

// Home page component
export default class AutoComplete extends React.Component {
  // render
  constructor(props) {
    super(props);
    this.state = {
      openAutoComplete: false,
      selectedIndex: 0
    }
  }

  onChangeInput(e) {
    this.props.onUserSearch(e.target.value);
    if (e.target.value) {
      this.setState({
        openAutoComplete: true
      })
    } else {
      this.setState({
        openAutoComplete: false
      })
    }
  }

  onSelectChange(e) {
    let { selectedIndex } = this.state;
    const { gitHubUsersList } = this.props;
    let autoComplete = document.getElementById('autoComplete');
    if (e.keyCode === 38 && selectedIndex > 0) {
      selectedIndex--;
      autoComplete.scrollTop -= 50;
    } else if (e.keyCode === 40 && gitHubUsersList && selectedIndex < gitHubUsersList.length - 1) {
      selectedIndex++;
      autoComplete.scrollTop += 50;
    } else if (e.keyCode === 13) {
      this.props.selecteGitHubUser(gitHubUsersList[selectedIndex])
    }



    this.setState({
      selectedIndex: selectedIndex
    })
  }

  onUserSelect(i){
    const { gitHubUsersList } = this.props;
    this.props.selecteGitHubUser(gitHubUsersList[i]);
    this.setState({
      selectedIndex: i
    })
  }

  triggerAutoComplete(){
    this.setState({
      openAutoComplete: true
    })
  }

  closeAutoComplete(){
    this.setState({
      openAutoComplete: false,
      selectedIndex: 0
    });
    document.getElementById('autoComplete').scrollTop = 0;
  }


  render() {
    const { openAutoComplete, selectedIndex } = this.state;
    const { gitHubUsersList } = this.props;
    return (
      <div className="page-home-input">
        <div className="input-search">
          <input type="text" className="form-control" onChange={(event) => this.onChangeInput(event)} 
          onKeyDown={(e) => this.onSelectChange(e)} 
          onFocus={() => this.triggerAutoComplete()}
          onBlur={() => this.closeAutoComplete()}
          />
          <span className="glyphicon glyphicon-search"></span>
        </div>
        {
          openAutoComplete && gitHubUsersList.length > 0 && <div className="open-list">
            <ul id="autoComplete">
              {gitHubUsersList.map((user, i) => {
                return (
                  <li key={i} onClick={() => this.onUserSelect(i)} className={selectedIndex === i ? 'active' : ''}>
                    <span><img src={user.avatar_url} /></span>
                    <span>{user.login}</span>
                  </li>
                )
              })
              }
            </ul>
          </div>
        }
      </div>
    );
  }
}
