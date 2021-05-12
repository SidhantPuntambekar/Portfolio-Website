import React from "react"
import {
  FaRegEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneSquare,
  FaSpotify,
  FaSteam,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaReddit,
} from "react-icons/fa"
import ResponsiveContainer from "./ResponsiveContainer"
import "../styles/Footer.css"
import { IconContext } from "react-icons"

const icons = {
  email: {
    icon: FaRegEnvelope,
    path: "mailto:sidhantnp@yahoo.com",
  },
  phone: {
    icon: FaPhoneSquare,
    path: "tel:7202508098",
  },
  github: {
    icon: FaGithub,
    path: "https://github.com/SidhantPuntambekar",
  },
  linkedin: {
    icon: FaLinkedin,
    path: "https://www.linkedin.com/in/sidhant-puntambekar/",
  },
  spotify: {
    icon: FaSpotify,
    path: "https://open.spotify.com/user/sidhantnp",
  },
  steam: {
    icon: FaSteam,
    path: "https://steamcommunity.com/profiles/76561198399574126",
  },
  facebook: {
    icon: FaFacebook,
    path: "https://www.facebook.com/sidhant.puntambekar",
  },
  instagram: {
    icon: FaInstagram,
    path: "https://www.instagram.com/sidhantnp",
  },
  twitter: {
    icon: FaTwitter,
    path: "https://twitter.com/sidhantnp",
  },
  reddit: {
    icon: FaReddit,
    path: "https://www.reddit.com/user/XLongshotz68",
  },
}
const iconWidth = 100 / Object.keys(icons).length

export default () => (
  <footer>
    <ResponsiveContainer responsiveWidths={[3, 9]}>
      <div style={{ width: "100%", textAlign: "left" }}>Contact/Follow me:</div>
      <div style={{ width: "100%" }}>
        <IconContext.Provider
          value={{
            size: "25px",
            className: "global-class-name",
          }}
        >
          {Object.keys(icons).map(icon => (
            <a
              className={"footerLink"}
              target="blank"
              href={icons[icon].path}
              style={{ width: `${iconWidth}%` }}
              key={icon}
              aria-label={icon}
            >
              {icons[icon].icon()}
            </a>
          ))}
        </IconContext.Provider>
      </div>
    </ResponsiveContainer>
  </footer>
)
