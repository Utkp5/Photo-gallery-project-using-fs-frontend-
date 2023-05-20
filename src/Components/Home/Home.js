import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import axios from 'axios';
// import { makeStyles } from '@mui/material/styles';

// const useStyles = makeStyles({
//   myButton: {
//    backgroundColor: 'red',
//     },
// });


function Home() {
   
    const [imgp,setimg] = useState([]);
   
    // const classes = useStyles();
    
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

      <div className="container">
      
         {
          imgp.map((item) => {
            return (
              <div>
              <img src={`http://localhost:5000/api/Gallery/get-photo-only/${item._id}`} style={{height : "400px", width : "400px"}} />
              <p>Category: {item.category}</p>  
              </div>
            )
          })
         }

      </div>  

    </div>
    // <img src={`http://localhost:5000/api/Gallery/get-photo-only/${item._id}`} alt={item.title} loading="lazy" style={{height : "400px", width : "400px"}} />
    // <p title={item.category} />

  );
}

export default Home
