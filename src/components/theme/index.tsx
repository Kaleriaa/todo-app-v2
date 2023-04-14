import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { Colors as ColorBlock } from '@ui/color-block'
import { widgets } from './colors-widget'
import { changeTheme } from '@modules/header/slice'
import styled from 'styled-components'

export const Theme = () => {
    const dispatch = useDispatch()

    const currentColor = useSelector(
        (state: RootState) => state.headerSlice.themeColor,
    )
    const onChangeColor = (color: string) => {
        localStorage.setItem('theme', color)
        dispatch(changeTheme(color))
    }

    return (
        <Colors>
            {widgets.map((item) => {
                return (
                    <ColorBlock
                        key={item}
                        currentColor={currentColor}
                        onChangeTheme={onChangeColor}
                        color={item}
                    />
                )
            })}
        </Colors>
    )
}

const Colors = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-between;
`
