import React, {useState} from "react"
import { ArrowLeft, ArrowRight } from "@mui/icons-material"
import styled from "styled-components"
import { sliderItems } from "./Data"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px" };
    right: ${props => props.direction === "right" && "10px" };
    cursor: pointer;
    opacity: 0.7;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 0.6s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`


const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg}
`
const ImgContainer = styled.div`
    height: 80%;
    margin-left: 70px;
    flex: 1;
`
const Image = styled.img`
    height: 100%
`
const InfoContainer = styled.div`
    padding: 50px;
    flex: 1;
    margin-right: 30px;
`
const Tittle = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 25px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    background-color: transparent;
    border-radius: 4px;
    border: 0.5px solid darkgray;
    cursor: pointer;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {

        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }   
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }  
    };

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeft/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item=>(  
            <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Tittle>{item.tittle}</Tittle>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOW ME</Button>
                </InfoContainer>
             </Slide>
             ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider