import Link from "next/link";

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <nav className="nav">
          <Link href="/">
            <a>My Blog</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
