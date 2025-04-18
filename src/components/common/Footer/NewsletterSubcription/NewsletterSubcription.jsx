import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './NewsletterSubcription.css'

const NewsletterSubcription = () => {
    return (
        <div className='newsletter-subscription position-relative'>
            <Container className='newsletter-subscription-container position-relative'>
                <div className='newsletter-subscription-content'>
                    <div className='newsletter-title col-12 col-sm-12 col-md-6 col-lg-8'>
                        <p className='text-uppercase fw-bold'>STAY UP TO DATE ABOUT OUR LATEST OFFERS</p>
                    </div>
                    <div className='newsletter-input-container col-12 col-sm-12 col-md-6 col-lg-4'>
                        <div className='newsletter-input-email'>
                            <i className='bi bi-envelope icon'></i>
                            <input type='email' className='newsletter-input' placeholder='Email' />
                        </div>
                        <button className='newsletter-button text-capitalize'>Subscribe to Newsletter</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NewsletterSubcription
