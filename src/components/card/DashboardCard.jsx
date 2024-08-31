/* eslint-disable react/prop-types */

const DashboardCard = ({ title, amount, percentage, trendUp }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between">
        <div>
          <h2 className="text-sm font-medium">{title}</h2>
          <p className="text-xl font-bold">{amount}</p>
        </div>
        <div className={`flex items-center ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
          <i className={`fas fa-arrow-${trendUp ? 'up' : 'down'}`}></i>
          <span className="ml-1">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
