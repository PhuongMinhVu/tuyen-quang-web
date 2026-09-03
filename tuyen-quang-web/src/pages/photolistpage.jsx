import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"

// Banner Cover chuẩn đồng bộ với các trang
import introduceCover from "../assets/introduce-cover.png"

// 5 Icon mới trên thanh công cụ
import Allicon from "../assets/allicon.svg"
import tacPhamIcon from "../assets/tacphamicon.svg"
import searchIcon from "../assets/searchicon.svg"
import loveIconXl from "../assets/loveiconxl.svg"
import loveIconFilter from "../assets/loveicon.svg"
import newIcon from "../assets/newicon.svg"

// Assets dùng chung từ hệ thống
import featuredImage from "../assets/rectangle-27.webp"
import addressIcon from "../assets/address-icon.svg"
import loveIconCard from "../assets/love-icon.svg"
import shareIcon from "../assets/share.svg"
import xemThemIcon from "../assets/xemthem-icon.svg"
import iconDangKy from "../assets/icon-dang-ky.svg"

// Tạo hoặc lấy mã thiết bị duy nhất lưu trong trình duyệt
const getOrCreateDeviceId = () => {
  let deviceId = localStorage.getItem("tq_device_id")
  if (!deviceId) {
    deviceId = "dev_" + Math.random().toString(36).substring(2, 15) + Date.now().toString(36)
    localStorage.setItem("tq_device_id", deviceId)
  }
  return deviceId
}

// Danh sách bài thi mẫu dự phòng
const defaultPosts = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  title: "Đang cập nhật",
  author: "Đang cập nhật",
  code: String(index + 1).padStart(5, "0"),
  location: "Đang cập nhật",
  votes: 0,
  image: featuredImage,
}))

export default function PhotoListPage() {
  const [posts, setPosts] = useState(defaultPosts)
  const [activeTab, setActiveTab] = useState("all") // 'all' | 'latest' | 'favorite' | 'most_voted'
  const [searchQuery, setSearchQuery] = useState("")
  const [votedPostIds, setVotedPostIds] = useState(new Set())
  const [clientIp, setClientIp] = useState("")
  const [votingId, setVotingId] = useState(null)

  // 1. Tải IP, nạp bài thi từ Supabase và lấy lịch sử vote của máy
  useEffect(() => {
    const initData = async () => {
      const deviceId = getOrCreateDeviceId()

      try {
        const ipRes = await fetch("https://api.ipify.org?format=json")
        const ipData = await ipRes.json()
        setClientIp(ipData.ip)
      } catch (err) {
        console.error("Không lấy được IP:", err)
      }

      // Nạp danh sách bài thi từ bảng posts
      try {
        const { data: postsData, error: postsError } = await supabase
          .from("posts")
          .select("*")
          .order("id", { ascending: true })

        if (!postsError && postsData && postsData.length > 0) {
          setPosts(
            postsData.map((p) => ({
              ...p,
              votes: p.votes_count || 0,
              image: p.image_url || featuredImage,
            }))
          )
        }
      } catch (e) {
        console.error("Lỗi nạp bài thi từ database:", e)
      }

      // Nạp danh sách ID các bài mà thiết bị này đã vote
      try {
        const { data: userVotes, error: votesError } = await supabase
          .from("votes")
          .select("post_id")
          .eq("device_id", deviceId)

        if (!votesError && userVotes) {
          const votedSet = new Set(userVotes.map((v) => Number(v.post_id)))
          setVotedPostIds(votedSet)
        }
      } catch (e) {
        console.error("Lỗi nạp lịch sử vote:", e)
      }
    }

    initData()
  }, [])

  // 2. Kích hoạt bình chọn qua RPC vote_post
  const handleVote = async (post) => {
    if (votedPostIds.has(post.id)) {
      alert("Thiết bị này đã bình chọn cho tác phẩm này rồi!")
      return
    }

    setVotingId(post.id)
    const deviceId = getOrCreateDeviceId()

    try {
      const { data, error } = await supabase.rpc("vote_post", {
        p_post_id: post.id,
        p_ip: clientIp || "0.0.0.0",
        p_device_id: deviceId,
      })

      if (error) {
        alert("Có lỗi xảy ra khi bình chọn: " + error.message)
        return
      }

      if (data && data.success) {
        setVotedPostIds((prev) => new Set([...prev, post.id]))
        setPosts((prev) =>
          prev.map((item) =>
            item.id === post.id ? { ...item, votes: data.votes_count } : item
          )
        )
      } else {
        alert(data?.message || "Bình chọn không thành công!")
      }
    } catch (err) {
      console.error("Lỗi kết nối bình chọn:", err)
    } finally {
      setVotingId(null)
    }
  }

  // 3. Lọc danh sách bài thi theo 4 Tab và từ khóa tìm kiếm
  const displayedPosts = (() => {
    let result = [...posts]

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.author?.toLowerCase().includes(q) ||
          p.code?.toLowerCase().includes(q) ||
          p.location?.toLowerCase().includes(q)
      )
    }

    if (activeTab === "favorite") {
      return result.filter((post) => votedPostIds.has(post.id))
    }

    if (activeTab === "most_voted") {
      return result.sort((a, b) => b.votes - a.votes)
    }

    if (activeTab === "latest") {
      return result.sort((a, b) => b.id - a.id)
    }

    // activeTab === 'all'
    return result
  })()

  return (
    <div className="w-full bg-white font-['Fz_Poppins']">
      
      {/* 1. HERO BANNER ĐẦU TRANG: ĐỒNG BỘ ẢNH INTRODUCE-COVER TRÀN VIỀN 100% */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[360px] w-full sm:h-[460px] lg:h-[540px]">
          <img
            src={introduceCover}
            alt="Danh sách bài thi Cuộc thi Tuyên Quang Trong Tôi 2026"
            className="h-full w-full object-cover object-center"
          />

          {/* Khối chữ dóng chuẩn container theo mép trái Logo Header */}
          <div className="absolute inset-0 flex items-start">
            <div className="mx-auto w-full max-w-[1440px] px-6 pt-10 lg:px-[104px] lg:pt-16">
              <div className="max-w-[380px] sm:max-w-[460px] lg:max-w-[520px]">
                <h1 className="font-['Phudu'] text-3xl font-black uppercase text-black sm:text-4xl lg:text-5xl">
                  DANH SÁCH BÀI THI
                </h1>
                <p className="mt-3 font-['Fz_Poppins'] text-xs font-normal leading-relaxed text-black sm:text-sm lg:text-[15px]">
                  Tổng hợp các tác phẩm tham gia cuộc thi – Khám phá và bình chọn cho bức ảnh bạn yêu thích nhất
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KHỐI NỘI DUNG CHÍNH (Căn chuẩn Container 1440px / px-[104px]) */}
      <section className="w-full bg-gradient-to-b from-white via-stone-50/40 to-stone-100/60 py-10 lg:py-14">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[104px]">
          
          {/* Banner Tiêu đề Cuộc thi */}
          <div className="flex h-16 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#7DC348] to-[#207A3B] px-4 shadow-sm ring-4 ring-white">
            <h2 className="font-['Phudu'] text-center text-xl font-black uppercase tracking-wide text-white sm:text-2xl lg:text-3xl">
              CUỘC THI TUYÊN QUANG TRONG TÔI
            </h2>
          </div>

          {/* Thanh công cụ: 4 Tab lọc + Ô tìm kiếm */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-300 bg-white p-2.5 shadow-sm lg:flex-nowrap">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              
              {/* Tab 1: Tất cả tác phẩm */}
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`group inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs transition duration-200 ${
                  activeTab === "all"
                    ? "bg-[#257E3B] text-white shadow-sm font-semibold"
                    : "text-neutral-800 hover:bg-[#257E3B] hover:!text-white font-medium"
                }`}
              >
                <img
                  src={Allicon}
                  alt=""
                  className={`h-4 w-4 object-contain transition duration-200 ${
                    activeTab === "all"
                      ? "brightness-0 invert"
                      : "group-hover:brightness-0 group-hover:invert"
                  }`}
                />
                <span className="transition-colors duration-200 group-hover:!text-white">
                  Tất cả tác phẩm
                </span>
              </button>

              <div className="hidden h-6 w-px bg-neutral-200 sm:block" />

              {/* Tab 2: Mới nhất */}
              <button
                type="button"
                onClick={() => setActiveTab("latest")}
                className={`group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs transition duration-200 ${
                  activeTab === "latest"
                    ? "bg-[#257E3B] text-white shadow-sm font-semibold"
                    : "text-neutral-800 hover:bg-[#257E3B] hover:!text-white font-medium"
                }`}
              >
                <img
                  src={newIcon}
                  alt=""
                  className={`h-4 w-4 object-contain transition duration-200 ${
                    activeTab === "latest"
                      ? "brightness-0 invert"
                      : "group-hover:brightness-0 group-hover:invert"
                  }`}
                />
                <span className="transition-colors duration-200 group-hover:!text-white">
                  Mới nhất
                </span>
              </button>

              <div className="hidden h-6 w-px bg-neutral-200 sm:block" />

              {/* Tab 3: Được yêu thích */}
              <button
                type="button"
                onClick={() => setActiveTab("favorite")}
                className={`group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs transition duration-200 ${
                  activeTab === "favorite"
                    ? "bg-[#257E3B] text-white shadow-sm font-semibold"
                    : "text-neutral-800 hover:bg-[#257E3B] hover:!text-white font-medium"
                }`}
              >
                <img
                  src={loveIconFilter}
                  alt=""
                  className={`h-4 w-4 object-contain transition duration-200 ${
                    activeTab === "favorite"
                      ? "brightness-0 invert"
                      : "group-hover:brightness-0 group-hover:invert"
                  }`}
                />
                <span className="transition-colors duration-200 group-hover:!text-white">
                  Được yêu thích
                </span>
              </button>

              <div className="hidden h-6 w-px bg-neutral-200 sm:block" />

              {/* Tab 4: Bình Chọn nhiều */}
              <button
                type="button"
                onClick={() => setActiveTab("most_voted")}
                className={`group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs transition duration-200 ${
                  activeTab === "most_voted"
                    ? "bg-[#257E3B] text-white shadow-sm font-semibold"
                    : "text-neutral-800 hover:bg-[#257E3B] hover:!text-white font-medium"
                }`}
              >
                <img
                  src={loveIconXl}
                  alt=""
                  className={`h-4 w-4 object-contain transition duration-200 ${
                    activeTab === "most_voted"
                      ? "brightness-0 invert"
                      : "group-hover:brightness-0 group-hover:invert"
                  }`}
                />
                <span className="transition-colors duration-200 group-hover:!text-white">
                  Bình Chọn nhiều
                </span>
              </button>
            </div>

            {/* Ô tìm kiếm */}
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm tác phẩm..."
                  className="h-10 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-xs font-normal text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#257E3B]"
                />
              </div>
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#257E3B] text-white transition hover:brightness-110"
                aria-label="Tìm kiếm"
              >
                <img src={searchIcon} alt="" className="h-4 w-4 object-contain brightness-0 invert" />
              </button>
            </div>
          </div>

          {/* Xử lý rỗng khi không có tác phẩm */}
          {activeTab === "favorite" && displayedPosts.length === 0 ? (
            <div className="mt-10 rounded-[24px] border border-dashed border-[#8DC359] bg-white/70 py-12 text-center shadow-sm">
              <p className="text-base font-semibold text-[#1C753A]">
                Bạn chưa bình chọn cho tác phẩm nào
              </p>
              <p className="mt-1.5 text-xs text-neutral-500">
                Hãy bấm "Bình Chọn" ở các tác phẩm bạn ấn tượng để lưu vào danh sách này nhé!
              </p>
            </div>
          ) : displayedPosts.length === 0 ? (
            <div className="mt-10 rounded-[24px] border border-dashed border-neutral-300 bg-white py-12 text-center shadow-sm">
              <p className="text-base font-semibold text-neutral-600">
                Không tìm thấy tác phẩm nào phù hợp
              </p>
            </div>
          ) : (
            /* Lưới bài thi chuẩn tỉ lệ 16:10, typography và styling trang chủ */
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {displayedPosts.map((post) => {
                const isVoted = votedPostIds.has(post.id)
                const isVoting = votingId === post.id

                return (
                  <article
                    key={post.id}
                    className="group overflow-hidden rounded-[20px] bg-white p-3.5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    {/* Khung ảnh chữ nhật ngang 16:10 */}
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-[14px]">
                      <img
                        src={post.image || featuredImage}
                        alt={post.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Thông tin bài thi */}
                    <div className="mt-3.5 px-0.5">
                      <h3 className="text-[15px] font-bold leading-tight text-black line-clamp-1">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-[13px] font-normal text-neutral-800 line-clamp-1">
                        {post.author}
                      </p>
                      <div className="mt-2.5 flex items-center justify-between text-xs text-neutral-800">
                        <span>Mã số: {post.code || String(post.id).padStart(5, "0")}</span>
                        <span className="inline-flex items-center gap-1.5 font-medium text-neutral-800">
                          <img src={addressIcon} alt="" className="h-3.5 w-3.5 object-contain" />
                          {post.location}
                        </span>
                      </div>
                    </div>

                    {/* Đường kẻ ngang ngăn cách */}
                    <div className="mt-3 border-t border-neutral-100" />

                    {/* Hàng tương tác: Số lượt vote & Nút Share / Bình Chọn */}
                    <div className="mt-3 flex items-center justify-between px-0.5">
                      <div className="flex items-center gap-1.5">
                        <img src={loveIconCard} alt="" className="h-5 w-5 object-contain" />
                        <span className="text-xs font-bold text-black">{post.votes}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="flex items-center justify-center transition hover:scale-105 hover:opacity-85"
                          title="Chia sẻ"
                        >
                          <img src={shareIcon} alt="Chia sẻ" className="h-7 w-7 object-contain" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleVote(post)}
                          disabled={isVoted || isVoting}
                          className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition ${
                            isVoted
                              ? "cursor-not-allowed bg-neutral-300 text-neutral-600"
                              : "bg-[#4FA83D] text-white hover:bg-[#439533]"
                          }`}
                        >
                          {isVoting ? "Đang vote..." : isVoted ? "Đã vote" : "Bình Chọn"}
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}

          {/* Nút Xem thêm */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-[#8DC359] bg-white px-7 py-2 text-xs font-semibold text-green-800 shadow-sm transition hover:bg-lime-50"
            >
              <img src={xemThemIcon} alt="" className="h-3.5 w-3.5 object-contain" />
              <span>Xem thêm</span>
            </button>
          </div>

          {/* Phân trang (Pagination) */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 transition hover:bg-neutral-50"
            >
              &lt;
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#257E3B] text-xs font-bold text-white shadow-sm"
            >
              01
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-xs font-medium text-neutral-600 transition hover:bg-neutral-50"
            >
              02
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-xs font-medium text-neutral-600 transition hover:bg-neutral-50"
            >
              03
            </button>
            <span className="px-1 text-xs text-neutral-400">...</span>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-xs font-medium text-neutral-600 transition hover:bg-neutral-50"
            >
              10
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-xs font-medium text-neutral-600 transition hover:bg-neutral-50"
            >
              &gt;
            </button>
          </div>

          {/* Banner CTA Đăng ký dự thi cuối trang */}
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-lime-200 bg-gradient-to-b from-white to-lime-100/70 p-6 shadow-sm sm:flex-row sm:px-10 sm:py-8">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-white to-lime-200 shadow-inner">
                <img src={tacPhamIcon} alt="" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <h3 className="font-['Phudu'] text-xl font-bold text-green-900 sm:text-2xl">
                  Bạn có tác phẩm ấn tượng?
                </h3>
                <p className="mt-1 text-xs text-neutral-600 sm:text-sm">
                  Tham gia cuộc thi ngay để chia sẻ những khoảnh khắc đẹp về Tuyên Quang
                </p>
              </div>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdzAR_AHMmZJ5Cb-vMl2iMLdSVdO37TceNPG-y6P79qmU2GTg/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lime-500 to-green-800 px-8 text-xs font-bold uppercase tracking-wider !text-white shadow-md transition hover:scale-105"
            >
              <img src={iconDangKy} alt="" className="h-4 w-4 object-contain brightness-0 invert" />
              <span className="!text-white">ĐĂNG KÝ DỰ THI NGAY</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}