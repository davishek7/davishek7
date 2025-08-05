import { Link, useLoaderData, useLocation } from "react-router-dom";

export default function Navbar() {
  const data = useLoaderData();
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <Link className="navbar-brand js-scroll-trigger" to="/">
        <span className="d-block d-lg-none">{data.user}</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={data.profilePicture}
            alt="profile image"
          />
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          {data.navItems.map((navItem) => {
            const path = navItem !== "about" ? `/${navItem}` : "/";
            const isActive = location.pathname === path;
            return (
              <li className="nav-item" key={navItem}>
                <Link
                  className={`nav-link js-scroll-trigger ${
                    isActive ? "active" : ""
                  }`}
                  to={path}
                >
                  {navItem}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
