import * as React from "react";
import { Link } from "gatsby";
import '../assets/css/fonts.css';
import SearchGraphic from "../images/search_graphic.png";
import BackButton from "../images/back.png";
import { container, back } from '../assets/css/search.module.css'
// import Search from "../assets/searchContainer"

// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "Comfortaa, sans-serif, serif",
}

const headingStyles = {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 36,
    fontWeight: "bold",
    position: "relative",
    alignSelf: "center"
  }

const searchImgStyles = {
  width: 300,
}

const backStyle = {
  width: 30,
  height: 30,
  marginBottom: 0,
}

const backText = {
  padding: 10,
  marginBottom: 1,
  fontSize: 16,
}

const buttonStyles = {
  // color: "#000",
  // backgroundColor: "#088413",
  // border: 0,
  // fontFamily: "Comfortaa, sans-serif, serif",
  // fontSize: 24,
  // fontWeight: "bold",
  // letterSpacing: 1,
  // borderRadius: 25,
  // background: "linear-gradient(92.89deg, #E8C9FF -27.23%, #FFDBFE 35.81%, #FFF2BE 114.81%)",
  // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  // padding: "1rem 5rem",
  // // textAlign : "center",
  // display: "inline-block",
  // position: "relative",
  // lineHeight: 1,
  // width: "5%",

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
  padding: "2rem 4rem",
  display: "inline-block",
  position: "relative",
  lineHeight: 0,
  textAlign: "center",
  height: "2rem",
  width: "15rem",
  marginLeft: "1rem"
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
  flexDirection: "row",
  flexBasis: "100%",
  flex: 1,
  alignItems: "center"
}

const TextField = () => {
    return (<input placeholder="Enter your address" />)
}

// markup
const SearchPage = () => {
  return (
    <main style={pageStyles}>
      <title>Search for a business!</title>

      <div className={container}>

        <img src={SearchGraphic} style={searchImgStyles}/>

        <h1 style={headingStyles}>
        Search for your business
        </h1>

        <div style={contentStyles}>
          <div style={colStyles}>
            <input style={{outline: "none"}} placeholder="Enter your address"/>
          </div>
          <div style={colStyles}>
          <Link to="/results">
            <button style={buttonStyles}>Enter</button>
          </Link>
          </div>
        </div>
        

      </div>
            
      <div className={back}>
        <Link to="/"><img src={BackButton} style={backStyle}/> </Link>
            <div style={backText}><Link to="/">Back to Home</Link></div>
        </div>
    </main>
  )
}

export default SearchPage