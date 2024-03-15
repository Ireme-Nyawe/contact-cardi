import { useState } from "react";

export default function Card() {
  const [contact, setContact] = useState({
    profile: "../src/assets/react.svg",
    phone: "+34 (342345300)",
    email: "email@email.cc",
    isFavorite: false,
  });
  function handleClick() {
    setContact((prevContact => ({ ...prevContact, isFavorite: !prevContact.isFavorite })));
  }
  let favoriteIcon = contact.isFavorite
    ? "../src/assets/fav-1.png"
    : "../src/assets/fav-2.png";
  return (
    <div className="card" onClick={handleClick}>
      <img src={contact.profile} alt="card-image" />
      <img src={favoriteIcon} alt="star-image" className="favorite-icon" />
      <h3>John Doe</h3>
      <span>{contact.phone}</span>
      <span>{contact.email}</span>
    </div>
  );
}
