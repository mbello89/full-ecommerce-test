import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Tittle = styled.h1`
    font-size: 40px;
    font-weight: 500;
    margin-botton: 20px;
`
const Button = styled.button`
    padding: 10px;
    background-color: #fff;
    border-radius: 4px;
    border: 0.5px solid darkgray;
    cursor: pointer;
    margin: 5px;
    font-weight: 300;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Tittle>{item.tittle}</Tittle>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem