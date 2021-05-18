import { useState } from 'react';
import Loader from "react-loader-spinner";
import RepoList from "./RepoList";

const FindRepo = (props) => {
    const [title, setTitle] = useState();

    return (
        <section className="repo-wrapper">
            <div className="form-wrapper m-2">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <input type="text" className="form-control" placeholder="Enter your github username"
                            onChange={event => setTitle(event.target.value)} />
                    </div>
                    <div className="col-auto">

                        <button type="button" className="btn btn-primary" disabled={!title}
                            onClick={() => props.getProfileHandler(title)}>{!title ? '< Enter github username' : 'Find Me'}</button>
                    </div>
                </div>
            </div>

            {
                props.spinnerLoading ?
                    <Loader
                        type="BallTriangle"
                        color="#00BFFF"
                        height={200}
                        width={200}
                        className="loader"
                        visible={true}
                    />
                    : <RepoList repos={props.repos} />
            }



        </section>

    )
}

export default FindRepo;