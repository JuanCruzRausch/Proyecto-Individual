import styled from "styled-components";

export const CardCont = styled.div`
    display: grid;
    margin: 20px 50px;
    padding: 50px;
    background: #fff;
    border: solid 3px #79B4B7;
    box-shadow: 3px 0 30px rgba(0,0,0,0.3);
    place-items: center;
    border-radius: 10px;
    grid-template-columns: repeat(
        auto-fit,
        minmax(
            300px,
            1fr
        )
    );
    gap: 20px;
`

export const Button = styled.button`
    border: 1px solid transparent;
    color: #fff;
    background: #000;
    margin: 1px;
    border-radius: 4px;
    padding: 5px 10px;
    transition: 0.3s all;
    &:hover{
        border: 1px solid #79B4B7;
        color: #79B4B7;
        background: #FEFBF3;
    }
`

export const DivPag = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 50px;
    padding: 15px 50px;
    background: #fff;
    border: solid 3px #79B4B7;
    box-shadow: 3px 0 30px rgba(0,0,0,0.3);
    border-radius: 10px;
`