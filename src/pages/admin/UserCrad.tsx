import React from 'react';
import {
  FaEdit,
  FaTrashAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCoins,
  FaCalendarAlt,
  FaClock,
  FaBan,
  FaCheckCircle,
} from 'react-icons/fa';

interface UserCardProps {
  id: any;
  name: any;
  email: any;
  mobile: any;
  address: any;
  credit: any;
  status: any;
  profile: any;
  created_at: any;
  updated_at: any;
  onEdit: any;
  onDelete: any;
  onToggleStatus: any;
}

const UserCard: React.FC<UserCardProps> = ({
  id,
  name,
  email,
  mobile,
  address,
  credit,
  status,
  profile,
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
        {/* Profile Image */}
        {profile && (
          <img
            src={profile}
            className="card-img-top img-fluid"
            alt={name}
            style={{ objectFit: 'cover', height: '180px' }}
          />
        )}

        {/* Card Body */}
        <div className="card-body d-flex flex-column">
          {/* Title */}
          <h5 className="card-title text-truncate" title={name}>
            {name || 'N/A'}
          </h5>

          {/* Email */}
          {email && (
            <p className="card-text text-light mb-1 text-truncate" title={email}>
              <FaEnvelope className="me-1" /> {email}
            </p>
          )}

          {/* Mobile */}
          {mobile && (
            <p className="card-text text-light mb-1">
              <FaPhone className="me-1" /> {mobile}
            </p>
          )}

          {/* Address */}
          {address && (
            <p className="card-text text-light mb-2">
              <FaMapMarkerAlt className="me-1" /> {address}
            </p>
          )}

          {/* Credit */}
          <div className="my-2">
            <span className="badge bg-info text-dark">
              <FaCoins className="me-1" /> {credit} Credits
            </span>
          </div>

          {/* Dates */}
          <div className="d-flex flex-wrap justify-content-between small mb-3 text-light gap-2">
            {created_at && (
              <span>
                <FaCalendarAlt className="me-1" /> {new Date(created_at).toLocaleDateString()}
              </span>
            )}
            {updated_at && (
              <span>
                <FaClock className="me-1" /> {new Date(updated_at).toLocaleDateString()}
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
              className={`btn btn-sm w-100 ${isActive ? 'btn-warning' : 'btn-outline-light'}`}
              onClick={() => onToggleStatus?.(id, status)}
            >
              {isActive ? (
                <>
                  <FaBan className="me-1" /> Block
                </>
              ) : (
                <>
                  <FaCheckCircle className="me-1" /> Unblock
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;