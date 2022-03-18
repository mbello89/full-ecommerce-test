import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';


// Styled components
const Container = styled.div `
    height: 60px;
`
const Wrapper = styled.div `
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

// --------- left-nav -----------
const Left = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span `
    font-size: 16px;
    cursor: pointer;
`
const SearchContainer = styled.div `
    border: 0.5px solid darkgray;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-left: 16px;
`
const Input = styled.input`
    border: none;
`
// --------- center-nav -----------
const Center = styled.div `
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`

// --------- right-nav -----------
const Right = styled.div `
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
`
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <SearchIcon style={{color:"gray", fontSize:18 }}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    MA.BE
                </Logo>
            </Center>
            <Right>
                <MenuItems>REGISTER</MenuItems>
                <MenuItems>SING IN</MenuItems>
                <MenuItems>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItems>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar