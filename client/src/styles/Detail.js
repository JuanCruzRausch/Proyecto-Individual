import styled, {css} from "styled-components";

export const DivDetail = styled.div`
    display: flex;
    flex-direction: row;
    margin: 50px 50px;
    background-color: #fff;
    border: 3px solid #79B4B7;
    border-radius: 10px;
    overflow: hidden;
    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`

export const ImgFlag = styled.img`
    width: 100%;
    border-radius: 8px 0 0 0 ;
`

export const DivFlag = styled.div`
    width: 25%;
    border-right: 3px solid #79B4B7;
    background-color: #000;
    color: #fff;
    @media screen and (max-width: 1150px) {
        font-size: 0.8rem;
    }
    @media screen and (max-width: 800px) {
        font-size: 0.8rem;
        width: 100%;
        border-bottom: 3px solid #79B4B7;
    }
`

export const DivInfo = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`

export const ActCard = styled.div`
    width: 150px;
    height: 200px;
    border: 1px solid #000;
    box-shadow: 0 5px 10px rgb(0,0,0,0.6);
    background-color: #fff;
    color: #000;
    transition: 0.3s all;
    h3{
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 1rem;
    }
    &:hover{
        transform: translateY(-3px) translateX(2px);
    }
`

export const ImgAct = styled.img`
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-bottom: 2px solid #79B4B7;
`

export const BodyAct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p{
        font-size: 0.8rem;
        margin: 03px 0 3px 5px;
        font-weight: bold;
    }
`

export const ActContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    grid-template-columns: repeat(
        auto-fit,
        minmax(
            300px,
            1fr
        )
    );
    gap: 10px;
`

export const DifSpan = styled.span`
    border-radius: 2px;
    margin-left: 2px;
    padding: 1px 2px;
    font-weight: 400;
    ${props => props.dif <= 2 && css`
        background-color: #9cff6e;
    `}
    ${props => props.dif > 2 && css`
        background-color: #ffd16e;
    `}
    ${props => props.dif === 5 && css`
        background-color: #ff6e6e;
    `}
`

export const SeasonSpan = styled.span`
    border-radius: 2px;
    margin-left: 2px;
    padding: 1px 2px;
    font-weight: 400;
    ${props => props.season === 'Summer' && css`
        background-color: #ffd374;
    `}
    ${props => props.season === 'Winter' && css`
        background-color: #74a7ff;
    `}
    ${props => props.season === 'Spring' && css`
        background-color: #74ff79;
    `}
    ${props => props.season === 'Autumn' && css`
        background-color: #bd7548
    `}
`

export const Info = styled.div`
    ion-icon{
        font-size: 1.5rem;
    }
`

export const Button = styled.button`
    height: 45px;
    margin: 25px;
    background: #000;
    color: #fff;
    border: none;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    padding: 5px 10px 10px 10px;
    transition: 0.2s ease all;
    border: 2px solid transparent;
    &:hover{
        box-shadow: 3px 0px 30px rgba(0,0,0, 0.2);
        border: 2px solid #79B4B7;
        background: #FEFBF3;
        color: #79B4B7;
    }
    ion-icon{
        font-size: 1.3rem;
    }

    &.delete{
        background: #ffb1b1;
        color: #ff2d2d;
        border: 2px solid #ff2d2d;
        font-weight: bold;
        padding-top: 10px;
    }
    &.edit{
        padding-top: 10px;
    }
    &.edit:hover{
        box-shadow: 3px 0px 30px rgba(0,0,0, 0.2);
        border: 2px solid #79B4B7;
        background: #FEFBF3;
        color: #79B4B7;
    }
`

export const A = styled.a`
    color: #fff;
    text-decoration: none;
    &:hover{
        color: #79B4B7;
    }
`

export const DivCRUD = styled.div`
    display: flex;
    justify-content: center;
`