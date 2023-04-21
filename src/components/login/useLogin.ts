import { useNavigate } from 'react-router-dom'
import { login } from './login'
import { useDispatch } from 'react-redux'
import { loginUser } from '@modules/user/slice'

/**
 * @returns {Promise<void>} return func for login
 */
export const useLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return async () => {
        const { uid, displayName, photoURL, email } = await login()
        dispatch(loginUser({ uid, displayName, photoURL, email }))
        navigate('/todo-v2/todos')
    }
}
