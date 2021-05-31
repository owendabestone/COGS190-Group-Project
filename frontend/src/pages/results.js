import * as React from "react";
import { Link } from "gatsby";
import '../assets/css/fonts.css';
import BackButton from "../images/back.png";
import pieChart from "../images/piechart.jpg";
import { container, back } from '../assets/css/search.module.css';
//import { container, back } from '../assets/css/results.module.css'

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
    width: "5%",
  }

  const sectionStyles = {
      backgroundColor: "#F3F3F3",
      padding: "20px",
      width: "40vw",
      height: "auto",
      borderRadius: 25,
      marginBottom: "2.5vh",
  }

  const wordButtons = {
    color: "#000",
    backgroundColor: "#E1FFFF",
    border: 0,
    fontFamily: "Comfortaa, sans-serif, serif",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 0.5,
    borderRadius: 25,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "3%",
    display: "inline-block",
    position: "relative",
    lineHeight: 1,
    width: "auto",
    marginRight : 20
  }
  const buttons = {
      display : "flex",
      flexDirection : "row"
  }
  
  // markup
  const ResultsPage = () => {
    return (
      <main style={pageStyles}>
        <title>Results</title>
  
        <div className={container}>

        <h1 style={headingStyles}>
        [Restuarant name]
        </h1>

        <p>According to patrons and ## reviews</p>

        <div style={sectionStyles}>
            <h1>Positives</h1>
            <ul>
                <li>
                    'I happened to be in the area to get my 2nd vaccine and was starving. I decided to stop by for a happy meal to get a Pokémon toy for my granddaughter. I...',
                </li>
                <br></br>
                <li>
                   "I filled out online the survey and received a code for a free Quarter pounder w/Cheese. \n\nA combo meal is $8. With the free offer, you can't order the...",
                </li>
                <br></br>
                <li>
                "I went to McDonald's and ordered a meal for me and my fiancé . To my surprise they forgot something! (Right like any other fast food joint.)\n\nGave them a..."
                </li>
            </ul>
            
        </div>

        <div style={sectionStyles}>
            <h1>Negatives</h1>
            <p>'Super bad customer service on the drive thru, I was asking for a coffee  and a ice cream cone he asked if that was it I said yes but then I changed my mind...',
 "Garbage, crap food. McDouble was ice cold and deluxe crispy chicken was lukewarm. McDonald's back in chandler, AZ always makes the food hot and fresh. Why...",
 'The lady in the drive thru was so rude! I came in last night to get some ice cream, and because we NEVER have mcdonalds, i was debating whether or not to...',
 'Deserves 0 stars! Ordered a hazelnut ice coffee, got a regular Ice coffee... already knew was going to be nasty due to the bottom of the cup having water....',
 'The hours are very unclear for this location. Every time I go for some ice cream the machine is unavailable. I believe they have a limited menu due to...',</p>
        </div>
        
        <p>see specific results about common words: </p>
        
        <div style={buttons}>
            <button style={wordButtons}> <Link to="/search" style={{ textDecoration: 'none' }}>Whey</Link> </button>

            <button style={wordButtons}> <Link to="/search" style={{ textDecoration: 'none' }}>Protein</Link> </button>

            <button style={wordButtons}> <Link to="/search" style={{ textDecoration: 'none' }}>Isolate</Link> </button>

        </div>
  
        </div>
              
        <div className={back}>
          <Link to="/search"><img src={BackButton} style={backStyle}/> </Link>
              <div style={backText}><Link to="/search">Back to Search</Link></div>
          </div>
      </main>
    )
  }
  
  export default ResultsPage