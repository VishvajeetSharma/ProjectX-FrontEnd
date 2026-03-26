import React from "react";
import {
  FiEdit,
  FiTrash2,
  FiToggleLeft,
  FiToggleRight,
  FiStar,
  FiClock,
} from "react-icons/fi";

import "../../styles/courseCard.css";

interface Props {
  id: number;
  title: string;
  desc: string;
  thumbnail: string;
  level: string;
  rating: number;
  duration: string;
  type: string;
  content: string;
  status: number;
  created_at?: string;
  updated_at?: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number, status: number) => void;
  index: number;
}

const CourseCard: React.FC<Props> = ({
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
  onEdit,
  onDelete,
  onToggleStatus,
  index,
}) => {
  return (
    <div className={`course-card card-accent-${index % 3}`}>
      {/* ACTION BUTTONS */}
      <div className="card-actions">
        <FiEdit className="edit" onClick={() => onEdit(id)} />
        <FiTrash2 className="delete" onClick={() => onDelete(id)} />
        {status === 1 ? (
          <FiToggleRight className="active" onClick={() => onToggleStatus(id, status)} />
        ) : (
          <FiToggleLeft className="inactive" onClick={() => onToggleStatus(id, status)} />
        )}
      </div>

      {/* THUMBNAIL IMAGE */}
      <div className="thumbnail-wrapper">
        <img src={thumbnail} alt={title} className="thumbnail" />
      </div>

      {/* CONTENT */}
      <div className="card-content">
        <h3 className="course-title">{title}</h3>
        <p className="course-desc">{desc}</p>

        <div className="course-info">
          <span className="level-tag">{level}</span>
          <span className="rating">
            <FiStar /> {rating}
          </span>
          <span className="duration">
            <FiClock /> {duration}
          </span>
          <span className="type-tag">{type}</span>
        </div>

        <div className="content-snippet">{content}</div>
      </div>
    </div>
  );
};

export default CourseCard;