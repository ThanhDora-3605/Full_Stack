import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import {
  HiShoppingBag,
  HiSparkles,
  HiShieldCheck,
  HiTrendingUp,
  HiArrowRight,
  HiStar,
} from "react-icons/hi";

export default function Home() {
  const features = [
    {
      icon: HiShoppingBag,
      title: "Sản Phẩm Đa Dạng",
      description: "Hàng ngàn sản phẩm chất lượng cao với giá cả hợp lý",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: HiShieldCheck,
      title: "An Toàn & Bảo Mật",
      description: "Bảo vệ thông tin và giao dịch của bạn một cách tuyệt đối",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: HiSparkles,
      title: "Chất Lượng Cao",
      description: "Cam kết mang lại những sản phẩm tốt nhất cho khách hàng",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: HiTrendingUp,
      title: "Giao Hàng Nhanh",
      description: "Vận chuyển nhanh chóng và đáng tin cậy trên toàn quốc",
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "10K+", label: "Khách Hàng Hài Lòng" },
    { number: "5K+", label: "Sản Phẩm Chất Lượng" },
    { number: "99%", label: "Tỷ Lệ Hài Lòng" },
    { number: "24/7", label: "Hỗ Trợ Khách Hàng" },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text mb-6 tracking-tight">
              Chào Mừng Đến Với
              <br />
              Cửa Hàng Của Chúng Tôi
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Khám phá bộ sưu tập sản phẩm tuyệt vời với chất lượng cao và giá
              cả hợp lý. Chúng tôi cam kết mang lại trải nghiệm mua sắm tốt nhất
              cho bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/product">
                <Button className="px-8 py-4 text-lg">
                  <span className="flex items-center gap-2">
                    Xem Sản Phẩm
                    <HiArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </Link>
              <Link to="/about">
                <button className="px-8 py-4 text-lg font-semibold rounded-xl bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                  Tìm Hiểu Thêm
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-4">
              Tại Sao Chọn Chúng Tôi?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Chúng tôi tự hào mang lại những giá trị vượt trội cho khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="py-12 md:py-16">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sẵn Sàng Bắt Đầu Mua Sắm?
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Khám phá bộ sưu tập sản phẩm đa dạng của chúng tôi và tìm kiếm
                những món đồ hoàn hảo cho bạn
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/product">
                  <button className="px-8 py-4 text-lg font-semibold rounded-xl bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                    <span className="flex items-center gap-2">
                      Xem Tất Cả Sản Phẩm
                      <HiArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-8 py-4 text-lg font-semibold rounded-xl bg-blue-700 text-white hover:bg-blue-800 transition-all duration-300 hover:scale-105 shadow-lg border-2 border-blue-500">
                    Liên Hệ Với Chúng Tôi
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 md:py-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Đánh Giá Từ Khách Hàng
              </h2>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <HiStar
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600">4.9/5 từ hơn 10,000 đánh giá</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Nguyễn Văn A",
                  comment:
                    "Sản phẩm chất lượng tuyệt vời, giao hàng nhanh chóng. Rất hài lòng!",
                  rating: 5,
                },
                {
                  name: "Trần Thị B",
                  comment:
                    "Dịch vụ khách hàng rất tốt, tư vấn nhiệt tình. Sẽ quay lại mua tiếp!",
                  rating: 5,
                },
                {
                  name: "Lê Văn C",
                  comment:
                    "Giá cả hợp lý, sản phẩm đúng như mô tả. Đáng tin cậy!",
                  rating: 5,
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <HiStar
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "{review.comment}"
                  </p>
                  <p className="text-gray-600 font-semibold">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
