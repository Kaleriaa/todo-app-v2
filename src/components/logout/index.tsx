import React from 'react'
import styled from 'styled-components'
import { auth } from 'configs/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {
    const navigate = useNavigate()

    const logout = () => {
        signOut(auth)
        navigate('/todo-v2')
    }

    return <LogoutBtn onClick={logout}>Выйти</LogoutBtn>
}
const LogoutBtn = styled.button`
    cursor: pointer;
    font-size: 16px;
    background-color: #fff;
    border-radius: 5px;
    border: none;
    padding: 8px;
    color: var(--dark-grey);
    transition: all 0.4s;
    &:hover {
        background-color: var(--light-grey);
    }
`
