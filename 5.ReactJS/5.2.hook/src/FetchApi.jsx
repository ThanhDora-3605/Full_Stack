import { useEffect, useState } from "react";
import { instance } from "./utils/axios";

export default function FetchApi() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await instance.get("/posts");
        setPosts(response.data.posts);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            error.message ||
            "Error fetching posts"
        );
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);
  const handleViewDetail = async (id) => {
    try {
      const response = await instance.get(`/posts/${id}`);
      setSelectedPost(response.data);
      setIsModalOpen(true);
      setTimeout(() => {
        setIsOpening(true);
      }, 10);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCloseModal = () => {
    setIsOpening(false);
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      setSelectedPost(null);
    }, 300);
  };
  const handleBackdropClick = (e) => {
    if (e.target.id === "modalBackdrop") {
      handleCloseModal();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold">Posts</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error: {error}</h2>
      ) : (
        posts.map((post) => (
          <h2 key={post.id} className="p-2">
            {post.title}{" "}
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
              onClick={() => handleViewDetail(post.id)}
            >
              Chi Tiết
            </button>
          </h2>
        ))
      )}
      {isModalOpen && (
        <div
          id="modalBackdrop"
          className={`fixed inset-0 backdrop-blur-sm z-40 flex items-center justify-center transition-opacity duration-300 ${
            isClosing || !isOpening ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleBackdropClick}
        >
          <div
            id="modalContainer"
            className={`relative w-full max-w-2xl mx-4 border border-gray-300 rounded-md transition-all duration-300 ease-out ${
              isClosing || !isOpening
                ? "opacity-0 scale-95 translate-y-4"
                : "opacity-100 scale-100 translate-y-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white p-4 rounded-md w-full">
              <h2 className="text-2xl font-bold text-blue-300">
                {selectedPost?.title}
              </h2>
              <button
                onClick={handleCloseModal}
                className="absolute top-1 right-5 text-gray-500 hover:text-gray-700 transition duration-200 text-2xl"
              >
                &times;
              </button>
              <p className="text-sm text-gray-500">{selectedPost?.body}</p>
            </div>
          </div>
          {loading && <h3>Loading...</h3>}
          {error && <h3>Error: {error}</h3>}
        </div>
      )}
    </div>
  );
}
