import { useState } from "react";
import { useTheme } from "../../../contexts/themeContext";
import Contact from "./contact/Contact";
import CreatorBanner from "./creatorBanner/CreatorBanner";
import EndingText from "./endingText/EndingText";
import Location from "./location/Location";
import { StylesFooter } from "./stylesFooter"




const Footer = () => {

    const currentTheme = useTheme().theme();

    const [showInfoEnding, setShowInfoEnding] = useState(true)
    const [showInfoLocation, setShowInfoLocation] = useState(false)
    const [showInfoContact, setShowInfoContact] = useState(false)

    return(
        <StylesFooter theme={currentTheme}>            
            <div style={{flex: '1'}}  className="footer-content">
                <EndingText 
                    className="footer-content-child"
                    showInfoEnding={showInfoEnding}
                    setShowInfoEnding={setShowInfoEnding}
                    setShowInfoLocation={setShowInfoLocation}
                    setShowInfoContact={setShowInfoContact}
                    />
                <Location 
                    className="footer-content-child"
                    showInfoLocation={showInfoLocation}
                    setShowInfoEnding={setShowInfoEnding}
                    setShowInfoLocation={setShowInfoLocation}
                    setShowInfoContact={setShowInfoContact}
                    />
                <Contact 
                    className="footer-content-child"
                    showInfoContact={showInfoContact}
                    setShowInfoEnding={setShowInfoEnding}
                    setShowInfoLocation={setShowInfoLocation}
                    setShowInfoContact={setShowInfoContact}
                />
            </div>
            <div>
                <CreatorBanner />
            </div>
        </StylesFooter>
    )
}

export default Footer;