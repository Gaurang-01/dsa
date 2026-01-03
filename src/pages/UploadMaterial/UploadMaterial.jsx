import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./UploadMaterial.css";

function UploadMaterial() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Navbar />

      <div className="upload-container">
        <h2>Upload Waste Material</h2>

        <form className="upload-form">
          <label>
            Material Name
            <input type="text" placeholder="e.g. Copper Wire" />
          </label>

          <label>
            Category
            <select>
              <option>Metal</option>
              <option>Plastic</option>
              <option>Electronics</option>
              <option>Chemical</option>
              <option>Wood</option>
            </select>
          </label>

          <label>
            Quantity
            <input type="text" placeholder="e.g. 5 kg / 10 units" />
          </label>

          <label>
            Description
            <textarea placeholder="Any extra details..." />
          </label>

          {/* IMAGE UPLOAD */}
          <label>
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>

          {/* IMAGE PREVIEW */}
          {imagePreview && (
            <div className="image-preview">
              <p>Preview:</p>
              <img src={imagePreview} alt="Material Preview" />
            </div>
          )}

          <button type="submit">Upload Material</button>
        </form>
      </div>
    </>
  );
}

export default UploadMaterial;
