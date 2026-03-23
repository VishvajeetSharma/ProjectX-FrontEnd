


type MasterPlanProps = {
  id: number;
  name: string;
  desc: string;
  credit: number;
  status: number;
  created_at: string;
  updated_at: string;

  image?: string;

  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
};

const MasterPlan: React.FC<MasterPlanProps> = ({
  id,
  name,
  desc,
  credit,
  image,
  status,
  created_at,
  updated_at,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card h-100 shadow-sm my-second-bg-dark text-light border-0 rounded-2">

        {/* Image */}
        {image && (
          <img src={image} className="card-img-top" alt={name} />
        )}

        <div className="card-body">

          {/* Status */}
          <span className={`badge mb-2 ${status === 1 ? "bg-success" : "bg-secondary"}`}>
            {status === 1 ? "Active" : "Inactive"}
          </span>

          {/* Title */}
          <h5 className="card-title">{name}</h5>

          {/* Description */}
          <p className="card-text text-secondary">{desc}</p>

          {/* Credit */}
          <div className="mb-2">
            🎓 <strong>Credits:</strong> {credit}
          </div>

          {/* Dates */}
          <div className="d-flex justify-content-between small mb-3">
            <span>📅 {new Date(created_at).toLocaleDateString()}</span>
            <span>🕒 {new Date(updated_at).toLocaleDateString()}</span>
          </div>

          {/* Actions */}
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-sm btn-primary"
              onClick={() => onEdit?.(id)}
            >
              ✏️ Edit
            </button>

            <button
              className="btn btn-sm btn-danger"
              onClick={() => onDelete?.(id)}
            >
              🗑 Delete
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MasterPlan;