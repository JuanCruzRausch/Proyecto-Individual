import styled from "styled-components";

export const FormFil = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 50px;
    padding: 10px 50px;
    background: #fff;
    border: solid 3px #79B4B7;
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
    width: 100%;
    background: #fff;
    border-radius: 4px;
    margin-top: 15px;
    height: 48px;
    line-height: 45px;
    font-size: 1rem;
    padding: 0 40px 0 10px;
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