import brochure from "../assets/soa_2014.pdf";

function PdfReader() {
  return (
    <div className="pdf-container">
      <iframe
        src={brochure}
        title="PDF Reader"
        width="100%"
        height="700px"
      />
    </div>
  );
}

export default PdfReader;