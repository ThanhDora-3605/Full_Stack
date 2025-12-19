import React from "react";
import {
  HiLightBulb,
  HiHeart,
  HiTrendingUp,
  HiUsers,
  HiGlobe,
  HiSparkles,
} from "react-icons/hi";

export default function About() {
  const values = [
    {
      icon: HiLightBulb,
      title: "Sáng Tạo",
      description:
        "Luôn tìm kiếm những giải pháp mới và đổi mới trong mọi dự án",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: HiHeart,
      title: "Đam Mê",
      description: "Cống hiến hết mình với tình yêu và đam mê trong công việc",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: HiTrendingUp,
      title: "Phát Triển",
      description:
        "Không ngừng học hỏi và phát triển để mang lại giá trị tốt nhất",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: HiUsers,
      title: "Đồng Hành",
      description: "Xây dựng mối quan hệ bền chặt với khách hàng và đối tác",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const stats = [
    { number: "1000+", label: "Khách Hàng" },
    { number: "500+", label: "Dự Án" },
    { number: "50+", label: "Đối Tác" },
    { number: "5+", label: "Năm Kinh Nghiệm" },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-6 px-4 pb-12 min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text mb-2 tracking-tight">
            Về Chúng Tôi
          </h1>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Chúng tôi là đội ngũ đam mê công nghệ, luôn nỗ lực mang lại những
            sản phẩm và dịch vụ tốt nhất
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <HiSparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Sứ Mệnh</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Chúng tôi cam kết mang lại những sản phẩm và dịch vụ chất lượng
              cao, đáp ứng nhu cầu của khách hàng với công nghệ tiên tiến và
              giải pháp sáng tạo. Mục tiêu của chúng tôi là tạo ra giá trị bền
              vững và góp phần phát triển cộng đồng.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                <HiGlobe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Tầm Nhìn</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Trở thành đối tác tin cậy hàng đầu trong lĩnh vực công nghệ, được
              công nhận bởi sự đổi mới, chất lượng và cam kết với khách hàng.
              Chúng tôi hướng tới việc mở rộng phạm vi hoạt động và tạo ra tác
              động tích cực trên toàn cầu.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Giá Trị Cốt Lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 lg:p-10 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hãy Đồng Hành Cùng Chúng Tôi
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              Chúng tôi luôn tìm kiếm những cơ hội hợp tác mới và những thách
              thức thú vị. Nếu bạn có dự án hoặc ý tưởng, hãy liên hệ với chúng
              tôi ngay hôm nay!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Liên Hệ Ngay
              </a>
              <a
                href="/product"
                className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all duration-300 hover:scale-105 shadow-lg border-2 border-blue-500"
              >
                Xem Sản Phẩm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
