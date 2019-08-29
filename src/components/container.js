import React, { useState } from "react";
import Card from "./card";
import logoAmerican from "../media/americanLogo.png";
import logoMasterCard from "../media/masterLogo.png";

const componentContainer = {
  display: "flex",
  marginTop: '4%',
  marginBottom: '4%',
  marginLeft: '2%',
  marginRight: '2%'
};

const formContainer = {
  flex: "1",
  flexDirection: "column"
};

const inputElement = {
  width: "50%"
};

const imageElement = {
  width: '15%'
}

const CardContainer = () => {
  const [name, setName] = useState("");
  const [numberAccount, setnumberAccount] = useState("");
  const [dateEnd, setdateEnd] = useState("");

  const checkBankAccount = numberAccount => {
    let firstNumbers = numberAccount.slice(0, 2);
    switch (firstNumbers) {
      case "34":
      case"37":
        return <img style={imageElement} src={logoAmerican} alt="Logo" />;
      case "51":
      case "55":
        return <img style={imageElement} src={logoMasterCard} alt="Logo" />;
      default:
        console.log("No existe Banco");
        return "No existe Banco";
    }
  };

  return (
    <div style={componentContainer}>
      <div style={formContainer}>
        <input
          style={inputElement}
          placeholder="Client name"
          onChange={e => setName(e.target.value)}
          name="nombre"
          value={name}
        />
        <input
          style={inputElement}
          placeholder="Number account"
          onChange={e => setnumberAccount(e.target.value)}
          name="numeroCuenta"
          value={numberAccount}
          maxLength="16"
        />
        <input
          placeholder="MM"
          style={inputElement}
          onChange={e => setdateEnd(e.target.value)}
          name="vencimiento"
          value={dateEnd}
          maxLength="5"
        />
      </div>
      <Card
        clientName={name}
        numberAccount={numberAccount}
        endDate={dateEnd}
        type={checkBankAccount(numberAccount)}
      ></Card>
    </div>
  );
};

export default CardContainer;
