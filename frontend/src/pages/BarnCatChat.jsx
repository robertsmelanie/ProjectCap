import { useState } from "react";
// import "./BarnCatChat.css"; // Optional styles

const BarnCatChat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("https://your-backend-url.com/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });
            const data = await res.json();
            setMessages([...newMessages, { sender: "cat", text: data.reply }]);
        } catch (error) {
            setMessages([...newMessages, { sender: "cat", text: "Something went wrong 😾" }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="barn-cat-chat">
            <h3>Chat with Dusty 🐱</h3>
            <div className="chat-box">
                {messages.map((msg, i) => (
                    <div key={i} className={`msg ${msg.sender}`}>
                        {msg.sender === "cat" ? "🐾 " : "👤 "} {msg.text}
                    </div>
                ))}
                {loading && <div className="msg cat">Dusty is thinking...</div>}
            </div>
            <div className="input-row">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Say something to Dusty"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};
const res = await fetch("http://localhost:5000/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
});
export default BarnCatChat;