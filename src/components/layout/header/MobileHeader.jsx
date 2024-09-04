import { useEffect, useState } from "react";
import { useTheme } from "../../../contexts/themeContext";
import { StylesMobileHeader } from "./stylesMobileHeader";
import { icon } from '../../../constants/icons'
import MobileMenu from "./mobileMenu/MobileMenu";



const MobileHeader = () => {

    const currentTheme = useTheme().theme();
    const [dropOpen, setDropOpen] = useState(false)

    return (
        <StylesMobileHeader theme={currentTheme} >
            <div className="mobile-header-inner">
                <div className="mobile-header-in">
                    <div className="header-logo">
                        <a href="#">
                            <img src="./img/logo-new.png" alt="Logo" style={{ height: '40px' }} />
                        </a>
                    </div>
                    <div className="mobile-header-trigger" onClick={() => setDropOpen(!dropOpen)}>
                        <div className={`hamburger hamburger-slider ${dropOpen ? 'is-active' : ''}`}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                dropOpen && <MobileMenu />
            }



        </StylesMobileHeader>
    )
}

export default MobileHeader;