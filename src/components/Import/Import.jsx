import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import './Import.css';

function Import() {
    return <ReactScrollWheelHandler
        id='import'
        upHandler={(e) => {
            e.preventDefault(); 
            document.getElementById('main').scrollIntoView()
            document.getElementById('import').style.opacity = 0.25;
            document.getElementById('main').style.opacity = 1;
        }}
        downHandler={(e) => {
            e.preventDefault(); 
            document.getElementById('export').scrollIntoView()
            document.getElementById('import').style.opacity = 0.25;
            document.getElementById('export').style.opacity = 1;
        }}
        // timer='100'
    >
        {/* <h1>Import</h1> */}
    </ReactScrollWheelHandler>
}

export default Import;