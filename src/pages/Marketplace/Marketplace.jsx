import Navbar from "../../components/Navbar/Navbar";
import "./Marketplace.css";

const materials = [
  {
    id: 1,
    name: "Aluminium Scrap",
    category: "Metal",
    quantity: "5 kg",
    location: "Mechanical Lab",
  },
  {
    id: 2,
    name: "Plastic Containers",
    category: "Plastic",
    quantity: "20 units",
    location: "Chemistry Lab",
  },
  {
    id: 3,
    name: "Old Circuit Boards",
    category: "Electronics",
    quantity: "12 pcs",
    location: "Electronics Lab",
  },
];

function Marketplace() {
  return (
    <>
      <Navbar />

      <div className="marketplace">
        {/* Map Section */}
        <div className="map-section">
          <p>📍 Campus Map View</p>
          <span>(GPS mapping coming soon)</span>
        </div>

        {/* Materials List */}
        <div className="materials-section">
          <h2>Available Materials</h2>

          {materials.map((item) => (
            <div className="material-card" key={item.id}>
              <h3>{item.name}</h3>

              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <p>
                <strong>Location:</strong> {item.location}
              </p>

              <button className="request-btn">Request Material</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Marketplace;
