export type Card = Record<
    'columnId' | 'id' | 'title' | 'date' | 'displayName' | 'photoURL',
    string
> & {
    text?: string
}

export type User = Record<
    'uid' | 'displayName' | 'email' | 'photoURL',
    string | null
>
