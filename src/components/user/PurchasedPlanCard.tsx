import React from "react";
import "../../styles/pricingCard.css";

const calcTotalPrice = (price: number, offer: number): number => {
  return Math.round(price - (price * offer) / 100);
};

// Check Icon
const CheckIcon: React.FC = () => (
  <svg className="feature-check" viewBox="0 0 20 20" fill="none">
    <path
      d="M5 10.5L8.5 14L15 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PurchasedPlanCard = ({ plan, index }: any) => {
  const totalPrice = calcTotalPrice(plan?.mp_price || 0, plan?.mp_offer || 0);

  const pricePerCredit = plan?.mp_credit
    ? (totalPrice / plan.mp_credit)
    : 0;

  const isRec = plan?.mp_is_rec === 1;

  return (
    <div className={`pricing-card card-accent-${index % 3} h-100`}>
      <div className="card-pattern" />

      {isRec && <span className="featured-badge">Recommended</span>}

      <div className="card-top">
        <div className="card-price-row">
          <p className="card-price">
            ₹{plan?.mp_price?.toLocaleString("en-IN")}
          </p>
        </div>

        <p className="card-plan-name">{plan?.mp_name}</p>

        <div className="card-total-row">
          <span>
            Total after {plan?.mp_offer}% off ₹
            {totalPrice.toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      <ul className="card-features-list">
        <li>
          <CheckIcon />
          <span>
            <strong>{plan?.mp_credit}</strong> Credits
          </span>
        </li>

        <li>
          <CheckIcon />
          <span>₹{pricePerCredit} per credit</span>
        </li>

        <li>
          <CheckIcon />
          <span>
            Valid for <strong>{plan?.mp_duration}</strong> days
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PurchasedPlanCard;