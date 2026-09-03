import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { supabase } from "../supabaseClient"

import heroBackground from "../assets/hero-background.png"
import heroMapTuyenQuang from "../assets/hero-map-tuyen-quang.png"
import logoTuyenQuangDoc from "../assets/logo-tuyen-quang-doc.png"
import whiteLogoCuocThi from "../assets/whitelogo-cuocthi.png"
import iconDangKy from "../assets/icon-dang-ky.svg"
import iconTheLe from "../assets/icon-the-le.svg"
import mucDichHero from "../assets/muc-dich-hero.png"
import logo3D from "../assets/3d-logo.png"

import addressIcon from "../assets/address-icon.svg"
import loveIcon from "../assets/love-icon.svg"
import noLoveIcon from "../assets/nolove-icon.svg"
import shareIcon from "../assets/share.svg"

import cachThucIcon from "../assets/cachthuc-icon-1.svg"
import doiTuongIcon from "../assets/doituong-icon-1.svg"
import quyDinhIcon from "../assets/quy-dinh-icon-1.svg"
import tieuChuanIcon from "../assets/tieuchuan-icon-1.svg"

import categoryPeople from "../assets/rectangle-7.webp"
import categoryCulture from "../assets/rectangle-8.webp"
import categoryNature from "../assets/rectangle-9.webp"
import categoryYouth from "../assets/rectangle-10.webp"
import categoryToday from "../assets/rectangle-11.webp"
import categoryStory from "../assets/rectangle-12.webp"

import featuredImage from "../assets/rectangle-27.webp"
import contestRulesImage from "../assets/rectangle-46.jpg"

import timelineCuocThi from "../assets/timeline-cuoc-thi.png"

import giaiDacBiet from "../assets/dacbiet-1.png"
import giaiNhat from "../assets/nhat-1.png"
import giaiNhi from "../assets/nhi-1.png"
import giaiBa from "../assets/ba-1.png"

import prizeBackground from "../assets/rectangle-52.jpg"
import judgeBackground from "../assets/rectangle-54.jpg"
import sonSmile from "../assets/son-smile.png"

import tinTucAnhBia from "../assets/tintuc-anhbia.webp"
import xemThemIcon from "../assets/xemthem-icon.svg" 

import timeDemNguocBack from "../assets/timedemnguocback.jpg"
import calendarIcon from "../assets/calendaricon.svg"
import ShareModal from "./ShareModal"


// Tạo hoặc lấy mã thiết bị duy nhất lưu trong trình duyệt của người dùng
const getOrCreateDeviceId = () => {
  let deviceId = localStorage.getItem("tq_device_id")
  if (!deviceId) {
    deviceId = "dev_" + Math.random().toString(36).substring(2, 15) + Date.now().toString(36)
    localStorage.setItem("tq_device_id", deviceId)
  }
  return deviceId
}

const categories = [
  {
    title: "Con người\nTuyên Quang",
    image: categoryPeople,
  },
  {
    title: "Văn hóa\nvà Bản sắc",
    image: categoryCulture,
  },
  {
    title: "Thiên nhiên\nvà Du lịch",
    image: categoryNature,
  },
  {
    title: "Tuổi trẻ\nTuyên Quang",
    image: categoryYouth,
  },
  {
    title: "Tuyên Quang\nhôm nay",
    image: categoryToday,
  },
  {
    title: "Bộ ảnh\nkể chuyện",
    image: categoryStory,
  },
]

const contestRules = [
  {
    title: "Đối tượng tham gia",
    icon: doiTuongIcon,
    content:
      "Đoàn viên, thanh niên và những người yêu thích nhiếp ảnh, có niềm đam mê sáng tạo nghệ thuật, mong muốn ghi lại và lan tỏa những khoảnh khắc đẹp của cuộc sống, con người và quê hương.",
  },
  {
    title: "Quy định tác phẩm",
    icon: quyDinhIcon,
    content:
      "Tác phẩm phải được sáng tác tại Tuyên Quang, do chính tác giả thực hiện, không sử dụng AI, không vi phạm bản quyền. Mỗi tác giả tối đa 10 ảnh đơn và 01 bộ ảnh.",
  },
  {
    title: "Tiêu chuẩn ảnh",
    icon: tieuChuanIcon,
    content:
      "Ảnh màu hoặc đen trắng, định dạng JPG, dung lượng không vượt quá 10MB/ảnh, đảm bảo hình ảnh rõ nét, không bị vỡ hay giảm chất lượng.",
  },
  {
    title: "Cách thức gửi bài",
    icon: cachThucIcon,
    content:
      "Thí sinh nộp tác phẩm trực tiếp trên website của cuộc thi theo hướng dẫn được đăng tải trên hệ thống.",
  },
]

//giai
const prizes = [
  {
    id: 1,
    title: "Giải đặc biệt",
    amount: "5.000.000 VNĐ",
    note: "+ Cúp lưu niệm",
    icon: giaiDacBiet,
  },
  {
    id: 2,
    title: "Giải nhất",
    amount: "3.000.000 VNĐ",
    note: "",
    icon: giaiNhat,
  },
  {
    id: 3,
    title: "Giải nhì",
    amount: "2.000.000 VNĐ",
    note: "",
    icon: giaiNhi,
  },
  {
    id: 4,
    title: "Giải ba",
    amount: "2.000.000 VNĐ",
    note: "",
    icon: giaiBa,
  },
]

const timelineSteps = [
  {
    number: "01",
    title: "Phát động cuộc thi",
    date: "Đầu tháng 09/2026",
    left: "10.5%",
    top: "41%",
  },
  {
    number: "02",
    title: "Tiếp nhận tác phẩm",
    date: "Đến hết 15/09/2026",
    left: "30.5%",
    top: "28%",
  },
  {
    number: "03",
    title: "Chấm sơ khảo",
    date: "16/09 - 17/09/2026",
    left: "50%",
    top: "17%",
  },
  {
    number: "04",
    title: "Chấm chung khảo",
    date: "18/09 - 19/09/2026",
    left: "70%",
    top: "4%",
  },
  {
    number: "05",
    title: "Trao giải & Triển lãm",
    date: "20/09 - 23/09/2026",
    left: "89.5%",
    top: "-8%",
  },
]

const judges = [
  {
    id: 1,
    name: "Giám khảo 1",
    role: "Chức vụ",
    portrait: null,
  },
  {
    id: 2,
    name: "MR. Ma Văn Sơn",
    role: "Founder & CEO ATK Media Tuyên Quang",
    portrait: sonSmile,
  },
  {
    id: 3,
    name: "Giám khảo 1",
    role: "Chức vụ",
    portrait: null,
  },
  {
    id: 4,
    name: "Giám khảo 1",
    role: "Chức vụ",
    portrait: null,
  },
]

//tintuc

const newsItems = [
  {
    id: 1,
    title:
      'Cuộc thi “Tuyên Quang Trong Tôi” năm 2026: Công bố chi tiết thể lệ, hồ sơ và quy định dự thi',
    date: "06.2026",
  },
  {
    id: 2,
    title:
      'Phát động cuộc thi “Tuyên Quang Trong Tôi”, Tuyên Quang dưới góc nhìn tuổi trẻ năm 2026',
    date: "06.2026",
  },
]



// 1. ĐẶT HÀM NÀY Ở BÊN NGOÀI (ngay phía trên dòng "function HomePage()")
const calculateTimeLeft = () => {
  const targetDate = new Date("2026-09-15T23:59:59").getTime()
  const now = new Date().getTime()
  const difference = targetDate - now

  if (difference <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" }
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  }
}

// 2. KHỞI TẠO HOOK BÊN TRONG HÀM HOMEPAGE
function HomePage() {
  const [sharingPost, setSharingPost] = useState(null)
  
  // State đếm ngược thời gian
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  // Bộ đếm 1 giây cập nhật 1 lần
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Các state quản lý bài thi hiện tại
  const [posts, setPosts] = useState(
    Array.from({ length: 8 }, (_, index) => ({
      id: index + 1,
      title: "Đang cập nhật",
      author: "Đang cập nhật",
      code: String(index + 1).padStart(5, "0"),
      location: "Đang cập nhật",
      votes: 0,
      image: featuredImage,
    }))
  )
  const [activeTab, setActiveTab] = useState("latest")
  const [votedPostIds, setVotedPostIds] = useState(new Set())
  const [clientIp, setClientIp] = useState("")
  const [votingId, setVotingId] = useState(null)

  // ... các đoạn code phía dưới giữ nguyên

  // Xử lý danh sách bài thi hiển thị tương ứng với từng tab
  const displayedPosts = (() => {
    if (activeTab === "favorite") {
      // Tab 'Được yêu thích': Chỉ lọc các tác phẩm thiết bị này đã bấm vote
      return posts.filter((post) => votedPostIds.has(post.id))
    }

    if (activeTab === "most_voted") {
      // Tab 'Bình chọn nhiều': Sắp xếp toàn bộ bài thi theo số vote giảm dần
      return [...posts].sort((a, b) => b.votes - a.votes)
    }

    // Mặc định 'latest': Sắp xếp bài mới nhất (id lớn nhất) lên đầu
    return [...posts].sort((a, b) => b.id - a.id)
  })()



  // 1. Tự động lấy IP, nạp bài thi từ DB và kiểm tra các bài thiết bị đã vote
  useEffect(() => {
    const initData = async () => {
      const deviceId = getOrCreateDeviceId()

      // Lấy IP máy khách (phục vụ đối soát chống spam)
      let ip = "0.0.0.0"
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json")
        const ipData = await ipRes.json()
        ip = ipData.ip
        setClientIp(ip)
      } catch (err) {
        console.error("Không lấy được IP:", err)
      }

      // Nạp 8 bài thi từ Supabase
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
            image: p.image_url || featuredImage, // Lấy ảnh từ Supabase, nếu trống thì dùng ảnh mặc định
          }))
        )
        }
      } catch (e) {
        console.error("Lỗi nạp bài thi từ database:", e)
      }

      // Kiểm tra lịch sử bình chọn của riêng thiết bị này
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

  // 2. Hàm kích hoạt bình chọn an toàn qua Supabase RPC
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
        // Cập nhật trạng thái sang đã vote (đổi tim) và cập nhật số vote mới
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
  return (
    <>

    

    

      {/* Hero banner */}
  <section
  id="trang-chu"
  className="
    relative
    w-full
    overflow-hidden
    bg-cover
    bg-center
    bg-no-repeat
    px-4
    py-8
    sm:px-8
    lg:px-12
  "
  style={{
    backgroundImage: `url(${heroBackground})`,
  }}
>
  {/* Lớp ngoài tạo viền gradient */}
<div
  className="
    mx-auto
    w-full
    max-w-[1232px]
    rounded-[40px]
    bg-gradient-to-b
    from-[#93C156]
    to-[#F1DFC0]
    p-[10px]
  "
>
  {/* Lớp trong chứa toàn bộ nội dung Hero */}
  <div
    className="
      relative
      aspect-[1232/603]
      w-full
      overflow-hidden
      rounded-[30px]
    "
  >
    {/* Ảnh bản đồ phủ kín toàn bộ khung bo góc */}
    <img
      src={heroMapTuyenQuang}
      alt="Bản đồ minh họa các địa danh Tuyên Quang"
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
      "
    />

    {/* Logo dọc bên trái */}
    <img
      src={whiteLogoCuocThi}
      alt="Logo Tuyên Quang Trong Tôi 2026"
      className="
        absolute
        left-[7%]
        top-1/2
        z-10
        w-[23%]
        max-w-[285px]
        -translate-y-1/2
        object-contain
      "
    />

    {/* Nhóm nút: Tự co giãn theo tỉ lệ màn hình Mobile -> Tablet -> Desktop */}
    <div
      className="
        absolute
        bottom-[6%]
        left-1/2
        z-20
        flex
        -translate-x-1/2
        items-center
        gap-2.5
        sm:bottom-[7%]
        sm:gap-6
        md:gap-14
        lg:gap-24
      "
    >
      {/* Nút Đăng ký dự thi */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdzAR_AHMmZJ5Cb-vMl2iMLdSVdO37TceNPG-y6P79qmU2GTg/viewform?usp=publish-editor"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          h-6
          items-center
          justify-center
          gap-1.5
          whitespace-nowrap
          rounded
          border
          border-white
          bg-[#247A3E]
          px-2.5
          font-['Fz_Poppins']
          text-[10px]
          font-semibold
          !text-white
          shadow-md
          transition-all
          duration-200
          hover:scale-105
          hover:bg-[#1D6634]
          sm:h-8
          sm:min-w-[125px]
          sm:gap-2
          sm:rounded-md
          sm:px-4
          sm:text-xs
          md:h-10
          md:min-w-[165px]
          md:gap-3
          md:px-5
          md:text-sm
        "
      >
        <span className="text-white">Đăng ký dự thi</span>

        <img
          src={iconDangKy}
          alt=""
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 object-contain sm:h-4 sm:w-4 md:h-5 md:w-5"
        />
      </a>

      {/* Nút Xem thể lệ */}
      <Link
        to="/huong-dan"
        className="
          flex
          h-6
          items-center
          justify-center
          gap-1.5
          whitespace-nowrap
          rounded
          bg-white
          px-2.5
          font-['Fz_Poppins']
          text-[10px]
          font-semibold
          !text-[#247A3E]
          shadow-md
          transition-all
          duration-200
          hover:scale-105
          hover:bg-green-50
          sm:h-8
          sm:min-w-[110px]
          sm:gap-2
          sm:rounded-md
          sm:px-4
          sm:text-xs
          md:h-10
          md:min-w-[145px]
          md:gap-3
          md:px-5
          md:text-sm
        "
      >
        <span className="text-[#247A3E]">Xem thể lệ</span>

        <img
          src={iconTheLe}
          alt=""
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 object-contain sm:h-4 sm:w-4 md:h-5 md:w-5"
        />
      </Link>
    </div>

  </div>
  </div>
  </section>

  {/* Khối Đếm ngược thời gian nhận ảnh */}
      <section className="relative w-full overflow-hidden bg-[#1F6E33]">
        {/* Ảnh nền thiên nhiên 100% chiều ngang */}
        <img
          src={timeDemNguocBack}
          alt="Nền đếm ngược cuộc thi Tuyên Quang Trong Tôi"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Khung nội dung trung tâm căn giữa */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-4 py-8 lg:h-[298px] lg:py-0">
          
          {/* 1. Thanh tiêu đề thời hạn nhận ảnh: Chiều ngang cố định 595px, chữ to rõ */}
          <div className="flex h-12 w-full max-w-[595px] items-center justify-center gap-3 rounded-full bg-[#0D4E22] px-6 shadow-md sm:h-14">
            <img
              src={calendarIcon}
              alt=""
              aria-hidden="true"
              className="h-5 w-5 shrink-0 object-contain brightness-0 invert sm:h-6 sm:w-6"
            />
            <span className="font-['Phudu'] text-sm font-black uppercase tracking-wide text-white sm:text-lg lg:text-[20px]">
              Thời hạn nhận ảnh đến hết ngày: 15 – 09 – 2026
            </span>
          </div>

          {/* 2. Bộ 4 ô đếm ngược: Khống chế max-w-[595px] và justify-between để 2 mép ngoài thẳng tắp với thanh tiêu đề */}
          <div className="mt-4 flex w-full max-w-[595px] items-center justify-between">
            {/* Ô Ngày */}
            <div className="flex h-24 w-[68px] flex-col items-center justify-center rounded-[16px] border-[2.5px] border-white bg-gradient-to-b from-[#F7FEE9] to-[#D5F39B] shadow-sm sm:h-32 sm:w-24 sm:rounded-[20px] lg:h-[142px] lg:w-[118px] lg:rounded-[22px] lg:border-[3px]">
              <span className="font-['Phudu'] text-3xl font-bold leading-tight text-[#0D4E22] sm:text-4xl lg:text-[48px]">
                {timeLeft.days}
              </span>
              <span className="mt-0.5 font-['Fz_Poppins'] text-xs font-semibold text-[#0D4E22] sm:text-sm lg:text-[14px]">
                Ngày
              </span>
            </div>

            <span className="font-['Phudu'] text-xl font-bold text-white sm:text-2xl lg:text-[28px]">:</span>

            {/* Ô Giờ */}
            <div className="flex h-24 w-[68px] flex-col items-center justify-center rounded-[16px] border-[2.5px] border-white bg-gradient-to-b from-[#F7FEE9] to-[#D5F39B] shadow-sm sm:h-32 sm:w-24 sm:rounded-[20px] lg:h-[142px] lg:w-[118px] lg:rounded-[22px] lg:border-[3px]">
              <span className="font-['Phudu'] text-3xl font-bold leading-tight text-[#0D4E22] sm:text-4xl lg:text-[48px]">
                {timeLeft.hours}
              </span>
              <span className="mt-0.5 font-['Fz_Poppins'] text-xs font-semibold text-[#0D4E22] sm:text-sm lg:text-[14px]">
                Giờ
              </span>
            </div>

            <span className="font-['Phudu'] text-xl font-bold text-white sm:text-2xl lg:text-[28px]">:</span>

            {/* Ô Phút */}
            <div className="flex h-24 w-[68px] flex-col items-center justify-center rounded-[16px] border-[2.5px] border-white bg-gradient-to-b from-[#F7FEE9] to-[#D5F39B] shadow-sm sm:h-32 sm:w-24 sm:rounded-[20px] lg:h-[142px] lg:w-[118px] lg:rounded-[22px] lg:border-[3px]">
              <span className="font-['Phudu'] text-3xl font-bold leading-tight text-[#0D4E22] sm:text-4xl lg:text-[48px]">
                {timeLeft.minutes}
              </span>
              <span className="mt-0.5 font-['Fz_Poppins'] text-xs font-semibold text-[#0D4E22] sm:text-sm lg:text-[14px]">
                Phút
              </span>
            </div>

            <span className="font-['Phudu'] text-xl font-bold text-white sm:text-2xl lg:text-[28px]">:</span>

            {/* Ô Giây */}
            <div className="flex h-24 w-[68px] flex-col items-center justify-center rounded-[16px] border-[2.5px] border-white bg-gradient-to-b from-[#F7FEE9] to-[#D5F39B] shadow-sm sm:h-32 sm:w-24 sm:rounded-[20px] lg:h-[142px] lg:w-[118px] lg:rounded-[22px] lg:border-[3px]">
              <span className="font-['Phudu'] text-3xl font-bold leading-tight text-[#0D4E22] sm:text-4xl lg:text-[48px]">
                {timeLeft.seconds}
              </span>
              <span className="mt-0.5 font-['Fz_Poppins'] text-xs font-semibold text-[#0D4E22] sm:text-sm lg:text-[14px]">
                Giây
              </span>
            </div>
          </div>

          {/* 3. Dòng thông số cuộc thi */}
          <p className="mt-3.5 font-['Fz_Poppins'] text-xs font-semibold text-white drop-shadow-sm sm:text-sm lg:text-[15px]">
            Hạng mục: <span className="font-black">06</span> &nbsp;–&nbsp; Triển lãm:{" "}
            <span className="font-black">70–100 tác phẩm</span> &nbsp;–&nbsp; Tổng giải thưởng:{" "}
            <span className="font-black">20</span>
          </p>

        </div>
      </section>

            {/* Mục đích, ý nghĩa và thông điệp cuộc thi */}
      <section
        id="gioi-thieu"
        className="
          relative
          isolate
          w-full
          overflow-hidden
          bg-[#F7F9E9]
        "
      >
        {/* Ảnh nền toàn bộ section */}
        <img
          src={mucDichHero}
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            -z-20
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Lớp phủ nhẹ để phần chữ phía trên dễ đọc */}
        <div
          className="
            absolute
            inset-0
            -z-10
            bg-gradient-to-b
            from-[#F8FBEA]/95
            via-[#F8FBEA]/30
            to-transparent
          "
        />

        <div
          className="
            mx-auto
            min-h-[900px]
            w-full
            max-w-[1440px]
            px-4
            py-14
            sm:px-8
            lg:min-h-[1256px]
            lg:px-[104px]
            lg:py-20
          "
        >
          {/* Hàng trên: Khối mục đích và logo 3D */}
          <div
            className="
              grid
              items-center
              gap-10
              lg:grid-cols-[minmax(0,768px)_396px]
              lg:gap-16
            "
          >
            {/* Khối nội dung mục đích */}
            <div
            className="
              w-full
              rounded-[40px]
              bg-gradient-to-b
              from-[#93C156]
              to-[#F1DFC0]
              p-[13px]
              shadow-sm
            "
          >
            <div
              className="
                min-h-[358px]
                w-full
                rounded-[28px]
                bg-gradient-to-b
                from-[#FFFFFF]
                to-[#FAFFE7]
                px-6
                py-8
                sm:px-10
                lg:px-12
                lg:pb-14
                lg:pt-9
              "
            >
              <h2
                className="
                  font-['Phudu']
                  text-2xl
                  font-black
                  uppercase
                  leading-tight
                  text-green-900
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Mục đích – Ý nghĩa cuộc thi
              </h2>

              <div
                className="
                  mt-6
                  font-['Fz_Poppins']
                  text-sm
                  font-normal
                  leading-7
                  text-black
                  sm:text-base
                "
              >
                <p>
                  Tạo một sân chơi sáng tạo, lành mạnh dành cho đoàn viên,
                  thanh niên và những người yêu nhiếp ảnh; góp phần khơi dậy
                  đam mê, phát huy khả năng ghi lại những khoảnh khắc đẹp của
                  cuộc sống. Cuộc thi đồng thời quảng bá hình ảnh quê hương,
                  con người Tuyên Quang, xây dựng nguồn tư liệu hình ảnh chất
                  lượng phục vụ công tác truyền thông và lan tỏa các giá trị
                  tích cực đến cộng đồng.
                </p>

                <p className="mt-5">
                  Bên cạnh đó, đây cũng là hoạt động nhằm phát huy vai trò
                  xung kích của tuổi trẻ và kết nối cộng đồng yêu nhiếp ảnh
                  trong và ngoài địa phương.
                </p>
              </div>
            </div>
            </div>

            {/* Logo 3D bên phải */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={logo3D}
                alt="Biểu tượng cuộc thi Tuyên Quang Trong Tôi 2026"
                className="
                  h-auto
                  w-[250px]
                  object-contain
                  sm:w-[320px]
                  lg:w-[396px]
                "
              />
            </div>
          </div>

          {/* Thông điệp cuộc thi */}
          <div
            className="
              mt-20
              flex
              w-full
              flex-col
              items-start
              lg:mt-28
              lg:items-end
            "
          >
            <h2
              className="
                font-['Phudu']
                text-3xl
                font-black
                uppercase
                leading-tight
                text-green-900
                lg:text-right
                lg:text-4xl
              "
            >
              Thông điệp cuộc thi
            </h2>

            <div
              className="
                mt-6
                flex
                max-w-[980px]
                items-start
                gap-4
                lg:gap-6
              "
            >
              {/* Icon dấu ngoặc kép vẽ bằng SVG */}
              <svg
                viewBox="0 0 64 52"
                fill="none"
                aria-hidden="true"
                className="
                  mt-1
                  h-10
                  w-12
                  shrink-0
                  text-[#38813C]
                  lg:h-12
                  lg:w-14
                "
              >
                <path
                  d="M5 4H27V24H17C17 32 21 38 29 42L22 51C8 45 2 35 2 22V7C2 5.34 3.34 4 5 4Z"
                  fill="currentColor"
                />

                <path
                  d="M37 4H59V24H49C49 32 53 38 61 42L54 51C40 45 34 35 34 22V7C34 5.34 35.34 4 37 4Z"
                  fill="currentColor"
                />
              </svg>

              <p
                className="
                  font-['Fz_Poppins']
                  text-sm
                  font-normal
                  leading-7
                  text-black
                  sm:text-base
                  lg:text-right
                "
              >
                Có những vẻ đẹp hiện hữu trong từng khoảnh khắc đời thường,
                trong nụ cười, việc làm ý nghĩa và những nét đẹp của quê hương
                Tuyên Quang. Mỗi bức ảnh, mỗi thước phim không chỉ lưu giữ kỷ
                niệm mà còn kể những câu chuyện đẹp, góp phần lan tỏa tình yêu
                quê hương, niềm tự hào và những giá trị nhân văn trong cuộc
                sống.
              </p>
            </div>
          </div>
        </div>
      </section>    
      
      {/* Hạng mục dự thi, bài thi nổi bật và thể lệ cuộc thi */}
<section
  id="bai-thi"
  className="
    w-full
    bg-gradient-to-b
    from-yellow-50
    via-lime-50
    to-orange-100
    px-4
    py-16
    sm:px-8
    lg:px-12
  "
>
  <div className="mx-auto w-full max-w-[1232px]">
    {/* Hạng mục dự thi */}
    <div>
      <h2
        className="
          font-['Phudu']
          text-3xl
          font-[800]
          uppercase
          leading-tight
          text-green-900
          sm:text-4xl
        "
      >
        Hạng mục dự thi
      </h2>

      {/* Lưới 6 thẻ hạng mục */}
      <div
        className="
          mt-8
          grid
          grid-cols-2
          gap-3
          sm:grid-cols-3
          sm:gap-3.5
          lg:grid-cols-6
          lg:gap-3.5
        "
      >
        {categories.map((category) => (
          <button
            key={category.title}
            type="button"
            className="
              group
              relative
              aspect-[4/5]
              w-full
              overflow-hidden
              rounded-[22px]
              bg-white
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
            "
          >
            {/* Ảnh nền danh mục */}
            <img
              src={category.image}
              alt={category.title.replace("\n", " ")}
              className="
                h-full
                w-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />

            {/* Hộp chữ: Tràn khít mép trên và 2 bên, bo tròn cong mép đáy */}
            <div
              className="
                absolute
                inset-x-0
                top-0
                flex
                h-[62px]
                items-center
                justify-center
                overflow-hidden
                rounded-t-[22px]
                rounded-b-[18px]
                border-[3px]
                border-[#268B45]
                bg-white
                px-2
                shadow-sm
                transition-all
                duration-300
                group-hover:border-[#1E6D34]
              "
            >
              {/* Nền gradient xanh phủ lên khi rê chuột */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#85C446]
                  via-[#4DA53E]
                  to-[#1E6D34]
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* Tên hạng mục: Đổi chữ trắng khi hover */}
              <span
                className="
                  relative
                  z-10
                  whitespace-pre-line
                  text-center
                  font-['Fz_Poppins']
                  text-xs
                  font-bold
                  uppercase
                  leading-4
                  text-[#1A6C35]
                  transition-colors
                  duration-300
                  group-hover:!text-white
                  lg:text-[13px]
                "
              >
                {category.title}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>

    {/* Khối Tiêu đề + Bộ lọc Bài thi nổi bật */}
    <div className="mt-16 overflow-hidden rounded-[36px] bg-gradient-to-r from-[#60A54C] via-[#237837] to-[#60A54C] px-6 py-8 text-center shadow-md">
      <h2 className="font-['Phudu'] text-3xl font-[800] uppercase text-white sm:text-4xl">
        Bài thi nổi bật
      </h2>

      {/* Bộ lọc 3 tab chuẩn giao diện */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => setActiveTab("latest")}
          className={`rounded-full px-6 py-2 font-['Fz_Poppins'] text-[15px] font-semibold transition ${
            activeTab === "latest"
              ? "bg-white text-[#1C753A] shadow-md"
              : "border border-white/40 text-white hover:bg-white/10"
          }`}
        >
          Mới nhất
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("favorite")}
          className={`rounded-full px-6 py-2 font-['Fz_Poppins'] text-[15px] font-semibold transition ${
            activeTab === "favorite"
              ? "bg-white text-[#1C753A] shadow-md"
              : "border border-white/40 text-white hover:bg-white/10"
          }`}
        >
          Được yêu thích
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("most_voted")}
          className={`rounded-full px-6 py-2 font-['Fz_Poppins'] text-[15px] font-semibold transition ${
            activeTab === "most_voted"
              ? "bg-white text-[#1C753A] shadow-md"
              : "border border-white/40 text-white hover:bg-white/10"
          }`}
        >
          Bình chọn nhiều
        </button>
      </div>
    </div>

    {/* Xử lý hiển thị: Nếu tab 'Được yêu thích' chưa có bài thì báo rỗng, ngược lại vẽ lưới bài thi */}
    {activeTab === "favorite" && displayedPosts.length === 0 ? (
      <div className="mt-10 rounded-[24px] border border-dashed border-[#8DC359] bg-white/70 py-12 text-center shadow-sm">
        <p className="font-['Fz_Poppins'] text-base font-semibold text-[#1C753A]">
          Bạn chưa bình chọn cho tác phẩm nào
        </p>
        <p className="mt-1.5 font-['Fz_Poppins'] text-xs text-neutral-500">
          Hãy bấm "Bình Chọn" ở các tác phẩm bạn ấn tượng để lưu vào danh sách này nhé!
        </p>
      </div>
    ) : (
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                <h3 className="font-['Fz_Poppins'] text-[15px] font-bold leading-tight text-black line-clamp-1">
                  {post.title}
                </h3>
                <p className="mt-1 font-['Fz_Poppins'] text-[13px] font-normal text-neutral-800 line-clamp-1">
                  {post.author}
                </p>
                <div className="mt-2.5 flex items-center justify-between font-['Fz_Poppins'] text-xs text-neutral-800">
                  <span>Mã số: {post.code || String(post.id).padStart(5, "0")}</span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-neutral-800">
                    <img src={addressIcon} alt="" className="h-3.5 w-3.5 object-contain" />
                    {post.location}
                  </span>
                </div>
              </div>

              {/* Đường kẻ ngang */}
              <div className="mt-3 border-t border-neutral-100" />

              {/* Hàng tương tác */}
              <div className="mt-3 flex items-center justify-between px-0.5">
                <div className="flex items-center gap-1.5">
                  <img
                    src={loveIcon}
                    alt=""
                    className="h-5 w-5 object-contain"
                  />
                  <span className="font-['Fz_Poppins'] text-xs font-bold text-black">
                    {post.votes}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSharingPost(post)}
                    className="flex items-center justify-center transition hover:scale-105 hover:opacity-85"
                    title="Chia sẻ"
                  >
                    <img
                      src={shareIcon}
                      alt="Chia sẻ"
                      className="h-7 w-7 object-contain"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleVote(post)}
                    disabled={isVoted || isVoting}
                    className={`rounded-full px-4 py-1.5 font-['Fz_Poppins'] text-xs font-semibold tracking-wide transition ${
                      isVoted
                        ? "bg-neutral-300 text-neutral-600 cursor-not-allowed"
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
      <Link
        to="/danh-sach-bai-thi"
        className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-[#4FA83D] px-8 py-2 font-['Fz_Poppins'] text-sm font-semibold shadow-sm transition-all duration-300 hover:border-transparent hover:shadow-md active:scale-95"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#207234] via-[#388D3B] to-[#7DBE43] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <img
          src={xemThemIcon}
          alt=""
          className="relative z-10 h-3.5 w-3.5 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <span className="relative z-10 text-[#1C753A] transition-colors duration-300 group-hover:!text-white">
          Xem thêm
        </span>
      </Link>
    </div>

    {/* Thể lệ cuộc thi */}
    <div id="the-le" className="mt-20">
      <div
        className="
          rounded-[40px]
          border-[5px]
          border-white
          bg-gradient-to-b
          from-[#FFFFFF]
          via-[#FAFFE8]
          to-[#EBFBCA]
          px-6
          py-10
          shadow-sm
          sm:px-10
          lg:rounded-[58px]
          lg:px-14
          lg:py-14
        "
      >
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[320px_minmax(0,1fr)]
            lg:gap-16
          "
        >
          {/* Cột ảnh điện thoại */}
          <div>
            <h2
              className="
                mb-8
                font-['Phudu']
                text-3xl
                font-[800]
                uppercase
                leading-tight
                text-green-900
                sm:text-4xl
              "
            >
              Thể lệ cuộc thi
            </h2>

            <img
              src={contestRulesImage}
              alt="Hướng dẫn gửi bài dự thi trên điện thoại"
              className="
                mx-auto
                w-full
                max-w-[320px]
                rounded-3xl
                border-[5px]
                border-[#8DC359]
                object-cover
              "
            />
          </div>

          {/* Cột nội dung thể lệ */}
          <div className="space-y-9">
            {contestRules.map((rule) => (
              <div
                key={rule.title}
                className="
                  grid
                  grid-cols-[32px_minmax(0,1fr)]
                  gap-4
                "
              >
                <img
                  src={rule.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-7 w-7 object-contain"
                />

                <div>
                  <h3
                    className="
                      font-['Fz_Poppins']
                      text-lg
                      font-bold
                      uppercase
                      text-green-900
                      sm:text-xl
                    "
                  >
                    {rule.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      font-['Fz_Poppins']
                      text-sm
                      font-normal
                      leading-6
                      text-black
                      sm:text-base
                    "
                  >
                    {rule.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Cơ cấu giải thưởng, các vòng thi và ban giám khảo */}
<section
  id="giai-thuong"
  className="
    w-full
    bg-[#FFF3D9]
    px-4
    pb-0
    pt-0
    sm:px-5
    lg:px-5
  "
>

  <div
  className="
    mx-auto
    w-full
    max-w-none
    overflow-hidden
    rounded-[72px]
    bg-gradient-to-r
    from-[#60A54C]
    via-[#1D602C]
    to-[#4A9445]
    px-5
    pb-24
    pt-12
    sm:px-8
    sm:pb-28
    lg:rounded-[117px]
    lg:px-[104px]
    lg:pb-32
    lg:pt-14
  "
>

    {/* Cơ cấu giải thưởng */}
    <div>
      <h2
        className="
          font-['Phudu']
          text-3xl
          font-[800]
          uppercase
          leading-tight
          text-white
          sm:text-4xl
        "
      >
        Cơ cấu giải thưởng
      </h2>

      {/* Danh sách giải thưởng */}
      <div
        className="
          mt-10
          grid
          grid-cols-1
          gap-7
          lg:grid-cols-2
          lg:gap-x-20
          lg:gap-y-12
        "
      >
        {prizes.map((prize) => (
          <article
            key={prize.id}
            className="
              relative
              min-h-[140px]
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-sm
            "
          >
            {/* Ảnh nền giải thưởng */}
            <img
              src={prizeBackground}
              alt=""
              aria-hidden="true"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            <div
              className="
                relative
                z-10
                flex
                min-h-[140px]
                items-center
                px-4
                py-3
                sm:px-6
              "
            >
              {/* Huy chương hoặc cúp */}
              <div
                className="
                  flex
                  w-[105px]
                  shrink-0
                  items-center
                  justify-center
                  sm:w-[130px]
                "
              >
                <img
                  src={prize.icon}
                  alt={prize.title}
                  className="
                    h-[105px]
                    w-[105px]
                    object-contain
                    sm:h-[120px]
                    sm:w-[120px]
                  "
                />
              </div>

              {/* Nội dung giải */}
              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  items-start
                  justify-center
                  pl-2
                  sm:pl-4
                "
              >
                <div
                  className="
                    flex
                    min-h-10
                    min-w-[170px]
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-b
                    from-[#88BF57]
                    to-[#287C3D]
                    px-6
                    py-1.5
                    text-center
                    text-base
                    font-semibold
                    uppercase
                    text-white
                    sm:min-w-[224px]
                    sm:text-xl
                  "
                >
                  {prize.title}
                </div>

                <p
                  className="
                    mt-2
                    whitespace-nowrap
                    text-xl
                    font-bold
                    uppercase
                    text-green-900
                    sm:text-3xl
                  "
                >
                  {prize.amount}
                </p>

                {prize.note && (
                  <p
                    className="
                      mt-1
                      text-sm
                      font-bold
                      uppercase
                      text-black
                      sm:text-base
                    "
                  >
                    {prize.note}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>

    {/* Các vòng cuộc thi */}
    <div className="mt-20 lg:mt-24">
      <h2
        className="
          font-['Phudu']
          text-3xl
          font-[800]
          uppercase
          leading-tight
          text-white
          sm:text-4xl
        "
      >
        Tiến Trình Cuộc Thi
      </h2>

      {/* Timeline trên desktop */}
      <div
        className="
          relative
          mt-12
          hidden
          h-[410px]
          w-full
          lg:block
        "
      >
        <img
          src={timelineCuocThi}
          alt=""
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-0
            h-auto
            w-full
            object-contain
          "
        />

        {timelineSteps.map((step) => (
          <div
            key={step.number}
            className="
              absolute
              z-10
              flex
              w-[190px]
              -translate-x-1/2
              flex-col
              items-center
              text-center
            "
            style={{
              left: step.left,
              top: step.top,
            }}
          >
            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-[#9DD253]
              "
            >
              <span
                className="
                  font-['Phudu']
                  text-4xl
                  font-[800]
                  text-white
                "
              >
                {step.number}
              </span>
            </div>

            <h3
              className="
                mt-12
                text-lg
                font-bold
                uppercase
                leading-6
                text-white
              "
            >
              {step.title}
            </h3>

            <p
              className="
                mt-4
                whitespace-nowrap
                text-xs
                font-normal
                uppercase
                text-white/90
              "
            >
              {step.date}
            </p>
          </div>
        ))}
      </div>

      {/* Timeline trên mobile và tablet */}
      <div
        className="
          mt-10
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:hidden
        "
      >
        {timelineSteps.map((step) => (
          <div
            key={step.number}
            className="
              flex
              min-h-[130px]
              items-center
              gap-5
              rounded-3xl
              bg-white/10
              p-5
              backdrop-blur-sm
            "
          >
            <div
              className="
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#9DD253]
              "
            >
              <span
                className="
                  font-['Phudu']
                  text-3xl
                  font-[800]
                  text-white
                "
              >
                {step.number}
              </span>
            </div>

            <div>
              <h3
                className="
                  text-base
                  font-bold
                  uppercase
                  text-white
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-2
                  text-xs
                  font-normal
                  uppercase
                  leading-5
                  text-white/80
                "
              >
                {step.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Ban giám khảo */}
    <div className="mt-20">
      <h2
        className="
          font-['Phudu']
          text-3xl
          font-[800]
          uppercase
          leading-tight
          text-white
          sm:text-4xl
        "
      >
        Ban giám khảo
      </h2>

      <div
        className="
          mt-10
          grid
          grid-cols-1
          gap-8
          sm:grid-cols-2
          lg:grid-cols-4
          lg:gap-7
        "
      >
        {judges.map((judge) => (
          <article
            key={judge.id}
            className="min-w-0"
          >
            {/* Thẻ ảnh giám khảo */}
            <div
            className="
              group
              relative
              aspect-[284/352]
              w-full
              overflow-hidden
              rounded-2xl
            "
          >
              <img
                src={judgeBackground}
                alt=""
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />

              {judge.portrait && (
                <img
                src={judge.portrait}
                alt={judge.name}
                className="
                  absolute
                  bottom-0
                  left-1/2
                  z-10
                  h-[88%]
                  w-auto
                  max-w-[78%]
                  -translate-x-1/2
                  origin-bottom
                  object-contain
                  object-bottom
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-[1.04]
                "
              />
              )}
            </div>

            <h3
              className="
                mt-5
                text-lg
                font-bold
                uppercase
                leading-6
                text-white
                sm:text-xl
              "
            >
              {judge.name}
            </h3>

            <p
              className="
                mt-2
                text-xs
                font-semibold
                leading-5
                text-white
              "
            >
              {judge.role}
            </p>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>


  {/* =========================================================
    TIN TỨC NỔI BẬT VÀ FOOTER
========================================================= */}

<div
  className="
    relative
    z-20
    -mt-12
    w-full
    bg-white
    sm:-mt-14
    lg:-mt-16
  "
>
  <div
  className="
    mx-auto
    w-full
    max-w-none
    bg-white
  "
>
    {/* Tin tức nổi bật */}
    <section
        id="tin-tuc"
        className="
          w-full
          rounded-t-[44px]
          bg-white
          px-5
          pb-12
          pt-10
          sm:rounded-t-[56px]
          sm:px-8
          lg:rounded-t-[76px]
          lg:px-[104px]
          lg:pb-[52px]
          lg:pt-12
        "
      >
      {/* Tiêu đề và nút xem thêm */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <h2
          className="
            font-['Phudu']
            text-3xl
            font-[800]
            uppercase
            leading-tight
            text-[#087232]
            sm:text-4xl
          "
        >
          Tin tức nổi bật
        </h2>

        <button
          type="button"
          className="
            inline-flex
            h-10
            w-fit
            min-w-[134px]
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-[#8DC359]
            bg-white
            px-5
            text-sm
            font-semibold
            text-[#087232]
            transition-colors
            hover:bg-lime-50
          "
        >
          <span>Xem thêm</span>

          <img
            src={xemThemIcon}
            alt=""
            aria-hidden="true"
            className="h-4 w-4 object-contain"
          />
        </button>
      </div>

      {/* Danh sách tin tức */}
      <div
        className="
          mt-8
          grid
          grid-cols-1
          gap-6
          lg:grid-cols-[minmax(0,526px)_minmax(0,1fr)]
          lg:gap-20
        "
      >
        {/* Tin chính */}
        <article
          className="
            group
            relative
            min-h-[302px]
            overflow-hidden
            rounded-[20px]
            bg-stone-100
          "
        >
          <img
            src={tinTucAnhBia}
            alt="Tin tức cuộc thi Tuyên Quang Trong Tôi 2026"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-x-4
              bottom-4
              rounded-[18px]
              bg-gradient-to-b
              from-white/95
              to-stone-50/95
              px-5
              py-4
              shadow-sm
              backdrop-blur-[2px]
            "
          >
            <h3
              className="
                text-sm
                font-semibold
                uppercase
                leading-5
                text-black
                sm:text-[15px]
              "
            >
              Cuộc thi “Tuyên Quang Trong Tôi” nơi mỗi người trẻ gửi gắm được
              góc nhìn về vẻ đẹp quê hương mình
            </h3>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <time className="text-xs font-medium uppercase text-neutral-400 sm:text-sm">
                12.06.2026
              </time>

              <button
                type="button"
                className="
                  inline-flex
                  h-8
                  min-w-[164px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[9px]
                  bg-[#167438]
                  px-5
                  text-xs
                  font-semibold
                  uppercase
                  text-white
                  transition-colors
                  hover:bg-[#0D5F2D]
                "
              >
                <span>Xem thêm</span>

                <img
                  src={xemThemIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-3.5 w-3.5 brightness-0 invert"
                />
              </button>
            </div>
          </div>
        </article>

        {/* Hai tin phụ */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-10">
          {newsItems.slice(0, 2).map((news) => (
            <article
              key={news.id}
              className="
                flex
                min-h-[302px]
                flex-col
                rounded-[10px]
                border
                border-neutral-200
                bg-gradient-to-b
                from-white
                to-[#FAFFF5]
                px-4
                py-5
                transition
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <h3 className="text-sm font-medium leading-5 text-[#087232]">
                {news.title}
              </h3>

              <div className="mt-auto">
                <div className="mb-4 h-px w-full bg-stone-300" />

                <div className="flex items-center justify-between gap-3">
                  <time className="text-xs font-normal uppercase text-neutral-400">
                    {news.date}
                  </time>

                  <button
                    type="button"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      uppercase
                      text-[#087232]
                      transition-colors
                      hover:text-green-950
                    "
                  >
                    <span>Xem thêm</span>

                    <img
                      src={xemThemIcon}
                      alt=""
                      aria-hidden="true"
                      className="h-3.5 w-3.5 object-contain"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    
  </div>
</div>


{/* Modal chia sẻ */}
      <ShareModal
        post={sharingPost}
        isOpen={Boolean(sharingPost)}
        onClose={() => setSharingPost(null)}
      />
    </>
  )
}



export default HomePage