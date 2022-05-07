import styled from "styled-components";

export const CardFB = styled.div`
    position: relative;
    width: 300px;
    height: 400px;

    &:hover  .front{
        transform: perspective(600px) rotateY(180deg);
    }
    &:hover .back{
        transform: perspective(600px) rotateY(0deg);
    }
`

export const FrontDiv = styled.div`
    transform: perspective(600px) rotateY(0deg);
    box-shadow: 0 5px 10px rgb(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img{
        flex-shrink: 0;
        min-width: 100%;
        min-height: 100%; 
        transform: rotate(90deg);
    }
    h3{
        position: absolute;
        font-weight: bold;
        color: #FEFBF3;
        width: 100%;
        height: 100%;
        line-height: 45px;
        background: rgba(0,0,0,0.3);
        text-align: center;
    }
    &.face{
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 5px;
        overflow: hidden;
        transition: 0.8s;
    }
`

export const BackDiv = styled.div`
    transform: perspective(600px) rotateY(180deg);
    box-shadow: 0 5px 10px rgb(0,0,0,0.6);
    background-color: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    
    p{
        font-size: 0.8rem;
        color: #aaa;
    }
    button{
        background-color: #79B4B7;
        color: #fff;
        border: none;
        padding: 5px 5px;
        transition: all 0.5s;
        cursor: pointer;
        width: 30%;
        
    }
    button:hover{
        background-color: #91dbdd;
        width: 100%;
    }
    &.face{
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 5px;
        overflow: hidden;
        transition: 0.8s;
    }
`

export const ImgDiv = styled.div`
    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-bottom: 4px solid #79B4B7;
    }
`
