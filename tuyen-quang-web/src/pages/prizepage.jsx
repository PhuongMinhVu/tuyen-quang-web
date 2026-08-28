import React, { useState, useEffect } from "react"

// Assets
import introduceCover from "../assets/introduce-cover.png"
import taiLieuIcon from "../assets/tailieu.png"
import xemThemIcon from "../assets/xemthem-icon.svg"
import boxDangKy from "../assets/boxdangky.jpg"
import dangKyIcon from "../assets/dangkyicon.webp"

// Cấu trúc dữ liệu Cơ cấu giải thưởng
const prizeData = {
  id: "co-cau-giai-thuong",
  title: "CƠ CẤU GIẢI THƯỞNG, HÌNH THỨC KHEN THƯỞNG",
  items: [
    {
      id: "giai-anh-don",
      title: "1. Giải ảnh đơn (05 hạng mục)",
      bullets: [
        "05 giải Nhất: Mỗi giải 2.000.000đ và Giấy chứng nhận của Ban Tổ chức.",
        "05 giải Nhì: Mỗi giải 1.000.000đ và Giấy chứng nhận của Ban Tổ chức.",
        "05 giải Ba: Mỗi giải 500.000đ và Giấy chứng nhận của Ban Tổ chức.",
      ],
    },
    {
      id: "giai-bo-anh",
      title: "2. Giải Bộ ảnh kể chuyện",
      bullets: [
        "01 giải Nhất: 3.000.000đ và Giấy chứng nhận của Ban Tổ chức.",
        "01 giải Nhì: 2.000.000đ và Giấy chứng nhận của Ban Tổ chức.",
        "01 giải Ba: 1.000.000đ và Giấy chứng nhận của Ban Tổ chức.",
      ],
    },
    {
      id: "giai-bo-sung",
      title: "3. Giải thưởng bổ sung",
      bullets: [
        "01 giải “Ảnh được yêu thích nhất”: 1.000.000đ và Giấy chứng nhận của Ban Tổ chức.",
      ],
    },
    {
      id: "quy-dinh-trao-thuong",
      title: "4. Quy định trao thưởng",
      bullets: [
        "Tổng số lượng giải thưởng: Gồm 20 giải với tổng giá trị tiền thưởng là 24.500.000 đồng.",
        "Hình thức khen thưởng: Các giải thưởng kèm theo tiền thưởng và Giấy chứng nhận của Ban Tổ chức.",
        "Phương thức nhận giải: Giải thưởng sẽ được trao trực tiếp cho các tác giả đạt giải hoặc người được tác giả đạt giải ủy quyền đến nhận thay.",
        "Quyền quyết định của Ban Tổ chức: Trường hợp không chọn được tác phẩm dự thi đạt yêu cầu, Ban Tổ chức có thể quyết định không trao một số giải trong cuộc thi.",
      ],
    },
  ],
}

function PrizePage() {
  const [activeItem, setActiveItem] = useState("giai-anh-don")

  // Scrollspy chuẩn xác theo vị trí thực tế trên màn hình
  useEffect(() => {
    const handleScroll = () => {
      const triggerOffset = 220 // Vị trí kích hoạt cách đỉnh màn hình
      let currentActive = prizeData.items[0].id

      for (const item of prizeData.items) {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Khi tiêu đề mục chạm đến đường mốc triggerOffset
          if (rect.top <= triggerOffset) {
            currentActive = item.id
          }
        }
      }

      setActiveItem(currentActive)
    }

    handleScroll() // Kiểm tra kích hoạt ngay khi vừa tải trang
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cuộn mượt khi click vào mục bên trái
  const scrollToElement = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -120
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div className="w-full bg-white font-['Be_Vietnam_Pro']">
      
      {/* 1. HERO BANNER TRÀN VIỀN 100% */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[360px] w-full sm:h-[460px] lg:h-[540px]">
          <img
            src={introduceCover}
            alt="Giải thưởng Cuộc thi Tuyên Quang Trong Tôi 2026"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 flex items-start">
            <div className="mx-auto w-full max-w-[1440px] px-6 pt-10 lg:px-[104px] lg:pt-16">
              <div className="max-w-[380px] sm:max-w-[460px] lg:max-w-[500px]">
                <h1 className="font-['Phudu'] text-3xl font-black uppercase text-black sm:text-4xl lg:text-5xl">
                  GIẢI THƯỞNG
                </h1>
                <p className="mt-3 font-['Be_Vietnam_Pro'] text-xs font-normal leading-relaxed text-black sm:text-sm lg:text-[14px]">
                  Cơ cấu giải thưởng và hình thức khen thưởng
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THÂN TRANG: CỘT TRÁI (STICKY MỤC LỤC) & CỘT PHẢI (KHUNG TRẮNG NỘI DUNG) */}
      <section className="w-full bg-gradient-to-b from-white via-stone-50/50 to-lime-50/30 py-12 lg:py-16">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-8 px-6 lg:grid-cols-12 lg:gap-14 lg:px-[104px]">
          
          {/* CỘT TRÁI: STICKY MỤC LỤC (Chiếm 4 cột) */}
          <div className="top-28 self-start space-y-8 lg:sticky lg:col-span-4">
            <h2 className="font-['Phudu'] text-2xl font-black uppercase tracking-tight text-green-900 sm:text-3xl lg:text-4xl">
              GIẢI THƯỞNG
            </h2>

            <nav className="space-y-4">
              <div className="space-y-3">
                
                {/* Tiêu đề mục cha */}
                <button
                  type="button"
                  onClick={() => scrollToElement("co-cau-giai-thuong")}
                  className="group flex origin-left items-start gap-3 text-left transition-all duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={taiLieuIcon}
                    alt=""
                    className="mt-0.5 h-6 w-6 shrink-0 object-contain"
                  />
                  <span className="font-['Be_Vietnam_Pro'] text-base font-bold uppercase text-green-900 transition-colors duration-300 group-hover:text-[#167438] sm:text-lg">
                    {prizeData.title}
                  </span>
                </button>

                {/* Danh sách mục con có Scrollspy & Hover */}
                <ul className="space-y-2 pl-9">
                  {prizeData.items.map((item) => {
                    const isSubActive = activeItem === item.id
                    return (
                      <li
                        key={item.id}
                        onClick={() => scrollToElement(item.id)}
                        className={`w-fit origin-left cursor-pointer font-['Be_Vietnam_Pro'] text-xs transition-all duration-200 hover:scale-105 hover:font-semibold hover:text-[#167438] sm:text-sm ${
                          isSubActive
                            ? "scale-105 font-semibold text-[#167438]"
                            : "font-normal text-black"
                        }`}
                      >
                        {item.title}
                      </li>
                    )
                  })}
                </ul>

              </div>
            </nav>
          </div>

          {/* CỘT PHẢI: KHUNG TRẮNG VIỀN XANH CÓ NÚT FORM ĐĂNG KÝ (Chiếm 8 cột) */}
          <div className="relative w-full overflow-hidden rounded-[24px] border-2 border-[#167438] bg-white p-6 shadow-sm sm:p-10 lg:col-span-8 lg:p-12">
            
            {/* Nút Form đăng ký ở góc trên bên phải */}
            <button
              type="button"
              className="absolute right-0 top-0 flex items-center justify-center gap-2 rounded-l-full bg-[#167438] bg-cover bg-center px-6 py-2.5 shadow-sm transition-all duration-200 hover:brightness-110 sm:px-7 sm:py-3"
              style={{
                backgroundImage: `url(${boxDangKy})`,
              }}
            >
              <img
                src={dangKyIcon}
                alt=""
                aria-hidden="true"
                className="h-4 w-4 object-contain sm:h-5 sm:w-5"
              />
              <span className="font-['Be_Vietnam_Pro'] text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
                FORM ĐĂNG KÝ
              </span>
            </button>

            {/* Nội dung chi tiết */}
            <div id="co-cau-giai-thuong" className="mt-6 space-y-8 sm:mt-4">
              
              {/* Tiêu đề chính trong khung */}
              <h3 className="max-w-[70%] font-['Be_Vietnam_Pro'] text-2xl font-bold uppercase tracking-tight text-[#167438] sm:text-3xl lg:text-4xl">
                {prizeData.title}
              </h3>

              <div className="space-y-8 pt-2">
                {prizeData.items.map((sec) => (
                  <div key={sec.id} id={sec.id} className="scroll-mt-28 space-y-3">
                    
                    {/* Tiêu đề từng giải thưởng */}
                    <h4 className="font-['Be_Vietnam_Pro'] text-sm font-bold text-[#167438] sm:text-base">
                      {sec.title}
                    </h4>

                    {/* Danh sách quyền lợi / chi tiết */}
                    <ul className="space-y-2">
                      {sec.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 font-['Be_Vietnam_Pro'] text-xs font-medium leading-relaxed text-neutral-800 sm:text-sm"
                        >
                          <img
                            src={xemThemIcon}
                            alt=""
                            aria-hidden="true"
                            className="mt-1 h-3.5 w-3.5 shrink-0 object-contain"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default PrizePage