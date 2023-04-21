import React from 'react'
import styled from 'styled-components'
import { ButtonState } from './type'
import { CloseButton } from '@ui/close-button'

/**
 * @type {ButtonState}
 * @returns {JSX.Element} return Button
 */
export const AddButton: React.FC<ButtonState> = ({
    active,
    onAddButton,
    onClose,
}) => {
    return (
        <ButtonWrapper>
            <Button className={active ? 'active' : ''} onClick={onAddButton}>
                + Добавить карточку
            </Button>
            {active && <CloseButton onClose={onClose} />}
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-top: 5px;
`
const Button = styled.button`
    cursor: pointer;
    width: 156px;
    height: 100%;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: var(--medium-grey);
    border: none;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.3s;
    &:hover {
        background-color: var(--medium-grey);
        color: #fff;
    }
    &.active {
        background-color: var(--medium-grey);
        color: #fff;
        &:active {
            background-color: #4b77af;
        }
    }
`
