import React, { useState, useEffect } from "react";
import "./RandomUsers.css";

const RandomUsers = () => {

    // state
    const [profile, setProfile] = useState([]);

    const [title] = useState("Random Users");

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = title;
        console.log(' hi use effect');
    });

    useEffect(() => {
        changeUser()
    }, [])

    // useEffect(() => {
    //     document.title = `You clicked ${count} times`;
    //   }, [count]); // Only re-run the effect if count changes


    const changeUser = () => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then((data) => {
                console.log(' data ', data.results);
                setProfile(data.results);
            });
    }

    return (
        <section className="random-user-wrapper">
            <h1>Get Random User</h1>

            {profile.map((user, index) => (
                <section className="profile_container" key={index}>
                    <div className="wraps">
                        <div className="profile_img" style={{ background: `url(${user.picture.large})` }}>
                            <img src={user.picture.large} alt={user.name.first} />
                        </div>
                        <div className="profile_details">
                            <h1 className="username">{user.name.title} {user.name.first} {user.name.last}</h1>

                            <div className="user_info">
                                <span className="info">{user.email}</span>
                                <span className="info">{user.gender}</span>
                                <span className="info">{user.phone}</span>
                                <span className="info">{user.dob.age}</span>
                            </div>

                            <div className="user_links address">
                                <address>
                                    {user.location.street.number} {user.location.street.name}, {user.location.city} <br />
                                    {user.location.state} {user.location.country} - {user.location.postcode}
                                </address>
                            </div>
                        </div>
                    </div>
                </section>
            ))}


            <div className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={() => changeUser()}>
                    Change User
                    </button>
            </div>


        </section>

    )
}

export default RandomUsers;