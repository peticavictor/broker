import './Main.css';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faFaceAngry } from '@fortawesome/free-regular-svg-icons';
import { faArrowDown, faArrowLeft, faArrowRight, faArrowRightFromBracket, faArrowRightLong, faArrowRightToCity, faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Main() {
  const [indexToHide, setIndexToHide] = useState(0);
  const [pageStyle, setPageStyle] = useState();

  const numberOfWidgets = 5;

  const urlGetNews = 'https://corapid-dev-ed.develop.my.salesforce-sites.com/services/apexrest/v1/News/'
  const urlCorapidAccount = 'https://corapid-dev-ed.develop.my.salesforce-sites.com/services/apexrest/v1/Accounts/'
  const urlGetIndustries = 'https://corapid-dev-ed.develop.my.salesforce-sites.com/services/apexrest/v1/Industries/'
  const urlCreateOpportunity = 'https://corapid-dev-ed.develop.my.salesforce-sites.com/services/apexrest/v1/Opportunities/'

  const [company, setCompany] = useState('');
  const [industries, setIndustries] = useState([]);
  const [news, setNews] = useState([]);
  const [contacts, setContacts] = useState([{Name:'', Email:'', Phone:''}]);
  const [street, setStreet] = useState();
  const [shownContact, setShownContact] = useState(0);

  const getCorapidAccount = async function() {
    const response = await fetch(urlCorapidAccount);
    const result = await response.json();

    setStreet(result.BillingAddress.street);

    const arr = await Array.from(result.Contacts.records);
    setContacts(arr);

    setCompany({
      Name: result.Name,
      Id: result.Id,
      Description: result.Description,
      Website: result.Website
    })

    setPageStyle({
        background:' linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(' + result.Website + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    )
  }

  const getIndustries = async function() {
    const response = await fetch(urlGetIndustries);
    const result = await response.json();
    
    const arr = Array.from(result);
    setIndustries(arr)
  }

  const getNews = async function() {
    const response = await fetch(urlGetNews);
    const result = await response.json();
    const arr = Array.from(result);
    setNews(arr);
  }

  const getInitialData = async function() {
    await getCorapidAccount();
    await getIndustries();
    await getNews();
  }

  const creteOpportunity = async function(event) {
    if(document.getElementById('cmr').value !== '' && document.getElementById('opportunityService').value !== '' && document.getElementById('invoice').value !== '' && document.getElementById('token').value !== '') {
      event.preventDefault();
      const service = document.getElementById('opportunityService').value;
      const email = document.getElementById('opportunityEmail').value;
      const token = document.getElementById('token').value;

      const body = {
        service: service,
        email: email,
        cmr: file,
        invoice: invoice,
        token: token
      }
      const response = await fetch(urlCreateOpportunity,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      
      const result = await response.json();

      if(response.status !== 200) {
        console.log(response);  
        alert('Something went wrong. To request a service register or contact the broker.');
      } else {
        if(result === '403') {
          alert('wrong token')
        } else if(result.includes('402')) {
          alert('You are not registered.')
        } else {
          alert('You have successfully requested a ' + service + '. We thank you for taking the time to write to us. We will get back to you very soon.');
          document.getElementById('opportunityService').value = '';
          document.getElementById('opportunityEmail').value = '';
          document.getElementById('cmr').value = '';
          document.getElementById('invoice').value = '';
          document.getElementById('token').value = '';
          console.log(result)
        }
      }
    } else {
      alert('Fill the fields')
    }
  }

  const showWidgetByIndex = (indexToShow) => {
    document.getElementById('widget' + indexToShow).style.display = '';
  }

  const hideWidgetByIndex = (indexToHide) => {
    document.getElementById('widget' + indexToHide).style.display = 'none';
  }

  function onRegistered() {
    alert("Thanks! We appreciate that you’ve taken the time to write us. We’ll get back to you very soon.");
  }

  let widgetIndex = 0

  const [current, setCurrent] = useState(0);
  const length = news.length;

  const nextNews = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevNews = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const upHandler = function() {
    setIndexToHide(indexToHide > 0 ? indexToHide - 1 : numberOfWidgets);
    hideWidgetByIndex(indexToHide); 
    showWidgetByIndex(indexToHide > 0 ? indexToHide - 1 : numberOfWidgets);
  }

  const downHandler= function() {
    setIndexToHide(indexToHide < numberOfWidgets ? indexToHide + 1 : 0);
    hideWidgetByIndex(indexToHide); 
    showWidgetByIndex(indexToHide < numberOfWidgets? indexToHide + 1 : 0);
  }

  const fileToBase64 = (file, cb) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      cb(null, reader.result)
    }
    reader.onerror = function (error) {
      cb(error, null)
    }
  }

  const onUploadFileChange = ({ target }) => {
    if (target.files < 1 || !target.validity.valid) {
      return
    }
    fileToBase64(target.files[0], (err, result) => {
      if (result) {
        setFile(result)
      }
    })
  }

  const invoiceToBase64 = (invoice, cb) => {
    const reader = new FileReader()
    reader.readAsDataURL(invoice)
    reader.onload = function () {
      cb(null, reader.result)
    }
    reader.onerror = function (error) {
      cb(error, null)
    }
  }

  const onUploadInvoiceChange = ({ target }) => {
    if (target.files < 1 || !target.validity.valid) {
      return
    }
    invoiceToBase64(target.files[0], (err, result) => {
      if (result) {
        setInvoice(result)
      }
    })
  }

  const [ file, setFile ] = useState(null)
  const [ invoice, setInvoice ] = useState(null)
  
  const incrementShownContact = function() {
    setShownContact(shownContact < contacts.length -1 ? shownContact + 1 : 0);
  }
  const decrementShownContact = function() {
    setShownContact(shownContact > 0  ? shownContact -1 : contacts.length -1);
  }
  

  return(
    <ReactScrollWheelHandler
    id='main'
    upHandler={(e) => {
      setIndexToHide(indexToHide > 0 ? indexToHide - 1 : numberOfWidgets);
      hideWidgetByIndex(indexToHide); 
      showWidgetByIndex(indexToHide > 0 ? indexToHide - 1 : numberOfWidgets);
    }}
    downHandler={(e) => {
      setIndexToHide(indexToHide < numberOfWidgets ? indexToHide + 1 : 0);
      hideWidgetByIndex(indexToHide); 
      showWidgetByIndex(indexToHide < numberOfWidgets? indexToHide + 1 : 0);
    }}
    timeout = '200'
    onLoad={getInitialData}
    >
      <div className="main d-flex align-items-center justify-content-center h-100 w-100"  style={pageStyle}>
        <div className='d-flex flex-column justify-content-between h-100 w-100'>
          <div className='text-center'>
            <FontAwesomeIcon icon={faArrowUp} className='text-light btn mt-2' onClick={upHandler} style={{fontSize:'28px', opacity:'60%'}}/>
          </div>
          <div className="container d-flex align-items-center justify-content-center h-100">
            
            <div className='widget' id={'widget' + widgetIndex} style={{opacity: '80%'}}>
              <h1 className="ml12 text-light text-center">{company.Name}</h1>
              <h1 className="ml12 text-light text-center">{company.Description}</h1>
            </div>
            <div className='container widget align-items-center  w-100 ' id={'widget' + ++widgetIndex} style={{width:'33vw', opacity: '80%', display: 'none'}}>
              <div className='d-flex flex-column align-items-center'>
                <h1 className='ml12 text-light text-center' style={{fontSize: '42px'}}>News</h1>
                <div className='d-flex justify-content-between py-5 w-100 bg-dark rounded '>
                  <div className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} className='text-light btn' onClick={prevNews} style={{fontSize:'28px', opacity:'60%'}}/>
                  </div>
                  {news.map((slide, index) => {
                    return (
                      <div
                      className={index === current ? 'slide active' : 'slide'}
                      key={index}
                      >
                        {index === current && (
                          <div>
                            <h1 className="ml12 text-light text-center" style={{fontSize: '24px'}}>{slide.Name} </h1>
                            <h1 className="ml12 text-light text-center" style={{fontSize: '16px'}}>{slide.Description__c}</h1>
                            <h1 className="ml12 text-light text-end" style={{fontSize: '14px'}}>{new Date(slide.CreatedDate).toDateString()}</h1>
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <div className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-light btn' onClick={nextNews} style={{fontSize:'28px', opacity:'60%'}}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='widget w-100' id={'widget' + ++widgetIndex} style={{width:'33vw', opacity: '80%', display: 'none'}}>
              <h1 className="ml12 text-light text-center">Request Service</h1>
              <div className='d-flex justify-content-around flex-wrap flex-row'>
                <form className='bg-dark p-3 m-3 rounded '>
                  <select name="service" className='form-control' id="opportunityService" required>
                    <option value="">Choose Service</option>
                    <option value="Import">Import</option>
                    <option value="Export">Export</option>
                    <option value="Transit">Transit</option>
                  </select>
                  <input type="email" name='email' id='opportunityEmail' className='form-control my-2' placeholder='Email' required/>
                  <input type="text" id='token' name='token' className='form-control my-2' placeholder='Token' required/>
                  <div className='d-flex flex-row my-2'>
                    <label htmlFor="cmr" className='text-light'>CMR:</label>
                    <input type="file" name='cmr' id='cmr' onChange={onUploadFileChange} className='form-control' required/>
                  </div>
                  <div className='d-flex flex-row my-2'>
                    <label htmlFor="invoice" className='text-light'>Invoice:</label>
                    <input type="file" name='invoice' id='invoice' onChange={onUploadInvoiceChange} className='form-control' required/>
                  </div>
                  <button className='btn btn-outline-light' onClick={creteOpportunity}>Request</button>
                </form>
              </div>
            </div>
            <div className="widget w-100 bg-dark rounded container" id={'widget' + ++widgetIndex} style={{width:'33vw', opacity: '80%', display: 'none'}}>
              <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" className='text-center ' >
                <input type="hidden" name="oid" value="00D68000000YPIM"/>
                <input type="hidden" name="lead_source" value="web"/>
                <input type="hidden" name="retURL" value="https://broker-one.vercel.app/"/>
                <h1 className='text-light ms-2'>register</h1>
                <input id='first_name' type="text"  placeholder='Your Name' className='form-control mt-2' name="first_name" required />
                <input id='last_name' type="text"  placeholder='Your Last Name' className='form-control mt-2' name="last_name" required />
                <input id='company' type="text"  placeholder='Company' className='form-control mt-2' name="company" required />
                <input id='phone' type="text"  placeholder='Phone' className='form-control mt-2' name="phone" required/>
                <input id='email' type="email"  placeholder='Email' className='form-control mt-2' name="email" required/>
                <select id='industry' name="industry" className='form-control mt-2' required>
                  <option value="">Choose Industry</option>
                  {industries.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <input type="submit" onClick={onRegistered} className="btn btn-outline-light m-2" value="Send"/>
              </form>
            </div>
            <div className=" widget w-100 bg-dark rounded container" id={'widget' + ++widgetIndex} style={{width:'33vw', opacity: '80%', display: 'none'}}>
              <div className='d-flex flwx-row justify-content-between'>
                <div className='d-flex align-items-center'>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} className='text-light btn' onClick={incrementShownContact} style={{fontSize:'28px', opacity:'60%'}}/>
                </div>
                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                  <h1 className='text-light'>Meet Us</h1>
                  <h6 className='text-light p-2'>{contacts[shownContact].Name}</h6> 
                  <h6 className='text-light p-2'>{contacts[shownContact].Phone}</h6> 
                  <h6 className='text-light p-2 d-flex flex-wrap justify-content-center email '>{contacts[shownContact].Email}</h6> 
                  <h6 className='text-light p-2 text-center'>{street}</h6> 
                </div>
                <div className='d-flex align-items-center'>
                  <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-light btn' onClick={decrementShownContact} style={{fontSize:'28px', opacity:'60%'}}/>
                </div>
              </div>
            </div>
            <div className='widget w-100 border rounded' style={{width:'33vw',height:'50vh',  display: 'none'}} id={'widget' + ++widgetIndex} >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.1053798376647!2d28.904937876300256!3d46.99890377114059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97bc2d6d95a11%3A0x181c2d076973a4aa!2zU3RyYWRhIEluZHVzdHJpYWzEgyA3MywgQ2hpyJlpbsSDdSwgTW9sZG92YQ!5e0!3m2!1sen!2s!4v1671382327825!5m2!1sen!2s" 
                  width="600 px" 
                  height="600 px" 
                  style={{borderRadius: '5px', opacity: '90%'}}
                  title='map'
                  className='h-100 w-100'>
              </iframe>
            </div>
          </div>
          <div className='text-center'>
            <FontAwesomeIcon icon={faArrowDown} className='text-light btn mb-2' onClick={downHandler} style={{fontSize:'28px', opacity:'60%'}}/>
          </div>
        </div>
      </div>
    </ReactScrollWheelHandler>
  )
}

export default Main;

