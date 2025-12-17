import { useState, useRef, useEffect } from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";

export default function App() {
  const DEFAULT_WIDTH = 240;

  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_WIDTH);
  const [isShowSideBar, setShowSidebar] = useState(true);

  const isResizing = useRef(false);
  const sidebarRef = useRef();
  const mainRef = useRef();
  const lastSidebarWidth = useRef(DEFAULT_WIDTH);

  useEffect(() => {
    const handleResize = (e) => {
      if (!isResizing.current || !isShowSideBar) return;

      const newWidth = Math.min(Math.max(e.clientX, 180), 400);
      sidebarRef.current.style.width = `${newWidth}px`;
      mainRef.current.style.marginLeft = `${newWidth}px`;

      mainRef.current.classList.add("select-none");
      sidebarRef.current.classList.add("select-none");
      mainRef.current.classList.remove(
        "transition-[margin-left]",
        "duration-300"
      );
      lastSidebarWidth.current = newWidth;
    };

    const handleStop = () => {
      if (!isResizing.current) return;
      isResizing.current = false;
      mainRef.current.classList.remove("select-none");
      sidebarRef.current.classList.remove("select-none");
      mainRef.current.classList.add("transition-[margin-left]", "duration-300");
      setSidebarWidth(lastSidebarWidth.current);
    };

    window.addEventListener("mousemove", handleResize);
    window.addEventListener("mouseup", handleStop);

    return () => {
      window.removeEventListener("mousemove", handleResize);
      window.removeEventListener("mouseup", handleStop);
    };
  }, [isShowSideBar]);

  const handleOpenSidebar = () => {
    setSidebarWidth(lastSidebarWidth.current || DEFAULT_WIDTH);
    setShowSidebar(true);
  };

  const handleCloseSidebar = () => {
    lastSidebarWidth.current = sidebarWidth;
    setShowSidebar(false);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-white">
      <Sidebar
        ref={sidebarRef}
        width={sidebarWidth}
        isShow={isShowSideBar}
        onClose={handleCloseSidebar}
        onStartResize={() => {
          isResizing.current = true;
          mainRef.current?.classList.remove(
            "transition-[margin-left]",
            "duration-300"
          );
        }}
      />
      <main
        ref={mainRef}
        style={{ marginLeft: isShowSideBar ? sidebarWidth : 0 }}
        className="h-full transition-[margin-left] duration-300"
      >
        <div className="p-4">
          {!isShowSideBar && (
            <button
              onClick={handleOpenSidebar}
              className="mr-3 cursor-pointer text-gray-700 hover:text-gray-900"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
          <h1 className="inline text-xl">Notion</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            aut voluptates eveniet atque sunt ipsam natus consequatur? Nulla sit
            ipsum nihil labore officiis quibusdam ad, commodi, atque unde
            distinctio esse?
          </p>
        </div>
      </main>
    </div>
  );
}
