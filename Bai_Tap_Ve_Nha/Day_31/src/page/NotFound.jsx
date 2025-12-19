import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-sky-100 to-purple-200 overflow-hidden p-6">
      <div className="relative w-full max-w-lg flex flex-col items-center z-10">
        <div className="absolute -top-20 left-10 w-48 h-48 bg-purple-300 opacity-40 rounded-full blur-2xl mix-blend-multiply animate-spin-slow"></div>
        <div className="absolute -bottom-24 right-12 w-64 h-64 bg-blue-200 opacity-40 rounded-full blur-3xl mix-blend-multiply animate-spin-slower"></div>
        <div className="flex flex-col items-center z-20">
          <div className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 drop-shadow-lg mb-3 animate-pulse">
            404
          </div>
          <div className="flex items-center space-x-3">
            <span className="inline-block w-3 h-3 bg-rose-400 rounded-full animate-ping"></span>
            <span className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
              Trang Không Tìm Thấy
            </span>
          </div>
          <div className="text-gray-600 text-lg mt-3 mb-8 text-center leading-relaxed max-w-md drop-shadow-sm">
            Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.
            <br />
            Bạn có thể quay về trang chủ để tiếp tục khám phá!
          </div>
          <a
            href="/"
            className="mt-2 px-8 py-3 rounded-full shadow-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-lg font-semibold tracking-wide transform hover:scale-105 hover:from-blue-600 hover:to-pink-600 transition duration-300"
          >
            Quay về Trang Chủ
          </a>
          {/* <img
            src="https://assets-v2.lottiefiles.com/a/f5bb4b84-cbdf-11ed-90c5-e7bd16c6351b/gTgm1wwkbX.gif"
            alt="Lost Astronaut"
            className="w-52 h-52 object-contain mt-8 opacity-95 drop-shadow-xl"
            draggable={false}
          /> */}
        </div>
      </div>
      <style>
        {`
          .animate-spin-slow { animation: spin 12s linear infinite; }
          .animate-spin-slower { animation: spin 20s linear infinite; }
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
