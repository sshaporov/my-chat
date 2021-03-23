import {useState} from 'react'
import {sendMessage, isTyping} from 'react-chat-engine'

const MessageForm = (props) => {
    const { chatId, creds} = props
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = value.trim()
    }

    const handlerChange = (e) => {
        setValue(e.target.value)
        isTyping(props, chatId)
    }

    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input
                className='message-input'
                placeholder='Send a message...'
                value={value}
                onChange={handlerChange}
                onSubmit={handleSubmit}
            />
        </form>
    )
}

export default MessageForm