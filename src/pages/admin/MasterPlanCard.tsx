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
};

const MasterPlan: React.FC<MasterPlanProps> = ({
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
}) => {
  const discountedPrice = price - (price * offer) / 100;
  const pricePerJob = (discountedPrice / credit).toFixed(2);

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card h-100 border rounded-3 shadow-sm position-relative">

        {/* Recommended Badge */}
        {is_rec === 1 && (
          <div className="position-absolute top-0 start-50 translate-middle-x mt-0 px-2 py-1 bg-danger text-white rounded-pill small">
            RECOMMENDED FOR YOU
          </div>
        )}

        <div className="card-body text-center py-5">

          {/* Plan Name */}
          <h5 className="card-title fw-bold">{name}</h5>

          {/* Credits */}
          <div className="my-2">
            <span role="img" aria-label="credits">🪙</span> {credit} Credits
          </div>

          {/* Price */}
          <div className="my-3">
            <h3 className="mb-1">₹ {discountedPrice}</h3>
            {offer > 0 && <small className="text-muted text-decoration-line-through">₹ {price}</small>}
          </div>

          {/* Price per job */}
          <div className="my-2 bg-light text-dark rounded-pill py-1 px-3 d-inline-block">
            ₹ {pricePerJob} per job
          </div>

          {/* Discount */}
          {offer > 0 && (
            <div className="text-success small my-2">
              ↓ Flat {offer}% Off
            </div>
          )}

          {/* Duration */}
          <div className="text-muted small mb-3">
            To be used within {duration} days
          </div>

          {/* Get Now Button */}
          <button className="btn btn-primary w-100" onClick={() => onEdit?.(id)}>
            Get Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MasterPlan;