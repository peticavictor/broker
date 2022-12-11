import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import './Export.css';

function Export() {
    return <ReactScrollWheelHandler
        id='export'
        upHandler={(e) => {
            e.preventDefault(); 
            document.getElementById('import').scrollIntoView()
            document.getElementById('import').style.opacity = 1;
            document.getElementById('export').style.opacity = 0.25;
        }}
        downHandler={(e) => {
            e.preventDefault(); 
            document.getElementById('transit').scrollIntoView()
            document.getElementById('transit').style.opacity = 1;
            document.getElementById('export').style.opacity = 0.25;
        }}
        // timer='100'
    >
        <h1>Export</h1>
    </ReactScrollWheelHandler>
}

export default Export;