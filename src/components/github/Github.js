import React from "react";
import FindRepo from "../github_repo/FindRepo";

export default class Github extends React.Component {

    constructor(props) {
        super(props);

        console.log('github loaded ', props)
        // base states
        this.state = {
            something: true,
            repos: [],
            repoDetails: null,
            username: ""
        }
    }


    // get git repo
    getRepos = (username) => {
        console.log('Username ', username);

        let activeUsername = username;
        (username) ? activeUsername = username : activeUsername = 'hidaytrahman';

        const apiUrl = `https://api.github.com/users/${activeUsername}/repos`;

        const localUrl = 'http://localhost:4000/data';
        fetch(apiUrl)
            .then(response => response.json())
            .then((data) => {
                console.log('data', data);
                this.setState({
                    repos: data
                });
            });
    }


    
  getRepoDetails(id) {
    console.log('id ', id);
    const localUrl = `http://localhost:4000/data/${id}`;

    fetch(localUrl)
      .then(response => response.json())
      .then((data) => {
        console.log('data', data);
        // this.setState({
        //   repoDetails: data
        // });
      });
  }

    render() {
        return (
            <section className="github-feature-wrapper">
                <h1>Github </h1>
                <FindRepo
                    clickHandler={this.getRepos}
                    username={this.state.username}
                    repos={this.state.repos} />
            </section>
        )
    }
}