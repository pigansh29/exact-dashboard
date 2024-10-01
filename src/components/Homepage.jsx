// src/Homepage.js
import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <video src="https://s3-figma-videos-production-sig.figma.com/video/1221518117681029934/TEAM/978d/c504/-0c44-4d47-b5de-24240b06f535?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FI9QqOkYTREO0kTXsTCnPiAwWa2-B-8ieeRQYnjGa1~1SBFGQ-RgAWM~OMQGB3j3kLWvkaZySeMGQ8Gd94MUMcKe3ED-jcLohRQJhNyj3~DblaotHgSfi9uG2aV4~bOdOItDbqazGqs7iFJszcGF3mVXodwfRg5HkyIHIvde93lcpAkMxTF3TBnOHDcTp7J6MkrxVATFF8~z5YN1M6iZu1BDYEJNIjyIu2Rb1rFUHbvixZYuipsHSkZPpXnPl~-FKGL3WEofHfaCbPuxXCDArI~O~gkzN7mYyvilhMX02CMwsFgnMbsDu597EKP2KC0t2Uy7EfZzQCykUljqAAHoBg__"></video>
          <h1>Fitsnap For GYM</h1>
          <p>Experience the best in fitness and personalized training.</p>
        </div>
      </header>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-item">
          <h2>50+</h2>
          <p>GYM Studios</p>
        </div>
        <div className="stat-item">
          <h2>250+</h2>
          <p>Users served</p>
        </div>
        <div className="stat-item">
          <h2>60+</h2>
          <p>Product Reviews</p>
        </div>
      </div>

      {/* Why Choose Fitsnap Section */}
      <div className="why-choose-section">
        <h2>WHY CHOOSE FITSNAP</h2>
        <p>Get healthier lifestyles with us</p>
        <div className="features-grid">
          <div className="feature-item">
            <img src="https://via.placeholder.com/150" alt="Enhanced Focus" />
            <h3>Enhanced Focus On Individual Needs</h3>
            <p>
              Fitsnap offers personalized fitness plans tailored to help you
              achieve your fitness goals.
            </p>
          </div>
          <div className="feature-item">
            <img
              src="https://s3-alpha-sig.figma.com/img/4305/97d8/3f044dec29199b21136f83647539e774?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kubcFjZS7J6hPFKXqMgC2g-AsvsTj5GKV~52BkUa3-tTdySa2tEvHLcrVU4Dh7abTcd5MKC3ErA9yBv40j5Z8YO1iF55Mz~su9YxkoNCw6THTvskzSwHqn97IC6XAIqs2-hSUPo0YIafGWcVUzXL1sk4WlUianRGji5rfluiRW7Yx~nJOkityXwbKerjc13L6oxJ7pIqlD2JWGZIr2C4uWwXuKHx-npVEmIwpPuCNfG4IXmTMNlQHNb1NJI1mDkbIwEuLq4295cDlr~L7x8BrxHnY-s2VeaxbUNLiZnxw4P1BQxA9iTqq~ajOslGyXYZtGO3ReQGLD7hgDowFhHh5Q__"
              alt="Data-Driven Insights"
            />
            <h3>Data-Driven Insights</h3>
            <p>
              Get insights into your progress with our data analytics, ensuring
              you're on the right path.
            </p>
          </div>
          <div className="feature-item">
            <img
              src="https://via.placeholder.com/150"
              alt="Efficient Workouts"
            />
            <h3>Efficient Workouts</h3>
            <p>
              Save time and get the best results with customized efficient
              workout plans designed by experts.
            </p>
          </div>
          <div className="feature-item">
            <img
              src="https://via.placeholder.com/150"
              alt="Preventing Injuries"
            />
            <h3>Preventing Injuries</h3>
            <p>
              With a focus on proper form and injury prevention, our trainers
              make sure you stay fit and safe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
