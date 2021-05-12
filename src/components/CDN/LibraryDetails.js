const LibraryDetails = (props) => {
    console.log(' this.props.match.params.name ', props.match.params.name);
    let  libraryName =  props.match.params.name;

    return (
        <section className="library-details-wrapper">
            <h1>{libraryName} Details</h1>
        </section>
    )
}

export default LibraryDetails;

// todo : show details of selected library
// todo : add clone option