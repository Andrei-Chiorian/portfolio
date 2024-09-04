import { StylesBubblesBg } from "./stylesBubblesBg";


const BubblesBg = (props) => {

    return (
        <StylesBubblesBg theme={props.currentTheme}>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>           
        </StylesBubblesBg>
    )
}

export default BubblesBg;