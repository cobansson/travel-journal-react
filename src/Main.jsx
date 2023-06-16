import Card from "./Card";
import visitedPlaces from "./Data";
import "./App.css";

function Cards() {
  const cards = visitedPlaces.map((place) => (
    <Card
      key={place.id} {...place}
    />
  ));
  console.log(cards)
  return <ul>{cards}</ul>;
}

export default function Main() {
  return (
    <main>
      <Cards />
    </main>
  );
}
