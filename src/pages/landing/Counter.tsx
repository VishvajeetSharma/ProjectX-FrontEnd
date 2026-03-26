import React from "react";
import CountUp from "react-countup";
import { FaLaptop, FaUser, FaGraduationCap, FaCheckCircle } from "react-icons/fa";

// Stats data
type Stat = {
  id: number;
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  cardClass: string;
  iconClass: string;
};

const statsData: Stat[] = [
  {
    id: 1,
    icon: <FaLaptop />,
    value: 10,
    suffix: "K",
    label: "Online Courses",
    cardClass: "bg-stat-yellow",
    iconClass: "icon-yellow",
  },
  {
    id: 2,
    icon: <FaUser />,
    value: 200,
    suffix: "+",
    label: "Expert Tutors",
    cardClass: "bg-stat-blue",
    iconClass: "icon-blue",
  },
  {
    id: 3,
    icon: <FaGraduationCap />,
    value: 60,
    suffix: "K+",
    label: "Online Students",
    cardClass: "bg-stat-purple",
    iconClass: "icon-purple",
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    value: 60,
    suffix: "K+",
    label: "Certified Courses",
    cardClass: "bg-stat-teal",
    iconClass: "icon-teal",
  },
];

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
    <>
      {/* Gradient bridge from dark hero → light content */}
      <div className="hero-to-content-bridge"></div>

      <div className="py-4 my-bg-dark">
        <div className="container">
          <div className="row g-4">
            {statsData.map((item) => (
              <StatCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;