const API_BASE = "https://dummyjson.com";

//render posts to DOM
const renderPosts = (posts) => {
  const postsListEl = document.querySelector(".js-posts-container");
  const sortedPosts = [...posts];
  if (query.sort === "newest") {
    sortedPosts.sort((a, b) => b.id - a.id);
  } else if (query.sort === "oldest") {
    sortedPosts.sort((a, b) => a.id - b.id);
  }
  const postsHTML = sortedPosts
    .map((post) => {
      return ` <div
                    class="px-6 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-blue-400 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-white/25 font-semibold bg-white p-4 gap-4 border-gray-300 flex flex-col justify-between mb-1">
                    <div class="flex flex-col gap-2 w-full">
                        <h2 class="text-2xl font-bold">${post.title}</h2>
                        <p class="text-gray-500 text-sm">${post.body}</p>
                    </div>
                    <div class="flex gap-2 mt-4 justify-between">
                        <button class="px-6 py-2 rounded-xl bg-blue-400/20 backdrop-blur-md border border-white/30 text-blue-400 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-blue-400/25 active:scale-95 font-semibold select-none js-view-detail" data-post-id="${post.id}">Xem chi tiết</button>
                        <div class="flex gap-2">
                            <button class="px-6 py-2 rounded-xl bg-green-500/20 backdrop-blur-md border border-white/30 text-green-500 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-green-500/25 active:scale-95 font-semibold select-none js-edit-post" data-post-id="${post.id}">Sửa</button>
                            <button class="px-6 py-2 rounded-xl bg-red-500/20 backdrop-blur-md border border-white/30 text-red-500 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-red-500/25 active:scale-95 font-semibold select-none js-delete-post" data-post-id="${post.id}">Xóa</button>
                        </div>
                    </div>
                </div> `;
    })
    .join("");
  postsListEl.innerHTML = postsHTML;
};

const setError = (message) => {
  const postsListEl = document.querySelector(".js-posts-container");
  postsListEl.innerHTML = `<span class="text-center text-red-500">${message}</span>`;
};

const setloading = (status) => {
  const loadingEl = document.querySelector(".js-loading-state");
  loadingEl.innerHTML = status
    ? `<span class="animate-spin rounded-full h-8 w-8 border-gray-900">Loading...</span>`
    : "";
};

//gọi api để lấy dữ liệu
const fetchPosts = async () => {
  try {
    console.log(query);

    // add loading state
    setloading(true);
    let url = `${API_BASE}/posts?limit=${query.limit}&skip=${query.skip}`;
    if (query.search) {
      url = `${API_BASE}/posts/search?q=${query.search}&limit=${query.limit}&skip=${query.skip}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    renderPosts(data.posts);
    renderPagination(data.total, data.limit, data.skip);
    // console.log(data.posts);
  } catch (error) {
    setError("Lỗi khi lấy dữ liệu");
    // console.log(error);
  } finally {
    // remove loading state
    setloading(false);
  }
};

const query = {
  limit: 10,
  skip: 0,
  sort: "newest"
};

const debounce = (callback, timeout = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

const addSearchEvent = () => {
  const searchInputEl = document.querySelector("#js-search-input");
  searchInputEl.addEventListener(
    "input",
    debounce((e) => {
      const value = e.target.value;
      // call api với keyword là value của input
      query.search = value;
      fetchPosts();
    })
  );
};

const openModal = (callback) => {
  if (typeof callback !== "function") {
    return;
  }
  const modalContainerEl = document.querySelector("#modalContainer");
  const titleEl = document.querySelector(".js-title");
  const bodyEl = document.querySelector(".js-body");
  modalContainerEl.classList.remove("hidden");
  const options = callback();
  titleEl.innerText = options.title;
  bodyEl.innerHTML = options.body;
};

const closeModal = () => {
  const modalContainerEl = document.querySelector("#modalContainer");
  const titleEl = document.querySelector(".js-title");
  const bodyEl = document.querySelector(".js-body");
  modalContainerEl.classList.add("hidden");
  titleEl.innerText = "";
  bodyEl.innerText = "";
};

const renderPagination = (total, limit, skip) => {
  const paginationContainer = document.querySelector("#paginationContainer");
  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.floor(skip / limit) + 1;
  let paginationHTML = "";
  for (let i = 1; i <= totalPages && i <= 10; i++) {
    paginationHTML += `<button class="js-page-btn px-6 py-2 rounded-xl ${
      i === currentPage
        ? "bg-blue-500 text-white"
        : "bg-blue-500/20 backdrop-blur-md border border-white/30 text-blue-500"
    } shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500/25 active:scale-95 font-semibold select-none" data-page="${i}">${i}</button>`;
  }
  paginationContainer.innerHTML = paginationHTML;
};

const addPaginationEvent = () => {
  const paginationContainer = document.querySelector("#paginationContainer");
  paginationContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("js-page-btn")) {
      const page = parseInt(e.target.dataset.page);
      query.skip = (page - 1) * query.limit;
      fetchPosts();
    }
  });
};

const addSortEvent = () => {
  const newestBtn = document.querySelector(".js-sort-newest");
  const oldestBtn = document.querySelector(".js-sort-oldest");
  newestBtn.addEventListener("click", () => {
    query.sort = "newest";
    query.skip = 0;
    fetchPosts();
  });
  oldestBtn.addEventListener("click", () => {
    query.sort = "oldest";
    query.skip = 0;
    fetchPosts();
  });
};

const openFormModal = (post = null) => {
  const modalContainerEl = document.querySelector("#formModalContainer");
  const titleInput = document.querySelector("#formTitle");
  const bodyInput = document.querySelector("#formBody");
  const formTitle = document.querySelector("#formModalTitle");
  if (post) {
    formTitle.innerText = "Sửa bài viết";
    titleInput.value = post.title;
    bodyInput.value = post.body;
    document.querySelector("#formModalContainer").dataset.postId = post.id;
  } else {
    formTitle.innerText = "Thêm bài viết mới";
    titleInput.value = "";
    bodyInput.value = "";
    document.querySelector("#formModalContainer").dataset.postId = "";
  }
  modalContainerEl.classList.remove("hidden");
};

const closeFormModal = () => {
  const modalContainerEl = document.querySelector("#formModalContainer");
  modalContainerEl.classList.add("hidden");
  document.querySelector("#formTitle").value = "";
  document.querySelector("#formBody").value = "";
};

const addFormEvent = () => {
  const formEl = document.querySelector("#postForm");
  formEl.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.querySelector("#formTitle").value;
    const body = document.querySelector("#formBody").value;
    const postId = document.querySelector("#formModalContainer").dataset.postId;
    try {
      setloading(true);
      if (postId) {
        const response = await fetch(`${API_BASE}/posts/${postId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        });
        await response.json();
      } else {
        const response = await fetch(`${API_BASE}/posts/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body, userId: 1 }),
        });
        await response.json();
      }
      closeFormModal();
      fetchPosts();
    } catch (error) {
      setError("Lỗi khi lưu bài viết");
    } finally {
      setloading(false);
    }
  });
};

const addModalEvent = () => {
  const postsContainerEl = document.querySelector(".js-posts-container");
  const modalContainerEl = document.querySelector("#modalContainer");
  const formModalContainerEl = document.querySelector("#formModalContainer");

  postsContainerEl.addEventListener("click", async (e) => {
    if (e.target.classList.contains("js-view-detail")) {
      const postId = e.target.dataset.postId;
      if (postId) {
        const modalContainerEl = document.querySelector("#modalContainer");
        const titleEl = document.querySelector(".js-title");
        const bodyEl = document.querySelector(".js-body");
        modalContainerEl.classList.remove("hidden");
        titleEl.innerText = "Loading...";
        try {
          setloading(true);
          const response = await fetch(`${API_BASE}/posts/${postId}`);
          const data = await response.json();
          titleEl.innerText = data.title;
          bodyEl.innerText = data.body;
        } catch (error) {
          setError("Lỗi khi tải chi tiết bài viết");
          closeModal();
        } finally {
          setloading(false);
        }
      }
    }
    if (e.target.classList.contains("js-edit-post")) {
      const postId = e.target.dataset.postId;
      if (postId) {
        try {
          setloading(true);
          const response = await fetch(`${API_BASE}/posts/${postId}`);
          const data = await response.json();
          openFormModal(data);
        } catch (error) {
          setError("Lỗi khi tải bài viết");
        } finally {
          setloading(false);
        }
      }
    }
    if (e.target.classList.contains("js-delete-post")) {
      const postId = e.target.dataset.postId;
      if (postId && confirm("Bạn có chắc chắn muốn xóa bài viết này?")) {
        try {
          setloading(true);
          await fetch(`${API_BASE}/posts/${postId}`, {
            method: "DELETE",
          });
          fetchPosts();
        } catch (error) {
          setError("Lỗi khi xóa bài viết");
        } finally {
          setloading(false);
        }
      }
    }
  });

  modalContainerEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-modal")) {
      closeModal();
    }
  });

  formModalContainerEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-form-modal")) {
      closeFormModal();
    }
  });
};

const addNewPostEvent = () => {
  const addNewBtn = document.querySelector(".js-add-new");
  addNewBtn.addEventListener("click", () => {
    openFormModal();
  });
};

fetchPosts();
addSearchEvent();
addModalEvent();
addPaginationEvent();
addSortEvent();
addFormEvent();
addNewPostEvent();
