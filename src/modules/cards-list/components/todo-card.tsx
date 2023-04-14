import React from 'react'
import styled from 'styled-components'
import { Card } from '../../../@types'
import { ColorToDo } from './type'
import { useDrag } from 'react-dnd/dist/hooks'
import { DragSourceMonitor } from 'react-dnd/dist/types'
import { Cover } from '@ui/cover'
import { Modal } from '@components/modal'
import { doc, updateDoc } from 'firebase/firestore'
import { fireStore } from 'configs/firebase'

export const ToDoCard: React.FC<Card & ColorToDo> = (props) => {
    const [visible, setVisible] = React.useState<boolean>(false)

    const [_, drag] = useDrag({
        type: 'Task',
        item: { id: props.id },
        canDrag: !visible,
        end: async (_, monitor: DragSourceMonitor) => {
            const dropResult = monitor.getDropResult<{ name: string }>()
            if (dropResult) {
                await updateDoc(doc(fireStore, 'tasks', props.id), {
                    columnId: dropResult.name,
                })
            }
        },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const onCloseModal = () => {
        setVisible(false)
    }

    return (
        <CardBlock ref={drag}>
            <Cover color={props.color} height="32px" />
            <Title onClick={() => setVisible(true)}>{props.title}</Title>
            <Author src={props.photoURL} width="30" />
            {visible ? (
                <Modal {...props} color={props.color} onClick={onCloseModal} />
            ) : null}
        </CardBlock>
    )
}

const CardBlock = styled.div`
    position: relative;
    min-height: 106px;
    background: #fff;
    margin-bottom: 12px;
    word-wrap: break-word;
    border: 1px solid #e5e5e5;
`
const Title = styled.span`
    cursor: pointer;
    position: absolute;
    top: 45px;
    left: 15px;
    font-size: 16px;
    color: #000;
    font-weight: 500;
`
const Author = styled.img`
    position: absolute;
    bottom: 10px;
    right: 15px;
    border-radius: 50%;
`
