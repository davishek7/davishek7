import { Link } from "react-router-dom";

export default function Certificate({ name, issuedBy, issuedOn, url }) {
  return (
    <li>
      <span className="fa-li">
        <i className="fas fa-certificate text-warning"></i>
      </span>
      <Link to={url} target="_blank" className="text-decoration-none">
        {name}, {issuedBy} ({issuedOn})
      </Link>
    </li>
  );
}