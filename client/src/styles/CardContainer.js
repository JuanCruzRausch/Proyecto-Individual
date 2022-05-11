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
    border-radius: 15px;
    padding: 5px 10px;
    transition: 0.3s all;
    margin: 0 5px;
    &:hover{
        border: 1px solid #79B4B7;
        color: #79B4B7;
        background: #FEFBF3;
    }
    ion-icon{
        font-size: 1rem;
        padding-top: 2px;
    }
`

export const DivPag = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    
`

export const DivPages = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 50px;
    padding: 15px 50px 0 50px;
`

export const P = styled.p`
    font-size: 0.95rem;
    font-weight: bold;
    span{
        color: #79B4B7;
    }
`

export const ImgNotFound = styled.img`
    width: 55%;
`

export const PNotFound = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
`