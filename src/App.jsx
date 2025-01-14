import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import './App.css';
import Post from './Post';

function App() {
  const posts = [
    { id: 1, title: "10 Tips for a Productive Morning", content: "How to start your morning right to ensure a productive day: from healthy habits to planning and motivation." },
    { id: 2, title: "Why Reading Books is Important", content: "Reading develops imagination, improves focus, and opens up the world. I'll share books that changed my life." },
    { id: 3, title: "How to Manage Your Time Effectively", content: "Discover time management techniques that helped me become more organized and productive." },
    { id: 4, title: "My Journey to a Healthy Lifestyle", content: "A story about how I started exercising, eating healthily, and improved my overall well-being." },
  ];

  const messages = [
    { id: 1, sender: "Alice", content: "Hey, let's catch up this weekend!" },
    { id: 2, sender: "Bob", content: "Did you get my email about the meeting?" },
    { id: 3, sender: "Charlie", content: "Are we still on for the dinner tonight?" },
  ];

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Feed</Link></li>
            <li><Link to="/messages">Messages</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Feed posts={posts} />} />
          <Route path="/messages" element={<Messages messages={messages} />} />
          <Route path="/messages/:id" element={<MessageDetail messages={messages} />} />
        </Routes>
      </div>
    </Router>
  );
}

function Feed({ posts }) {
  return (
    <div>
      <h1>News Feed</h1>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

function Messages({ messages }) {
  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <Link to={`/messages/${message.id}`}>{message.sender}: {message.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MessageDetail({ messages }) {
  const { id } = useParams();
  const message = messages.find(msg => msg.id === parseInt(id));

  if (!message) {
    return <div>Message not found!</div>;
  }

  return (
    <div>
      <h1>Message Detail</h1>
      <p><strong>From:</strong> {message.sender}</p>
      <p><strong>Message:</strong> {message.content}</p>
      <Link to="/messages">Back to messages</Link>
    </div>
  );
}

export default App;
