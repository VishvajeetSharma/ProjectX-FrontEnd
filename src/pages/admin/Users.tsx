import { useState, useEffect } from 'react'
import DashboardLayout from '../../layout/DashboardLayout'
import UserCard from './UserCard'
import { deleteUser, getAllUsers } from '../../services'
import { confirmDeletion, showALert } from '../../utils'

const Users = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getAllUsers();
        console.log(response);
        
        setUsers(response.result || []);
      } catch (err: any) {
        setError(err?.message || 'Failed to fetch users');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

  const handleEditUser = (id: any) => {
    console.log('Edit user', id);
  };

  const handleDeleteUser = async (id: any) => {
      const confirmed = await confirmDeletion('User');
      if (!confirmed) return;
  
      const res = await deleteUser(id);
      if (res?.success) {
        showALert("Delete User", res.message, "success");
        fetchUsers();
      } else {
        showALert("Delete User", res.message, "error");
      }
    };

  const handleToggleStatus = (id: any, currentStatus: any) => {
    console.log('Toggle status for user', id, currentStatus);
  };

  return (
    <DashboardLayout>
      <div className="container-fluid py-3 px-4 overflow-hidden my-bg-dark">
        <div className="row">
          <div className="col-12 mx-auto">
            <h2 className="fw-bold text-dark">Users</h2>
            
            {loading && <p className="text-dark">Loading users...</p>}
            {error && <p className="text-danger">Error: {error}</p>}
            
            <div className="row g-4">
              {users.map((user) => (
                <UserCard
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  mobile={user.mobile}
                  address={user.address}
                  credit={user.credit}
                  status={user.status}
                  profile={user.profile}
                  created_at={user.created_at}
                  updated_at={user.updated_at}
                  onEdit={handleEditUser}
                  onDelete={handleDeleteUser}
                  onToggleStatus={handleToggleStatus}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Users


