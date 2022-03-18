import styled from "styled-components"

const Container = styled.div`
    height: 25px;
    background-color: teal;
    color: #fff;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Test deals! Agregar cualquier texto
    </Container>
  )
}

export default Announcement