import { Login } from '@components/login'
import React from 'react'
import styled from 'styled-components'

/**
 * Home page interface
 */
const Home = () => {
    return (
        <Container>
            <Title>ToDoS</Title>
            <Login />
        </Container>
    )
}

export default Home

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    gap: 45px;
    place-content: center;
`
const Title = styled.span`
    font-size: 50px;
    text-align: center;
    color: var(--dark-grey);
`
