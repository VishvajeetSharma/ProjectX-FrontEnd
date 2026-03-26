import { useEffect, useState } from "react";
import UserCard from "../../components/admin/UserCard";
import { deleteUser, getAllUsers } from "../../services";
import { confirmAction, showALert } from "../../utils/index";
import DashboardLayout from "../../layout/DashboardLayout";

const UsersPage = () => {
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
      setUsers(response?.result || []);
    } catch (err: any) {
      setError(err?.message || "Failed to fetch users");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: number) => {
    console.log("Edit", id);
  };

  const handleDelete = async (id: number) => {
    const confirmed = await confirmAction("Are you sure you want to delete this user?");
    if (!confirmed) return;
    try {
      const res = await deleteUser(id);
      if (res?.success) {
        showALert("Delete User", res.message, "success");
        fetchUsers();
      } else {
        showALert("Delete User", res.message || "Failed to delete user", "error");
      }
    } catch (err) {
      console.error("Failed to delete user:", err);
      showALert("Delete User", "An error occurred while deleting the user", "error");
    }
  };

  const handleToggleStatus = (id: number, currentStatus: number) => {
    console.log("Toggle Status", id, currentStatus);
  };

  return (
    <DashboardLayout>
      <div className="container-fluid py-3 px-4 overflow-hidden my-bg-dark">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="d-flex text-dark justify-content-between align-items-center mb-4">
              <h2 className="fw-bold mb-5">Users</h2>
            </div>


            {loading && <p>Loading users...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {!loading && users.length === 0 && <p>No users found</p>}

            {/* Cards */}
            <div className="row g-4">
              {users.map((user, index) => (
                <div key={user.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
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
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onToggleStatus={handleToggleStatus}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </DashboardLayout>
  );
};

export default UsersPage;