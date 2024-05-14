import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img
            src={require("../assets/footer-logo.png")}
            alt="Little Lemon logo"
          ></img>
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a
              href={require("../assets/menu.webp")}
              target="_blank"
              rel="noreferrer"
            >
              Menu
            </a>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>Little Lemon </li>
            <li>Little Lemon City</li>
            <br></br>
            <li>(000)-000-0000</li>
            <br></br>
            
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              info@littlelemon.com
            </a>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <span style={{ display: 'block' }}>
              Facebook
            </span>

            <span style={{ display: 'block' }}>
              Instagram
            </span>

            <span style={{ display: 'block' }}>
              Youtube
            </span>

            <span style={{ display: 'block', fontsize: '40px' }}>
              Join Us!
            </span>
          </ul>
        </li>
      </menu>
    </footer>
  );
}
