import logo from "../../assets/logo.png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="col-6 d-flex align-items-center">

                        <p class="footer-heart">
                            Made with <g-emoji class="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
                                <img class="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" /></g-emoji> by <a href="https://hidaytrahman.github.io/">Hidayt Rahman</a>
                        </p>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer;