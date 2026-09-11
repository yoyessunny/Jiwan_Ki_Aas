import "./YouTube.css";

function YouTube() {
  return (
    <section className="youtube section" id="videos">
      <div className="youtube__container container">

        <h2 className="section__title">
          Learn About Drug De-Addiction
        </h2>

        <div className="youtube__video">
          <iframe
            src="https://www.youtube.com/embed/T_ciuZRTHrM"
            title="Drug Addiction Awareness Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default YouTube;