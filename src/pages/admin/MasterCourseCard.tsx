import React from "react";
import {
  FaEdit,
  FaTrashAlt,
  FaCalendarAlt,
  FaStar,
  FaLevelUpAlt,
  FaHourglassHalf,
  FaAlignLeft,
  FaSyncAlt,
} from "react-icons/fa";

interface MasterCourseCardProps {
  id: number;
  title: string;
  desc: string;
  thumbnail?: string;
  level?: string;
  rating?: string;
  duration?: string;
  type?: string;
  content?: string;
  status: number;
  created_at: string;
  updated_at: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggleStatus?: (id: number, currentStatus: number) => void; // new callback
}

const MasterCourseCard: React.FC<MasterCourseCardProps> = ({
  id,
  title,
  desc,
  thumbnail,
  level,
  rating,
  duration,
  type,
  content,
  status,
  created_at,
  updated_at,
  onEdit,
  onDelete,
  onToggleStatus,
}) => {
  const isActive = status === 1;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-lg my-second-bg-dark text-white border-0 rounded-4 overflow-hidden"
           style={{ 
             background: 'rgba(33, 37, 41, 0.95)', 
             border: '1px solid rgba(255, 255, 255, 0.1)'
           }}>
        {/* Thumbnail with overlay */}
        <div className="position-relative">
          {thumbnail ? (
            <img
              src={thumbnail}
              className="card-img-top img-fluid"
              alt={title}
              style={{ objectFit: "cover", height: "140px", transition: "transform 0.3s ease" }}
            />
          ) : (
            <div className="bg-secondary d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
              <FaAlignLeft size={30} className="opacity-25" />
            </div>
          )}
          <div className="position-absolute top-0 end-0 m-2">
             <span className="badge bg-dark bg-opacity-75 backdrop-blur x-small px-2 py-1 rounded-pill">
               {type}
             </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="card-body d-flex flex-column p-3">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h6 className="card-title fw-bold text-white mb-0 text-truncate flex-grow-1" title={title}>
              {title || "N/A"}
            </h6>
            {rating && (
              <span className="ms-2 badge bg-warning text-dark d-flex align-items-center gap-1 x-small px-1">
                <FaStar size={10} /> {rating}
              </span>
            )}
          </div>

          <hr className="my-2 border-secondary opacity-25" />

          {/* Details Row */}
          <div className="d-flex justify-content-between mb-2">
              <div className="d-flex align-items-center text-white opacity-75 x-small">
                <FaLevelUpAlt className="me-1 text-primary" /> {level}
              </div>
              <div className="d-flex align-items-center text-white opacity-75 x-small">
                <FaHourglassHalf className="me-1 text-info" /> {duration}
              </div>
          </div>

          {/* Status Badge */}
          <div className="d-flex justify-content-between align-items-center mb-3">
             <span 
               className={`badge rounded-pill border-0 px-2 py-1 x-small`}
               style={{ cursor: 'pointer', background: isActive ? 'var(--accent)' : 'var(--text-secondary)' }}
               onClick={() => onToggleStatus?.(id, status)}
               title="Click to toggle status"
             >
               {isActive ? "Active" : "Inactive"}
             </span>
             {content && (
               <span className="text-white opacity-50 x-small d-flex align-items-center" title={content}>
                 <FaAlignLeft className="me-1" /> Content
               </span>
             )}
          </div>

          {/* Description */}
          {desc && (
            <p className="text-white opacity-75 small mb-3 text-truncate-2" style={{ fontSize: '0.8rem', minHeight: '2.4rem' }}>
              {desc}
            </p>
          )}

          {/* Dates */}
          <div className="mt-auto pt-2">
            <div className="d-flex flex-wrap justify-content-between x-small text-white opacity-25" style={{ fontSize: '0.65rem' }}>
               <span className="d-flex align-items-center"><FaCalendarAlt className="me-1" /> {new Date(created_at).toLocaleDateString()}</span>
               <span className="d-flex align-items-center"><FaSyncAlt className="me-1" /> {new Date(updated_at).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="d-flex gap-2 mt-auto pt-2 border-top border-secondary border-opacity-10">
            <button
              className="btn btn-sm btn-outline-light border-2 fw-bold w-100 py-1"
              style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
              onClick={() => onEdit?.(id)}
            >
              <FaEdit className="me-1" /> Edit
            </button>
            <button
              className="btn btn-sm btn-outline-danger border-2 fw-bold w-100 py-1"
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

export default MasterCourseCard;