import React from 'react'
import { Card, CardLink } from 'react-bootstrap'
import placeholder from '../../assets/images/placeholder-image.jpg'
import './CategoryCard.css'

const CategoryCard = ({ name, image }) => {
    return (
        <CardLink className='category-card' to='/'>
            <Card>
                <Card.Img
                    variant="top"
                    src={image}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = placeholder;
                    }}
                />
                <Card.Body >
                    <Card.Title className='title text-capitalize'>{name}</Card.Title>
                </Card.Body>
            </Card>
        </CardLink>
    )
}

export default CategoryCard
