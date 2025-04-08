import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import banner1 from '../../assets/images/Banner/Banner1.png'
import banner3 from '../../assets/images/Banner/Banner3.png'
import './Banner.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
    var settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
    };

    const bannerList = [
        {
            id: 0,
            image: banner1,
            title: "Find Your Style with Trendy Outfits for Every Season",
            des: "Discover fashion that fits your lifestyle. Shop timeless pieces, bold trends, and everyday essentials for every mood and occasion.",
        },
        {
            id: 1,
            image: banner1,
            title: "Shop Exclusive Fashion Deals You Won’t Want to Miss",
            des: "Get the best deals on stylish clothing. New drops weekly, limited-time offers, and rewards that help you save more.",
        },
        {
            id: 2,
            image: banner3,
            title: "Refresh Your Wardrobe with Comfortable, Stylish Everyday Clothing",
            des: "Upgrade your closet with high-quality basics, standout pieces, and comfortable styles made to match your unique personality every day.",
        },
    ];


    return (
        <section className='banner'>
            <Container>
                <Slider {...settings}>
                    {bannerList.map((banner, inx) => {
                        return (
                            <div key={inx} className='banner-item d-flex flex-wrap'>
                                <div className='col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 g-20'>
                                    <Col className='banner-content'>
                                        <Row><h4 className='p-0 headline-title title'>{banner.title}</h4></Row>
                                        <Row><p className='p-0 description'>{banner.des}</p></Row>
                                        <Row><button type='submit' className='shop-now-btn primary-btn'>Shop now</button></Row>
                                        <Row className='banner-statistics'>
                                            <Col className='international-brands'>
                                                <Row className='number'>200+</Row>
                                                <Row className='title'>International brands</Row>
                                            </Col>
                                            <Col className='highquality-product'>
                                                <Row className='number'>2000+</Row>
                                                <Row className='title'>High-quality product</Row>
                                            </Col>
                                            <Col className='happy-customer'>
                                                <Row className='number'>3000+</Row>
                                                <Row className='title'>Happy customer</Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </div>
                                <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                                    <img src={banner.image} alt='' className='banner-image' />
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </Container>
        </section>
    )
}

export default Banner
