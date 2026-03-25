import { Link } from "react-router-dom";
// Spots container with 3 spots. Each spot has an image, title, description,
//  and link to a specific page.
export default function Spots() {
  const spots = [
    { id: 1, title: "Spot 1", desc: "Spot beskrivning 1", image: "/images/110x50.svg", link: "/spot1" },
    { id: 2, title: "Spot 2", desc: "Spot beskrivning 2", image: "/images/110x50.svg", link: "/spot2" },
    { id: 3, title: "Spot 3", desc: "Spot beskrivning 3", image: "/images/110x50.svg", link: "/spot3" }
  ];

  return (
    <div className="spots-container">
      {spots.map(spot => (
        <div className="spot" key={spot.id}>
          <Link to={spot.link}>
            <figure className="image-container">
              <figcaption>
                <div className="overlay-text">
                  {spot.title}<br />
                  {spot.desc}
                </div>
              </figcaption>
              <img src={spot.image} alt={spot.title} className="responsive" />
            </figure>
          </Link>
        </div>
      ))}
    </div>
  );
}
