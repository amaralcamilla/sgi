import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-list">
        <li className="footer-item">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <IoLogoFacebook className="icon" size="20" />
          </a>
        </li>
        <li className="footer-item">
          <a href="https://www.linkedin.com/in/amaralcamilla/" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin className="icon" size="20" />
          </a>
        </li>
        <li className="footer-item">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <IoLogoInstagram className="icon" size="20" />
          </a>
        </li>
        <li className="footer-item">
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <IoLogoYoutube className="icon" size="20" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
