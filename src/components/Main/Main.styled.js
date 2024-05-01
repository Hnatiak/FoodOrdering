import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Section = styled.section`
    display: grid;
    grid-template-columns: .55fr .6fr;
    align-items: center;
    margin-top: 50px;
`;

export const DivOne = styled.div`
    padding: 80px 0px;
`;

export const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
`;

export const Description = styled.p`
    margin-top: 40px;
    font-weight: 500;
`;

export const Icon = styled(FontAwesomeIcon)`
    margin-bottom: -3px;
    height: 20px;
`;

export const DivBtnSection = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 50px;
`;


export const Button = styled.button`
    display: flex;
    align-items: center;
    color: white;
    background: red;
    padding: 12px 24px 12px 24px;
    border-radius: 50px;
    gap: 10px;
    text-transform: uppercase;
`;

export const ButtonSecond = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    color: gray;
    font-weight: bold;
`;

export const DivSecond = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`;


export const Photo = styled.img`
    contain: layout;
    object-fit: contain;
`;