import React from "react";
import PricingCard, { type CoursePlan } from "../../components/common/PricingCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Plans Data
const plans: CoursePlan[] = [
  {
    name: "Web Development",
    desc: "Learn full stack web development from scratch",
    credit: "6",
    price: 2499,
    offer: "15",
    duration: "20",
    is_rec: "1",
  },
  {
    name: "Graphic Design",
    desc: "Master Photoshop, Illustrator and design basics",
    credit: "4",
    price: 1799,
    offer: "20",
    duration: "12",
    is_rec: "0",
  },
  {
    name: "Digital Marketing",
    desc: "SEO, social media and online marketing strategies",
    credit: "5",
    price: 1999,
    offer: "25",
    duration: "18",
    is_rec: "1",
  },
  {
    name: "Data Science",
    desc: "Introduction to data analysis and machine learning",
    credit: "7",
    price: 2999,
    offer: "10",
    duration: "25",
    is_rec: "0",
  },
];

const Pricing: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="pricing-section">
        <div className="container mb-4">
          <div className="row pricing-header">
            <div className="col-md-6">
              <h1>Flexible Plans <br />For Every Learner</h1>
            </div>

            <div className="col-md-6">
              <p>Pick a plan that suits your goals.</p>
              <p>Get the right balance of price,credits, and duration for your journey.</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row g-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-lg-4 col-xl-3"
              >
                <PricingCard plan={plan} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;