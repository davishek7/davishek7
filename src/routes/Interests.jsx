import { useLoaderData } from "react-router-dom";

export default function Interests() {

  const interests = useLoaderData()

  return (
    <>
      <section className="resume-section" id="interests">
        <div className="resume-section-content">
          <h2 className="mb-5">Interests</h2>
          {interests.map((interest) => (
          <p className="mb-0 lead" key={interest}>
            {interest}
          </p>
          ))}
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}
