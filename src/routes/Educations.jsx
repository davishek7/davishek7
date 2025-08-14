import { useLoaderData } from "react-router-dom";
import Education from "../components/Education";

export default function Educations() {
  const educations = useLoaderData();

  return (
    <>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          {educations.map((education) => (
            <Education
              key={education.id}
              college={education.college}
              degree={education.degree}
              stream={education.stream}
              gpa={education.gpa}
              startDate={education.startDate}
              endDate={education.endDate}
            />
          ))}
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}
