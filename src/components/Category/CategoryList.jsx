import React, { useEffect, useState } from 'react'
import './Category.css'
import CategoryCard from '../Card/CategoryCard';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    return (
        <div className='category container row'>
            <div className='category-title row-12 row-sm-12 row-md-12 row-lg-12 row-xl-12 row'>
                <h4 className='text-uppercase p-0'>Category</h4>
            </div>
            {categories.map((category) => (
                <div className="category-card col col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2" key={category.id}>
                    <CategoryCard id={category.id} name={category.name} image={category.image} />
                </div>
            ))}
        </div>
    )
}

export default CategoryList
