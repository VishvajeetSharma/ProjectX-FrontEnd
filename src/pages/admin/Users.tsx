import DashboardLayout from '../../layout/DashboardLayout'
import UserCard from './UserCard'

// In your component:
const handleEditUser = (id: any) => {
  console.log('Edit user', id);
};

const handleDeleteUser = (id: any) => {
  console.log('Delete user', id);
};

const handleToggleStatus = (id: any, currentStatus: any) => {
  console.log('Toggle status for user', id, currentStatus);
};

// Dummy user data array
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "+1 234-567-8901",
    address: "123 Main St, New York, NY 10001",
    password: "hashed_password_123",
    credit: 15,
    status: 1, // Active
    profile: "https://randomuser.me/api/portraits/men/1.jpg",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-03-20T14:45:00Z",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    mobile: "+1 987-654-3210",
    address: "456 Oak Ave, Los Angeles, CA 90001",
    password: "hashed_password_456",
    credit: 8,
    status: 0, // Inactive
    profile: "https://randomuser.me/api/portraits/women/2.jpg",
    created_at: "2024-02-10T08:15:00Z",
    updated_at: "2024-03-18T11:20:00Z",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.j@example.com",
    mobile: "+44 20 7946 0958",
    address: "789 Elm St, London, UK",
    password: "hashed_password_789",
    credit: 25,
    status: 1,
    profile: null, // No profile image
    created_at: "2023-12-01T09:00:00Z",
    updated_at: "2024-03-01T16:30:00Z",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    mobile: "+61 3 9876 5432",
    address: "321 Pine Rd, Melbourne, Australia",
    password: "hashed_password_abc",
    credit: 5,
    status: 0,
    profile: "https://randomuser.me/api/portraits/women/3.jpg",
    created_at: "2024-03-01T12:00:00Z",
    updated_at: "2024-03-10T10:15:00Z",
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@example.com",
    mobile: "+81 90-1234-5678",
    address: "654 Cedar Ln, Tokyo, Japan",
    password: "hashed_password_def",
    credit: 12,
    status: 1,
    profile: null,
    created_at: "2024-02-20T11:30:00Z",
    updated_at: "2024-03-22T09:45:00Z",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    mobile: "+33 1 23 45 67 89",
    address: "987 Rue de la Paix, Paris, France",
    password: "hashed_password_ghi",
    credit: 3,
    status: 0,
    profile: "https://randomuser.me/api/portraits/women/4.jpg",
    created_at: "2024-02-05T14:20:00Z",
    updated_at: "2024-03-15T13:10:00Z",
  },
];

const Users = () => {
  return (
    <DashboardLayout>
      <div className="container-fluid py-3 px-4 overflow-hidden my-bg-dark">
        <div className="row">
          <div className="col-12 mx-auto">
            <h2 className="fw-bold text-white">Users</h2>
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


