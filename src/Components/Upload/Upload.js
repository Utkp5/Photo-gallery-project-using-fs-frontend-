import React from "react";
import "../Home/Home.css";

function Upload() {
  return (
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label for="imageUpload" class="custom-file-upload">
        <i class="fas fa-cloud-upload-alt"></i> Choose Image
      </label>
      <input type="file" id="imageUpload" name="imageUpload" required />

      <button type="submit">Upload</button>
    </div>
  );
}

export default Upload;
