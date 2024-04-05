import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';
import API_KEY from '../../data';
import { valueConverter } from '../../data';
import moment from 'moment';
const Feed = ({category}) => {
  const [data,setData]=useState([])

//Get Data From API
  const fetchData=async ()=>{
    const videoList_URL=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    await fetch(videoList_URL)
    .then(res => res.json())
    .then(data => setData(data.items))
  }

  //When and all catagory is change we have to fetch data from api
  
  useEffect(()=>{
    fetchData();
  },[category])

    return (
        <div className='feed'>
          {data.map((item,index)=>{
            return (
              <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card' key={index}>
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h2>{item.snippet.title}</h2>
                <h3> 
                  {item.snippet.channelTitle}</h3>
                <p>{valueConverter(item.statistics.viewCount)} Views &bull;  &nbsp;&nbsp;{moment(item.snippet.publishedAt).fromNow()}</p>
            </Link>
            )
          }
             )
             }
            
        </div>
         
    )
}

export default Feed
