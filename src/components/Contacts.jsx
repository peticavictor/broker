import './Contacts.css';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

export default function Contacts() {

    return (
        <ReactScrollWheelHandler
            id="contacts"
            downHandler={(e) => {
                e.preventDefault(); 
                document.getElementById('contacts').scrollIntoView()
            }}
            upHandler={(e) => {
                console.log('up')
                e.preventDefault(); 
                document.getElementById('transit').scrollIntoView()
            }}
            // timer='100'
        >
            <div className="contacts d-flex justify-content-center align-items-center">
                {/* <h1 className='display-1 fw-bold'>Contacts</h1> */}
            </div>
        </ReactScrollWheelHandler>
        
    )
}