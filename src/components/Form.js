import React from "react";

const Form = ({
  handleSubmit,
  setName,
  setFirstName,
  setTelephone,
  setOffer,
  setDate,
  setAdresse,
  setDiagnostic,
  setBuilding,
  setEmail,
  setPassword,
  setConfirmPassword,
  name,
  firstName,
  offer,
  building,
  telephone,
  diagnostic,
  date,
  adresse,
  email,
  password,
  confirmPassword,
  errorPassword,
}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <span>Name</span>
      <input
        value={name}
        placeholder=" Dupont"
        onChange={(e) => setName(e.target.value)}
      />
      <span>FirstName</span>
      <input
        value={firstName}
        placeholder="Jean "
        onChange={(e) => setFirstName(e.target.value)}
      />
      <span>Adresse</span>
      <input
        value={adresse}
        placeholder="10 rue de boulogne"
        onChange={(e) => setAdresse(e.target.value)}
      />
      <span>Telephone</span>
      <input
        value={telephone}
        placeholder="05 07 74 45 55"
        onChange={(e) => setTelephone(e.target.value)}
      />
      <span>Offer</span>
      <input
        value={offer}
        placeholder="prix"
        onChange={(e) => setOffer(e.target.value)}
      />
      <span>Date</span>
      <input
        value={date}
        placeholder="Tab"
        onChange={(e) => setDate(e.target.value)}
      />
      <span>Diagnostic</span>
      <input
        value={diagnostic}
        placeholder="DIAG A REALISER"
        onChange={(e) => setDiagnostic(e.target.value)}
      />
      <span>Building</span>
      <input
        value={building}
        placeholder="Tab"
        onChange={(e) => setBuilding(e.target.value)}
      />
      <span>Email</span>
      <input
        value={email}
        placeholder="jeandupont@yahoo.fr"
        onChange={(e) => setEmail(e.target.value)}
      />
      <span>Password</span>
      <div>
        <input
          className={errorPassword && "error"}
          value={password}
          type={"password"}
          placeholder="Dupont2020"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <span>Confirm your password</span>
      <div>
        <input
          className={errorPassword && "error"}
          type={"password"}
          value={confirmPassword}
          placeholder="Dupont2020"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {errorPassword && (
        <span className="error-message">
          Les mots de passe ne sont pas identiques
        </span>
      )}
      <input className="submit-button" value="Register" type="submit" />
    </form>
  );
};

export default Form;
