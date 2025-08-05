import Skill from "../components/Skill";
import { useLoaderData } from "react-router-dom";

export default function Skills() {

  const skills = useLoaderData()
  
  return (
    <>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">
            Programming Languages, Frameworks & Tools
          </div>
          <ul className="list-inline dev-icons">
            {skills.map(skill => <Skill key={skill.id} name={skill.name} imageUrl={skill.imageUrl}/>)}
          </ul>
          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Mobile-First, Responsive Design
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Cross Browser Testing & Debugging
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Cross Functional Teams
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Agile Development & Scrum
            </li>
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}
