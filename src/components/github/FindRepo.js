import { useState } from 'react';
import RepoList from "./RepoList";

const FindRepo = (props) => {
    const [title, setTitle] = useState('');


    return (
        <section className="repo-wrapper">
            <div className="form-wrapper m-2">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <input type="text" className="form-control" placeholder="Enter your github username"
                            onBlur={event => setTitle(event.target.value)} />
                    </div>
                    <div className="col-auto">

                        <button type="button" className="btn btn-primary"
                            onClick={() => props.clickHandler(title)}>Fetch</button>
                    </div>
                </div>
            </div>

            <RepoList repos={props.repos}/>

        </section>

    )
}

export default FindRepo;