import React from 'react'
import styled from 'styled-components'
import { appear } from './appear-animate'

type FormType = {
    getValue?: (value: string) => void
    rows: number
    value?: string
    placeholder?: string
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, FormType>(
    ({ rows, value, getValue, placeholder }, ref) => {
        return (
            <AddForm
                placeholder={placeholder || 'Введите название задачи'}
                name="textarea"
                rows={rows}
                ref={ref}
                value={value}
                onChange={(e) => getValue && getValue(e.target.value)}
            />
        )
    },
)

const AddForm = styled.textarea`
    resize: none;
    width: 100%;
    border: 1px solid var(--light-grey);
    padding: 16px 12px;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    animation: ${appear} 0.4s ease-in;
    &:focus-visible {
        outline: none;
    }
`
