import { useLoaderData, Link } from "react-router-dom";

export default function About() {

  const data = useLoaderData()

  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            {data.first_name}{" "}
            <span className="text-primary">{data.last_name}</span>
          </h1>
          <div className="subheading mb-5">
            {data.address.address_line_one} · {data.address.district}, {data.address.state}, {data.address.country_code} {data.address.pincode} · {data.contact.phone} ·
            <Link to={`mailto:${data.contact.email}`}>{data.contact.email}</Link>
          </div>
          <p className="lead mb-5">
            {data.about}
          </p>
          <div className="social-icons">
            <Link className="social-icon" to={data.socials.github} target="_blank">
              <i className="fab fa-github"></i>
            </Link>
            <Link className="social-icon" to={data.socials.linkedin} target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link className="social-icon" to={data.socials.twitter} target="_blank">
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}
