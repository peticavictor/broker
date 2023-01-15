import anime from "animejs";
import axios from "axios";
import { useRef, useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import './Services.css';

function Services() {

    // const express = require('express');

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
    const url2 = 'https://dummy.restapiexample.com/api/v1/create';
    const body = [
        {
            "Name" : "test2", 
            "Description" : "description",
            "Account Number" : "N2"
        }
    ]
    const body2 = [
        {"name":"test","salary":"123","age":"23"}
    ]

    const header = {
        'cors' : 'no-cors',
        'Access-Control-Allow-Origin': '*',
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection' : 'keep-alive',
        'Content-Length' : '<calculated when request is sent>',
        'Host' : '<calculated when request is sent>',
        'User-Agent' : 'PostmanRuntime/7.30.0',
    }
    
    const postAccount = async (e) => {
        e.preventDefault();
        axios(url, {
            method: 'POST',
            mode: 'no-cors',
            // headers: {
            //     'Access-Control-Allow-Origin': '*',
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json',
            // },
            body
        }).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
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
                        <input id='user-name' type="text"  placeholder='Company' className='form-control mt-2' name="account" required />
                        {/* <input id='user-email' type="text"  placeholder='Email' className='form-control mt-2' name="user_email" required/> */}
                        <input id='user-message' type="text"  placeholder='Description' className='form-control mt-2' name="description" required/>
                        <input type="submit" className="btn btn-outline-light m-2" value="Send"/>
                    </form>
                </div>
        </div>
        
    </ReactScrollWheelHandler>
}

export default Services;