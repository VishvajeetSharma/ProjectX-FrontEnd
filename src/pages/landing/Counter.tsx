import React from "react";
import CountUp from "react-countup";
import { FaLaptop, FaUser, FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Type for each stat
type Stat = {
  id: number;
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  cardClass: string;
  iconClass: string;
};

// ✅ Stats data typed
const statsData: Stat[] = [
  {
    id: 1,
    icon: <FaLaptop />,
    value: 10,
    suffix: "K",
    label: "Online Courses",
    cardClass: "bg-gold",
    iconClass: "icon-gold",
  },
  {
    id: 2,
    icon: <FaUser />,
    value: 200,
    suffix: "+",
    label: "Expert Tutors",
    cardClass: "bg-darkblue",
    iconClass: "icon-blue",
  },
  {
    id: 3,
    icon: <FaGraduationCap />,
    value: 60,
    suffix: "K+",
    label: "Online Students",
    cardClass: "bg-purple",
    iconClass: "icon-purple",
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    value: 60,
    suffix: "K+",
    label: "Certified Courses",
    cardClass: "bg-teal",
    iconClass: "icon-teal",
  },
];

// ✅ Props type for StatCard
type StatCardProps = Omit<Stat, "id">;

const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  suffix,
  label,
  cardClass,
  iconClass,
}) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className={`stats-card ${cardClass}`}>
        <div className={`stats-icon ${iconClass} fs-5`}>{icon}</div>
        <div>
          <div className="stats-title">
            <CountUp end={value} duration={2} separator="," />
            {suffix}
          </div>
          <div className="stats-sub">{label}</div>
        </div>
      </div>
    </div>
  );
};

const Counter: React.FC = () => {
  return (
    <div className="py-5 my-bg-dark">
      <div className="container">
        <div className="row g-4">
          {statsData.map((item) => (
            <StatCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;