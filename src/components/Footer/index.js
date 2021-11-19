import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";
import logo3 from "./../../assets/logo3.png";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-list">
        <li className="footer-item">
          <a target="_blank" href="https://www.paripassu.com.br/">
            <img src={logo3} alt="site" className="icon" width="19" />
          </a>
        </li>
        <li className="footer-item">
          <a target="_blank" href="https://www.facebook.com/paripassubr">
            <IoLogoFacebook className="icon" size="20" />
          </a>
        </li>
        <li className="footer-item">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/paripassubr/"
          >
            <IoLogoLinkedin className="icon" size="20" />
          </a>
        </li>
        <li className="footer-item">
          <a target="_blank" href="https://www.instagram.com/paripassubr/">
            <IoLogoInstagram className="icon" size="20" />
          </a>
        </li>
        <li className="footer-item">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UC7aN7mD5z65qMUNgSz0AieA"
          >
            <IoLogoYoutube className="icon" size="20" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
