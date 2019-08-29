import React from "react";
import Chip from "../media/chip.png";

const Card = props => {
  const cardStyle = {
    paddingTop: '40px',
    paddingBottom: '40px',
    backgroundImage:
      "linear-gradient(17deg, #1e5799 0%,#1e5799 12%,#207cca 37%,#2989d8 51%,#2989d8 64%,#2989d8 83%,#7db9e8 100%)",
    borderRadius: "25px",
    width: "40%",
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    color: "#fff",
  };

  const dateText = {
    flex: "1"
  }

  const cardText = {
    flex: "2",
    textTransform: "uppercase"
  };

  const contentText = {
    display: "flex"
  }

  const listStyle={
      display: 'flex',
      marginTop: '20px',
      marginBottom: '20px'
  }

  const separateNumberAccount = numberAccount => {
    const newNumber = numberAccount
      .replace(/\W/gi, "")
      .replace(/(.{4})/g, "$1 ");
    return newNumber;
  };

  return (
    <div style={cardStyle}>
      <img style={{ width: '10%', float:'left', marginLeft: '20px' }} src={Chip} />
      <h1 style={cardText}>{separateNumberAccount(props.numberAccount)}</h1>
      <div style={listStyle} >
        <span style={dateText}>{props.endDate}</span>
      </div>
      <div style={contentText}>
        <span style={cardText}>{props.clientName}</span>
        <span style={cardText}>{props.type}</span>
      </div>
    </div>
  );
};

export default Card;
