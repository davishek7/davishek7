import Certificate from "../components/Certificate";
import { useLoaderData } from "react-router-dom";

export default function Certificates() {
  const certificates = useLoaderData();

  return (
    <>
      <section className="resume-section" id="certificates">
        <div className="resume-section-content">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            {certificates.map((certificate) => (
              <Certificate
                key={certificate.id}
                name={certificate.name}
                issuedBy={certificate.issuedBy}
                issuedOn={certificate.issuedOn}
                url={certificate.url}
              />
            ))}
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}
