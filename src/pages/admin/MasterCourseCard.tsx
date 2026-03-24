import React from "react";
import {
  FaEdit,
  FaTrashAlt,
  FaCalendarAlt,
  FaClock,
  FaStar,
  FaLevelUpAlt,
  FaHourglassHalf,
  FaTag,
  FaAlignLeft,
  FaBan,
  FaCheckCircle,
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
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card h-100 shadow my-second-bg-dark text-light border-0 rounded-2 card-effect overflow-hidden">
        {/* Thumbnail */}
        {thumbnail && (
          <img
            src={thumbnail}
            className="card-img-top img-fluid"
            alt={title}
            style={{ objectFit: "cover", height: "180px" }}
          />
        )}

        {/* Card Body */}
        <div className="card-body d-flex flex-column">
          {/* Title */}
          <h5 className="card-title text-truncate" title={title}>
            {title || "N/A"}
          </h5>

          {/* Description */}
          {desc && (
            <p className="card-text text-light mb-2 text-truncate" title={desc}>
              {desc}
            </p>
          )}

          {/* Additional details – row 1 */}
          <div className="d-flex justify-content-between mb-1 me-2 small">
            {level && (
              <span>
                <FaLevelUpAlt className="me-1" /> {level}
              </span>
            )}
            {rating && (
              <span className="text-warning">
                <FaStar className="me-1" /> {rating}
              </span>
            )}
          </div>

          {/* Additional details – row 2 */}
          <div className="d-flex justify-content-between mb-2 me-2 small">
            {duration && (
              <span>
                <FaHourglassHalf className="me-1" /> {duration}
              </span>
            )}
            {type && (
              <span>
                <FaTag className="me-1" /> {type}
              </span>
            )}
          </div>

          {/* Content preview */}
          {content && (
            <p className="card-text text-light mb-2 small text-truncate" title={content}>
              <FaAlignLeft className="me-1" /> {content}
            </p>
          )}

          {/* Dates */}
          <div className="d-flex flex-wrap justify-content-between small mb-3 text-light gap-2">
            {created_at && (
              <span>
                <FaCalendarAlt className="me-1" />{" "}
                {new Date(created_at).toLocaleDateString()}
              </span>
            )}
            {updated_at && (
              <span>
                <FaClock className="me-1" />{" "}
                {new Date(updated_at).toLocaleDateString()}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="d-flex flex-column flex-sm-row justify-content-between gap-2 mt-auto">
            <button
              className="btn btn-sm btn-primary w-100"
              onClick={() => onEdit?.(id)}
            >
              <FaEdit className="me-1" /> Edit
            </button>
            <button
              className="btn btn-sm btn-danger w-100"
              onClick={() => onDelete?.(id)}
            >
              <FaTrashAlt className="me-1" /> Delete
            </button>
            <button
              className={`btn btn-sm w-100 ${isActive ? "btn-warning" : "btn-outline-light"}`}
              onClick={() => onToggleStatus?.(id, status)}
            >
              {isActive ? (
                <>
                  <FaBan className="me-1" /> Inactive
                </>
              ) : (
                <>
                  <FaCheckCircle className="me-1" /> Active
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterCourseCard;