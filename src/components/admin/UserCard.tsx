import React from "react";
import {
  FiEdit,
  FiTrash2,
  FiToggleLeft,
  FiToggleRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiUser,
} from "react-icons/fi";

import "../../styles/userCard.css";

interface Props {
  id: number;
  name: string;
  email: string;
  mobile: string;
  address: string;
  credit: string;
  status: number;
  profile: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number, status: number) => void;
  index: number;
}

const UserCard: React.FC<Props> = ({
  id,
  name,
  email,
  mobile,
  address,
  credit,
  status,
  profile,
  onEdit,
  onDelete,
  onToggleStatus,
  index,
}) => {
  return (
    <div className={`user-card card-accent-${index % 3}`}>

      {/* ACTIONS */}
      <div className="card-actions">
        <FiEdit onClick={() => onEdit(id)} />
        <FiTrash2 onClick={() => onDelete(id)} className="delete" />
        {status === 1 ? (
          <FiToggleRight onClick={() => onToggleStatus(id, status)} className="active" />
        ) : (
          <FiToggleLeft onClick={() => onToggleStatus(id, status)} className="inactive" />
        )}
      </div>

      {/* IMAGE TOP */}
      <div className="user-img-wrapper">
        {profile ? (
          <img
            src={profile}
            alt={name}
            className="user-img"
          />
        ) : (
          <div className="user-icon-fallback">
            <FiUser size={50} />
          </div>
        )}
      </div>

      {/* INFO */}
      <div className="user-info">
        <h3>{name}</h3>

        <p><FiMail /> {email}</p>
        <p><FiPhone /> {mobile}</p>
        {address && address.trim() !== "" && (
          <p>
            <FiMapPin /> {address}
          </p>
        )}

        <div className="credit-box">
          <FiUser />
          <span>{credit} Credits</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;