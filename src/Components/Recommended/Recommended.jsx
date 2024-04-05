import React, { useEffect, useState } from 'react'
import './Recommended.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { valueConverter } from '../../data';
import API_KEY from '../../data';
import { Link } from 'react-router-dom';
const Recommended = ({categoryId}) => {
  const [data,setData]=useState([]);
  const fetchData=async ()=>{
    await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`)
    .then(res => res.json())
    .then(data => setData(data.items));
  }
  useEffect(()=>{
    fetchData();
  },[data])
    return (
        <div className='recommended'>
           {
            data.map((value,index)=>{
             return( <Link to= {`/video/${value.snippet.categoryId}/${value.id}`}className="side-video-list" key={index}>
             <img src={value.snippet.thumbnails.medium.url} alt="" className='thumb'/>
           <div className="cinfo">
                <h4>{value.snippet.title}</h4>
           </div>
             <div className="vid-info">
                 <p>{value.snippet.channelTitle}</p>
                 <p>{valueConverter(value.statistics.viewCount)}Views</p>
             </div>
                
         </Link>)
            })
           }
            
            
        </div>
    )
}

export default Recommended
