import React from "react";
import { Building2 } from "lucide-react";

const Card = (props) => {
  const { name, status, price, image, profession, company, skills, about } = props;
  return (
    <div className="card">
      <div className="top">
        <button
       className={`status-btn ${status === "Available" ? "available" : "busy"}`}
        >{status}</button>

        <p>{price}</p>
      </div>

      <div className="image">
        <img src={image} alt="Profile" />
      </div>

      <div className="info">
        <h1>{name}</h1>
        <p className="profession">{profession}</p>
        <p className="company">
          <Building2 color="skyblue" size={20} /> {company}
        </p>
      </div>

      <div className="skills">
        {skills.slice(0, 4).map((skill, index) => (
          <button key={index}>{skill}</button>
        ))}

        {skills.length > 4 && (
          <button className="more">+{skills.length - 4}</button>
        )}
      </div>

      <div className="about">
        <p>
         {about}
        </p>
      </div>

      <a href="#" className="profile-link">
        VIEW PROFILE
      </a>
    </div>
  );
};

export default Card;
