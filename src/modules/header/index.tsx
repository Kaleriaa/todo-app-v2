import React from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import { useDispatch, useSelector } from 'react-redux'
import { searchTasks } from './slice'
import { Search } from '@components/search'
import { Settings } from '@modules/settings'
import { RootState } from '@redux/store'
import { Avatar } from '@ui/avatar'

/**
 * @returns {JSX.Element} return Header
 */
export const AppHeader = React.memo(() => {
    const [theme, setTheme] = React.useState<boolean>(false)
    const [search, setSearch] = React.useState<string>('')
    const dispatch = useDispatch()

    const photoURL = useSelector((state: RootState) => state.userSlice.photoURL)

    const onChangeValue = (req: string) => {
        setSearch(req)
        debounceSearch(req)
    }
    const debounceSearch = React.useCallback(
        debounce((str) => dispatch(searchTasks(str)), 1000),
        [],
    )

    return (
        <Header>
            <Search value={search} getValue={onChangeValue} />
            <Avatar src={photoURL!} width="40" />
            <SettingSvg
                onClick={() => setTheme((prev) => !prev)}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z"></path>
            </SettingSvg>
            {theme && <Settings />}
        </Header>
    )
})

const Header = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 9fr repeat(2, 1fr);
    align-items: center;
    padding: 10px 40px;
    height: 70px;
    border-bottom: 1px solid #cccc;
`

const SettingSvg = styled.svg`
    cursor: pointer;
    position: relative;
    color: var(--dark-grey);
`
