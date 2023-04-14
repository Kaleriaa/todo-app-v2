import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Column } from './components/column'
import { ToDoCard } from './components/todo-card'
import { cardLabels, coverColor } from './constant'
import { selectSearch, selectToDo } from './helpers/selectors'
import { fireStore } from 'configs/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Query, collection, orderBy, query } from 'firebase/firestore'
import { Loading } from '@components/loading'
import { Card } from '@types'

export const CardsList = React.memo(() => {
    const resultTasks = useSelector(selectSearch)

    const [tasks, loading, error] = useCollectionData(
        query(collection(fireStore, 'tasks')) as Query<Card>,
    )

    if (error) return <div>error</div>

    return (
        <Wrapper>
            <DndProvider backend={HTML5Backend}>
                {cardLabels.map(({ columnId, title }, i) => {
                    const toDo = selectToDo(columnId, tasks!)
                    return (
                        <Column key={columnId} id={columnId} title={title}>
                            {loading ? (
                                <Loading />
                            ) : (
                                toDo?.map((item) => (
                                    <ToDoCard
                                        color={coverColor[i % 6]}
                                        key={item.id}
                                        {...item}
                                    />
                                ))
                            )}
                        </Column>
                    )
                })}
            </DndProvider>
        </Wrapper>
    )
})

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: calc(100vh - 80px);
    overflow: auto;
    padding: 40px;
    margin-top: 10px;
`
