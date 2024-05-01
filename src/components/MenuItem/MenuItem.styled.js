import styled from "styled-components";

export const Section = styled.section``;

export const MenuDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
    position: relative;
    z-index: 1;
    padding: 50px 50px;
`;


export const PizzaItem = styled.div`
    background: linear-gradient(to bottom, transparent, #b7b7b7);
    padding: 40px;
    border-radius: 25px;
    text-align: center;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
    }
`;

export const PizzaTitle = styled.h4`
    font-weight: bold;
    margin: 20px 0px;
`;

export const PizzaDescription = styled.h4`
    color: black;
    font-weight: 500;
    font-size: small;
`;

export const PizzaBtn = styled.button`
    background-color: red;
    padding: 10px 20px;
    color: white;
    border-radius: 50px;
    margin-top: 15px;
`;