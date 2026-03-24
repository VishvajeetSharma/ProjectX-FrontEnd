import DashboardLayout from "../../layout/DashboardLayout";
import MasterPlanCard from "./MasterPlanCard";


const MasterPlan = () => {

  const masterPlan = [
        {
            "id": 1,
            "name": "Test",
            "desc": "Testttttt",
            "credit": 5,
            "price": 500,
            "offer": 15,
            "duration": 5,
            "is_rec": 0,
            "status": 1,
            "created_at": "2026-03-24T02:58:04.855Z",
            "updated_at": "2026-03-24T02:58:04.855Z"
        }
    ]

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
                  onEdit={(id) => console.log("Edit Subject", id)}
                  onDelete={(id) => console.log("Delete Subject", id)}
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