const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Be Involved", href: "#projects" },
  { label: "Programs", href: "#services" },
  { label: "Contact Us", href: "#contact" }
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container topbar">
        <a className="brand" href="#home">
          <img src="/mrvilz-logo.jpeg" alt="Mr Vilz logo" />
          <div className="brand-text">
            <strong>Mr Vilz</strong>
            <span>Marine protection initiative</span>
          </div>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-button" href="#contact">
          Support Us
        </a>
      </div>
    </header>
  );
}
