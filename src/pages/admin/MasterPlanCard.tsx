import { FaCoins, FaEdit, FaTrashAlt } from "react-icons/fa";

type MasterPlanProps = {
  id: number;
  name: string;
  desc: string;
  credit: number;
  price: number;
  offer: number; // discount %
  duration: number; // validity in days
  is_rec: number; // recommended flag
  status: number;
  created_at: string;
  updated_at: string;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onToggleStatus?: (id: number, status: number) => void;
};

const MasterPlanCard: React.FC<MasterPlanProps> = ({
  id,
  name,
  desc,
  credit,
  price,
  offer,
  duration,
  is_rec,
  status,
  onEdit,
  onDelete,
  onToggleStatus,
}) => {
  const discountedPrice = price - (price * offer) / 100;
  const pricePerJob = (discountedPrice / credit).toFixed(2);

  return (
    <div className="col-lg-4 col-md-6 col-sm-10 col-10 mx-auto mb-4">
      <div className="card h-100 shadow my-second-bg-dark text-light text-center border-0 rounded-2 card-effect overflow-hidden position-relative">
        {/* Card Body */}
        <div className="card-body d-flex flex-column">
          {/* Recommended Badge - inside card-body, lifted with negative margin */}
          {is_rec === 0 && (
                      
            <div
              className="position-absolute px-2 py-1 fw-bold bg-danger text-white rounded-0"
              style={{
                top: "60px",
                right: "8px",
                transform: "rotate(45deg) translate(25%, -25%)",
                transformOrigin: "top right",
                fontSize: "12px",
                zIndex: 10,
                width: "150px", // adjust width to taste
                textAlign: "center",
              }}
            >
              RECOMMENDED
            </div>
          )}

          {/* Plan Name */}
          <h5 className="card-title text-truncate" title={name}>
            {name}
          </h5>

          {/* Description */}
          <p className="card-text text-light mb-2 small">{desc}</p>

          {/* Credits */}
          <p className="card-text text-light mb-1">
            <FaCoins className="me-1" /> {credit} Credits
          </p>

          {/* Pricing */}
          <div className="my-1">
            <h4 className="mb-0">₹ {discountedPrice}</h4>
            {offer > 0 && (
              <small className="text-light-50 text-decoration-line-through">
                ₹ {price}
              </small>
            )}
          </div>

          {/* Price per Job Badge */}
          <div className="my-2">
            <span className="badge bg-info text-dark">
              ₹ {pricePerJob} / job
            </span>
          </div>

          {/* Offer Percentage */}
          {offer > 0 && (
            <div className="text-warning small my-1">↓ {offer}% Off</div>
          )}

          {/* Validity */}
          <div className="text-light small mb-3">Valid for {duration} days</div>

          {/* Edit & Delete Buttons */}
          <div className="d-flex gap-2 mt-auto">
            <button
              className="btn btn-sm btn-primary w-100"
              onClick={() => onEdit?.(id)}
            >
              <FaEdit className="me-1" /> Edit
            </button>
            <button
              className={`btn btn-sm w-100 ${status === 1 ? 'btn-warning' : 'btn-success'}`}
              onClick={() => onToggleStatus?.(id, status)}
              title={status === 1 ? 'Active' : 'Inactive'}
            >
              {status === 1 ? 'Active' : 'Inactive'}
            </button>
            <button
              className="btn btn-sm btn-danger w-100"
              onClick={() => onDelete?.(id)}
            >
              <FaTrashAlt className="me-1" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterPlanCard;