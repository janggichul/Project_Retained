import './App.css';
import io from 'socket.io-client'
import {useState} from "react"
import Chat from "./Chat.js"

const socket = io.connect("http://localhost:3001")

function App() {
  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")
  const [showChat, setShowChat] = useState(false)

  const joinRoom = () => {
    if(username !== "" && room !== "") {
      socket.emit("join_room", room)
      setShowChat(true)
    }
  }

  return (
    <div className="App"> 
    {!showChat ? (    
    <div className="joinChatContainer">
    <h3>Join A chat</h3>
    <input type="text" placeholder="이름을 입력하세요." onChange={(event) => {
      setUsername(event.target.value)
    }}/>
    <input type="text" placeholder="입장하실 채팅방을 입력하세요"onChange={(event) => {
      setRoom(event.target.value)
    }} />
    <button onClick={joinRoom}>Join A Room</button>
    </div>
      ) : 
    (<Chat socket={socket} username={username} room={room} />
    )}
    </div>
  );
}

export default App;
