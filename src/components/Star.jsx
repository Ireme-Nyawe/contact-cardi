export default function Star(isFavorite) {
  let favoriteIcon = isFavorite.isFavorite
    ? "../src/assets/fav-1.png"
    : "../src/assets/fav-2.png";
  return <img src={favoriteIcon} alt="star-image" className="favorite-icon" />;
}
