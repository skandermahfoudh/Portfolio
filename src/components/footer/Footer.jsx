import { Component } from "react";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="#" className="footer__logo">
          Skander Mahfoudh
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#portfolio">Portfolio</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/skander.mahfoudh.3/"
            target="_blank"
          >
            <IoLogoFacebook />
          </a>
          <a href="https://www.instagram.com/mahfoudhskander/" target="_blank">
            <IoLogoInstagram />
          </a>
          <a href="https://x.com/Skander591" target="_blank">
            <IoLogoTwitter />
          </a>
          
        </div>
      </footer>
    );
  }
}

export default Footer;
