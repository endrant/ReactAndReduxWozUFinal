import React from 'react';
import Header from '../components/Header';

class Mine extends Componenet {

    onMyRepoFetch = () => {
        let {dispatch} = this.props;
        let {repo_url} = this.props.userprofile;

        fetch('https://api.github.com/users/zfloydbell/repos')
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch({type: 'SHOW_MYREPOS', onerepos: res})
        })
    }
    
        render() {
            let myrepos = this.props.repos.map((repo,i)=> {
                return <li key={i}>{repo.name}</li>
            })
            return (
                <div>
                    <h1>My Repos</h1>
                    <button onClick={this.onMyRepoFetch}>Show my Repos</button>
                    {myrepos}
                </div>
            );
        }
    }
    
    const mapStateToProps = (state) => {
        return {
            username: state.username,
            userprofile: state.userprofile,
            repos: state.repos
        }
    }


    export default Mine;