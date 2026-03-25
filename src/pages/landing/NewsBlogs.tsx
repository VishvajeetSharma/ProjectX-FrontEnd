import Navbar from "./Navbar";
import Footer from "./Footer";

const NewsBlogs = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1>News and Blogs</h1>
        <p>Latest news, updates, and blog posts from Eduport.</p>
        <div style={{height: "97px"}}></div>
      </div>
      <Footer />
    </>
  )
}

export default NewsBlogs;
