import React, { useEffect, useState } from "react";
import FindRepo from "./FindRepo";

const Github = () => {

    const [repos, setRepos] = useState([]);
    const [spinnerLoading, setSpinnerLoading] = useState(true);

    useEffect(() => {
        setSpinnerLoading(false);
    }, []);

    // get git repo
    const getRepos = (username) => {
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
            });
    }



    return (
        <section className="github-feature-wrapper">
            <h1>Github </h1>
            <FindRepo
                clickHandler={getRepos}
                spinnerLoading= {spinnerLoading}
                repos={repos} />
        </section>
    )

}

export default Github;