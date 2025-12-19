import React, { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { api } from "../utils/axios";
import { HiExclamationCircle } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import { HiPhotograph } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Button from "../components/Button";
import Loading from "../components/Loading";

export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page") || "1", 10)
  );
  const itemsPerPage = 12;
  const timeoutRef = useRef(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get("/products?limit=100");
        const responseData = response.data;
        let data = [];

        if (Array.isArray(responseData)) {
          data = responseData;
        } else if (
          responseData?.products &&
          Array.isArray(responseData.products)
        ) {
          data = responseData.products;
        } else if (responseData?.data && Array.isArray(responseData.data)) {
          data = responseData.data;
        }

        setProducts(data);
      } catch (err) {
        const errorMessage =
          err.response?.data?.message ||
          err.message ||
          err.code ||
          "Failed to fetch products";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const params = {};
    if (search.trim()) {
      params.q = search;
    }
    if (currentPage > 1) {
      params.page = currentPage.toString();
    }
    setSearchParams(params);
  }, [search, currentPage, setSearchParams]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const [filteredProducts, setFilteredProducts] = useState(products);
  const prevSearchRef = useRef(searchParams.get("q") || "");

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const filtered = products.filter((product) =>
        (product.product_name || product.title || product.name || "")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
      if (prevSearchRef.current !== search) {
        setCurrentPage(1);
        prevSearchRef.current = search;
      }
    }, 300);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [search, products]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    const totalPagesAfterFilter = Math.ceil(
      filteredProducts.length / itemsPerPage
    );
    if (currentPage > totalPagesAfterFilter && totalPagesAfterFilter > 0) {
      setCurrentPage(1);
    }
  }, [filteredProducts.length, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const getProductDetailUrl = (productId) => {
    const params = [];
    if (search.trim()) {
      params.push(`q=${encodeURIComponent(search)}`);
    }
    if (currentPage > 1) {
      params.push(`page=${currentPage}`);
    }
    params.push(`id=${productId}`);
    return `/product/detail?${params.join("&")}`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-blue-50 to-purple-100">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto mt-16 bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 border-2 border-red-100 animate-fade-in">
        <div className="text-red-700 text-2xl font-bold flex items-center gap-2">
          <HiExclamationCircle className="w-7 h-7 text-red-400" />
          Đã xảy ra lỗi
        </div>
        <div className="text-gray-700 text-lg text-center">{error}</div>
        <div className="text-gray-500 text-sm">
          Vui lòng kiểm tra lại API server:{" "}
          <span className="font-mono">{import.meta.env.VITE_API_URL}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text mb-4 tracking-tight">
            Bộ Sưu Tập Sản Phẩm
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Khám phá những sản phẩm tuyệt vời với giá cả hợp lý
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiSearch className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 outline-none shadow-xl bg-white text-gray-800 text-lg font-medium transition-all duration-300 focus:ring-4 focus:ring-blue-200 focus:shadow-2xl"
            />
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 mb-6">
              <HiLockClosed className="h-12 w-12 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              Không tìm thấy sản phẩm
            </h3>
            <p className="text-gray-500">Thử tìm kiếm với từ khóa khác</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProducts.map((product, index) => (
                <div
                  key={product.id || index}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <Link
                    to={getProductDetailUrl(product.id || index)}
                    className="block relative overflow-hidden"
                  >
                    <div className="relative h-64 w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                      {product.image || product.thumbnail ? (
                        <img
                          src={product.image || product.thumbnail}
                          alt={
                            product.product_name ||
                            product.title ||
                            product.name ||
                            "Product image"
                          }
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                          <HiPhotograph className="h-20 w-20 text-gray-300" />
                          <span className="text-gray-400 mt-3 text-sm font-medium">
                            Không có ảnh
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Link>
                  <div className="flex-1 flex flex-col justify-between p-6">
                    <div>
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-2">
                          {product.category || "Chưa phân loại"}
                        </span>
                      </div>
                      <h2
                        className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-blue-600 transition-colors"
                        title={
                          product.product_name || product.title || product.name
                        }
                      >
                        {product.product_name || product.title || product.name}
                      </h2>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                          {product.product_price || product.price
                            ? "$" +
                              (typeof (
                                product.product_price || product.price
                              ) === "number"
                                ? (
                                    product.product_price || product.price
                                  ).toFixed(2)
                                : product.product_price || product.price)
                            : "$0.00"}
                        </span>
                        {product.original_price && (
                          <span className="text-gray-400 line-through text-sm font-medium">
                            ${product.original_price}
                          </span>
                        )}
                      </div>
                    </div>
                    <Link to={getProductDetailUrl(product.id || index)}>
                      <Button className="w-full">Xem Chi Tiết</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="mt-12 flex flex-col items-center gap-4">
                <div className="text-sm text-gray-600">
                  Trang {currentPage} / {totalPages} - Hiển thị {startIndex + 1}
                  -{Math.min(endIndex, filteredProducts.length)} trong tổng số{" "}
                  {filteredProducts.length} sản phẩm
                </div>
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg bg-white border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-1"
                  >
                    <HiChevronLeft className="w-5 h-5" />
                    Trước
                  </button>
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => {
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={page}
                              onClick={() => goToPage(page)}
                              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                                currentPage === page
                                  ? "bg-blue-600 text-white shadow-lg"
                                  : "bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              {page}
                            </button>
                          );
                        } else if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return (
                            <span key={page} className="px-2 text-gray-400">
                              ...
                            </span>
                          );
                        }
                        return null;
                      }
                    )}
                  </div>
                  <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg bg-white border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-1"
                  >
                    Sau
                    <HiChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
