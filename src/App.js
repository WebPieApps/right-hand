import React, { Component } from "react";
import './App.css';
// import RandomUsers from "./components/random_users/RandomUsers";
import FindRepo from "./components/github_repo/FindRepo";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
class App extends Component {

  constructor(props) {
    super(props);

    // base states
    this.state = {
      something: true,
      randomUsers: [],
      repos: [],
      repoDetails: null,
      username: ""
    }
  }

  // load life cycle
  componentDidMount() {
    //const apiUrl = 'https://api.github.com/users/hidaytrahman/repos';
    // const apiUrl = 'http://localhost:4000/data';
    // fetch(apiUrl)
    //   .then(response => response.json())
    //   .then((data) => {
    //     console.log('data', data);
    //     this.setState({
    //       repos: data
    //     });
    //   });
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
      <main className="app-init">

        <Header />
        <section className="content-holder-section container">

          <FindRepo 
            clickHandler={this.getRepos}  
            username={this.state.username}
            repos={this.state.repos}/>

        </section>
        {/* Content holder section end here */}

        <Footer />
      </main>
    )
  }
}

export default App;
