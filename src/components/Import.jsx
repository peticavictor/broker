import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import './Import.css';

function Import() {
    return <ReactScrollWheelHandler
        id='import'
        upHandler={(e) => {
            console.log('up')
            e.preventDefault(); 
            document.getElementById('main').scrollIntoView()
        }}
        downHandler={(e) => {
            console.log('down')
            e.preventDefault(); 
            document.getElementById('export').scrollIntoView()
        }}
        // timer='100'
    >
        <h1>Import</h1>
    </ReactScrollWheelHandler>
}

export default Import;