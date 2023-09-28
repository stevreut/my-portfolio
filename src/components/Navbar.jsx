export default function Nav({ links }) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          {links.map((link) => link)}
        </ul>
      </nav>
    );
  }
  