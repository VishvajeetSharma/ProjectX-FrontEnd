// components/CourseCard.tsx
import React from "react";

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
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card h-100 shadow-sm my-second-bg-dark text-light border-0 rounded-4 overflow-hidden">
        
        {/* Image */}
        <img src={image} className="card-img-top" alt={title} />

        {/* Card Body */}
        <div className="card-body">
          <span className="badge bg-success mb-2">{level}</span>

          <h5 className="card-title">{title}</h5>
          <p className="card-text text-secondary">{desc}</p>

          {/* Rating */}
          <div className="mb-2">
            ⭐⭐⭐⭐⭐ <span>{rating}</span>
          </div>

          {/* Footer Info */}
          <div className="d-flex justify-content-between text-light small">
            <span>⏱ {duration}</span>
            <span>📚 {lectures} lectures</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;