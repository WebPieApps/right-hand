import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Loader from "react-loader-spinner";

import { copyToClipboard } from "../../core/Utils";

import "./CDN.css";

const CDN = (props) => {

    const [libraries, setLibrary] = useState([]);

    const [loader, setLoader] = useState(true);

    const [title, setTile] = React.useState();

    const [spinnerLoading, setSpinnerLoading] = useState(true);

    // component load lifecycle for title
    useEffect(() => {
        setTile(props.data.title);
        document.title = title;
    }, [title]);


    // life cycle for set libraries
    useEffect(() => {

        console.log(' loader ', loader);

        // sample response has been trimmed to remove items in the results array.
        // https://api.cdnjs.com/libraries?search=vue&fields=filename,description,version,github&limit=3

        // https://api.cdnjs.com/libraries?search=jquery

        // https://api.cdnjs.com/libraries/vue?fields=name,author,description,filename,sri,version,repository,autoupdate

        // https://api.cdnjs.com/libraries/jquery?fields=assets,versions

        // https://api.cdnjs.com/libraries/jquery/3.5.1

        // https://api.cdnjs.com/libraries/vue/2.6.11?fields=files,sri

        // https://api.cdnjs.com/libraries/vue/tutorials

        // https://api.cdnjs.com/libraries/backbone.js/tutorials?fields=name,modified

        // https://api.cdnjs.com/libraries/vue/tutorials/wtf-is-vuex


        fetch("https://api.cdnjs.com/libraries/?limit=10")
            .then(response => response.json())
            .then(data => {
                console.log(' data ', data);
                setLibrary(data.results);
                setLoader(false);
                setSpinnerLoading(false);
            });
    }, []);

    // style
    // const grayStyle = {
    //     fontSize: '12px',
    //     color: '#555555'
    // }


    const loadLibraryDOM = () => {
        if (spinnerLoading) {
            return (
                <section className="custom-loader">
                    <Loader
                        type="BallTriangle"
                        color="#00BFFF"
                        height={200}
                        width={200}
                        className="loader"
                    />
                </section>
            )
        } else {
            return (
                <section className="">
                    <h3>Libraries</h3>
                    <div className="row">
                        {
                            libraries.map((library, index) => {
                                return (
                                    <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{library.name}</h5>
                                                <div className="copy-area">
                                                    <div id="inviteCode" className="invite-page">
                                                        <input id="link" value={library.latest} readOnly />
                                                        <div id="copy" onClick={(e) => copyToClipboard(e)}>
                                                            <i className="fa fa-clipboard" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between row">
                                                    <a href={library.latest} target="_blank" rel="noreferrer" className="btn btn-primary" >Latest Download</a>

                                                    <Link to={'/lib/' + library.name}><button className="btn btn-secondary" >Description</button></Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </section>

            )
        }
    }

    return (
        <section className="cdn-wrapper">
            <h1>CDN Hub</h1>

            {loadLibraryDOM()}

        </section >
    )
}

export default CDN;