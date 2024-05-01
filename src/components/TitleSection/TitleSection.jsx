import React from 'react';
import { Div, Title, Option } from './TitleSection.styled'
// import { Link } from 'react-router-dom';

const TitleSection = ({title, description}) => {
  return (
    <Div>
        <Title>{title}</Title>
        <Option>{description}</Option>
    </Div>
  );
};

export default TitleSection;