import {useState} from 'react'
import axios from "axios";

const LoginForm = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = {
            'Project-ID': '90f42a53-f2ea-452d-b29d-1b9963b0cd6c',
            'User-Name': userName,
            'User-Secret': password,
        }
        
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject})
            localStorage.setItem('userName', userName)
            localStorage.setItem('password', password)
            window.location.reload()
        } catch (error) {
            setError('Oops, incorrect credentials!')
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <div className='creds-block'>
                    <div>Use the following creds for Demo:</div>
                    <div>Username: demo</div>
                    <div>Password: 123123</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        value={userName}
                        type='text'
                        onChange={(e) => setUserName(e.target.value)}
                        className='input'
                        placeholder='Username'
                        required
                    />
                    <input
                        value={password}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        className='input'
                        placeholder='Password'
                        required
                    />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm