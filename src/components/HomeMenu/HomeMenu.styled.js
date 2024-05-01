import styled from "styled-components";

export const Section = styled.section``;

export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.h3`
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
`;

export const Option = styled.h2`
    color: red;
    font-weight: bold;
    font-size: 42px;
    font-style: italic;
`;

export const SalladDiv = styled.div`
    position: relative;
    left: 0;
    right: 0px;
`;

export const SalladDivOne = styled.div`
    position: absolute;
    right: 0px;
    top: -100px;
`;

export const SalladDivTwo = styled.div`
    position: absolute;
    left: 0px;
    top: -100px;
`;

export const Image = styled.img`
    contain: layout;
    object-fit: contain;
    height: 400px;
`;

export const MenuDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;

    position: relative;
    z-index: 1;

    padding: 50px 50px;
`;


export const PizzaItem = styled.div`
    // background: #b7b7b7;
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