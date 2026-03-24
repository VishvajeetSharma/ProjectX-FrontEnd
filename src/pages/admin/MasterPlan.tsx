import DashboardLayout from "../../layout/DashboardLayout";
import MasterPlanCard from "./MasterPlanCard";

// In your component:
const handleEditPlan = (id: any) => {
  console.log('Edit plan', id);
};

const handleDeletePlan = (id: any) => {
  console.log('Delete plan', id);
};

const handleTogglePlanStatus = (id: any, currentStatus: any) => {
  console.log('Toggle status for plan', id, currentStatus);
};

const masterPlan = [
    {
      "id": 1,
      "name": "Basic Plan",
      "desc": "Starter package",
      "credit": 5,
      "price": 500,
      "offer": 10,
      "duration": 5,
      "is_rec": 0,
      "status": 1,
      "created_at": "2026-03-24T02:58:04.855Z",
      "updated_at": "2026-03-24T02:58:04.855Z"
    },
    {
      "id": 2,
      "name": "Silver Plan",
      "desc": "For regular users",
      "credit": 10,
      "price": 900,
      "offer": 12,
      "duration": 10,
      "is_rec": 1,
      "status": 1,
      "created_at": "2026-03-24T03:00:00.000Z",
      "updated_at": "2026-03-24T03:00:00.000Z"
    },
    {
      "id": 3,
      "name": "Gold Plan",
      "desc": "Best value plan",
      "credit": 20,
      "price": 1700,
      "offer": 15,
      "duration": 20,
      "is_rec": 1,
      "status": 1,
      "created_at": "2026-03-24T03:05:00.000Z",
      "updated_at": "2026-03-24T03:05:00.000Z"
    },
    {
      "id": 4,
      "name": "Platinum Plan",
      "desc": "Premium access",
      "credit": 30,
      "price": 2400,
      "offer": 18,
      "duration": 30,
      "is_rec": 0,
      "status": 1,
      "created_at": "2026-03-24T03:10:00.000Z",
      "updated_at": "2026-03-24T03:10:00.000Z"
    },
    {
      "id": 5,
      "name": "Starter Plus",
      "desc": "Extra benefits",
      "credit": 8,
      "price": 700,
      "offer": 10,
      "duration": 8,
      "is_rec": 0,
      "status": 1,
      "created_at": "2026-03-24T03:15:00.000Z",
      "updated_at": "2026-03-24T03:15:00.000Z"
    },
    {
      "id": 6,
      "name": "Pro Plan",
      "desc": "For professionals",
      "credit": 25,
      "price": 2000,
      "offer": 20,
      "duration": 25,
      "is_rec": 1,
      "status": 1,
      "created_at": "2026-03-24T03:20:00.000Z",
      "updated_at": "2026-03-24T03:20:00.000Z"
    },
    {
      "id": 7,
      "name": "Advanced Pack",
      "desc": "More credits",
      "credit": 15,
      "price": 1300,
      "offer": 14,
      "duration": 15,
      "is_rec": 0,
      "status": 1,
      "created_at": "2026-03-24T03:25:00.000Z",
      "updated_at": "2026-03-24T03:25:00.000Z"
    },
    {
      "id": 8,
      "name": "Elite Plan",
      "desc": "Top-tier plan",
      "credit": 40,
      "price": 3000,
      "offer": 22,
      "duration": 40,
      "is_rec": 1,
      "status": 1,
      "created_at": "2026-03-24T03:30:00.000Z",
      "updated_at": "2026-03-24T03:30:00.000Z"
    },
    {
      "id": 9,
      "name": "Mini Pack",
      "desc": "Budget friendly",
      "credit": 3,
      "price": 300,
      "offer": 5,
      "duration": 3,
      "is_rec": 0,
      "status": 1,
      "created_at": "2026-03-24T03:35:00.000Z",
      "updated_at": "2026-03-24T03:35:00.000Z"
    },
    {
      "id": 10,
      "name": "Ultimate Plan",
      "desc": "All features included",
      "credit": 50,
      "price": 4000,
      "offer": 25,
      "duration": 50,
      "is_rec": 1,
      "status": 1,
      "created_at": "2026-03-24T03:40:00.000Z",
      "updated_at": "2026-03-24T03:40:00.000Z"
    }
]

const MasterPlan = () => {

  return (
    <DashboardLayout>
      <div className="py-5 text-white overflow-x-hidden my-bg-dark">
        <div className="row">
          <div className="col-sm-10 mx-auto">

            {/* Title */}
            <div className="text-center mb-4">
              <h1 className="fw-bold">Master Plan</h1>
              <p className="text-secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, explicabo.
              </p>
            </div>

            {/* Cards */}
            <div className="row">
              {masterPlan.map((sub) => (
                <MasterPlanCard
                  key={sub.id}
                  {...sub}
                  onEdit={(id) => handleEditPlan(id)}
                  onDelete={(id) => handleDeletePlan(id)}
                  onToggleStatus={(id, status) => handleTogglePlanStatus(id, status)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MasterPlan;