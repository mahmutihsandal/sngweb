export default function PlanCompass() {
  return (
    <div className="plan-compass" role="img" aria-label="Gerçek kuzey yönü">
      <svg viewBox="0 0 84 84" aria-hidden="true">
        <circle className="plan-compass-ring" cx="42" cy="42" r="30" />
        <g transform="rotate(-18 42 42)">
          <text className="plan-compass-letter" x="42" y="9" textAnchor="middle">K</text>
          <path className="plan-compass-needle-north" d="M42 13 50 43 42 37 34 43Z" />
          <path className="plan-compass-needle-south" d="M42 71 34 41 42 47 50 41Z" />
          <circle className="plan-compass-center" cx="42" cy="42" r="3.5" />
        </g>
      </svg>
      <small>GERÇEK KUZEY</small>
    </div>
  );
}
