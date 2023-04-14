import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { Card } from '@types'

export const selectToDo = (id: string, tasks: Card[]) =>
    tasks?.filter((item) => item.columnId === id)

export const selectSearch = (state: RootState) => state.headerSlice.searchValue
