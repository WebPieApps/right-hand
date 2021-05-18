import React, { useEffect, useState } from "react";
import FindRepo from "./FindRepo";

const Github = () => {

    const [repos, setRepos] = useState([]);
    const [profile, setProfile] = useState([]);
    const [isPopupVisible, setPopupVisibility] = useState(false);

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
                closePopup();
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

    const closePopup = () => {
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

            <div className={'modal ' + (isPopupVisible ? 'd-block' : '')} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Hi {profile.name}</h5>
                            <button type="button" className="close" onClick={closePopup} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                <img className="card-img-top" src={profile.avatar_url} alt={profile.name} />
                                <div className="card-body">
                                    <p className="card-text">{profile.bio}</p>
                                    <span class="badge badge-pill badge-light">{profile.location}</span>
                                    <a href={profile.blog} target="_blank" rel="noreferrer" className="btn btn-secondary m-2 badge badge-primary">Visit my blog</a>
                                    <div className="profile-information">
                                        <span class="badge badge-primary">Repository {profile.public_repos}</span>
                                        <span class="badge badge-danger">Gist {profile.public_gists}</span>
                                        <span class="badge badge-secondary">Followers {profile.followers}</span>
                                        <span class="badge badge-success">Following {profile.following}</span>
                                       
                                        <span class="badge badge-warning">{(profile.hireable ? 'Looking for job' : 'No looking for job' )}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closePopup}>Not you?</button>
                            <button type="button" className="btn btn-primary" onClick={() => getRepos(profile.login)}>Fetch my Repo</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Github;