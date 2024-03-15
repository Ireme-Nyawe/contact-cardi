import { useState } from "react";
import Star from "./Star";

export default function Card() {
  const [contact, setContact] = useState({
    profile: "../src/assets/react.svg",
    phone: "+34 (342345300)",
    email: "email@email.cc",
    isFavorite: true,
  });
  function toglleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }
  return (
    <div className="card">
      <img src={contact.profile} alt="card-image" />
      <Star isFavorite={contact.isFavorite} handleClick={toglleFavorite}></Star>
      <h3>John Doe</h3>
      <span>{contact.phone}</span>
      <span>{contact.email}</span>
    </div>
  );
}
