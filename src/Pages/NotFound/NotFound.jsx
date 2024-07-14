import backgroundVideo from "../Home/background.mp4";

import "./NotFound.css";

export const NotFound = () => {
  return (
    <section className="not-found-section">
      <video autoPlay muted loop className="not-found-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <p className="not-found-text">Page Not Found</p>
      <div className="not-found-overlay"></div>
    </section>
  );
};
