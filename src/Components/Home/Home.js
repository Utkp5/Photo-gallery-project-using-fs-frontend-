import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import homeCss from './Home.css';
import axios from 'axios';


function Home() {
   
    const [imgp,setimg] = useState([]);
    
    useEffect(() => {

        const displaydata =  async() => {

            const data = await axios.get('http://localhost:5000/api/Gallery/get-all-photo');
            console.log(data.data);
            setimg(data.data);
        }

        displaydata();

    },[])

    

  return (
    <div>
      <Navbar />

        <ImageList className={homeCss.imgList}>
          {imgp.map((item) => (
            <ImageListItem key={item.img}>
              <img src={`http://localhost:5000/api/Gallery/get-photo-only/${item._id}`} alt={item.title} loading="lazy" />
              <ImageListItemBar title={item.category} subtitle={<span>by: @PandtUtkarsh</span>} position="below" />
            </ImageListItem>
          ))}
        </ImageList>
        
    </div>


  );
}

export default Home
