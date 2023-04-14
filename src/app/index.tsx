import { Routes, Route } from 'react-router-dom'
import React from 'react'

const Home = React.lazy(() => import('@pages/home'))
const ToDo = React.lazy(() => import('@pages/todo'))

export const App: React.FC = () => {
    return (
        <React.Suspense>
            <Routes>
                <Route index path="/todo-v2/" element={<Home />} />
                <Route path="/todo-v2/todos" element={<ToDo />} />
            </Routes>
        </React.Suspense>
    )
}
