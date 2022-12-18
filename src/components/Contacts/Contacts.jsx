import './Contacts.css';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Contacts() {
    let email = 'peticavictor@gmail.com';
    const emailChars = email.split('');

    return (
        <ReactScrollWheelHandler
            id="contacts"
            className='d-flex flex-column'
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
            <div className="h-50"></div>   
            <div className="h-50 w-100 d-flex flex-row">
                <div className="h-100 map" style={{width: '33vw'}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.1053798376647!2d28.904937876300256!3d46.99890377114059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97bc2d6d95a11%3A0x181c2d076973a4aa!2zU3RyYWRhIEluZHVzdHJpYWzEgyA3MywgQ2hpyJlpbsSDdSwgTW9sZG92YQ!5e0!3m2!1sen!2s!4v1671382327825!5m2!1sen!2s" 
                        width="600" 
                        height="450" 
                        style={{border:0, opacity: '80%'}}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        title='map'
                        className='h-100 w-100'></iframe>
                </div>
                <div className="h-100 bg-secondary d-flex flex-column justify-content-center align-items-center" style={{width:'34vw', opacity: '80%'}}>
                    <h1 className='text-light'>Meet Us</h1>
                    <h6 className='text-light p-2'>+373 788 411 66</h6> 
                    <h6 className='text-light p-2 d-flex flex-wrap justify-content-center email '>
                    {emailChars.map((char) => <span>{char}</span>)}
                    </h6> 
                    <h6 className='text-light p-2 d-flex flex-wrap'>Chisinau, str. Industriala 73</h6> 
                </div>
                <div className="h-100 bg-dark d-flex flex-column justify-content-center align-items-center p-4" style={{width:'33vw', opacity: '80%'}}>
                    <h1 className='text-light'>Email Us</h1>
                    <input type="text"  placeholder='Name' className='form-control m-2'/>
                    <input type="email"  placeholder='Email' className='form-control m-2'/>
                    <input type="text"  placeholder='Content' className='form-control m-2'/>
                    <button className="btn btn-outline-light m-2">Send</button>
                </div>
            </div>
        </ReactScrollWheelHandler>   
    )
}