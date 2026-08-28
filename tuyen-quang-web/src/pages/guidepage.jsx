import React, { useState, useEffect } from "react"

// Assets
import introduceCover from "../assets/introduce-cover.png"
import taiLieuIcon from "../assets/tailieu.png"
import xemThemIcon from "../assets/xemthem-icon.svg"

import boxDangKy from "../assets/boxdangky.jpg"
import dangKyIcon from "../assets/dangkyicon.webp"

// Cấu trúc dữ liệu các phần Hướng dẫn
const guideSections = [
  {
    id: "quy-dinh-chung",
    title: "QUY ĐỊNH CHUNG",
    items: [
      {
        id: "doi-tuong-tham-gia",
        subTitle: "Đối tượng tham gia",
        bullets: [
          "Đoàn viên, thanh niên.",
          "Công dân Việt Nam đang sinh sống, học tập và làm việc trong và ngoài tỉnh Tuyên Quang.",
          "Những người yêu thích nhiếp ảnh, không phân biệt chuyên nghiệp hay không chuyên.",
        ],
      },
      {
        id: "chu-de-cuoc-thi",
        subTitle: "Chủ đề cuộc thi",
        bullets: [
          "Con người Tuyên Quang",
          "Văn hóa và bản sắc",
          "Thiên nhiên và du lịch",
          "Tuổi trẻ Tuyên Quang",
          "Tuyên Quang hôm nay",
          "Bộ ảnh kể chuyện",
        ],
      },
      {
        id: "san-pham-du-thi",
        subTitle: "Sản phẩm dự thi",
        bullets: [
          "Ảnh đơn hoặc bộ ảnh.",
          "Mỗi tác giả được gửi tối đa 10 ảnh đơn hoặc 01 bộ ảnh.",
          "Tác phẩm phải được sáng tác tại Tuyên Quang.",
          "Nội dung lành mạnh, phù hợp thuần phong mỹ tục và pháp luật Việt Nam.",
        ],
      },
    ],
  },
  {
    id: "ho-so-va-cach-thuc",
    title: "HỒ SƠ VÀ CÁCH THỨC THAM GIA",
    items: [
      {
        id: "ho-so-du-thi",
        subTitle: "Hồ sơ dự thi",
        desc: "Hồ sơ dự thi bao gồm:",
        bullets: [
          "Họ và tên tác giả.",
          "Số điện thoại liên hệ.",
          "Email.",
          "Địa chỉ.",
          "Tên tác phẩm.",
          "Địa điểm chụp.",
          "Mô tả ngắn nội dung tác phẩm.",
        ],
      },
      {
        id: "cach-thuc-nop-bai",
        subTitle: "Cách thức nộp bài",
        desc: "Thí sinh nộp bài:",
        bullets: [
          "Trực tiếp trên website cuộc thi.",
          "Upload file ảnh theo hướng dẫn của hệ thống.",
        ],
      },
      {
        id: "quy-dinh-hop-le",
        subTitle: "Quy định về tính hợp lệ",
        bullets: [
          "Tác phẩm do chính tác giả thực hiện.",
          "Chưa từng đạt giải tại các cuộc thi khác.",
          "Không vi phạm bản quyền.",
          "Đáp ứng đầy đủ yêu cầu kỹ thuật.",
        ],
      },
    ],
  },
  {
    id: "quy-dinh-tac-pham",
    title: "QUY ĐỊNH ĐỐI VỚI TÁC PHẨM DỰ THI",
    items: [
      {
        id: "quy-dinh-chung-tp",
        subTitle: "Quy định chung",
        bullets: [
          "Không chứa nội dung phản cảm.",
          "Không vi phạm pháp luật.",
          "Không xuyên tạc lịch sử, văn hóa, con người.",
        ],
      },
      {
        id: "ban-quyen",
        subTitle: "Quy định về bản quyền và sở hữu trí tuệ",
        bullets: [
          "Tác giả chịu trách nhiệm về quyền tác giả.",
          "Không sử dụng trái phép hình ảnh của người khác.",
          "Ban tổ chức không chịu trách nhiệm đối với tranh chấp bản quyền.",
        ],
      },
      {
        id: "quyen-rieng-tu",
        subTitle: "Quy định về quyền riêng tư và bảo vệ nhân vật",
        bullets: [
          "Nhân vật trong ảnh phải được chụp hợp pháp.",
          "Không xâm phạm đời tư cá nhân.",
          "Không làm ảnh hưởng đến danh dự, nhân phẩm người được chụp.",
        ],
      },
      {
        id: "cong-nghe-ai",
        subTitle: "Quy định về việc sử dụng công nghệ AI",
        bullets: [
          "Không chấp nhận ảnh được tạo hoàn toàn bằng AI.",
          "Không sử dụng AI để thay đổi nội dung cốt lõi của bức ảnh.",
          "Chỉ cho phép các chỉnh sửa cơ bản như cân bằng sáng, màu sắc, cắt cúp ảnh.",
        ],
      },
      {
        id: "ky-thuat",
        subTitle: "Quy định kỹ thuật",
        bullets: [
          "Định dạng JPG/JPEG.",
          "Dung lượng tối đa 10MB/ảnh.",
          "Ảnh rõ nét, không vỡ hình.",
          "Ảnh màu hoặc đen trắng đều được chấp nhận.",
        ],
      },
    ],
  },
  {
    id: "trach-nhiem-thi-sinh",
    title: "TRÁCH NHIỆM CỦA THÍ SINH",
    items: [
      {
        id: "trach-nhiem-ts",
        subTitle: "Trách nhiệm của thí sinh",
        bullets: [
          "Chịu trách nhiệm về tính xác thực của tác phẩm.",
          "Cung cấp file gốc khi Ban tổ chức yêu cầu.",
          "Tuân thủ mọi quy định của cuộc thi.",
        ],
      },
    ],
  },
]

function GuidePage() {
  const [activeSection, setActiveSection] = useState("quy-dinh-chung")
  const [activeSubItem, setActiveSubItem] = useState("doi-tuong-tham-gia")

  useEffect(() => {
    const handleScroll = () => {
      const triggerOffset = 220
      let curSec = guideSections[0].id
      let curSub = guideSections[0].items[0].id

      for (const sec of guideSections) {
        for (const item of sec.items) {
          const element = document.getElementById(item.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= triggerOffset) {
              curSec = sec.id
              curSub = item.id
            }
          }
        }
      }

      setActiveSection(curSec)
      setActiveSubItem(curSub)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToElement = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -110
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO BANNER TRÀN VIỀN 100% */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[360px] w-full sm:h-[460px] lg:h-[540px]">
          <img
            src={introduceCover}
            alt="Hướng dẫn Cuộc thi Tuyên Quang Trong Tôi 2026"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 flex items-start">
            <div className="mx-auto w-full max-w-[1440px] px-6 pt-10 lg:px-[104px] lg:pt-16">
              <div className="max-w-[360px] sm:max-w-[440px] lg:max-w-[480px]">
                <h1 className="font-['Phudu'] text-3xl font-black uppercase text-black sm:text-4xl lg:text-5xl">
                  HƯỚNG DẪN
                </h1>
                <p className="mt-3 font-['Be_Vietnam_Pro'] text-xs font-normal leading-relaxed text-black sm:text-sm lg:text-[14px]">
                  Chỉ với vài bước đơn giản, hãy chia sẻ những khoảnh khắc đẹp về quê hương Tuyên Quang và lan tỏa giá trị tích cực đến cộng đồng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THÂN TRANG: CỘT TRÁI (MỤC LỤC STICKY) & CỘT PHẢI (Ô TRẮNG VIỀN XANH) */}
      <section className="w-full bg-gradient-to-b from-white via-stone-50/50 to-lime-50/30 py-12 lg:py-16">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-8 px-6 lg:grid-cols-12 lg:gap-14 lg:px-[104px]">
          
          {/* CỘT TRÁI: PHỤ LỤC STICKY */}
        <div className="top-28 self-start space-y-8 lg:sticky lg:col-span-4">
          <h2 className="font-['Phudu'] text-2xl font-black uppercase tracking-tight text-green-900 sm:text-3xl lg:text-4xl">
            HƯỚNG DẪN tham gia
          </h2>

          <nav className="space-y-6">
            {guideSections.map((sec) => {
              const isSecActive = activeSection === sec.id
              return (
                <div key={sec.id} className="space-y-2">
                  {/* Mục lớn */}
                  <button
                    type="button"
                    onClick={() => scrollToElement(sec.id)}
                    className={`group flex origin-left items-start gap-3 text-left transition-all duration-300 hover:scale-[1.03] ${
                      isSecActive ? "scale-[1.03]" : ""
                    }`}
                  >
                    <img
                      src={taiLieuIcon}
                      alt=""
                      className="mt-0.5 h-6 w-6 shrink-0 object-contain"
                    />
                    <span
                      className={`font-['Be_Vietnam_Pro'] text-base font-bold uppercase transition-colors duration-300 group-hover:text-[#167438] sm:text-lg ${
                        isSecActive ? "text-[#167438]" : "text-black"
                      }`}
                    >
                      {sec.title}
                    </span>
                  </button>

                  {/* Danh sách mục nhỏ: Chỉ mục đang đọc mới đổi màu xanh + phóng to */}
                  <ul className="space-y-2 pl-9">
                    {sec.items.map((item) => {
                      const isSubActive = activeSubItem === item.id
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
                          {item.subTitle}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </nav>
        </div>

        {/* CỘT PHẢI: NỘI DUNG CHI TIẾT */}
        <div className="relative w-full overflow-hidden rounded-[24px] border-2 border-[#167438] bg-white p-6 shadow-sm sm:p-10 lg:col-span-8 lg:p-12">
            {/* NÚT FORM ĐĂNG KÝ Ở GÓC TRÊN BÊN PHẢI */}
            <button
                type="button"
                className="absolute right-0 top-0 flex items-center justify-center gap-2.5 rounded-l-full bg-[#167438] bg-cover bg-center px-6 py-2.5 shadow-sm transition-all duration-200 hover:brightness-110 sm:px-7 sm:py-3"
                style={{
                backgroundImage: `url(${boxDangKy})`,
                }}
            >
                <img
                src={dangKyIcon}
                alt=""
                aria-hidden="true"
                className="h-5 w-5 object-contain"
                />
                <span className="font-['Be_Vietnam_Pro'] text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
                FORM ĐĂNG KÝ
                </span>
            </button>

          <div className="space-y-16">
            {guideSections.map((sec) => (
              <div
                key={sec.id}
                id={sec.id}
                className="scroll-mt-28 space-y-6 border-b border-neutral-100 pb-12 last:border-b-0 last:pb-0"
              >
                <h3 className="font-['Be_Vietnam_Pro'] text-2xl font-bold uppercase tracking-tight text-[#167438] sm:text-3xl">
                  {sec.title}
                </h3>

                <div className="space-y-8">
                  {sec.items.map((item) => (
                    <div
                      key={item.id}
                      id={item.id}
                      className="scroll-mt-28 space-y-3"
                    >
                      <h4 className="font-['Be_Vietnam_Pro'] text-sm font-bold text-[#167438] sm:text-base">
                        {item.subTitle}
                      </h4>

                      {item.desc && (
                        <p className="font-['Be_Vietnam_Pro'] text-xs font-medium text-neutral-800 sm:text-sm">
                          {item.desc}
                        </p>
                      )}

                      <ul className="space-y-2">
                        {item.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
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
            ))}
          </div>
        </div>

        </div>
      </section>

    </div>
  )
}

export default GuidePage