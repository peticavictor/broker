import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import './Transit.css';

function Transit() {
    return <ReactScrollWheelHandler
        id='transit'
        upHandler={(e) => {
            e.preventDefault(); 
            document.getElementById('export').scrollIntoView()
            document.getElementById('transit').style.opacity = 0.25;
            document.getElementById('export').style.opacity = 1;
        }}
        downHandler={(e) => {
            e.preventDefault(); 
            document.getElementById('contacts').scrollIntoView()
            document.getElementById('contacts').style.opacity = 1;
            document.getElementById('transit').style.opacity = 0.25;
        }}
        // timer='100'
    >
        <h1>Transit</h1>
    </ReactScrollWheelHandler>
}

export default Transit;