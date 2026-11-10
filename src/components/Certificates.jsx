import { certificates } from "../data";

export default function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <div className="shell cert-grid">
        <div className="cert-aside">
          <span className="label" data-reveal>
            04 — Certifications
          </span>
          <h2 className="section-title" data-reveal style={{ "--d": "80ms" }}>
            Proof, not <em>promises</em>.
          </h2>
          <p className="cert-lede" data-reveal style={{ "--d": "150ms" }}>
            Completed programmes and skill assessments, with public verification
            where the issuer provides it.
          </p>
          <span className="cert-count" data-reveal style={{ "--d": "220ms" }}>
            {String(certificates.length).padStart(2, "0")} certificates
          </span>
        </div>

        <ul className="cert-list">
          {certificates.map((certificate, index) => (
            <li
              key={`${certificate.title}-${certificate.date}`}
              data-reveal
              style={{ "--d": `${index * 45}ms` }}
            >
              {certificate.verify ? (
                <a
                  className="cert-row"
                  href={certificate.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CertBody certificate={certificate} />
                  <span className="cert-verify">
                    Verify
                    <svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true">
                      <path
                        d="M3 13 13 3M5 3h8v8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              ) : (
                <div className="cert-row is-static">
                  <CertBody certificate={certificate} />
                  <span className="cert-verify cert-verify-muted">Issued</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CertBody({ certificate }) {
  return (
    <>
      <span className="cert-main">
        <span className="cert-title">{certificate.title}</span>
        <span className="cert-issuer">{certificate.issuer}</span>
      </span>
      <span className="cert-date">{certificate.date}</span>
    </>
  );
}
