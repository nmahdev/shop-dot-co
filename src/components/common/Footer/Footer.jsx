import React from 'react'
import NewsletterSubcription from './NewsletterSubcription/NewsletterSubcription'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const companyItems = ['About', 'Features', 'Works', 'Career'];
    const helpItems = ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'];
    const faqItems = ['Account', 'Manage Deliveries', 'Orders', 'Payments'];
    const resourceItems = ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'];

    return (
        <footer>
            <NewsletterSubcription />
            {/* Main Footer */}
            <div className='footer-main-container'>
                <Container>
                    <Row className='footer-main'>
                        <Col>
                            <Row>
                                <NavLink href='/' className='footer-logo'>
                                    <h3 className='text-uppercase'>shop.co</h3>
                                </NavLink>
                            </Row>
                            <Row><p className='footer-description'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p></Row>
                            <div className='footer-socials'>
                                <a href='https://www.facebook.com/nmah2408' target='_blank' className='social-icon-link'>
                                    <i className='bi bi-facebook'></i>
                                </a>
                                <a href='https://www.instagram.com/nmah2408/' target='_blank' className='social-icon-link'>
                                    <i className='bi bi-instagram'></i>
                                </a>
                                <a href='https://www.linkedin.com/in/nguyen-manh-6518202b1/' target='_blank' className='social-icon-link'>
                                    <i className='bi bi-linkedin'></i>
                                </a>
                                <a href='https://github.com/nmahdev' target='_blank' className='social-icon-link'>
                                    <i className='bi bi-github'></i>
                                </a>
                            </div>
                        </Col>
                        <Col>
                            <Row className='footer-category'><h4>Company</h4></Row>
                            {companyItems.map((item, index) => (
                                <Row key={index} className='footer-item'>
                                    <span>{item}</span>
                                </Row>
                            ))}
                        </Col>
                        <Col>
                            <Row className='footer-category'><h4>Help</h4></Row>
                            {helpItems.map((item, index) => (
                                <Row key={index} className='footer-item'>
                                    <span>{item}</span>
                                </Row>
                            ))}
                        </Col>
                        <Col>
                            <Row className='footer-category'><h4>FAQ</h4></Row>
                            {faqItems.map((item, index) => (
                                <Row key={index} className='footer-item'>
                                    <span>{item}</span>
                                </Row>
                            ))}
                        </Col>
                        <Col>
                            <Row className='footer-category'><h4>Resources</h4></Row>
                            {resourceItems.map((item, index) => (
                                <Row key={index} className='footer-item'>
                                    <span>{item}</span>
                                </Row>
                            ))}
                        </Col>
                    </Row>
                    <hr />
                    <Row><p>SHOP.CO ©2025, Nguyen Manh - All rights reserved</p></Row>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
