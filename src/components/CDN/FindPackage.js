import { useState } from 'react';
import Loader from "react-loader-spinner";
import LibraryList from "./LibraryList";
import "./FindPackage.css";

const FindPackage = (props) => {
    const [title, setTitle] = useState();
    console.log(' props.spinnerLoadin ', props.spinnerLoading)
    return (
        <section className="repo-wrapper">
            <div className="form-wrapper m-2 custom-form">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <input type="text" className="form-control" placeholder="Search Package"
                            onChange={event => setTitle(event.target.value)} />
                    </div>
                    <div className="col-auto">

                        <button type="button" className={`btn btn-${!props.spinnerLoading ? 'primary' : 'warning'}`} disabled={!title}
                            onClick={() => props.findPackageHandler(title)}>
                                {!props.spinnerLoading ? !title ? '< Enter Package Name?' : 'Find Package' : 'Finding...'}
                                </button>
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
                    : <LibraryList parentCustomClass="find-package-list" libraries={props.pkg} />
            }



        </section>

    )
}

export default FindPackage;