const Contact = (props) => {

    console.log(props);
    return(
        <section className="contact-wrapper">
            <h1>Contact Us</h1>
            {props.data.color}
        </section>
    )
}

export default Contact;