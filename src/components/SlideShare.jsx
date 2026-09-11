import "./SlideShare.css";

function SlideShare() {
  return (
    <section className="slideshare section" id="presentation">
      <div className="slideshare__container container">

        <h2 className="section__title">
          Psychology, Physiology and Treatment of Drug Addiction
        </h2>

        <div className="slideshare__embed">
          <iframe
            src="https://www.slideshare.net/slideshow/embed_code/key/64CXTRvaCHves3"
            title="Psychology, Physiology and Treatment of Drug Addiction"
            frameBorder="0"
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            allowFullScreen
          ></iframe>
        </div>

        <div className="slideshare__credit">
          <strong>
            <a
              href="https://www.slideshare.net/slideshow/psychology-physiology-and-treatment-of-drug-addiction/125259429"
              target="_blank"
              rel="noopener noreferrer"
            >
              Psychology, Physiology and Treatment of Drug Addiction
            </a>
          </strong>
        </div>

      </div>
    </section>
  );
}

export default SlideShare;