import React from "react";
import {FaRegEnvelope, FaGithub, FaLinkedin, FaPhone, FaSpotify, FaSteam, FaFacebook, FaInstagram, FaTwitter, FaChessKing} from "react-icons/fa";
import ResponsiveContainer from "./ResponsiveContainer";
import "../styles/Footer.css";

const icons = 
{
    email: 
    {
        icon: FaRegEnvelope,
        path: "mailto:sidhantnp@yahoo.com"
    },
    phone:
    {
        icon: FaPhone,
        path: "tel:7202508098"
    },
    github:
    {
        icon: FaGithub,
        path: "https://github.com/SidhantPuntambekar"
    },
    linkedin:
    {
        icon: FaLinkedin,
        path: "https://www.linkedin.com/in/sidhant-puntambekar-0bb881130/"
    },
    spotify:
    {
        icon: FaSpotify,
        path: "https://open.spotify.com/user/sidhantnp"
    },
    steam:
    {
        icon: FaSteam,
        path: "https://steamcommunity.com/id/sidhantnp"
    },
    facebook:
    {
        icon: FaFacebook,
        path: "https://www.facebook.com/sidhant.puntambekar"
    },
    instagram:
    {
        icon: FaInstagram,
        path: "https://www.instagram.com/sidhantnp"
    },
    twitter:
    {
        icon: FaTwitter,
        path: "https://twitter.com/SidPuntambekar"
    },
    chess:
    {   
        icon: FaChessKing,
        path: "https://www.chess.com/member/xlongshotz68"
    }
};
const iconWidth = 100 / (Object.keys(icons).length);

export default () => (
	<footer>
		<ResponsiveContainer responsiveWidths={[3, 9]}>
            <div style={{width: "100%", textAlign: "center"}}>Contact me:</div>
			<div style={{width: "100%"}}>{
                Object.keys(icons).map(icon => <a className={"footerLink"} href={icons[icon].path} style={{width:`${iconWidth}%`}} key={icon} aria-label={icon}>{icons[icon].icon()}</a>)
			} </div>
        </ResponsiveContainer>
    </footer>
)
