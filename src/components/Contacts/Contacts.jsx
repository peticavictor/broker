import './Contacts.css';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

export default function Contacts() {

    return (
        <ReactScrollWheelHandler
            id="contacts"
            className='d-flex justify-content-center align-items-center'
            downHandler={(e) => {
                e.preventDefault(); 
                document.getElementById('contacts').scrollIntoView()
            }}
            upHandler={(e) => {
                e.preventDefault(); 
                document.getElementById('services').scrollIntoView()
                document.getElementById('contacts').style.opacity = 0.25;
                document.getElementById('services').style.opacity = 1;
            }}
            // timer='100'
        >
            <div className="contacts d-flex justify-content-center align-items-center">
                <h1 className='display-1 fw-bold text-light'>Contact Us</h1>
            </div>
        </ReactScrollWheelHandler>
        
    )
}