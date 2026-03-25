import React from 'react';
import {
  FaEdit,
  FaTrashAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCoins,
  FaCalendarAlt,
  FaUsers,
  FaSyncAlt,
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
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 course-card border-0 rounded-4 overflow-hidden">
        {/* Profile Image with subtle overlay */}
        <div className="position-relative">
          {profile ? (
            <img
              src={profile}
              className="card-img-top img-fluid"
              alt={name}
              style={{ objectFit: 'cover', height: '140px', transition: 'transform 0.3s ease' }}
            />
          ) : (
            <div className="d-flex align-items-center justify-content-center bg-secondary" style={{ height: '140px' }}>
              <FaUsers size={40} className="text-light opacity-50" />
            </div>
          )}
          <div className="position-absolute bottom-0 start-0 w-100 p-2 bg-gradient-dark">
            <h6 className="card-title mb-0 text-white fw-bold text-truncate" title={name}>
              {name || 'N/A'}
            </h6>
          </div>
        </div>

        {/* Card Body */}
        <div className="card-body d-flex flex-column p-3">
          {/* Email */}
          {email && (
            <p className="card-text text-white opacity-75 mb-1 small text-truncate d-flex align-items-center" title={email}>
              <FaEnvelope className="me-2 text-primary" style={{ minWidth: '14px' }} /> {email}
            </p>
          )}

          {/* Mobile */}
          {mobile && (
            <p className="card-text text-white opacity-75 mb-1 small d-flex align-items-center">
              <FaPhone className="me-2 text-info" style={{ minWidth: '14px' }} /> {mobile}
            </p>
          )}

          {/* Address */}
          {address && (
            <p className="card-text text-white opacity-75 mb-2 small d-flex align-items-center text-truncate">
              <FaMapMarkerAlt className="me-2 text-danger" style={{ minWidth: '14px' }} /> {address}
            </p>
          )}

          <hr className="my-2 border-secondary opacity-25" />

          {/* Credit & Status */}
          <div className="d-flex justify-content-between align-items-center my-1">
            <span className="badge rounded-pill border-0 px-2 py-1 small" style={{ background: 'var(--accent)' }}>
              <FaCoins className="me-1" /> {credit}
            </span>
            <span 
              className={`badge rounded-pill border-0 px-2 py-1 small cursor-pointer`}
              onClick={() => onToggleStatus?.(id, status)}
              style={{ cursor: 'pointer', background: isActive ? 'var(--accent)' : 'var(--text-secondary)' }}
              title="Click to toggle status"
            >
              {isActive ? 'Active' : 'Inactive'}
            </span>
          </div>


          <div className="mt-auto">
            <div className="d-flex flex-wrap justify-content-between x-small text-white opacity-50 mt-2" style={{ fontSize: '0.65rem' }}>
              {created_at && (
                <span>
                  <FaCalendarAlt className="me-1" /> {new Date(created_at).toLocaleDateString()}
                </span>
              )}
              {updated_at && (
                <span>
                  <FaSyncAlt className="me-1" /> {new Date(updated_at).toLocaleDateString()}
                </span>
              )}
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

export default UserCard;