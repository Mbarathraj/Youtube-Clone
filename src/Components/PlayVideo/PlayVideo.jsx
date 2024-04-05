import React, { useEffect, useState } from 'react'
import './PlayVideo.css';
import video1 from'../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import API_KEY, { valueConverter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';
const PlayVideo = () => {
    const {videoId}=useParams();
    const [apiData,setApiData]=useState(null);
    const[channelDetails,setChannelDetails]=useState(null)
    const [comment,setComment]=useState([])
    const videoData=async (videoId)=>{
       await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&id=${videoId}&regionCode=US&key=${API_KEY}`)
       .then(res => res.json())
       .then(data => setApiData(data.items[0]))
    }
    const chanelData=async()=>{
        await fetch(`
        https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=contentDetails&part=statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`).then(res => res.json())
        .then(data => setChannelDetails(data.items[0]))

        //fetching comments 
        await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResult=50&videoId=${videoId}&key=${API_KEY}`)
        .then(res => res.json())
        .then(data => setComment(data.items))
    }
    useEffect(()=>{
        videoData(videoId)
    },[videoId])
    useEffect(()=>{
        chanelData()
    },[apiData])
  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData ? apiData.snippet.title:"Titel Here"}</h3>
   
        <div className="play-video-info">
            <p>{apiData ? valueConverter(apiData.statistics.viewCount):"ViewsCount"} Views &bull; &nbsp; {apiData ?moment(apiData.snippet.publishedAt).fromNow():""} </p>
            <div>
                <span><img src={like} alt="" /> {apiData && valueConverter(apiData.statistics.likeCount)}</span>
                <span><img src={dislike} alt="" />0</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />save</span>
            </div>
        </div>
        <div className="publisher">
            <img src={channelDetails && channelDetails.snippet.thumbnails.default.url} alt="" />
            <div>
                <p>{apiData ? apiData.snippet.channelTitle :""}</p>
                 <p>{channelDetails && valueConverter(channelDetails.statistics.subscriberCount)} Subscribers</p>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>{apiData ? apiData.snippet.description.slice(0,250):"..."}</p>
        </div>
        <hr />
        <div className="comment-section">
        <h4>{apiData && valueConverter(apiData.statistics.commentCount)} Comments</h4>
           {
            comment.map((value,index)=>{
                return (
                    <div className="comment" key={index}>
                    <img src={value.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                    <div>
                        <h3>{value.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(value.snippet.publishedAt).fromNow()}</span></h3>
                        <p>{value.snippet.topLevelComment.snippet.textDisplay}
                            <div className="comment-action">
                                <img src={like} alt="" /> <span>{valueConverter(value.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={dislike} alt="" /> <span>{}</span>
                            </div>
                        </p>
                    </div>
                </div>
                )
            })
           }
           
        </div>
     

      
    </div>
  )
}

export default PlayVideo
