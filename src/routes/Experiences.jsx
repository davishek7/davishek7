import { useLoaderData } from "react-router-dom";
import Experience from "../components/Experience";

export default function Experiences() {
  const experiences = useLoaderData();

  return (
    <>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          {experiences.map((experience) => (
            <Experience
              key={experience.id}
              position={experience.position}
              company={experience.company}
              achievements={experience.achievements}
              duration={experience.duration}
            />
          ))}
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}
