import styled from "styled-components"

export const Video = styled.video`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
`

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
`

export const H1 = styled.h1`
    font-size: 5rem;
    border-radius: 10px;
    color: #F8F0DF;
    font-weight: bold;
    @media screen and (max-width: 800px){
        font-size: 4rem;
    }
    @media screen and (max-width: 626px){
        font-size: 3rem;
    }
    @media screen and (max-width: 511px){
        font-size: 2.5rem;
    }
`

export const DivH1 = styled.div`
    background-color: rgba(255, 255, 255,0.2);
    padding: 2rem 4rem;
    border: 2px solid #fff;
    border-radius: 5px;
    transition: all 0.4s;
    
    &:hover{
        box-shadow: 3px 0 30px rgb(0,0,0,0.4);
    }

    @media (max-width: 800px){
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const Button = styled.button`
    position: relative;
    padding: 1rem 2rem;
    border: 2px solid transparent;
    background: transparent;
    font-size: 2rem;
    background-color: rgba(255,255,255, 0.5);
    border-radius: 10px;
    transition: 0.4s all;
    cursor: pointer;

    &::after, &::before{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        transition: all 0.4s, opacity 0.1s 0.4s;
        opacity: 0;
    }

    &::after{
        bottom: 0;
        right: 0;
        border-bottom: 3px solid #F8F0DF;
        border-right: 3px solid #F8F0DF;
    }

    &::before{
        top: 0;
        left: 0;
        border-left: 3px solid #F8F0DF;
        border-top: 3px solid #F8F0DF;
    }

    &:hover::after, &:hover::before{
        width: calc(100% + 3px);
        height: calc(100% + 3px);
        transition: 0.4s, opacity 0.3s;
        opacity: 1;
    }

    &:hover{
        border-radius: 0px;
        background-color: rgba(0,0,0, 0.4);
        color: #F8F0DF;
    }
    @media screen and (max-width: 800px){
        font-size: 1.5rem;
        padding: 0.7rem 1.2rem;
    }
`