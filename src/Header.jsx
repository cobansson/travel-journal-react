import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <nav>
        <FontAwesomeIcon icon={faEarthAmerica} spin className="globe--logo"/>
        <h1>my travel journal</h1>
      </nav>
    </header>
  );
}
