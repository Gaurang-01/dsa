import { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { MaterialContext } from "../../context/MaterialContext";
import "./Marketplace.css";

function Marketplace() {
  const { materials } = useContext(MaterialContext);

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

              <button className="request-btn">
                Request Material
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Marketplace;
