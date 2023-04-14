import React from 'react'
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { AddButton } from '@components/card-button'
import { TextArea } from '@ui/textarea'
import { setDoc, doc } from 'firebase/firestore'
import { CardState } from './type'
import { useDrop, DropTargetMonitor } from 'react-dnd'
import { fireStore } from 'configs/firebase'
import { RootState } from '@redux/store'

export const Column: React.FC<CardState> = (props) => {
    const [active, setActive] = React.useState<boolean>(false)
    const textAreaRef = React.useRef<HTMLTextAreaElement | null>(null)

    const { displayName, photoURL } = useSelector(
        (state: RootState) => state.userSlice,
    )

    const [_, drop] = useDrop({
        accept: 'Task',
        drop: () => ({ name: props.id }),
        collect: (monitor: DropTargetMonitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    const onClose = () => {
        setActive(false)
    }

    const onAddCard = async () => {
        setActive(true)
        const date = new Date().toLocaleString('ru-RU', { dateStyle: 'long' })
        const id = nanoid()
        if (textAreaRef.current) {
            await setDoc(doc(fireStore, 'tasks', id), {
                columnId: props.id,
                title: textAreaRef.current?.value,
                id,
                date,
                displayName,
                photoURL,
            }),
                setActive(false)
        }
    }

    return (
        <CardBlock ref={drop}>
            <Title>{props.title}</Title>
            {props.children}
            {active && <TextArea rows={2} ref={textAreaRef} />}
            <AddButton
                active={active}
                onAddButton={onAddCard}
                onClose={onClose}
            />
        </CardBlock>
    )
}
const CardBlock = styled.div`
    height: fit-content;
    padding: 16px 12px;
    width: 300px;
    border-radius: 5px;
    background: #f8f8f8;
    border: 1px solid #cccccc;
    box-shadow: 1.5px 4px 10px rgba(0, 0, 0, 0.15);
`
const Title = styled.div`
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 500;
    color: #000;
`
