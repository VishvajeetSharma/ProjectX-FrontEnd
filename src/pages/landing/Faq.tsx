import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";

const Faq = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1>FAQs</h1>
        <p>Frequently asked questions and answers to help you get started.</p>
        <div style={{ height: "97px" }}></div>
      </div>
      <Footer />
    </>
  )
}

export default Faq;
