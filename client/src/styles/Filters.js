import styled from "styled-components";

export const FormFil = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 50px 0 50px;
    padding: 10px 50px;
    background: #fff;
    border: solid 3px #79B4B7;
    box-shadow: 3px 0 30px rgba(0,0,0,0.3);
    border-radius: 10px;
    @media screen and (max-width: 1150px){
        padding: 10px 25px;
        font-size: 0.9rem;
    }
    @media screen and (max-width: 850px){
        display: none;
    }

`

export const FormFilSlide = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    color: #fff;
    box-shadow: 3px 0 30px rgba(0,0,0,0.3);
    border-radius: 10px;
`

export const ButtonFil = styled.button`
    width: 100px;
    height: 30px;
    background: #000;
    color: #fff;
    border: none;
    font-weight: bold;
    margin-top: 30px;
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

export const SelectFil = styled.select`
    width: 200px;
    background: #fff;
    border-radius: 4px;
    margin-top: 15px;
    height: 48px;
    line-height: 45px;
    font-size: 1rem;
    
    transition: 0.3s ease all;
    border: 2px solid #000;
    &:focus{
        border: 2px solid #79B4B7;
        outline: none;
        box-shadow: 3px 0px 30px rgba(0,0,0,0.2);
    }
    &:hover{
        box-shadow: 3px 0px 40px rgba(0,0,0,0.2);
    }

    @media screen and (max-width: 1150px){
        width: 140px;
        height: 35px;
        padding: 0;
        font-size: 0.8rem;
    }

`

export const LabelFil = styled.label`
    font-weight: 1rem;
    cursor: pointer;
`

export const DivSel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const P = styled.p`
    color: #fff;
    display: flex;
    padding: 0 1rem;
    border: 2px solid transparent;
    margin-bottom: 40px;
`