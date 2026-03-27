import React, { useState, useEffect } from "react";
import {
  FiStar,
  FiClock,
  FiFileText,
} from "react-icons/fi";
import { FaAlignLeft } from "react-icons/fa";

import "../../styles/courseCard.css";
import { getFile, getUsersViewCourse } from "../../services";
import { showALert } from "../../utils";

interface Props {
  id: number;
  title?: string;
  desc?: string;
  thumbnail?: string;
  level?: string;
  rating?: number;
  duration?: string;
  type?: string;
  content?: string;
  index: number;
}

const PurchaseCourseCard: React.FC<Props> = ({
  title = "Untitled Course",
  desc = "No description available",
  thumbnail,
  level = "Beginner",
  rating = 0,
  duration = "0h",
  type = "General",
  content = "",
  index,
}) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    let objectUrl: string | null = null;
    const loadThumbnail = async () => {
      if (!thumbnail) {
        setImageUrl("");
        return;
      }
      try {
        const blob = await getFile(thumbnail);
        objectUrl = URL.createObjectURL(blob);
        setImageUrl(objectUrl);
      } catch (error) {
        console.error("Error loading thumbnail:", error);
        setImageUrl("");
      }
    };
    loadThumbnail();
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [thumbnail]);

  const openContentInNewTab = async (contentPath: string) => {
    if (!contentPath) return;
    try {
      const res = await getUsersViewCourse()
      if (res.success) {
        const blob = await getFile(contentPath);
        const url = URL.createObjectURL(blob);
        const newWin = window.open(url, "_blank", "noopener,noreferrer");
        if (newWin) newWin.focus();
        setTimeout(() => URL.revokeObjectURL(url), 10000);
      } else {
        showALert("View Course", res?.message, "error")
      }
    } catch (err) {
      console.error("Error opening content file:", err);
    }
  };

  return (
    <div className={`course-card card-accent-${index % 3}`}>

      {/* THUMBNAIL */}
      <div className="thumbnail-wrapper">
        {imageUrl ? (
          <img
            src={imageUrl}
            className="thumbnail img-fluid"
            alt={title}
            style={{ objectFit: "cover", height: "140px", transition: "transform 0.3s ease" }}
          />
        ) : (
          <div className="bg-secondary d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
            <FaAlignLeft size={30} className="opacity-25" />
          </div>
        )}
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

        {content && (
          <div className="content-snippet" onClick={() => openContentInNewTab(content)}>
            <FiFileText style={{ marginRight: "5px" }} />
            View Content
          </div>
        )}
      </div>
    </div>
  );
};

export default PurchaseCourseCard;