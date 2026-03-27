import React, { useEffect, useState } from "react";
import PricingCard from "../common/PricingCard";
import { getRecMasterPlan } from "../../services";

const PricingSection: React.FC = () => {

    const [recPlan, setRecPlan] = useState([])
    const fetchData = async () => {
      const res = await getRecMasterPlan()
      setRecPlan(res?.result || [])
    }
    useEffect(() => {
      fetchData()
    }, [])

  return (
    <section className="pricing-section">
      <div className="container mb-4">
        <div className="row pricing-header">
          <div className="col-md-6">
            <h1>Recommended Plan <br />For You</h1>
          </div>
          <div className="col-md-6">
            <p>Our most popular choice — </p>
            <p>get the best value with exclusive discounts and optimized learning duration.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          {recPlan.map((plan, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-4 col-xl-3"
            >
              <PricingCard plan={plan} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;