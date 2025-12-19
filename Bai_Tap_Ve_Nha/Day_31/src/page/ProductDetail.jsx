import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../utils/axios";
import axios from "axios";
import Loading from "../components/Loading";
import Button from "../components/Button";
import { HiExclamationCircle } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
import { HiPhotograph } from "react-icons/hi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const API_BASE = import.meta.env.VITE_API_URL;

export default function ProductDetail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        let response;
        try {
          response = await api.get(`/products/${id}`);
        } catch {
          response = await axios.get(`${API_BASE}/products/${id}`);
        }

        setProduct(response.data);
      } catch (err) {
        const errorMessage =
          err.response?.data?.message ||
          err.message ||
          err.code ||
          "Failed to fetch product details";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getProductDetail();
    }
  }, [id]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [id, product]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-blue-50 to-purple-100">
        <Loading color="#32cd32" size="medium" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
        <div className="max-w-2xl mx-auto mt-16 bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 border-2 border-red-100">
          <div className="text-red-700 text-2xl font-bold flex items-center gap-2">
            <HiExclamationCircle className="w-7 h-7 text-red-400" />
            Đã xảy ra lỗi
          </div>
          <div className="text-gray-700 text-lg text-center">{error}</div>
          <Button onClick={() => navigate(getBackUrl())}>
            Quay lại danh sách
          </Button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
        <div className="max-w-2xl mx-auto mt-16 bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold text-gray-700">
            Không tìm thấy sản phẩm
          </h2>
          <Button onClick={() => navigate(getBackUrl())}>
            Quay lại danh sách
          </Button>
        </div>
      </div>
    );
  }

  const {
    product_name,
    title,
    name,
    product_price,
    price,
    thumbnail,
    image,
    images,
    description,
    product_description,
    category,
  } = product;

  const productName = product_name || title || name;
  const productPrice = product_price || price;
  const productDescription = description || product_description;
  const productCategory = category;

  const allImages =
    images && images.length > 0
      ? images
      : thumbnail || image
      ? [thumbnail || image]
      : [];

  const currentImage = allImages[currentImageIndex] || null;

  const nextImage = () => {
    if (allImages.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }
  };

  const prevImage = () => {
    if (allImages.length > 0) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + allImages.length) % allImages.length
      );
    }
  };

  const getBackUrl = () => {
    const params = new URLSearchParams();
    const q = searchParams.get("q");
    const page = searchParams.get("page");
    if (q) {
      params.set("q", q);
    }
    if (page) {
      params.set("page", page);
    }
    const queryString = params.toString();
    return `/product${queryString ? `?${queryString}` : ""}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          to={getBackUrl()}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6 transition-colors"
        >
          <HiArrowLeft className="w-5 h-5" />
          Quay lại danh sách
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div>
              <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden group mb-4">
                {currentImage ? (
                  <>
                    <img
                      src={currentImage}
                      alt={productName}
                      className="w-full h-full object-cover transition-opacity duration-300"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    {allImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          aria-label="Ảnh trước"
                        >
                          <HiChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          aria-label="Ảnh sau"
                        >
                          <HiChevronRight className="w-6 h-6 text-gray-700" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {allImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                index === currentImageIndex
                                  ? "bg-white w-8"
                                  : "bg-white/50 hover:bg-white/75"
                              }`}
                              aria-label={`Ảnh ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <HiPhotograph className="h-24 w-24 text-gray-300" />
                    <span className="text-gray-400 mt-4 text-sm font-medium">
                      Không có ảnh
                    </span>
                  </div>
                )}
              </div>
              {allImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? "border-blue-500 ring-2 ring-blue-200"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${productName} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full">
                    {productCategory || "Chưa phân loại"}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                  {productName}
                </h1>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    $
                    {typeof productPrice === "number"
                      ? productPrice.toFixed(2)
                      : productPrice || "0.00"}
                  </span>
                  {product.original_price && (
                    <span className="text-gray-400 line-through text-xl">
                      ${product.original_price}
                    </span>
                  )}
                </div>
                {productDescription && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-700 mb-2">
                      Mô tả
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {productDescription}
                    </p>
                  </div>
                )}
                {product.rating && (
                  <div className="mb-6">
                    <span className="text-yellow-500 text-lg font-semibold">
                      ⭐ {product.rating}
                    </span>
                  </div>
                )}
                {product.stock !== undefined && (
                  <div className="mb-6">
                    <span
                      className={`text-sm font-semibold ${
                        product.stock > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {product.stock > 0
                        ? `Còn hàng (${product.stock})`
                        : "Hết hàng"}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex gap-4">
                <Button className="flex-1">Thêm vào giỏ</Button>
                <Button className="flex-1">Mua ngay</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
