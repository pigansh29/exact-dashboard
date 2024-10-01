import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";

// Register required Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const Dashboard = () => {
  // Sample data for body weight and miles walked
  const barData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Weight (kg)",
        backgroundColor: "#FFA500",
        data: [70, 71, 70.5, 70, 70.5, 71, 69.5, 70, 70.5, 71],
      },
      {
        label: "Goal (kg)",
        backgroundColor: "#FFFF00",
        data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
      },
    ],
  };

  const doughnutData = {
    labels: ["Legs Fat", "Other"],
    datasets: [
      {
        data: [12, 88],
        backgroundColor: ["#FFA500", "#F0F0F0"],
      },
    ],
  };

  const milesWalkedData = {
    labels: ["M", "T", "W", "T", "F"], // Labels for the days of the week
    datasets: [
      {
        label: "Miles Walked",
        data: [17.34, 15.5, 18, 19, 20], // Sample data for miles walked each day
        fill: false,
        backgroundColor: "#FFA500",
        borderColor: "#FFA500",
        tension: 0.1,
        pointRadius: 5,
      },
    ],
  };

  return (
    <div className="css">
      <div className="sidebar">
        <h2>Dietsnap</h2>
        <button className="add-entry-button" >+ Add new entry</button>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>My Profile</li>
            <li className="active">My Client</li>
            <li>Report</li>
            <li>My Diet Plans</li>
            <li>Create Diet Plan</li>
            <li>Chat</li>
            <li>Search Food</li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="header">
          <input type="text" placeholder="Search client by name" />
          <FaSearch />
          <FaBell />
          <img
            src="https://via.placeholder.com/50"
            alt="User Avatar"
            className="user-avatar"
          />
        </div>

        <div className="metrics">
          <div className="metric-box">1,930 Avg. Calories</div>
          <div className="metric-box">155 Avg. Proteins</div>
          <div className="metric-box">290 Avg. Carbs</div>
          <div className="metric-box">50 Avg. Fats</div>
        </div>

        <div className="charts">
          <div className="chart1">
            <h3>Body Weight</h3>
            <Bar data={barData} />
          </div>
          <div className="chart">
            <h3>Body Fat</h3>
            <Doughnut data={doughnutData} />
          </div>
        </div>
        <div className="mmm">
          <div className="food-entries">
            <h3>Food Entries</h3>
            <table>
              <thead>
                <tr>
                  <th>Meal</th>
                  <th>Food</th>
                  <th>Calories</th>
                  <th>Proteins</th>
                  <th>Carbs</th>
                  <th>Fat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Breakfast</td>
                  <td>Porridge Oats</td>
                  <td>150 kcal</td>
                  <td>12g</td>
                  <td>50g</td>
                  <td>2g</td>
                </tr>
                <tr>
                  <td>Breakfast</td>
                  <td>Banana whole</td>
                  <td>90 kcal</td>
                  <td>2g</td>
                  <td>20g</td>
                  <td>7g</td>
                </tr>
                <tr>
                  <td>Breakfast</td>
                  <td>Natural honey</td>
                  <td>22 kcal</td>
                  <td>1g</td>
                  <td>12g</td>
                  <td>2g</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="miles-walked">
            <h3>Miles Walked</h3>
            <div className="miles-chart">
              <Line data={milesWalkedData} />
              <div className="miles-walked-info">
                <h4>17.34</h4> {/* Display the total miles walked */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
