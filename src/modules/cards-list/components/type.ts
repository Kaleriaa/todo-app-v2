export type ColorToDo = {
    color: string
}

export interface CardState {
    children: JSX.Element[] | null | JSX.Element
    title: string
    id: string
}
