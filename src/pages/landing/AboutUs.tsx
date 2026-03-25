import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1>About Us</h1>
        <p>Welcome to Eduport. We are a learning platform built for students and educators.</p>
        <div style={{ height: "97px" }}></div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs;
