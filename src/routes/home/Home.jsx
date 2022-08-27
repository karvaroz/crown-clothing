import React from 'react'
import CategoryContainer from '../../components/categoryContainer/CategoryContainer';
import { categories } from '../../components/categoryItem/categories';

const Home = () => {
  return <CategoryContainer categories={categories} />;
}

export default Home