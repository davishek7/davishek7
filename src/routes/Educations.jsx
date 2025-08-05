import Education from "../components/Education";

export default function Educations() {
  return (
    <>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          <Education
            college="Hemnalini Memorial College of Technology, MAKAUT"
            degree="Bachelor of Technology"
            stream="Computer Science and Engineering"
            gpa="8.9"
            startDate="June 2018"
            endDate="June 2021"
          />
          <Education
            college="Bengal Institute of Technology, WBSCTVESD"
            degree="Diploma Engineering"
            stream="Information Technology"
            gpa="7.5"
            startDate="June 2013"
            endDate="June 2016"
          />
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}
