import "./map.css";

function Map() {
  return (
    <div className="mapdiv">
      <iframe
        class="map"
        src="https://maps.google.com/maps?q=Faculty%20of%20Engineering%20Ain%20Shams%20University,%20El%20Sarayat%20St.%D8%8C%20ABBASSEYA%D8%8C%20El%20Weili&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default Map;
