import * as React from "react";
import { Link } from "gatsby";
import '../assets/css/fonts.css';
import BackButton from "../images/back.png";
import pieChart from "../images/piechart.png";
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
      fontSize: 16,
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
      width: "55vw",
      height: "auto",
      borderRadius: 25,
      marginTop: "2.5vh",
      marginLeft: "30vw",
    justifyContent: "left",
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
  const pieStyle = {
    left: "5vw",
    width: 300,
    position: "fixed",
    textAlign: "center",
}

const imgPie = {
    marginLeft: "-2.5vw",
}

const contentStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "1%",
    marginRight: "10%"
  }
  
  const colStyles = {
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%",
    flex: 1,
    alignItems: "center"
  }
  
  const centerLOL = {
      justifyContent: "center",
  }
  
  // markup
  const ResultsPage = () => {
    return (
      <main style={pageStyles}>
        <title>Results</title>
  
        <div className={container}>

            <h1 style={headingStyles}>
                [Restaurant name]
            </h1>
            <p>According to patrons and ## reviews</p>

            <div style={contentStyles}>
                <div style={colStyles}>
                    <div style={pieStyle}><h2>Reviews</h2>
                        <img src={pieChart} style={imgPie}/>
                        <p>This is a distribution of positive and negative reviews that we detected!</p>
                    </div>
                </div>

                <div style={colStyles}>
                    <div style={centerLOL}>
                        <p>see specific results about common words: </p>
                        <div style={buttons}>
                            <button style={wordButtons}> <Link to="/search" style={{ textDecoration: 'none' }}>Whey</Link> </button>

                            <button style={wordButtons}> <Link to="/search" style={{ textDecoration: 'none' }}>Protein</Link> </button>

                            <button style={wordButtons}> <Link to="/search" style={{ textDecoration: 'none' }}>Isolate</Link> </button>
                        </div>
                    </div>


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
                        <ul>
                            <li>
                            'Super bad customer service on the drive thru, I was asking for a coffee  and a ice cream cone he asked if that was it I said yes but then I changed my mind...'
                            </li>
                            <br></br>
                            <li>
                            "Garbage, crap food. McDouble was ice cold and deluxe crispy chicken was lukewarm. McDonald's back in chandler, AZ always makes the food hot and fresh. Why...",
                            </li>
                            <br></br>
                            <li>
                            'The lady in the drive thru was so rude! I came in last night to get some ice cream, and because we NEVER have mcdonalds, i was debating whether or not to...'
                            </li>
                            <br></br>
                            <li>
                            'Deserves 0 stars! Ordered a hazelnut ice coffee, got a regular Ice coffee... already knew was going to be nasty due to the bottom of the cup having water....'
                            </li>
                            <br></br>
                            <li>
                            'The hours are very unclear for this location. Every time I go for some ice cream the machine is unavailable. I believe they have a limited menu due to...'
                            </li>
                        </ul>
                    </div>
                </div>
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