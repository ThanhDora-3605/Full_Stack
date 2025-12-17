export default function Sidebar({
  width,
  isShow,
  onClose,
  onStartResize,
  ref,
}) {
  return (
    <aside
      ref={ref}
      style={{
        width,
        transform: isShow ? "translateX(0)" : `translateX(-${width}px)`,
      }}
      className="absolute
          left-0
          top-0
          h-full
          bg-[#d5d5d5]
          transition-transform
          duration-300
          group"
    >
      <div className="p-4">
        <h2 className="text-xl">Sidebar</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          laudantium?
        </p>
      </div>

      <div className="absolute top-0 right-0 h-full w-4 group/resize">
        <div
          onMouseDown={onStartResize}
          className="absolute top-0 right-0 h-full w-1.5 bg-[#fab7ff] cursor-ew-resize opacity-0 group-hover:opacity-100 transition"
        ></div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute right-3 top-2 cursor-pointer text-gray-700 hover:text-gray-900 transition opacity-0 group-hover/resize:opacity-100"
        >
          <i className="fa-solid fa-angles-left"></i>
        </button>
      </div>
    </aside>
  );
}
