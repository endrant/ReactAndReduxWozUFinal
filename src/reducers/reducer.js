import Redux from 'redux';

let initialState = {
    username: '',
    userprofile: {},
    repos: [],
    onerepos: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_USERNAME':
            return {
                ...state,
                username: action.username
            }
        break;
        case 'UPDATE_USERPROFILE':
            return {
                ...state,
                userprofile: action.userprofile
            }
        break;
        case 'UPDATE_REPOS':
                return {
                    ...state,
                    repos: action.repos
                }
        case 'UPDATE_REPOS':
                return {
                    ...state,
                    repos: action.onerepos
                }
        default:
            return state;
    }
}

export default reducer;