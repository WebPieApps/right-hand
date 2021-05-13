import { useEffect, useState } from "react";
import { copyCodeToClipboard } from "../../core/Utils";
import "./LibraryDetails.css";
import "./CodeStyle.css";

const LibraryDetails = (props) => {
    const [library, setLibrary] = useState([]);
    const [assets, setAsset] = useState([]);
    const [keywords, setkeyword] = useState([]);

    let libraryName = props.match.params.name;

    useEffect(() => {
        fetch(`https://api.cdnjs.com/libraries/${libraryName}`)
            .then(response => response.json())
            .then(data => {
                //console.log(' data ', data);
                setLibrary(data)
                setAsset(data.assets);
                setkeyword(data.keywords);
            })
    }, [libraryName]);

    return (
        <section className="library-details-wrapper">
            <div className="container">
                <div className="jumbotron">
                    <h2>{libraryName}</h2>
                    <p>{library.description}</p>
                    <div className="keywords">
                        {
                            keywords.map((item, index) => {
                                return <span className="badge badge-warning m-1" key={index}>{item}</span>
                            })
                        }

                    </div>
                </div>
            </div>



            <section>

                <details>
                    <summary>CDN List</summary>
                    <div className="cnd-list-wrapper">
                        <h5 className="text-right">List of {assets.length} result</h5>
                        {
                            assets.map((asset, index) => {
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
                                                <i className="fa fa-code" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </details>

                <details>
                    <summary>Tutorials</summary>
                    <div>
                        <p>Lorem ipsum dolor sit amet, eu alia suscipit mei.</p>
                        <ul>
                            <li>Cash on hand: $500.00</li>
                            <li>Current invoice: $75.30</li>
                            <li>Due date: 5/6/19</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, eu alia suscipit mei.</p>
                        <p>Lorem ipsum dolor sit amet, eu alia suscipit mei.</p>
                        <ul>
                            <li>Cash on hand: $500.00</li>
                            <li>Current invoice: $75.30</li>
                            <li>Due date: 5/6/19</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary>Additional Information</summary>
                    <div>
                        <p>Lorem ipsum dolor sit amet, eu alia suscipit mei.</p>
                        <ol>
                            <li>Cash on hand: $500.00</li>
                            <li>Current invoice: $75.30</li>
                            <li>Due date: 5/6/19</li>
                        </ol>
                        <p>Lorem ipsum dolor sit amet, eu alia suscipit mei.</p>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jill</td>
                                        <td>Smith</td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td>Eve</td>
                                        <td>Jackson</td>
                                        <td>94</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </details>

            </section>
        </section>
    )
}

export default LibraryDetails;

// todo : show details of selected library
// todo : add clone option