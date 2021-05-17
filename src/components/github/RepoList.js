import React from "react";
import "./GithubRepo.css";
import { formatDate } from "../../core/Utils";
import RepoDetails from "./RepoDetails";

const RepoList = (props) => {
    const { repos } = props;

    // show notification if repo is empty or null
    if (!repos || repos.length === 0) {
        return (
            <div className="mt-1 alert alert-info" role="alert">
                Sorry No repos
            </div>
        );
    }

    const openDetails = (repo) => {
        //const parentElement = document.querySelector("#repo-list");

        //parentElement.style.display= 'none';

        console.log(' repo ', repo);

        props.repoDetailsHandler(repo.id);

    }

    return (
        <section className="github-wrapper">
            <h4>Repositories</h4>

            <div className="list-group" id="repo-list">
                {
                    repos && repos.length > 0 ?
                        repos.map((item) => {
                            return (
                                <div className="list-group-item list-group-item-action flex-column align-items-center" data-id={item.id} key={item.id}>
                                    <a href={item.html_url}><h5 className="mb-1">{item.name}</h5></a>
                                    <p className="mb-1">{item.description}</p>
                                    <small>{formatDate(item.created_at)}</small>
                                    <span className="badge badge-primary badge-pill">{item.size}</span>
                                    <button className="btn btn-primary" onClick={(e) => openDetails(item)}>Brief</button>
                                </div>
                            )
                        }) : null
                }
            </div>

            <RepoDetails mydata={"rahman"} />

        </section>
    )
}

export default RepoList;