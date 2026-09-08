import { useState } from "react";
import "./App.css";

const API = "http://localhost:8000/chat";

export default function App() {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    setMsgs((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    }); // 18
    const data = await res.json();
    const botMsg = { role: "bot", text: data.reply };
    setMsgs((prev) => [...prev, botMsg]);
    setLoading(false);
  };
  const onKey = (e) => {
    if (e.key === "Enter") send();
  };

  return (
    // 27
    <div className="wrap">
      <div className="header">
        <img src="/assets/glassheart.png" alt="Logo" className="logo" />
        <h1>AI 챗봇</h1>
      </div>
      <div className="box">
        {msgs.map((m, i) => (
          <div key={i} className={m.role}>
            {m.role === "user" ? (
              <span>🧑</span>
            ) : (
              <img src="/assets/glassheart.png" alt="bot" className="msg-logo" />
            )}
            <p>{m.text}</p>
          </div>
        ))}
        {loading && <p className="loading">생각 중...</p>}
      </div>{" "}
      <div className="input-row">
        {" "}
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={onKey} placeholder="메시지를 입력하세요" /> <button onClick={send}>전송</button>
      </div>{" "}
    </div>
  );
}
