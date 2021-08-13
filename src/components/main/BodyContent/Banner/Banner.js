import React from 'react'
import BannerImg from "../../../../assets/images/main_banner.png";
import "./Banner.scss"
const Banner = () => {
    return (
        <div>
            <img className="img-banner" src={BannerImg} />
        </div>
    )
}

export default Banner
