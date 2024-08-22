 import styled from 'styled-components';
import Image from './Image';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #555;
`;

const Card = ({ title, description, imageUrl }) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;