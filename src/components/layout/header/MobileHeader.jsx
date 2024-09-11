import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../../contexts/themeContext";
import { StylesMobileHeader } from "./stylesMobileHeader";
import MobileMenu from "./mobileMenu/MobileMenu";



const MobileHeader = () => {

    const currentTheme = useTheme().theme();

    const [dropOpen, setDropOpen] = useState(false);

    const menuRef = useRef(null);
    const triggerRef = useRef(null);

    const startPosition = useRef({ x: 0, y: 0 });
    const isScrolling = useRef(false);

    const handleTouchStart = (event) => {
        const touch = event.touches[0];
        startPosition.current = { x: touch.clientX, y: touch.clientY };
        isScrolling.current = false;
    };

    const handleTouchMove = (event) => {
        const touch = event.touches[0];
        const deltaX = Math.abs(touch.clientX - startPosition.current.x);
        const deltaY = Math.abs(touch.clientY - startPosition.current.y);

        if (deltaX > 10 || deltaY > 10) {
            isScrolling.current = true;
        }
    };

    const handleTouchEnd = (event) => {
        if (isScrolling.current) return;
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            triggerRef.current &&
            !triggerRef.current.contains(event.target)
        ) {
            setDropOpen(false);
        }
    };


    useEffect(() => {
        if (dropOpen) {
            document.addEventListener("touchstart", handleTouchStart);
            document.addEventListener("touchmove", handleTouchMove);
            document.addEventListener("touchend", handleTouchEnd);
        } else {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        }
     
        return () => {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        };
    }, [dropOpen]);


    return (
        <StylesMobileHeader theme={currentTheme} >
            <div className="mobile-header-inner">
                <div className="mobile-header-in">
                    <div className="header-logo">
                        <a href="#">
                            <img src="./img/logo-new.png" alt="Logo" style={{ height: '40px' }} />
                        </a>
                    </div>
                    <div className="mobile-header-trigger" onClick={() => setDropOpen(!dropOpen)} ref={triggerRef}>
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
                dropOpen && <MobileMenu ref={menuRef} />
            }



        </StylesMobileHeader>
    )
}

export default MobileHeader;