import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderComponent = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled(Link)`
    color: #f13a01;
    font-weight: bold;
    font-size: 1.5rem;
`;

export const Nav = styled.nav`
    display: flex;
    gap: 28px;
    color: gray;
    font-weight: bold;
    align-items: center;
`;

export const NavRegister = styled.nav`
    display: flex;
    font-weight: bold;
    align-items: center;
`;

export const NavItem = styled(Link)`
    color: dark;
    padding: 2px 24px 2px 24px;
    border-radius: 50px;
`;

export const SpecialNavItem = styled(Link)`
    color: white;
    background: red;
    padding: 2px 24px 2px 24px;
    border-radius: 50px;
`;

// export const SpecialNavItem = styled.a`
//     color: white;
//     background: red;
//     padding: 2px 24px 2px 24px;
//     border-radius: 50px;
// `;