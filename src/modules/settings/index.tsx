import React from 'react'
import styled from 'styled-components'
import { appear } from '@ui/appear-animate'
import { Profile } from '@components/user-profile'
import { Theme } from '@components/theme'

export const Settings: React.FC = () => {
    return (
        <Widget>
            <Profile />
            <Theme />
        </Widget>
    )
}

const Widget = styled.div`
    position: absolute;
    right: 36px;
    top: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index: 3;
    gap: 10px;
    padding: 13px 16px;
    width: fit-content;
    height: fit-content;
    border-radius: 5px;
    background: #fffbfb;
    animation: ${appear} 0.4s ease-in;
    -webkit-box-shadow: -2px 15px 37px 11px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: -2px 15px 37px 11px rgba(34, 60, 80, 0.2);
    box-shadow: -2px 15px 37px 11px rgba(34, 60, 80, 0.2);
`
