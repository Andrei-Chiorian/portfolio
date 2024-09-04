import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { StylesLayout } from "./stylesLayout"
import { useTheme } from "../../contexts/themeContext";
import BubblesBg from "../global/bubblesBg/BubblesBg";
import MobileHeader from "./header/MobileHeader";
import { useEffect, useState } from "react";




const Layout = () => {
    const currentTheme = useTheme().theme();
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        setDeviceWidth(window.innerWidth)
    }, [window.innerWidth])
    return(
        <StylesLayout theme={currentTheme}>
            {
                deviceWidth <= '688' ? <MobileHeader/> : <Header/>
            }
            
            <div className="main-section">
                <Outlet/>  
            </div>                             
            <Footer />
            <BubblesBg/>
        </StylesLayout>
    )
}

export default Layout;