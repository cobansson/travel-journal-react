import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(place) {
  return(
    <li key={place.id}>
    <img src={place.image} />
    <div className="card-info">
      <div className="card-location-info">
        <div className="dot-and-country-info">
          <FontAwesomeIcon icon={faLocationDot} className="location--dot" />
          <h3>{place.location}</h3>
        </div>
        <a href={place.googleMapsUrl} target="_blank">
          View on Google Maps
        </a>
      </div>
      <h1>{place.title}</h1>
      <h4>{place.startDate} - {place.endDate}</h4>
      <p>{place.description}</p>
    </div>
  </li>
  );
}
