import "./Header.css";

function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav container">

        {/* Logo */}
        <a href="#home" className="nav__logo">
          RehabCare
        </a>

        {/* Navigation Menu */}
        <div className="nav__menu">
          <ul className="nav__list">

            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#treatment" className="nav__link">
                Treatment
              </a>
            </li>

            <li className="nav__item">
              <a href="#gallery" className="nav__link">
                Gallery
              </a>
            </li>

            <li className="nav__item">
              <a href="#blog" className="nav__link">
                Blog
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button className="nav__toggle">
          ☰
        </button>

      </nav>
    </header>

  );
}

export default Header;