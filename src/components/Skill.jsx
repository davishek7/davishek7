export default function Skill({ imageUrl }) {
  return (
    <li className="list-inline-item">
      <div
        className="justify-content-center d-flex align-items-center rounded-circle border bg-white"
        style={{ width: "48px", height: "48px" }}
      >
        <img src={imageUrl} alt="Django" width="36" />
      </div>
    </li>
  );
}
