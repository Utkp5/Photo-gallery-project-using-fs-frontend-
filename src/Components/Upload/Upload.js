import React, { useState } from "react";
import "../Home/Home.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

function Upload() {

  const [photo,setphoto] = useState("");
  const [category,setcategory] = useState("");


  
  const handleUpload = async() => {

    try {

      const uploadData = new FormData();
      uploadData.append("category", category);
      uploadData.append("photo", photo);
      
      const res = await axios.post("http://localhost:5000/api/Gallery/add-photo",uploadData);
      console.log(res);

    } catch (error) {
      
    }
  }


  return (
    <div>
    
    <Navbar />

      <div className="updateform">
        <label for="name">Name:</label>
        <input type="text" id="name" name="category" required  onChange={(e) => setcategory(e.target.value)}/>

        <label class="custom-file-upload">
        {photo ? photo.name : "Upload Image"}
        <input type="file" id="imageUpload" name="photo" accept="image/*" hidden onChange={(e) => setphoto(e.target.files[0])}/>
        </label>

        <div>
        {photo && (
          <img src={URL.createObjectURL(photo)} alt="photo" height={"200px"} style={{height : "200px"}} />
        )}
        </div>


        <button type="submit" onClick={handleUpload}>Upload</button>
      </div>


    </div>
  );
}

export default Upload;
