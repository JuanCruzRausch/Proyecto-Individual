import styled from "styled-components"

export const Input = styled.input`
    background: #fff;
    border-radius: 4px;
    height: 30px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: 0.3s ease all;
    border: 2px solid transparent;

    &:focus{
        border: 2px solid #79B4B7;
        outline: none;
    }
    &:hover{
        border: 2px solid #79B4B7;
    }
`

export const Button = styled.button`
    height: 30px;
    margin-left: 10px;
    background: #000;
    color: #fff;
    border: none;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    padding: 5px 10px 10px 10px;
    transition: 0.4s ease all;
    border: 2px solid transparent;
    &:hover{
        box-shadow: 3px 0px 30px rgba(0,0,0, 0.2);
        border: 2px solid #79B4B7;
        background: #FEFBF3;
        color: #79B4B7;
    }
`