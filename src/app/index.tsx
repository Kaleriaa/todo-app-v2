import { Home } from '@pages/home'
import { ToDo } from '@pages/todo'
import { Routes, Route } from 'react-router-dom'
import React from 'react'

export const App: React.FC = () => {
    return (
        <Routes>
            <Route index path="/todo-v2" element={<Home />} />
            <Route path="/todo-v2/todos" element={<ToDo />} />
        </Routes>
    )
}
