import anime from "animejs";
import { useState } from "react";
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
                document.getElementById('services').style.opacity = 0.25;
                document.getElementById('main').style.opacity = 1;
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
                document.getElementById('services').style.opacity = 0.25;
                document.getElementById('contacts').style.opacity = 1;
            }
        }}
    >
        <div className="services d-flex justify-content-center align-items-center">
            <h1 className='service-name display-1 fw-bold text-light'>{shownService}</h1>
        </div>
        
    </ReactScrollWheelHandler>
}

export default Services;