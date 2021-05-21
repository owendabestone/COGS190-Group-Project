import * as React from "react";
import { Link } from "gatsby";
import '../assets/css/fonts.css';
import LandingImage from "../images/landing.svg"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "Comfortaa, sans-serif, serif",
}

const contentStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: "5%",
  marginRight: "10%"
}

const colStyles = {
  display: "flex",
  flexDirection: "column",
  flexBasis: "100%",
  flex: 1,
  alignItems: "center"
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  fontSize: 64,
  fontWeight: "bold",
}

const paragraphStyles = {
  fontSize: 24,
  lineHeight: "200%",
  marginBottom: 32,
}

const landingImageStyles = {
  width: 800
}

const buttonStyles = {
  color: "#000",
  backgroundColor: "#088413",
  border: 0,
  fontFamily: "Comfortaa, sans-serif, serif",
  fontSize: 24,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 25,
  background: "linear-gradient(92.89deg, #E8C9FF -27.23%, #FFDBFE 35.81%, #FFF2BE 114.81%)",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  padding: "3% 10%",
  display: "inline-block",
  position: "relative",
  lineHeight: 1,
  width: "50%",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div style={contentStyles}>
        <div style={colStyles}>
        <img src={LandingImage} style={landingImageStyles}/>
        </div>
        
        <div style={colStyles}>
          <h1 style={headingStyles}>
            Get real feedback from real reviews.
          </h1>
          <p style={paragraphStyles}>
            Our AI intereprets user reviews of your business to give you a complete summary of ways to 
            improve your business to maximize efficiency and user experience.
          </p>
          {/*<Link to="/search">*/}
            <button style={buttonStyles}>Get started!</button>
          {/*</Link>*/}
        </div>
      </div>
    </main>
  )
}

export default IndexPage
