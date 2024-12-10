import React from "react";
import "../styles/Profile.css";

const Profile: React.FC = () => (
  <div className="profile">
    <h2>Profile</h2>
    <p>Klassement Rating: 100</p>
    <p>Totaal XP: 2000</p>
    <div className="badges">Badges: [List of Badges]</div>
    <div className="progression">Weekly Progression Score: 75</div>
    <div className="statistics">Statistics: [Statistics Data]</div>
  </div>
);

export default Profile;
