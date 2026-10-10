import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p className="site-footer__message">
        A small corner of the internet.
      </p>

      <p className="site-footer__copyright">
        © {new Date().getFullYear()} thebabycowboy
      </p>
    </footer>
  );
};

export default Footer;