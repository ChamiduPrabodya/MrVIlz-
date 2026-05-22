const navItems = [
  { label: "Home", href: "#home" },
  { label: "about us", href: "#what-we-do" },
  { label: "Projects", href: "#projects" },
  { label: "Our Team", href: "#team" }
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container topbar">
        <a className="brand" href="#home">
          <img src="/mrvilz-logo.jpeg" alt="Mr Vilz logo" />
          <div className="brand-text">
            <strong>Mr Vilz</strong>
            <span>social media group</span>
          </div>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-button" href="#projects">
          Support Us
        </a>
      </div>
    </header>
  );
}
