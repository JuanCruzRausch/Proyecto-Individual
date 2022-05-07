import styled from "styled-components";
import { NavLink as navlink, Link as link } from 'react-router-dom';

const Nav = styled.nav`
    width: 100%;
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 5px #79B4B7;
    z-index: 10;
    ion-icon{
        display: none;
        color: #fff;
    }
    
    @media screen and (max-width: 850px){
        ion-icon{
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 75%);
            font-size: 1.8rem;
            cursor: pointer;
        }
    }
`

const NavLinkSlide = styled(navlink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 50%;
  white-space: nowrap; 
  cursor: pointer;
  border: 2px solid transparent;
  &.active {
    color: #79B4B7;
    border: 2px solid #79B4B7;
    border-radius: 4px;
  }
`;

const NavLink = styled(navlink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem 1.5rem 1rem;
  margin-bottom: -34px;
  white-space: nowrap; 
  cursor: pointer;
  border: 2px solid transparent;
  &.active {
    color: #79B4B7;
    border: 2px solid #79B4B7;
    border-bottom: 2px solid transparent;
    border-radius: 6px 6px 0 0;
  }
`;

const NavSearch = styled.div`
    display: flex;
    align-items: center;
    padding-left: 140px;
    white-space: nowrap; 
    @media screen and (max-width: 1000px){
        padding-left: 0;
    }
    @media screen and (max-width: 850px){
        margin-right: 100px;
        padding-left: 0;
    }
    @media screen and (max-width: 650px){
        margin-right: 100px;
        padding-left: 0;
        white-space: normal;
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 30px;
    @media screen and (max-width: 850px){
        display: none;
    }
`

const Link = styled(link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    white-space: nowrap; 
    cursor: pointer;
`

const Label = styled.label`
    font-size: 2rem;
    @media screen and (max-width: 850px){
        font-size: 1.5rem;
    }
    @media screen and (max-width: 650px){
        font-size: 1rem;
    }
`

export { Nav, NavLink, NavMenu, NavSearch, Label, Link, NavLinkSlide }