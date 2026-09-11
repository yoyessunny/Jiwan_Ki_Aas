import "./GoogleSlides.css";

function GoogleSlides() {
  return (
    <section className="google-slides section" id="presentation">
      <div className="google-slides__container container">

        <h2 className="section__title">
          Our Presentation
        </h2>

        <div className="google-slides__wrapper">
          <iframe 
            src="https://docs.google.com/presentation/d/e/2PACX-1vRor4MKRYoXduN9iH3t-FDKZYSdeigxArETj3cQgIJYvwk8lJ4kteAFsfImtSrF0ivzOqdl28YyUQoo/pubembed?start=false&loop=false&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
          </iframe>
        </div>

      </div>
    </section>
  );
}

export default GoogleSlides;