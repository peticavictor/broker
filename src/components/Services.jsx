import './Services.css';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

export default function Services() {

    const services = [
        {
            id: 1, 
            image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
            service: 'Import'
        },
        {
            id: 2, 
            image: 'https://images.unsplash.com/photo-1602475827026-f2dbb24abcd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80',
            service: 'Export'
        },
        {
            id: 3, 
            image: 'https://images.unsplash.com/photo-1485575301924-6891ef935dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            service: 'Transit'
        },

    ]
    return (
        // <div className="services d-flex flex-column justify-content-center" id='services'>
            <Slide arrows={null} pauseOnHover={false}>
                {services.map((slideImage, index)=> (
                    <div className="each-slide d-flex flex-column justify-content-center align-items-center" key={index}>
                        <div 
                        style={{ 
                            backgroundSize: `cover`,
                            backgroundImage: `url(${slideImage.image})`,
                            // backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${slideImage.image})`,
                        }} 
                        className='service-image rounded d-flex justify-content-center'
                        >
                            <h2 className='text-light pt-3 opacity-75'>{slideImage.service}</h2>
                        </div>
                    </div>
                ))} 
            </Slide>
        // </div>
    )
}