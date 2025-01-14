import Post from './Post';
import './App.css';

function App() {
  const posts = [
    { id: 1, title: "10 Tips for a Productive Morning", content: "How to start your morning right to ensure a productive day: from healthy habits to planning and motivation." },
    { id: 2, title: "Why Reading Books is Important", content: "Reading develops imagination, improves focus, and opens up the world. I'll share books that changed my life." },
    { id: 3, title: "How to Manage Your Time Effectively", content: "Discover time management techniques that helped me become more organized and productive." },
    { id: 4, title: "My Journey to a Healthy Lifestyle", content: "A story about how I started exercising, eating healthily, and improved my overall well-being." },
  ];

  return (
    <div>
      <h1>News Feed</h1>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default App;
