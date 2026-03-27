import DashboardLayout from "../../layout/DashboardLayout"
import { useEffect, useState } from "react";
import { getUsersPlan } from "../../services";
import PurchedPlanCard from "../../components/user/PurchasedPlanCard";

const UserPlans = () => {
  const [usersPlan, setusersPlan] = useState([])
  const fetchData = async () => {
    const res = await getUsersPlan();
    setusersPlan(res?.result || [])
  }
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <DashboardLayout>
      <div className="container-fluid py-3 px-4 overflow-hidden my-bg-dark">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="d-flex text-dark justify-content-between align-items-center mb-4">
              <h2 className="fw-bold m-0">Purchased Plan</h2>
            </div>

            {/* Cards */}
            <div className="row g-4">
              {usersPlan.map((plan: any, index: any) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-lg-4 col-xl-3"
                >
                  <PurchedPlanCard plan={plan} index={index} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>


    </DashboardLayout>
  )
}

export default UserPlans