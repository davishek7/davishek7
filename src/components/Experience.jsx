export default function Experience({position, company, achievements, duration}) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-0">{position}</h3>
        <div className="subheading mb-3">{company}</div>
          {achievements.map(achievement => (
          <p className="lead" key={achievement}>{achievement}</p>
        ))}
      </div>
      <div className="flex-shrink-0">
        <span className="text-primary">{duration}</span>
      </div>
    </div>
  );
}
