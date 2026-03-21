// components/TrendingCard.tsx
import React from "react";

// ✅ Define props type
type TrendingCardProps = {
  image: string;
  category: string;
  level: string;
  title: string;
  rating: number | string;
  students: number;
  duration: string;
  lectures: number;
  authorImage: string;
  author: string;
  price?: number;
  isFree?: boolean;
};

const TrendingCard: React.FC<TrendingCardProps> = ({
  image,
  category,
  level,
  title,
  rating,
  students,
  duration,
  lectures,
  authorImage,
  author,
  price = 0,
  isFree = false,
}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card my-second-bg-dark text-white border-0 mx-auto shadow-sm rounded-4 h-100 overflow-hidden">

        {/* Image */}
        <div className="position-relative">
          <img src={image} className="card-img-top" alt={title} />

          {isFree && (
            <span className="badge bg-light text-dark position-absolute top-0 start-0 m-2">
              Free
            </span>
          )}
        </div>

        {/* Body */}
        <div className="card-body">

          {/* Category + Level */}
          <div className="mb-2 d-flex gap-2">
            <span className="badge bg-primary">{category}</span>
            <span className="badge bg-secondary">{level}</span>
          </div>

          {/* Title */}
          <h5 className="fw-bold">{title}</h5>

          {/* Rating + Students */}
          <div className="d-flex justify-content-between small text-secondary mb-2">
            <span>⭐ {rating}</span>
            <span>{students} Students</span>
          </div>

          {/* Duration + Lectures */}
          <div className="d-flex gap-3 small text-light mb-3">
            <span>⏱ {duration}</span>
            <span>📚 {lectures} lectures</span>
          </div>

          <hr className="border-secondary" />

          {/* Author + Price */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <img
                src={authorImage}
                className="rounded-1 author-img"
                alt="author"
              />
              <span>{author}</span>
            </div>

            <span className="fw-bold text-success fs-5">
              {isFree ? "Free" : `$${price}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;