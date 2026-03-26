import React from "react";
import "./pricingCard.css";

// ─── Data Interface ───────────────────────────────────────────────
interface CoursePlan {
  name: string;
  desc: string;
  credit: string;
  price: number;
  offer: string;
  duration: string;
  is_rec: string;
}

// ─── Helpers ──────────────────────────────────────────────────────
const trimDesc = (text: string, max = 100): string =>
  text.length > max ? text.slice(0, max).trimEnd() + "..." : text;

const calcTotalPrice = (price: number, offer: string): number => {
  const discount = parseFloat(offer) || 0;
  return Math.round(price - (price * discount) / 100);
};

// ─── Check Icon ───────────────────────────────────────────────────
const CheckIcon: React.FC = () => (
  <svg
    className="feature-check"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 10.5L8.5 14L15 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Single Card ──────────────────────────────────────────────────
const PricingCard: React.FC<{ plan: CoursePlan; index: number }> = ({
  plan,
  index,
}) => {
  const totalPrice = calcTotalPrice(plan.price, plan.offer);
  const pricePerCredit = parseFloat(plan.credit)
    ? Math.round(plan.price / parseFloat(plan.credit))
    : 0;
  const isRec = plan.is_rec === "1";

  return (
    <div className={`pricing-card card-accent-${index % 3} h-100`}>
      {/* Decorative corner */}
      <div className="card-pattern" />

      {/* is_rec badge */}
      {isRec && <span className="featured-badge">Recommended</span>}

      {/* ── TOP ── */}
      <div className="card-top">
        <p className="card-plan-name">{plan.name}</p>
        <p className="card-description">{trimDesc(plan.desc)}</p>

        <p className="card-starts-at">Original Price</p>
        <div className="card-price-row">
          <span className="card-price">
            ₹{plan.price.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="card-total-row">
          <span className="card-total-label">
            Total after {plan.offer}% off
          </span>
          <span className="card-total-price">
            ₹{totalPrice.toLocaleString("en-IN")}
          </span>
        </div>

        <button className="card-cta-btn filled w-100">Purchase Plan</button>
      </div>

      <hr className="card-divider" />

      {/* ── FEATURES ── */}
      <p className="card-features-label">Plan Details</p>
      <ul className="card-features-list">
        <li>
          <CheckIcon />
          <span>
            <strong>{plan.credit}</strong> Credits included
          </span>
        </li>
        <li>
          <CheckIcon />
          <span>₹{pricePerCredit} per credit</span>
        </li>
        <li>
          <CheckIcon />
          <span>
            <strong>{plan.offer}%</strong> discount applied
          </span>
        </li>
        <li>
          <CheckIcon />
          <span>
            Valid for <strong>{plan.duration}</strong> days
          </span>
        </li>
      </ul>
    </div>
  );
};

// ─── Plans Data ───────────────────────────────────────────────────
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
    is_rec: "1",
  },
  {
    name: "App Development",
    desc: "Build Android and iOS apps using modern tools",
    credit: "6",
    price: 2699,
    offer: "18",
    duration: "22",
    is_rec: "0",
  },
  {
    name: "Cyber Security",
    desc: "Learn ethical hacking and security fundamentals",
    credit: "5",
    price: 2199,
    offer: "12",
    duration: "16",
    is_rec: "1",
  },
  {
    name: "Cloud Computing",
    desc: "Understand AWS, Azure and cloud architecture",
    credit: "6",
    price: 2899,
    offer: "15",
    duration: "20",
    is_rec: "0",
  },
  {
    name: "AI & Machine Learning",
    desc: "Basics of AI, neural networks and ML models",
    credit: "7",
    price: 3199,
    offer: "20",
    duration: "28",
    is_rec: "1",
  },
  {
    name: "Video Editing",
    desc: "Learn Premiere Pro and video editing techniques",
    credit: "4",
    price: 1599,
    offer: "30",
    duration: "10",
    is_rec: "0",
  },
  {
    name: "Content Writing",
    desc: "Improve writing skills for blogs and marketing",
    credit: "3",
    price: 1299,
    offer: "25",
    duration: "8",
    is_rec: "0",
  },
];

// ─── Section ──────────────────────────────────────────────────────
const PricingSection: React.FC = () => {
  return (
    <section className="pricing-section">
      {/* Header */}
      <div className="container mb-4">
        <div className="row align-items-start pricing-header">
          <div className="col-12 col-md-6">
            <h1>Simple pricing based on your needs</h1>
          </div>
          <div className="col-12 col-md-6">
            <p>
              Discover a variety of our advanced features. Unlimited and free
              for individuals.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Grid — Bootstrap responsive */}
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
  );
};

export default PricingSection;
