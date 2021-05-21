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
    fontSize: 14,
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

        <TextField></TextField>

      </div>
            
      <div className={back}>
        <Link to="/"><img src={BackButton} style={backStyle}/> </Link>
            <div style={backText}><Link to="/">Back to Home</Link></div>
        </div>
    </main>
  )
}

export default SearchPage