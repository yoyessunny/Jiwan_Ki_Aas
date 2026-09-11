import "./Location.css";

function Location() {
  return (
    <section className="location section" id="location">
      <div>
        <div className="location__map">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13702.115837416946!2d76.89743764275394!3d30.843862315136985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8daaa6026beb%3A0xe522bef715d5de2!2sJiwan%20Ki%20Aas%20Foundation%2C%20Best%20de%20addiction%20center%20in%20Panchkula%2C%20haryana%2C%20Punjab%2C%20himachal%2C%20Delhi%2C%20Jammu%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1789111501696!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default Location;