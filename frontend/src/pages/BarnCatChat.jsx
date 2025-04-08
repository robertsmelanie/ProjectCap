

// export default BarnCatChat;
import { useState, useEffect } from "react";
// import "./BarnCatChat.css"; // Optional styles

const BarnCatChat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    // Add welcome message on component mount
    useEffect(() => {
        setMessages([{ sender: "cat", text: "Meow! I'm Tiger. What can I help you with today?" }]);
    }, []);

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userInput = input;
        const newMessages = [...messages, { sender: "user", text: userInput }];
        setMessages(newMessages);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("http://localhost:3001/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userInput }),
            });

            if (!res.ok) {
                throw new Error(`Server responded with status: ${res.status}`);
            }

            const data = await res.json();
            setMessages([...newMessages, { sender: "cat", text: data.reply }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages([
                ...newMessages,
                { sender: "cat", text: `Something went wrong 😾 (${error.message || "Unknown error"})` }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className="barn-cat-chat">
            <h3>Chat with Tiger 🐱</h3>
            <div className="chat-box">
                {messages.map((msg, i) => (
                    <div key={i} className={`msg ${msg.sender}`}>
                        {msg.sender === "cat" ? "🐾 " : "👤 "} {msg.text}
                    </div>
                ))}
                {loading && <div className="msg cat">Tiger is thinking...</div>}
            </div>
            <div className="input-row">
                <input
                    type="text"
                    id="sayHi"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Say something to Tiger"
                    disabled={loading}
                />
                <button onClick={sendMessage} disabled={loading || !input.trim()}>
                    {loading ? "Sending..." : "Send"}
                </button>
            </div>
        </div>
    );
};

export default BarnCatChat;