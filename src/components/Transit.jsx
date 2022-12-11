import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import './Transit.css';

function Transit() {
    return <ReactScrollWheelHandler
        id='transit'
        upHandler={(e) => {
            console.log('up')
            e.preventDefault(); 
            document.getElementById('export').scrollIntoView()
        }}
        downHandler={(e) => {
            console.log('down')
            e.preventDefault(); 
            document.getElementById('contacts').scrollIntoView()
        }}
        // timer='100'
    >
        <h1>Transit</h1>
    </ReactScrollWheelHandler>
}

export default Transit;