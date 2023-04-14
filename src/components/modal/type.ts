import { Card } from '@types'

export type ModalState = {
    onClick: () => void
    color: string
} & Card
