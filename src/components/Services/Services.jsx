import anime from "animejs";
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
    const url = 'https://salesforce-lnirwi.5sc6y6-1.usa-e2.cloudhub.io';
    const action = '/create';
    // const endpoint = 'https://corapid-dev-ed.develop.my.salesforce.com';
    // const clientId = '3MVG9vvlaB0y1YsKKriE_qRVbGt22bQa1YHAKuMO2k18zw_biQ2qGH9PqSMtNtQTqGRr.sPYmtB8Hi0Hhg0rm';
    // const client_secret = '7A81FFB78E521B6B9CD9A5766D9E4D19E8950F38C6D06C6558ECA1740E5B73DD';
    // const username = 'peticavictor.developer@gmail.com';
    // const secretToken = 'OqMl3qeKE0djUYgXAoSUqt8JW';
    // const password = 'Mekanys123' + secretToken;
    // const grant_type = 'password';

    const body = [
        {
           "Name" : form['account'],
           "Description" : form['description'],
           "Account Number" : "ABC157"
        }
     ]

    // const header = {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     Accept: 'application/json'
    // }

    const createAccount = async (e) => {
        e.preventDefault()
        
        // fetch(url, {method: 'POST', body: body, header: header})
        //     .then((response) => {
        //         console.log('ok')
        //         console.log(JSON.stringify(response)); //Returns Headers{} object
        //     })
        //     .catch(function(err) {
        //         console.log('Fetch Error', err);
        //     });

        const response = await fetch(url, {body: body, method: 'POST'})
        // const value = await response.json()
        console.log(response)
    }

    const getJobs = async (e) => {
        e.preventDefault()
        const api = "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=9974d359&app_key=9927dfde5d3566725160c08de87ca655&results_per_page=200&content-type=application/json"
        const response = await fetch(api)
        const value = await response.json()
        console.log(value)
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
                    <form ref={form} onSubmit={createAccount} className='text-center '>
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