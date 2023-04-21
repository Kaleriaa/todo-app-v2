import { RootState } from '@redux/store'
import { Card } from '@types'

/**
 * @param {string} id
 * @param {Card[]} tasks
 * @returns {Card[]} return array of filtered Cards
 */
export const selectToDo = (id: string, tasks: Card[]) =>
    tasks?.filter((item) => item.columnId === id)

export const selectSearch = (state: RootState) => state.headerSlice.searchValue
