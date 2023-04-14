import React from 'react'
import styled from 'styled-components'
import { Google } from './google-icon'
import { useLogin } from './useLogin'
import { auth } from 'configs/firebase'

export const Login = () => {
    const login = useLogin()

    return (
        <LogButton onClick={login}>
            Войти с помощью
            <Google />
        </LogButton>
    )
}

const LogButton = styled.button`
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    border: 2px solid #dfe8e8;
    font-size: 18px;
    padding: 15px;
    color: #bbc2c2;
    background: none;
    border-radius: 5px;
    transition: all 0.5s;
    &:hover {
        background-color: #dfe8e8;
        color: #455658;
    }
`
