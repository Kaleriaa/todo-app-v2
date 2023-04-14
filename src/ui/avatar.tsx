import React from 'react'
import styled from 'styled-components'

export const Avatar = ({ width, src }: { width: string; src: string }) => {
    return <Photo src={src} width={width} />
}

const Photo = styled.img`
    border-radius: 50%;
`
