import React from "react";
import {
  FiCheck,
  FiEdit,
  FiTrash2,
  FiToggleLeft,
  FiToggleRight,
} from "react-icons/fi";

import "../../styles/pricingCard.css";

interface Props {
  id: number;
  name: string;
  credit: string;
  price: number;
  offer: string;
  duration: string;
  is_rec: number;
  status: number;
  created_at?: string;
  updated_at?: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
  index: number;
}

const calcTotalPrice = (price: number, offer: string) => {
  const discount = parseFloat(offer) || 0;
  return Math.round(price - (price * discount) / 100);
};

const MasterPlanCard: React.FC<Props> = (props) => {
  const {
    id,
    name,
    credit,
    price,
    offer,
    duration,
    is_rec,
    status,
    onEdit,
    onDelete,
    onToggleStatus,
    index,
  } = props;

  const totalPrice = calcTotalPrice(price, offer);

  const pricePerCredit = parseFloat(credit)
    ? Math.round(price / parseFloat(credit))
    : 0;

  const isRec = is_rec === 1;

  return (
    <div className={`pricing-card card-accent-${index % 3}`}>
      <div className="card-pattern" />

      {isRec && <span className="featured-badge">Recommended</span>}

      {/* ACTION BUTTONS */}
      <div style={{ position: "absolute", top: 10, right: 10, display: "flex", gap: 8 }}>
        <FiEdit
          style={{ cursor: "pointer" }}
          onClick={() => onEdit(id)}
        />
        <FiTrash2
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => onDelete(id)}
        />
        {status === 1 ? (
          <FiToggleRight
            size={18}
            style={{ cursor: "pointer", color: "green" }}
            onClick={() => onToggleStatus(id)}
          />
        ) : (
          <FiToggleLeft
            size={18}
            style={{ cursor: "pointer", color: "gray" }}
            onClick={() => onToggleStatus(id)}
          />
        )}
      </div>

      {/* TOP */}
      <div className="card-top">
        <div className="card-price-row">
          <p className="card-price">
            ₹{price.toLocaleString("en-IN")}
          </p>
        </div>
        <p className="card-plan-name">{name}</p>
      
        <div className="card-total-row">
          <span>Total after {offer}% off ₹{totalPrice.toLocaleString("en-IN")}</span>
        </div>
      </div>

      <ul className="card-features-list">
        <li>
          <FiCheck className="feature-check" />
          <span>
            <strong>{credit}</strong> Credits
          </span>
        </li>

        <li>
          <FiCheck className="feature-check" />
          <span>₹{pricePerCredit} per credit</span>
        </li>

        <li>
          <FiCheck className="feature-check" />
          <span>
            Valid for <strong>{duration}</strong> days
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MasterPlanCard;