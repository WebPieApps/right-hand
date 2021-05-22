import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { copyCodeToClipboard } from "../../core/Utils";
import "./LibraryDetails.css";
import "./CodeStyle.css";

const LibraryDetails = (props) => {
    const [library, setLibrary] = useState([]);
    const [assets, setAsset] = useState([]);
    const [keywords, setkeyword] = useState([]);
    const [title, setTitle] = useState()
    const [spinnerLoading, setSpinnerLoading] = useState(true);

    let libraryName = props.match.params.name;
    // let libraryName = (props.match.params.name) ? props.match.params.name.toUpperCase() : props.match.params.name;

    useEffect(() => {
        fetch(`https://api.cdnjs.com/libraries/${libraryName}`)
            .then(response => response.json())
            .then(data => {
                //console.log(' data ', data);
                setLibrary(data)
                setAsset(data.assets);
                setkeyword(data.keywords);
                setSpinnerLoading(false);
            })// Catch any errors we hit and update the app
            .catch(error => {
                console.log('custom errpr ', error);
                setSpinnerLoading(false)
            });

    }, [libraryName]);

    // for title
    useEffect(() => {
        document.title = libraryName.replace('-', ' ').toUpperCase();
    }, [title]);

    const headerContent = () => {
        if (library) {
            return (
                <section className="main-parent-wrapper">
                    <div className="container">
                        <div className="jumbotron">
                            <h2 className="text-uppercase">{libraryName}</h2>
                            <div>
                                <p>{library.description} <br />
                            Developed By <span className="badge badge-secondary m-1">{library.author}</span></p>
                            </div>


                            <div className="keywords">
                                {
                                    library.keywords && library.keywords.length > 0 ?
                                        keywords.map((item, index) => {
                                            return <span className="badge badge-warning m-1" key={index}>{item}</span>
                                        }) : null
                                }

                            </div>

                            {
                                library.versions && library.versions.length > 0 ?
                                    <p>Current version <span className="badge badge-success">{library.version} </span>
                         - Initial version <span className="badge badge-success">{library.versions[0]}</span>
                                        <span className="badge badge-warning m-1">{library.license} License</span> </p>
                                    : null
                            }


                            <div className="d-flex">
                                <a href={library.homepage} target="_blank" rel="noreferrer" className="btn btn-primary mr-1">website</a>
                                {/* <a href={library.repository.url} target="_blank" rel="noreferrer" className="btn btn-primary">Github</a> */}
                            </div>
                        </div>
                    </div>


                </section>

            )
        }
    }

    const cdnListContent = () => {
        return (
            <details>
                <summary><span>CDN List of </span> <small className="ml-1"> {assets.length} result</small></summary>
                <div className="cnd-list-wrapper d-flex flex-column-reverse">

                    {
                        library.assets && library.assets.length > 0 ?
                            library.assets.map((asset, index) => {
                                return (
                                    <div className="each-lib" key={index}>
                                        <p><strong>React {asset.version}</strong></p>
                                        <div className="gatsby-highlight" data-language="html" >
                                            <pre className="gatsby-code-html">
                                                <code className="gatsby-code-html">
                                                    {
                                                        asset.files.map((item, i) => {
                                                            return (
                                                                <div key={i}>
                                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>script</span> <span className="token attr-name">crossorigin</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/{library.name}/{asset.version}/{asset.files[i]}<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token script"></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>script</span><span className="token punctuation">&gt;</span></span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </code>
                                            </pre>
                                        </div>

                                        <div className="code-controls copy-script">
                                            <input type="text" className="d-none" readOnly
                                                value={`<script src="https://cdnjs.cloudflare.com/ajax/libs/${library.name}/'${asset.version}'/'${asset.files[0]}" crossorigin="anonymous"></script>`} />
                                            <button className="btn btn-secondary" title="Copy code" onClick={(e) => copyCodeToClipboard(e)}>
                                                Copy
                                            </button>
                                        </div>
                                    </div>

                                )
                            }) : null
                    }
                </div>
            </details>
        )
    }

    const cdnTutorial = () => {
        return (

            library.tutorials && library.tutorials.length > 0 ?
                <details>
                    <summary>Tutorials</summary>

                    <div>
                        {
                            library.tutorials.map((item, index) => {
                                return (
                                    <div key={item}>
                                        <p>Lorem ipsum dolor sit amet, eu alia suscipit mei.</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </details>
                : null

        )
    }

    return (
        <section className="library-details-wrapper">


            {/* conditional based rendering */}

            {
                spinnerLoading
                    ? (
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
                    : (
                        <section>
                            {headerContent()}

                            { cdnListContent()}

                            { cdnTutorial() }
                        </section>
                        // Tabular section end here
                    )
            }


        </section>
    )
}

export default LibraryDetails;