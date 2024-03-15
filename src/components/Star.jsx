export default function Star(props) {
  let favoriteIcon = props.isFavorite
    ? "../src/assets/fav-1.png"
    : "../src/assets/fav-2.png";
  return <img src={favoriteIcon} onClick={props.handleClick} alt="star-image" className="favorite-icon" />;
}
