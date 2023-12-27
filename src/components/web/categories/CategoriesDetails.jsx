import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%;

  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

const ProductDetails = styled.div`
  padding: 20px;
`;

const ProductTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
`;

const ProductDescription = styled.p`
  color: #555;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #4caf50; /* Green color for the price */
  font-weight: bold;
  margin-bottom: 10px;
`;

const DetailsLink = styled(Link)`
  display: inline-block;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

function CategoriesDetails() {
  const { categoryId } = useParams();

  const getCategoryDetails = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryId}`);
    return data.products;
  };

  const { data, isLoading } = useQuery('categoryDetails', getCategoryDetails);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Heading>Explore Our Products</Heading>
      <ProductsGrid>
        {data.length ? (
          data.map((product) => (
            <ProductCard key={product._id}>
              <ProductImage src={product.mainImage.secure_url} alt={product.name} />
              <ProductDetails>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>${Number(product.price).toFixed(2)}</ProductPrice>
                {/* Assuming the price is a number, format it to two decimal places */}
                <DetailsLink to={`/product/${product._id}`}>Details</DetailsLink>
              </ProductDetails>
            </ProductCard>
          ))
        ) : (
          <h2>No products available in this category.</h2>
        )}
      </ProductsGrid>
    </Container>
  );
}

export default CategoriesDetails;
