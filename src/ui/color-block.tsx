import React from 'react'
import styled from 'styled-components'

export type ColorState = Record<'color' | 'currentColor', string> & {
    onChangeTheme: (color: string) => void
}

/**
 * @type {ColorState}
 */
export const Colors: React.FC<ColorState> = (props) => {
    return (
        <ColorBlock
            color={props.color}
            onClick={() => props.onChangeTheme(props.color)}
            className={props.currentColor === props.color ? 'active' : ''}
        />
    )
}

const ColorBlock = styled.div<Pick<ColorState, 'color'>>`
    cursor: pointer;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 2px solid #d3d3d3;
    background-color: ${(prop) => prop.color};
    &.active {
        border-color: #000;
    }
`
