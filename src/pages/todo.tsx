import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '@modules/header/slice'
import { RootState } from '@redux/store'
import { AppHeader } from '@modules/header'
import { CardsList } from '@modules/cards-list/cards-list'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export const ToDo = () => {
    const dispatch = useDispatch()

    const theme = useSelector(
        (state: RootState) => state.headerSlice.themeColor,
    )

    React.useEffect(() => {
        dispatch(changeTheme(localStorage.getItem('theme') || ''))
    }, [])

    return (
        <Container bg={theme}>
            <AppHeader />
            <CardsList />
        </Container>
    )
}

const Container = styled.div<{ bg: string }>`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.bg};
`
