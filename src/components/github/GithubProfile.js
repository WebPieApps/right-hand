const GithubProfile = (props) => {

    return (
        <div className={'modal ' + (props.isPopupVisible ? 'd-block' : '')} tabIndex="-1">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Hi {props.profile.name}</h5>
                        <button type="button" className="close" onClick={props.closePopupHandler} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="card">
                            <img className="card-img-top" src={props.profile.avatar_url} alt={props.profile.name} />
                            <div className="card-body">
                                <p className="card-text">{props.profile.bio}</p>
                                <span className="badge badge-pill badge-light">{props.profile.location}</span>
                                <a href={props.profile.blog} target="_blank" rel="noreferrer" className="btn btn-secondary m-2 badge badge-primary">Visit my blog</a>
                                <div className="profile-information">
                                    <span className="badge badge-primary">Repository {props.profile.public_repos}</span>
                                    <span className="badge badge-danger">Gist {props.profile.public_gists}</span>
                                    <span className="badge badge-secondary">Followers {props.profile.followers}</span>
                                    <span className="badge badge-success">Following {props.profile.following}</span>

                                    <span className="badge badge-warning">{(props.profile.hireable ? 'Looking for job' : 'No looking for job')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={props.closePopupHandler}>Not you?</button>
                        <button type="button" className="btn btn-primary" onClick={() => props.getRepoHandler(props.profile.login)}>Fetch my Repo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GithubProfile;