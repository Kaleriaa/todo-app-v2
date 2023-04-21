import React from 'react'
import styled from 'styled-components'
import { SearchState } from './type'

/**
 * @type {SearchState}
 * @param props
 * @returns
 */
export const Search: React.FC<SearchState> = (props) => {
    return (
        <Wrapper>
            <SearchIcon
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"></path>
                <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"></path>
            </SearchIcon>

            <SearchPanel
                value={props.value}
                onChange={(e) => props.getValue(e.target.value)}
            />
        </Wrapper>
    )
}

const SearchPanel = styled.input`
    width: 270px;
    height: 40px;
    padding: 10px 34px;
    font-size: 15px;
    background: var(--light-grey);
    border-radius: 5px;
    border: none;
    transition: all 0.4s;
    &:focus {
        outline: none;
        width: 300px;
        background: #fff;
    }
`
const SearchIcon = styled.svg`
    position: absolute;
    left: 13px;
    top: 11px;
    opacity: 0.2;
`
const Wrapper = styled.div`
    position: relative;
`
