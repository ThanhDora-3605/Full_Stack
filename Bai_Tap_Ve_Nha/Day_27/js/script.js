const API_BASE = "https://dummyjson.com";
const STORAGE_KEY = "blog_posts_local";
const DELETED_IDS_KEY = "blog_posts_deleted";
const PAGE_SIZE = 10;

const escapeHtml = (text) => {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
};

const getStorage = (key, defaultValue) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (error) {
    console.error(`Error reading ${key}:`, error);
    return defaultValue;
  }
};

const setStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing ${key}:`, error);
  }
};

const getLocalPosts = () => getStorage(STORAGE_KEY, {});
const getDeletedIds = () => getStorage(DELETED_IDS_KEY, []);

const addDeletedId = (postId) => {
  const deletedIds = getDeletedIds();
  if (!deletedIds.includes(postId)) {
    deletedIds.push(postId);
    setStorage(DELETED_IDS_KEY, deletedIds);
  }
};

const saveLocalPost = (post) => {
  const localPosts = getLocalPosts();
  localPosts[post.id] = post;
  setStorage(STORAGE_KEY, localPosts);
};

const deleteLocalPost = (postId) => {
  const localPosts = getLocalPosts();
  delete localPosts[postId];
  setStorage(STORAGE_KEY, localPosts);
};

const generateLocalId = () => {
  const localPosts = getLocalPosts();
  const localIds = Object.keys(localPosts)
    .map(Number)
    .filter((id) => id >= 1000000);
  return localIds.length === 0 ? 1000000 : Math.max(...localIds) + 1;
};

const mergePosts = (apiPosts, localPosts) => {
  const deletedIds = getDeletedIds();
  const deletedSet = new Set(deletedIds);
  const merged = apiPosts.filter((post) => !deletedSet.has(post.id));
  const localArray = Object.values(localPosts);
  localArray.forEach((localPost) => {
    if (!deletedSet.has(localPost.id)) {
      const index = merged.findIndex((p) => p.id === localPost.id);
      merged[index >= 0 ? index : merged.length] =
        index >= 0 ? { ...merged[index], ...localPost } : localPost;
    }
  });
  return merged;
};

const getPostById = async (postId) => {
  const localPosts = getLocalPosts();
  if (localPosts[postId]) return localPosts[postId];
  const response = await fetch(`${API_BASE}/posts/${postId}`);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return await response.json();
};

const renderPosts = (posts) => {
  const postsListEl = document.querySelector(".js-posts-container");
  if (!postsListEl) return;
  const buttonClass =
    "px-6 py-2 rounded-xl backdrop-blur-md border border-white/30 shadow-lg transition duration-200 hover:-translate-y-0.5 active:scale-95 font-semibold select-none";
  postsListEl.innerHTML = posts
    .map(
      (post) => `
    <div class="px-6 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-blue-400 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-white/25 font-semibold p-4 gap-4 flex flex-col justify-between mb-1">
      <div class="flex flex-col gap-2 w-full">
        <h2 class="text-2xl font-bold">${escapeHtml(post.title)}</h2>
        <p class="text-gray-500 text-sm">${escapeHtml(post.body)}</p>
      </div>
      <div class="flex gap-2 mt-4 justify-between">
        <button class="${buttonClass} bg-blue-400/20 text-blue-400 hover:bg-blue-400/25 js-view-detail" data-post-id="${
        post.id
      }">Xem chi tiết</button>
        <div class="flex gap-2">
          <button class="${buttonClass} bg-green-500/20 text-green-500 hover:bg-green-500/25 js-edit-post" data-post-id="${
        post.id
      }">Sửa</button>
          <button class="${buttonClass} bg-red-500/20 text-red-500 hover:bg-red-500/25 js-delete-post" data-post-id="${
        post.id
      }">Xóa</button>
        </div>
      </div>
    </div>`
    )
    .join("");
};

const setError = (message) => {
  const postsListEl = document.querySelector(".js-posts-container");
  if (postsListEl) {
    postsListEl.innerHTML = `<span class="text-center text-red-500">${message}</span>`;
  }
};

const setLoading = (status) => {
  const loadingEl = document.querySelector(".js-loading-state");
  if (loadingEl) {
    loadingEl.innerHTML = status
      ? `<span class="animate-spin rounded-full h-8 w-8 border-gray-900">Loading...</span>`
      : "";
  }
};

const renderPagination = (currentPage, totalPages) => {
  const paginationContainer = document.querySelector("#paginationContainer");
  if (!paginationContainer || totalPages <= 1) {
    if (paginationContainer) paginationContainer.innerHTML = "";
    return;
  }
  const buttonBaseClass =
    "px-6 py-2 rounded-xl backdrop-blur-md border border-white/30 text-blue-500 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500/25 active:scale-95 font-semibold select-none js-pagination";
  let paginationHTML = "";
  const maxVisible = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }
  if (currentPage > 1) {
    paginationHTML += `<button class="${buttonBaseClass} bg-blue-500/20" data-page="${
      currentPage - 1
    }">Trước</button>`;
  }
  for (let i = startPage; i <= endPage; i++) {
    const activeClass = i === currentPage ? "bg-blue-500/40" : "bg-blue-500/20";
    paginationHTML += `<button class="${buttonBaseClass} ${activeClass}" data-page="${i}">${i}</button>`;
  }
  if (currentPage < totalPages) {
    paginationHTML += `<button class="${buttonBaseClass} bg-blue-500/20" data-page="${
      currentPage + 1
    }">Sau</button>`;
  }
  paginationContainer.innerHTML = paginationHTML;
};

const buildApiUrl = (search) => {
  const params = new URLSearchParams();
  if (search && search.trim()) {
    params.append("q", search.trim());
    params.append("limit", 100);
    return `${API_BASE}/posts/search?${params.toString()}`;
  }
  params.append("limit", 150);
  return `${API_BASE}/posts?${params.toString()}`;
};

const filterAndSortPosts = (posts, search, sort) => {
  let filtered = posts;
  if (search && search.trim()) {
    const searchTerm = search.trim().toLowerCase();
    filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.body.toLowerCase().includes(searchTerm)
    );
  }
  if (sort === "oldest") {
    filtered.sort((a, b) => a.id - b.id);
  } else if (sort === "newest") {
    filtered.sort((a, b) => b.id - a.id);
  }
  return filtered;
};

const fetchPosts = async () => {
  try {
    setLoading(true);
    const url = buildApiUrl(query.search);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    let posts = data.posts || [];
    posts = mergePosts(posts, getLocalPosts());
    posts = filterAndSortPosts(posts, query.search, query.sort);
    const total = posts.length;
    const currentPage = query.page || 1;
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const paginatedPosts = posts.slice(startIndex, startIndex + PAGE_SIZE);
    renderPosts(paginatedPosts);
    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    if (totalPages > 1) {
      renderPagination(currentPage, totalPages);
    } else {
      const paginationContainer = document.querySelector(
        "#paginationContainer"
      );
      if (paginationContainer) paginationContainer.innerHTML = "";
    }
  } catch (error) {
    setError("Lỗi khi lấy dữ liệu: " + error.message);
  } finally {
    setLoading(false);
  }
};

const query = {
  page: 1,
  sort: "newest",
};

const debounce = (callback, timeout = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), timeout);
  };
};

const addSearchEvent = () => {
  const searchInputEl = document.querySelector("#js-search-input");
  if (!searchInputEl) return;
  searchInputEl.addEventListener(
    "input",
    debounce((e) => {
      query.search = e.target.value;
      query.page = 1;
      fetchPosts();
    })
  );
};

const updateSortButtons = () => {
  const buttons = document.querySelectorAll(
    ".w-full.flex.items-center.gap-4 button"
  );
  if (buttons.length < 2) return;
  const sortClasses = [
    "bg-yellow-500/20",
    "text-yellow-500",
    "bg-yellow-500/40",
    "text-yellow-600",
    "bg-gray-500/20",
    "text-gray-500",
    "bg-gray-500/40",
    "text-gray-600",
    "font-bold",
  ];
  buttons.forEach((btn) => btn.classList.remove(...sortClasses));
  const activeClasses = ["bg-yellow-500/40", "text-yellow-600", "font-bold"];
  const inactiveClasses = ["bg-gray-500/20", "text-gray-500"];
  if (query.sort === "newest") {
    buttons[0].classList.add(...activeClasses);
    buttons[1].classList.add(...inactiveClasses);
  } else if (query.sort === "oldest") {
    buttons[1].classList.add(...activeClasses);
    buttons[0].classList.add(...inactiveClasses);
  }
};

const addSortEvent = () => {
  const buttons = document.querySelectorAll(
    ".w-full.flex.items-center.gap-4 button"
  );
  if (buttons.length < 2) return;
  buttons[0].addEventListener("click", () => {
    query.sort = "newest";
    query.page = 1;
    updateSortButtons();
    fetchPosts();
  });
  buttons[1].addEventListener("click", () => {
    query.sort = "oldest";
    query.page = 1;
    updateSortButtons();
    fetchPosts();
  });
  updateSortButtons();
};

const addPaginationEvent = () => {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("js-pagination")) {
      query.page = parseInt(e.target.dataset.page);
      fetchPosts();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
};

const addCreatePostEvent = () => {
  const buttons = document.querySelectorAll(".w-full.my-2 button");
  if (buttons.length > 0) {
    buttons[0].addEventListener("click", openCreateModal);
  }
};

const INPUT_CLASSES = {
  title:
    "w-full p-3 border-2 border-blue-300 rounded-lg text-xl font-bold text-blue-700 placeholder-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200",
  body: "w-full p-3 border-2 border-gray-300 rounded-lg h-32 text-sm text-gray-600 placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200",
};

const BUTTON_CLASSES = {
  save: "px-6 py-2 rounded-xl bg-green-500/20 backdrop-blur-md border border-white/30 text-green-500 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-green-500/25 active:scale-95 font-semibold select-none js-save-post",
  cancel:
    "px-6 py-2 rounded-xl bg-gray-500/20 backdrop-blur-md border border-white/30 text-gray-500 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-gray-500/25 active:scale-95 font-semibold select-none js-cancel-modal",
  delete:
    "px-6 py-2 rounded-xl bg-red-500/20 backdrop-blur-md border border-white/30 text-red-500 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-red-500/25 active:scale-95 font-semibold select-none js-confirm-delete",
};

const renderModalContent = (mode, data = {}) => {
  const modalContent = document.querySelector("#modalContent");
  const titleEl = document.querySelector(".js-title");
  const bodyEl = document.querySelector(".js-body");
  if (!modalContent || !titleEl || !bodyEl) return;
  const existingActions = modalContent.querySelector(".js-modal-actions");
  if (existingActions) existingActions.remove();
  let actionsHTML = "";
  if (mode === "view") {
    titleEl.className = "js-title text-2xl font-bold";
    titleEl.textContent = data.title || "";
    bodyEl.className = "js-body text-black/50 text-sm leading-relaxed";
    bodyEl.textContent = data.body || "";
  } else if (mode === "create" || mode === "edit") {
    titleEl.className = "js-title";
    titleEl.innerHTML = `<input type="text" id="js-modal-title" class="${
      INPUT_CLASSES.title
    }" placeholder="Tiêu đề" value="${escapeHtml(data.title || "")}">`;
    bodyEl.className = "js-body";
    bodyEl.innerHTML = `<textarea id="js-modal-body" class="${
      INPUT_CLASSES.body
    }" placeholder="Nội dung">${escapeHtml(data.body || "")}</textarea>`;
    actionsHTML = `<div class="js-modal-actions flex gap-2 mt-4"><button class="${
      BUTTON_CLASSES.save
    }"${
      mode === "edit" ? ` data-post-id="${data.id || ""}"` : ""
    }>Lưu</button><button class="${BUTTON_CLASSES.cancel}">Hủy</button></div>`;
  } else if (mode === "delete") {
    titleEl.className = "js-title text-2xl font-bold text-red-500";
    titleEl.textContent = "Xác nhận xóa";
    bodyEl.className = "js-body text-black/50 text-sm leading-relaxed";
    bodyEl.textContent = `Bạn có chắc chắn muốn xóa bài viết "${
      data.title || ""
    }"?`;
    actionsHTML = `<div class="js-modal-actions flex gap-2 mt-4"><button class="${
      BUTTON_CLASSES.delete
    }" data-post-id="${data.id || ""}">Xóa</button><button class="${
      BUTTON_CLASSES.cancel
    }">Hủy</button></div>`;
  }
  if (actionsHTML) {
    const containerDiv = modalContent.querySelector(".flex.flex-col.gap-2");
    if (containerDiv) containerDiv.insertAdjacentHTML("beforeend", actionsHTML);
  }
};

const openModal = (mode, postId = null) => {
  const modalContainerEl = document.querySelector("#modalContainer");
  if (!modalContainerEl) return;
  modalContainerEl.classList.remove("hidden");
  if (postId) {
    setLoading(true);
    getPostById(postId)
      .then((data) => {
        renderModalContent(mode, data);
        setLoading(false);
      })
      .catch((error) => {
        setError(`Lỗi khi tải dữ liệu bài viết: ${error.message}`);
        closeModal();
        setLoading(false);
      });
  } else {
    renderModalContent(mode);
  }
};

const openCreateModal = () => {
  openModal("create");
  setTimeout(() => {
    const titleInput = document.querySelector("#js-modal-title");
    if (titleInput) titleInput.focus();
  }, 100);
};

const openEditModal = (postId) => openModal("edit", postId);
const openViewModal = (postId) => openModal("view", postId);
const openDeleteModal = (postId) => openModal("delete", postId);

const savePost = async (postId = null) => {
  const titleInput = document.querySelector("#js-modal-title");
  const bodyInput = document.querySelector("#js-modal-body");
  if (!titleInput || !bodyInput) return;
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();
  if (!title || !body) {
    alert("Vui lòng điền đầy đủ thông tin");
    return;
  }
  try {
    setLoading(true);
    const localPosts = getLocalPosts();
    const existingPost = postId ? localPosts[postId] || {} : {};
    const savedPost = {
      id: postId ? parseInt(postId) : generateLocalId(),
      title,
      body,
      userId: existingPost.userId || 1,
      tags: existingPost.tags || [],
      reactions: existingPost.reactions || 0,
    };
    const url = postId
      ? `${API_BASE}/posts/${postId}`
      : `${API_BASE}/posts/add`;
    const method = postId ? "PUT" : "POST";
    const requestBody = postId
      ? { title, body }
      : { title, body, userId: 1, tags: [], reactions: 0 };
    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}`);
    }
    const apiData = await response.json();
    if (!postId && apiData.id) {
      savedPost.id = apiData.id;
    }
    saveLocalPost(savedPost);
    closeModal();
    query.page = 1;
    fetchPosts();
  } catch (error) {
    console.error("Error saving post:", error);
    alert("Lỗi khi lưu bài viết: " + error.message);
  } finally {
    setLoading(false);
  }
};

const deletePost = async (postId) => {
  try {
    setLoading(true);
    const postIdNum = parseInt(postId);
    const localPosts = getLocalPosts();
    if (localPosts[postIdNum]) deleteLocalPost(postIdNum);
    addDeletedId(postIdNum);
    try {
      await fetch(`${API_BASE}/posts/${postId}`, { method: "DELETE" });
    } catch (apiError) {
      console.warn("API delete failed, marked as deleted locally:", apiError);
    }
    closeModal();
    fetchPosts();
  } catch (error) {
    alert("Lỗi khi xóa bài viết: " + error.message);
  } finally {
    setLoading(false);
  }
};

const closeModal = () => {
  const modalContainerEl = document.querySelector("#modalContainer");
  const titleEl = document.querySelector(".js-title");
  const bodyEl = document.querySelector(".js-body");
  const actionsEl = document.querySelector(".js-modal-actions");
  if (modalContainerEl) modalContainerEl.classList.add("hidden");
  if (titleEl) titleEl.textContent = "";
  if (bodyEl) bodyEl.textContent = "";
  if (actionsEl) actionsEl.remove();
};

const addModalEvent = () => {
  const postsContainerEl = document.querySelector(".js-posts-container");
  const modalContainerEl = document.querySelector("#modalContainer");
  const modalContent = document.querySelector("#modalContent");
  if (!postsContainerEl || !modalContainerEl || !modalContent) return;
  postsContainerEl.addEventListener("click", (e) => {
    const postId = e.target.dataset.postId;
    if (!postId) return;
    if (e.target.classList.contains("js-view-detail")) {
      openViewModal(postId);
    } else if (e.target.classList.contains("js-edit-post")) {
      openEditModal(postId);
    } else if (e.target.classList.contains("js-delete-post")) {
      openDeleteModal(postId);
    }
  });
  modalContent.addEventListener("click", (e) => {
    if (e.target.classList.contains("js-save-post")) {
      e.stopPropagation();
      savePost(e.target.dataset.postId || null);
    } else if (e.target.classList.contains("js-cancel-modal")) {
      e.stopPropagation();
      closeModal();
    } else if (e.target.classList.contains("js-confirm-delete")) {
      e.stopPropagation();
      const postId = e.target.dataset.postId;
      if (postId) deletePost(postId);
    } else {
      e.stopPropagation();
    }
  });
  modalContainerEl.addEventListener("click", (e) => {
    if (e.target.id === "modalContainer") {
      closeModal();
    }
  });
};

fetchPosts();
addSearchEvent();
addModalEvent();
addSortEvent();
addPaginationEvent();
addCreatePostEvent();
