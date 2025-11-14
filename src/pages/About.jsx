import React from "react";
import { useNavigate } from "react-router-dom";
import about from "../images/about.jpg";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="mt-3">Hafiz's Persona</h1>
      <div>
        <img
          src={about}
          style={{ height: "auto", width: "45rem" }}
          alt="About me"
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary btn-rounded"
            onClick={() => navigate("/home")}
          >
            Home
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
