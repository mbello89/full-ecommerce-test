import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";


const Container = styled.div`
    flex: 1;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative;
`
const Circle = styled.div`
   
    boder-radius: 50%;
    background-color: #fff;
    position: absolute;
`
const Image = styled.img`
    height: 100%;
    z-index: 2;
`
const Info = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;

    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Icon = styled.div`
    widht: 45px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product