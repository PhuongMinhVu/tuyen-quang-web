import React, { useState } from "react"

// Assets
import introduceCover from "../assets/introduce-cover.png"
import tintucAnhBia from "../assets/tintuc-anhbia.webp"
import nhiepAnhTre from "../assets/nhiepanhtre.webp"
import xaQueHuong from "../assets/xaquehuong.webp"
import tinTucNho from "../assets/tintucnho.webp"

// Danh sách danh mục lọc
const categories = ["Tất cả", "Sự kiện", "Thông báo"]

// Danh sách bài viết
const newsList = [
  {
    id: 1,
    title: (
      <>
        Phát động cuộc thi <strong>“Tuyên Quang Trong Tôi”</strong> - Cuộc thi lan tỏa tình yêu quê hương từ những điều gần gũi nhất
      </>
    ),
    category: "Sự kiện",
    date: "12.06.2026",
    image: tintucAnhBia,
  },
  {
    id: 2,
    title: (
      <>
        Cuộc thi <strong>“Tuyên Quang Trong Tôi”</strong> thu hút sự quan tâm của đông đảo nhiếp ảnh gia và nhà sáng tạo trẻ
      </>
    ),
    category: "Sự kiện",
    date: "12.06.2026",
    image: nhiepAnhTre,
  },
  {
    id: 3,
    title: "Lộ diện những câu chuyện xúc động gửi về từ những người con xa xứ",
    category: "Thông báo",
    date: "12.06.2026",
    image: xaQueHuong,
  },
]

function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả")

  // Lọc bài viết theo danh mục
  const filteredNews =
    activeCategory === "Tất cả"
      ? newsList
      : newsList.filter((item) => item.category === activeCategory)

  return (
    <div className="w-full bg-white font-['Be_Vietnam_Pro']">
      
      {/* 1. HERO BANNER TRÀN VIỀN 100% */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[360px] w-full sm:h-[460px] lg:h-[540px]">
          <img
            src={introduceCover}
            alt="Tin tức Cuộc thi Tuyên Quang Trong Tôi 2026"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 flex items-start">
            <div className="mx-auto w-full max-w-[1440px] px-6 pt-10 lg:px-[104px] lg:pt-16">
              <div className="max-w-[380px] sm:max-w-[460px] lg:max-w-[500px]">
                <h1 className="font-['Phudu'] text-3xl font-black uppercase text-black sm:text-4xl lg:text-5xl">
                  TIN TỨC
                </h1>
                <p className="mt-3 font-['Be_Vietnam_Pro'] text-xs font-normal leading-relaxed text-black sm:text-sm lg:text-[14px]">
                  Nơi cập nhật những tin tức hoạt động và sự kiện mới nhất về cuộc thi “Tuyên Quang Trong Tôi”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KHỐI NỘI DUNG CHÍNH */}
      <section className="w-full bg-gradient-to-b from-white via-stone-50/50 to-lime-50/30 py-12 lg:py-16">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[104px]">
          
          {/* Tiêu đề mục */}
          <h2 className="font-['Phudu'] text-2xl font-black uppercase tracking-tight text-green-900 sm:text-3xl lg:text-4xl">
            TIN TỨC NỔI BẬT
          </h2>

          {/* CARD TIN TỨC NỔI BẬT LỚN (FEATURED ARTICLE) */}
          <article className="mt-8 overflow-hidden rounded-[24px] border border-neutral-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Cột trái: Nội dung tóm tắt */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-6 lg:p-10">
                <div className="space-y-4">
                  <h3 className="cursor-pointer font-['Be_Vietnam_Pro'] text-lg font-bold uppercase leading-snug text-black transition-colors duration-200 hover:text-[#167438] sm:text-xl lg:text-[22px]">
                Phát động cuộc thi “Tuyên Quang Trong Tôi” - Cuộc thi lan tỏa tình yêu quê hương từ những điều gần gũi nhất
                </h3>
                  <p className="font-['Be_Vietnam_Pro'] text-xs font-normal leading-relaxed text-neutral-600 sm:text-sm">
                    Cuộc thi “Tuyên Quang Trong Tôi” Nơi mỗi người gửi gắm góc nhìn về vẻ đẹp của quê hương mình
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-neutral-100 pt-6">
                  <span className="font-['Be_Vietnam_Pro'] text-sm font-medium uppercase text-neutral-400 sm:text-base">
                    12.06.2026
                  </span>
                  <button
                    type="button"
                    className="cursor-pointer rounded-tl-[12px] rounded-br-[12px] bg-[#167438] px-6 py-2.5 font-['Be_Vietnam_Pro'] text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-[#115b2c] active:scale-105 sm:px-8 sm:py-3 sm:text-sm"
                    >
                    XEM THÊM
                    </button>
                </div>
              </div>

              {/* Cột phải: Ảnh bài viết nổi bật */}
              <div className="relative aspect-[16/10] w-full overflow-hidden lg:col-span-6 lg:aspect-auto">
                <img
                  src={tintucAnhBia}
                  alt="Phát động cuộc thi Tuyên Quang Trong Tôi"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

            </div>
          </article>

          {/* TABS LỌC DANH MỤC */}
          <div className="mt-12 flex flex-wrap items-center gap-3 sm:gap-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-6 py-2 text-xs font-semibold transition-all duration-200 sm:px-7 sm:py-2.5 sm:text-sm ${
                    isActive
                      ? "bg-gradient-to-r from-[#95CA5C] to-[#167438] text-white shadow-sm"
                      : "border border-green-900 bg-transparent text-green-900 hover:bg-green-50"
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* LƯỚI BÀI VIẾT (3 CỘT) */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {filteredNews.map((item) => (
                <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                {/* Ảnh thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Nội dung card */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    
                    {/* TIÊU ĐỀ: Chỉ đổi màu xanh khi di chuột trực tiếp vào chữ tiêu đề */}
                    <h4 className="w-fit cursor-pointer font-['Be_Vietnam_Pro'] text-sm font-medium leading-snug text-black transition-colors duration-200 hover:text-[#167438] sm:text-base">
                    {item.title}
                    </h4>

                    <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
                    <span className="font-['Be_Vietnam_Pro'] text-xs font-medium text-neutral-400 sm:text-sm">
                        {item.date}
                    </span>
                    <button
                        type="button"
                        className="cursor-pointer font-['Be_Vietnam_Pro'] text-xs font-semibold text-[#167438] transition-all duration-200 hover:underline active:scale-105 sm:text-sm"
                    >
                        Xem thêm
                    </button>
                    </div>
                </div>
                </article>
            ))}
            </div>

        </div>
      </section>

    </div>
  )
}

export default NewsPage