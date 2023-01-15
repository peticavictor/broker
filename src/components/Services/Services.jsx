import anime from "animejs";
import axios from "axios";
import { useRef, useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import './Services.css';

function Services() {

    const services = [
        'Import',
        'Export',
        'Transit'
    ];
    let [index, setIndex] = useState(0);
    let [shownService, setShownService] = useState(services[0]);

    function changeServiceName(translateY) {
        anime.timeline({
            loop:false
        })
        .add({
            targets: '.service-name',
            translateY: [translateY, 0],
            duration:1500,
            easing: 'easeOutExpo',
            delay: anime.stagger(100)
        })
    }

    const form = useRef();
    const url = 'https://salesforce-lnirwi.5sc6y6-1.usa-e2.cloudhub.io/create';

    const postAccount = async (e) => {
        e.preventDefault();

        const body = [
            {
                Name: document.getElementById('account').value,
                Phone: document.getElementById('phone').value,
                "Account Number" : "123",
                Description: document.getElementById('description').value
            }
        ]
                
        const response = await fetch(url, {
            body: JSON.stringify(body),
            method: 'POST', 
            mode:'no-cors', 
            headers: {'Content-Type': 'application/json'} 
        })
        
        alert('Message Sent!');
        document.getElementById('account').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('description').value = '';
    }

    return <ReactScrollWheelHandler
        id='services'
        className='d-flex justify-content-center align-items-center'
        upHandler={(e) => {
            if (index > 0) {
                setIndex(index -= 1);
                setShownService(services[index]);
                changeServiceName(-600);
            } else {
                e.preventDefault(); 
                document.getElementById('main').scrollIntoView()
            }
        }}
        downHandler={(e) => {
            if (index < 2) {
                setIndex(index += 1);
                setShownService(services[index]);
                changeServiceName(600);
            } else {
                e.preventDefault(); 
                document.getElementById('contacts').scrollIntoView()
            }
        }}
    >
        <div className="services d-flex justify-content-center align-items-center">
            <h1 className='service-name text-light'>{shownService}</h1>
            <div className="h-100 bg-dark d-flex flex-column justify-content-center align-items-center" style={{width:'33vw', opacity: '80%'}}>
                <form ref={form} onSubmit={postAccount} className='text-center '>
                    <h1 className='text-light ms-2'>Email Us</h1>
                    <input id='account' type="text"  placeholder='Company' className='form-control mt-2' name="account" required />
                    <input id='phone' type="text"  placeholder='Phone: +373788841166' className='form-control mt-2' name="phone" required/>
                    <input id='description' type="text"  placeholder='Description' className='form-control mt-2' name="description" required/>
                    <input type="submit" className="btn btn-outline-light m-2" value="Send"/>
                </form>
            </div>
        </div>
        
    </ReactScrollWheelHandler>
}

export default Services;