import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import './Export.css';

function Export() {
    return <ReactScrollWheelHandler
        id='export'
        upHandler={(e) => {
            console.log('up')
            e.preventDefault(); 
            document.getElementById('import').scrollIntoView()
        }}
        downHandler={(e) => {
            console.log('down')
            e.preventDefault(); 
            document.getElementById('transit').scrollIntoView()
        }}
        // timer='100'
    >
        <h1>Export</h1>
    </ReactScrollWheelHandler>
}

export default Export;