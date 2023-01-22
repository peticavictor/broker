import './Main.css';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useRef, useState } from 'react';

function Main() {
    const [indexToHide, setIndexToHide] = useState(0);
    let email = 'peticavictor@gmail.com';
    const emailChars = email.split('');

    let industries = [
      {value: '', label: '--Choose an industry--'},
      {value: 'Agriculture', label: 'Agriculture'}, 
      {value: 'Apparel', label: 'Apparel'},
      {value: 'Banking', label: 'Banking'}, 
      {value: 'Biotecknology', label: 'Biotecknology'},
      {value: 'Chemicals', label: 'Chemicals'},
      {value: 'Comunications', label: 'Comunications'},
      {value: 'Construction', label: 'Construction'},
      {value: 'Consulting', label: 'Consulting'},
      {value: 'Education', label: 'Education'},
      {value: 'Electronics', label: 'Electronics'},
      {value: 'Energy', label: 'Energy'},
      {value: 'Engineering', label: 'Engineering'},
      {value: 'Entertainment', label: 'Entertainment'},
      {value: 'Environmental', label: 'Environmental'},
      {value: 'Finance', label: 'Finance'},
      {value: 'Food & Beverage', label: 'Food & Beverage'},
      {value: 'Government', label: 'Government'},
      {value: 'Healthcare', label: 'Healthcare'},
      {value: 'Hospitality', label: 'Hospitality'},
      {value: 'Insurance', label: 'Insurance'},
      {value: 'Machinery', label: 'Machinery'},
      {value: 'Manufacturing', label: 'Manufacturing'},
      {value: 'Media', label: 'Media'},
      {value: 'Not For Profit', label: 'Not For Profit'},
      {value: 'Recreation', label: 'Recreation'},
      {value: 'Retail', label: 'Retail'},
      {value: 'Shipping', label: 'Shipping'},
      {value: 'Technology', label: 'Technology'},
      {value: 'Telecommunications', label: 'Telecommunications'},
      {value: 'Transportation', label: 'Transportation'},
      {value: 'Utilities', label: 'Utilities'},
      {value: 'Other', label: 'Other'}
    ];

    const showWidgetByIndex = (indexToShow) => {
      document.getElementById('widget' + indexToShow).style.display = '';
    }

    const hideWidgetByIndex = (indexToHide) => {
      document.getElementById('widget' + indexToHide).style.display = 'none';
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

        console.log(response);
        
        alert('Account and Contact registered!');
        document.getElementById('account').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('description').value = '';
    }

    return(
      <ReactScrollWheelHandler
      id='main'
      upHandler={(e) => {
        setIndexToHide(indexToHide > 0 ? indexToHide - 1 : 5);
        hideWidgetByIndex(indexToHide); 
        showWidgetByIndex(indexToHide > 0 ? indexToHide - 1 : 5);
      }}
      downHandler={(e) => {
        setIndexToHide(indexToHide < 5 ? indexToHide + 1 : 0);
        hideWidgetByIndex(indexToHide); 
        showWidgetByIndex(indexToHide < 5? indexToHide + 1 : 0);
      }}
      timeout = '1'
      >
        <div className="main d-flex align-items-center justify-content-center h-100 w-100" >
          <div className="container d-flex align-items-center justify-content-center">
            <h1 className="ml12 text-light" id='widget0'>widget 0</h1>
            <div className="bg-dark rounded container" id='widget1' style={{width:'33vw', opacity: '80%', display: 'none'}}>
              <form ref={form} onSubmit={postAccount} className='text-center ' >
                <h1 className='text-light ms-2'>Register</h1>
                <input id='contact' type="text"  placeholder='Your Name' className='form-control mt-2' name="contact" required />
                <input id='account' type="text"  placeholder='Company' className='form-control mt-2' name="account" required />
                <input id='phone' type="text"  placeholder='Phone' className='form-control mt-2' name="phone" required/>
                <input id='email' type="email"  placeholder='Email' className='form-control mt-2' name="email" required/>
                <select name="industry" className='form-control mt-2' required>
                  {industries.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <input type="submit" className="btn btn-outline-light m-2" value="Send"/>
              </form>
            </div>
            <div className="bg-dark rounded container" id='widget2' style={{width:'33vw', opacity: '80%', display: 'none'}}>
              <form ref={form} onSubmit={postAccount} className='text-center ' >
                <h1 className='service-name text-light'>Import</h1>
                <input id='account' type="text"  placeholder='Company' className='form-control mt-2' name="account" required />
                <input id='phone' type="text"  placeholder='Phone' className='form-control mt-2' name="phone" required/>
                <input id='description' type="text"  placeholder='Description' className='form-control mt-2' name="description" required/>
                <input type="submit" className="btn btn-outline-light m-2" value="Send"/>
              </form>
            </div>
            <div className="bg-dark rounded container" id='widget3' style={{width:'33vw', opacity: '80%', display: 'none'}}>
              <form ref={form} onSubmit={postAccount} className='text-center ' >
                <h1 className='service-name text-light'>Export</h1>
                <input id='account' type="text"  placeholder='Company' className='form-control mt-2' name="account" required />
                <input id='phone' type="text"  placeholder='Phone' className='form-control mt-2' name="phone" required/>
                <input id='description' type="text"  placeholder='Description' className='form-control mt-2' name="description" required/>
                <input type="submit" className="btn btn-outline-light m-2" value="Send"/>
              </form>
            </div>
            <div className="bg-dark rounded container" id='widget4' style={{width:'33vw', opacity: '80%', display: 'none'}}>
              <form ref={form} onSubmit={postAccount} className='text-center ' >
                <h1 className='service-name text-light'>Transit</h1>
                <input id='account' type="text"  placeholder='Company' className='form-control mt-2' name="account" required />
                <input id='phone' type="text"  placeholder='Phone' className='form-control mt-2' name="phone" required/>
                <input id='description' type="text"  placeholder='Description' className='form-control mt-2' name="description" required/>
                <input type="submit" className="btn btn-outline-light m-2" value="Send"/>
              </form>
            </div>
            <div className="bg-dark rounded container" id='widget5' style={{width:'33vw', opacity: '80%', display: 'none'}}>
              <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className='text-light'>Meet Us</h1>
                <h6 className='text-light p-2'>+373 788 411 66</h6> 
                <h6 className='text-light p-2 d-flex flex-wrap justify-content-center email '>
                {emailChars.map((char) => <span>{char}</span>)}
                </h6> 
                <h6 className='text-light p-2 text-center'>Chisinau, str. Industriala 73</h6> 
              </div>
            </div>
            <div className='border rounded' style={{width:'33vw',height:'50vh',  display: 'none'}} id='widget6' >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.1053798376647!2d28.904937876300256!3d46.99890377114059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97bc2d6d95a11%3A0x181c2d076973a4aa!2zU3RyYWRhIEluZHVzdHJpYWzEgyA3MywgQ2hpyJlpbsSDdSwgTW9sZG92YQ!5e0!3m2!1sen!2s!4v1671382327825!5m2!1sen!2s" 
                  width="600 px" 
                  height="600 px" 
                  style={{borderRadius: '5px', opacity: '90%'}}
                  title='map'
                  className='h-100 w-100'>
              </iframe>
            </div>
            
          </div>
        </div>
      </ReactScrollWheelHandler>
    )
}

export default Main;

