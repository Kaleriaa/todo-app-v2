import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '@redux/store'
import { Logout } from '@components/logout'
import { Avatar } from '@ui/avatar'

export const Profile = () => {
    const { displayName, photoURL, email } = useSelector(
        (state: RootState) => state.userSlice,
    )

    return (
        <Wrapper>
            <Avatar src={photoURL!} width="55" />
            <Name>{displayName}</Name>
            <Email>{email}</Email>
            <Logout />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 6px;
`
const Name = styled.span`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
`
const Email = styled.span`
    color: var(--dark-grey);
    font-size: 16px;
    text-align: center;
`
