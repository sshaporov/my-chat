import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'
import LoginForm from "./components/LoginForm";

const App = () => {

    if(!localStorage.getItem('userName')) return <LoginForm/>

  return (
      <ChatEngine
          height='100vh'
          projectID='90f42a53-f2ea-452d-b29d-1b9963b0cd6c'
          userName={localStorage.getItem('userName')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps}/> }
      />
  )
}

export default App;
