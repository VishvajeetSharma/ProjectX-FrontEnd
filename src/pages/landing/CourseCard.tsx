// components/CourseCard.tsx
import React from "react";
import { FaStar, FaClock, FaBookOpen, FaHeart } from "react-icons/fa";

// 1. Define props type
type CourseCardProps = {
  image: string;
  level: string;
  title: string;
  desc: string;
  rating: string;
  duration: string;
  lectures: number;
};

// 2. Add type to props
const CourseCard: React.FC<CourseCardProps> = ({
  image,
  level,
  title,
  desc,
  rating,
  duration,
  lectures,
}) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 course-card border-0 rounded-4 overflow-hidden position-relative">
        
        {/* Thumbnail with Heart Icon */}
        <div className="position-relative">
          <img src={image} className="card-img-top" alt={title} />
          <button className="position-absolute top-0 end-0 m-3 btn btn-sm bg-dark bg-opacity-50 text-white rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
            <FaHeart size={14} className="text-secondary" />
          </button>
        </div>

        {/* Card Body */}
        <div className="card-body d-flex flex-column p-4">
          <div className="mb-2">
             <span className="badge bg-purple bg-opacity-25 text-purple rounded-pill px-3 py-1 x-small" style={{ color: '#8b5cf6' }}>{level}</span>
          </div>

          <h6 className="card-title fw-bold text-white mb-2 text-truncate-2" style={{ height: '2.8rem' }}>{title}</h6>
          <p className="card-text text-secondary small mb-3 text-truncate-2" style={{ height: '2.4rem' }}>{desc}</p>

          {/* Rating */}
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={12} color={i < 4 ? "#facc15" : "#4b5563"} />
              ))}
            </div>
            <span className="x-small text-secondary fw-bold">{rating}</span>
          </div>

          <hr className="my-3 border-secondary opacity-25" />

          {/* Footer Info */}
          <div className="d-flex justify-content-between mt-auto">
            <div className="course-meta-item">
               <FaClock className="text-danger" size={14} />
               <span>{duration}</span>
            </div>
            <div className="course-meta-item">
               <FaBookOpen className="text-warning" size={14} />
               <span>{lectures} lectures</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;