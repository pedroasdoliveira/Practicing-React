import { useEffect, useState } from "react";
import { api } from "./api/api";
import "./App.css";
import { PostForm } from "./components/PostForm";
import { PostItem } from "./components/PostItem";
import { Post } from "./types/Post";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadingPosts();
  }, []);

  const loadingPosts = async () => {
    setLoading(true);
    const json = await api.getAllPosts()
    setLoading(false);
    setPosts(json);
  };

  const handleAddPost = async (title: string, body: string) => {
    const json = await api.addNewPost(title, body, 1);

    if (json.id) {
      alert("Post criado com sucesso!");
    }
  };

  return (
    <div className="p-5">
      {loading && <div>Carregando...</div>}

      <PostForm onAdd={handleAddPost} />

      {!loading && posts.length > 0 && (
        <div>
          <p>Total de Posts: {posts.length}</p>
          {posts.map((item, index) => (
            <PostItem key={index} data={item} />
          ))}
        </div>
      )}

      {!loading && posts.length === 0 && (
        <div>
          <p>Não há posts para exibir.</p>
        </div>
      )}
    </div>
  );
}

export default App;
