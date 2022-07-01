import logo from "./../assets/images/logo.svg"
import instagram from "./../assets/images/icon-instagram.svg"
import facebook from "./../assets/images/icon-facebook.svg"
import twitter from "./../assets/images/icon-twitter.svg"
import pinterest from "./../assets/images/icon-pinterest.svg"



function Footer() {
    return (
      <>
        <footer>
          <img src={logo} alt="logo icon" className="footer-logo" />
          <ul className="footer-ul">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
          <div className="icons">
            <img src={facebook} alt="facebook icon" className="icon" />
            <img src={instagram} alt="instagram icon" className="icon" />
            <img src={twitter} alt="twitter icon" className="icon" />
            <img src={pinterest} alt="pinterest icon" className="icon" />
          </div>
        </footer>
      </>
    );
}

export default Footer;