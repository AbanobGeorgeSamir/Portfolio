import { marqueeItems } from "../data";

export default function Marquee() {
  const group = (key) => (
    <div className="marquee-group" key={key} aria-hidden={key === 1}>
      {marqueeItems.map((item, index) => (
        <span className="marquee-item-wrap" key={`${key}-${item}`}>
          <span className={`marquee-item ${index % 2 === 0 ? "is-solid" : ""}`}>
            {item}
          </span>
          <span className="marquee-star" aria-hidden="true">
            ✳
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="marquee" aria-label="Tools and technologies">
      <div className="marquee-track">
        {group(0)}
        {group(1)}
      </div>
    </section>
  );
}
