import React from "react";

const StepTwo = ({
  name,
  email,
  password,
  setStep,
  firstName,
  téléphone,
  adresse,
  offer,
  date,
  building,
  diagnostic,
}) => {
  return (
    <div className="results">
      <div>
        <span>Name : {name}</span>
        <span>Email : {email}</span>
        <span>Password : {password}</span>
        <span>FirstName : {firstNamel}</span>
        <span>Offer : {offer}</span>
        <span>Téléphone : {téléphone}</span>
        <span>Buildind : {building}</span>
        <span>Adresse : {adresse}</span>
        <span>Date : {date}</span>
        <span>Diagnostic: {diagnostic}</span>
      </div>

      <button className="back-button" onClick={() => setStep(1)}>
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
