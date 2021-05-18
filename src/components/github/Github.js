import React, { useEffect, useState } from "react";
import FindRepo from "./FindRepo";
import GithubProfile from "./GithubProfile";

const Github = () => {

    const [repos, setRepos] = useState([]);
    const [profile, setProfile] = useState([]);
    const [isPopupVisible, setPopupVisibility] = useState(false);
    const [spinnerLoading, setSpinnerLoading] = useState(true);

    useEffect(() => {
        setSpinnerLoading(false);
    }, []);

    // get git repo
    const getRepoHandler = (username) => {
        setSpinnerLoading(true);
        console.log('Username ', username);

        let activeUsername = username;
        (username) ? activeUsername = username : activeUsername = 'hidaytrahman';

        const apiUrl = `https://api.github.com/users/${activeUsername}/repos`;

        const localUrl = 'http://localhost:4000/data';
        fetch(apiUrl)
            .then(response => response.json())
            .then((data) => {
                setRepos(data);
                setSpinnerLoading(false);
                closePopupHandler();
            });
    }

    // get profile
    const getProfileHandler = (username) => {
        setSpinnerLoading(true);
        console.log('Username ', username);

        let activeUsername = username;
        (username) ? activeUsername = username : activeUsername = 'hidaytrahman';

        const apiUrl = `https://api.github.com/users/${activeUsername}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then((data) => {
                openPopup();
                setProfile(data);
                setSpinnerLoading(false);
            });
    }

    const closePopupHandler = () => {
        console.log('hey');
        setPopupVisibility(false);
    }

    const openPopup = () => {
        setPopupVisibility(true);
    }


    return (
        <section className="github-feature-wrapper">
            <h1>Github </h1>
            <FindRepo
                getProfileHandler={getProfileHandler}
                spinnerLoading={spinnerLoading}
                repos={repos} />

            <GithubProfile
                isPopupVisible={isPopupVisible}
                closePopupHandler={closePopupHandler}
                getRepoHandler={getRepoHandler}
                profile={profile}
            />


        </section>
    )

}

export default Github;

// todo: Github profile validation - No user exist 
// todo: add interactive button state UI (search, searching. done)
