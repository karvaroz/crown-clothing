import React from 'react'
import CategoryItem from '../categoryItem/CategoryItem';
import "./categoryContainerStyle/categoryContainer.styles.css"

const CategoryContainer = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default CategoryContainer