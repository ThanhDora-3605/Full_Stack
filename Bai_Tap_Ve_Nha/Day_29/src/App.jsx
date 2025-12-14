import React from "react";
import { useEffect, useState } from "react";
import { instance } from "./utils/axios";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [postLoading, setPostLoading] = useState(false);
  const [postError, setPostError] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(null);
  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

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
    setCurrentPostId(id);
    setPostLoading(true);
    setPostError(null);
    setSelectedPost(null);
    setIsModalOpen(true);
    setIsOpening(false);
    setTimeout(() => {
      setIsOpening(true);
    }, 10);
    try {
      const response = await instance.get(`/posts/${id}`);
      await new Promise((resolve) => setTimeout(resolve, 300));
      const postData = response.data;
      if (
        !postData ||
        !postData.title ||
        !postData.body ||
        postData.title.trim() === "" ||
        postData.body.trim() === ""
      ) {
        setPostError(
          "Nội dung bài viết không đầy đủ. Thiếu tiêu đề hoặc nội dung."
        );
        setSelectedPost(null);
      } else {
        setSelectedPost(postData);
      }
    } catch (error) {
      setPostError(
        error.response?.data?.message ||
          error.message ||
          "Error fetching post detail"
      );
    } finally {
      setPostLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsOpening(false);
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      setSelectedPost(null);
      setPostError(null);
      setCurrentPostId(null);
    }, 300);
  };
  const handleBackdropClick = (e) => {
    if (e.target.id === "modalBackdrop") {
      handleCloseModal();
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center mt-10">Blogs</h1>
      <div className="w-full my-2">
        <input
          type="text"
          id="js-search-input"
          className="w-full p-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-gray-500 shadow-lg transition duration-200 hover:bg-white/25 font-semibold select-none outline-none focus:border-blue-500"
          placeholder="Search..."
        />
        <button className="px-6 py-2 rounded-xl bg-blue-500/20 backdrop-blur-md border border-white/30 text-blue-500 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500/25 active:scale-95 font-semibold select-none my-2">
          Thêm mới
        </button>
      </div>

      <div className="w-full flex items-center gap-4">
        <button className="px-6 py-2 rounded-xl bg-yellow-500/20 backdrop-blur-md border border-white/30 text-yellow-500 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-yellow-500/25 active:scale-95 font-semibold select-none">
          Mới nhất
        </button>
        <button className="px-6 py-2 rounded-xl bg-gray-500/20 backdrop-blur-md border border-white/30 text-gray-500 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-gray-500/25 active:scale-95 font-semibold select-none">
          Cũ nhất
        </button>
      </div>

      <div className="w-full p-4">
        <div className="js-posts-container">
          {loading ? (
            <div className="flex flex-col items-center justify-center mt-16">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
              <h2 className="text-2xl font-bold text-blue-500">
                Đang tải dữ liệu...
              </h2>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center mt-16">
              <div className="animate-bounce rounded-full h-16 w-16 flex items-center justify-center mb-4 bg-red-100 border-4 border-red-400 shadow-lg">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v4m0 4h.01m6.938-1.994a9 9 0 10-13.856 0M9 10h.01M15 10h.01"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-red-500 mb-2">
                Đã có lỗi xảy ra!
              </h2>
              <p className="text-lg text-red-400 bg-red-50 px-4 py-2 rounded-md shadow">
                {error}
              </p>
              <button
                className="mt-4 px-4 py-2 rounded-lg bg-red-500 text-white font-semibold shadow transition hover:bg-red-600"
                onClick={() => window.location.reload()}
              >
                Thử lại
              </button>
            </div>
          ) : (
            posts.slice(0, 10).map((post) => (
              <div
                key={post.id}
                className="px-6 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-blue-400 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-white/25 font-semibold p-4 gap-4 flex flex-col justify-between mb-1"
              >
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-gray-500 text-sm">
                  {truncateText(post.body, 150)}
                </p>
                <div className="flex gap-2 mt-4 justify-between">
                  <button
                    className="px-6 py-2 rounded-xl bg-blue-500/20 backdrop-blur-md border border-white/30 text-blue-500 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500/25 active:scale-95 font-semibold select-none"
                    onClick={() => handleViewDetail(post.id)}
                  >
                    Xem chi tiết
                  </button>
                  <div className="flex gap-2">
                    <button className="px-6 py-2 rounded-xl bg-green-500/20 backdrop-blur-md border border-white/30 text-green-500 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-green-500/25 active:scale-95 font-semibold select-none">
                      Sửa
                    </button>
                    <button className="px-6 py-2 rounded-xl bg-red-500/20 backdrop-blur-md border border-white/30 text-red-500 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-red-500/25 active:scale-95 font-semibold select-none">
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {isModalOpen && (
        <div
          id="modalBackdrop"
          className={`fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center transition-opacity duration-300 ${
            isClosing || !isOpening
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
          onClick={handleBackdropClick}
        >
          <div
            id="modalContainer"
            className={`relative w-full max-w-2xl mx-4 rounded-3xl shadow-2xl border-0 overflow-hidden bg-gradient-to-tr from-white via-blue-50 to-blue-100 
              transition-all duration-400 ease-[cubic-bezier(0.68,0,-0.55,1.61)] ${
                isClosing || !isOpening
                  ? "opacity-0 scale-95 translate-y-8"
                  : "opacity-100 scale-100 translate-y-0"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 px-8 pb-8 pt-6 w-full relative">
              {/* <button
                onClick={handleCloseModal}
                aria-label="Đóng"
                className="absolute top-5 right-5 text-gray-500 hover:text-blue-500 transition-colors duration-200 text-3xl rounded-full w-11 h-11 flex items-center justify-center focus:outline-none bg-white shadow hover:bg-blue-50"
                tabIndex={0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button> */}
              <div className="mb-5 flex flex-col items-center">
                {/* <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-200/70 to-purple-200/80 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.828 14.828a4 4 0 01-5.656 0M12 12v.01M18.364 18.364a9 9 0 10-12.728 0M9 10h.01M15 10h.01"
                    />
                  </svg>
                </div> */}
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-purple-500 drop-shadow-sm text-center">
                  {selectedPost?.title}
                </h2>
              </div>
              {postLoading ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="w-10 h-10 border-4 border-blue-300 border-dashed rounded-full animate-spin mb-4"></div>
                  <p className="text-blue-400 font-medium">
                    Đang tải nội dung...
                  </p>
                </div>
              ) : postError ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mb-4 shadow-lg">
                    <svg
                      className="w-10 h-10 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-600 mb-2">
                    Không thể tải nội dung
                  </h3>
                  <p className="text-red-500 text-center mb-4 px-4">
                    {postError}
                  </p>
                  <button
                    onClick={() => {
                      if (currentPostId) {
                        handleViewDetail(currentPostId);
                      }
                    }}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 font-semibold shadow-md"
                  >
                    Thử lại
                  </button>
                </div>
              ) : !selectedPost?.title || !selectedPost?.body ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mb-4 shadow-lg">
                    <svg
                      className="w-10 h-10 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-600 mb-2">
                    Dữ liệu không hợp lệ
                  </h3>
                  <p className="text-red-500 text-center mb-4 px-4">
                    Nội dung bài viết không đầy đủ. Thiếu tiêu đề hoặc nội dung.
                  </p>
                  <button
                    onClick={() => {
                      if (currentPostId) {
                        handleViewDetail(currentPostId);
                      }
                    }}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 font-semibold shadow-md"
                  >
                    Thử lại
                  </button>
                </div>
              ) : (
                <div className="mt-2">
                  <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedPost?.body}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
