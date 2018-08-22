
const intialState = {
   gitHubUsers: [],
   selectedGitHubUser: {}
}
export default function autoComplete(state = intialState, action) {
    switch (action.type) {
        case 'FETCH_GIT_USERS_LOAD':
            return Object.assign({}, state, {gitHubUsers: action.users});       
        case 'SELECT_GIT_HUB_USER_LOAD' :
              return Object.assign({}, state, {selectedGitHubUser: action.selectedGitHubUser})
        default:
            return state;
    }
}