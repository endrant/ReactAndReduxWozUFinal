import React, {Component} from 'react';
import {connect} from 'react-redux';

class Search extends Componenet {

    onHandleChange = (e) => {
        let {dispatch} = this.props;
        dispatch({type: 'UPDATE_USERNAME' , username: e.target.value})
    }

    onUserSearch = ( ) => {
        let {dispatch} = this.props;
        let {username} = this.props;
        fetch(`https://api.github.com/users/${username}`)
            .then(res => {
              return  res.json()
            })
            .then(res => {
              dispatch({type: 'UPDATE_USERPROFILE', userprofile: res})
            })

    }

    onRepoFetch = () => {
        let {dispatch} = this.props;
        let {repo_url} = this.props.userprofile;

        fetch(repos_url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch({type: 'UPDATE_REPOS', repos: res})
        })
    }
    
        render() {
            let {userprofile} = this.props;
            let repos = this.props.repos.map((repo,i)=> {
                return <li key={i}>{repo.name}</li>
            })
            return (
                <div>
                   <h1> {this.props.username}</h1>
                   <input type="text"
                          onChange={this.onHandleChange}
                          value={this.props.user} />
                    <button onClick={this.onuserSearch}>Search for Repos</button>
                    <br/>
                    <h1>{this.props.userprofile.login}</h1>
                    <button onClick={this.onRepoFetch}>Fetch Repos</button>
                    {repos}
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


    export default connect(mapStateToProps)(Search);