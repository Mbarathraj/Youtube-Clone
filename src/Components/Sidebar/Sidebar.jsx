import React from 'react'
import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';
const Sidebar = ({ sidebar, category, setCategory }) => {

    const arr = [
        {
            "cateId": 0,
            "catTitle": "Home",
            "image": home
        },
        {
            "cateId": 20,
            "catTitle": "Gaming",
            "image": game_icon
        },
        {
            "cateId": 2,
            "catTitle": "Automobiles",
            "image": automobiles
        },
        {
            "cateId": 17,
            "catTitle": "Sports",
            "image": sports
        },
        {
            "cateId": 24,
            "catTitle": "Entertainment",
            "image": entertainment
        },
        {
            "cateId": 28,
            "catTitle": "Technology",
            "image": tech
        },
        {
            "cateId": 10,
            "catTitle": "Music",
            "image": music
        },
        {
            "cateId": 22,
            "catTitle": "Blogs",
            "image": blogs
        },
        {
            "cateId": 25,
            "catTitle": "News",
            "image": news
        },


    ]

    // Fuction for sidebar Details
    const sideBarDetails = (catagoryNo, catagoryTitle, image, index) => {
        return (<div className={`side-link ${category === catagoryNo ? 'active' : ""}`} onClick={() => {
            setCategory(catagoryNo)
        }} key={index}>
            <img src={image} alt="" />
            {sidebar && <p>{catagoryTitle}</p>}
        </div>
        )
    }

    return (
        <div className='sidebar'>
            <div className="sortcut-links">

                {
                    arr.map((value, index) => {
                        return sideBarDetails(value.cateId, value.catTitle, value.image, index);
                    })

                }
                <div className="subscribed-list">
                    {sidebar && <h3>Subscribed</h3>}
                    <div className="side-link">
                        <img src={jack} alt="" />
                        {sidebar && <p>Jack Chennal</p>}
                    </div>
                    <div className="side-link">
                        <img src={simon} alt="" />
                        {sidebar && <p>Jack Chennal</p>}
                    </div>
                    <div className="side-link">
                        <img src={tom} alt="" />
                        {sidebar && <p>Jack Chennal</p>}
                    </div>
                    <div className="side-link">
                        <img src={megan} alt="" />
                        {sidebar && <p>Jack Chennal</p>}
                    </div>
                    <div className="side-link">
                        <img src={cameron} alt="" />
                        {sidebar && <p>Jack Chennal</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
