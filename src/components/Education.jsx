export default function Education({ college, degree, stream, gpa, startDate, endDate }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-0">{college}</h3>
        <div className="subheading mb-3">{degree}</div>
        <div>{stream}</div>
        <p>GPA: {gpa}</p>
      </div>
      <div className="flex-shrink-0">
        <span className="text-primary">{startDate} - {endDate}</span>
      </div>
    </div>
  );
}
