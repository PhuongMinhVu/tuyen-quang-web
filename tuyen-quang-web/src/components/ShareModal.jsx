import React, { useState } from "react"

function ShareModal({ post, isOpen, onClose }) {
  const [copied, setCopied] = useState(false)

  if (!isOpen || !post) return null

  // Đường link chia sẻ dẫn thẳng tới tác phẩm
  const shareUrl = `${window.location.origin}/#post-${post.code || post.id}`
  const shareTitle = `Bình chọn cho tác phẩm "${post.title}" của tác giả ${post.author} tại Cuộc thi ảnh "Tuyên Quang trong tôi 2026"`

  // 1. Sao chép link vào bộ nhớ tạm
  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // 2. Chia sẻ qua Web Share API (kích hoạt khay ứng dụng hệ thống trên Mobile: Tin nhắn, Messenger, Zalo...)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: `Hãy cùng bình chọn cho tác phẩm "${post.title}"!`,
          url: shareUrl,
        })
      } catch (err) {
        if (err.name !== "AbortError") console.error("Lỗi share:", err)
      }
    } else {
      handleCopy()
    }
  }

  // 3. Link chia sẻ trực tiếp các nền tảng
  const sharePlatforms = [
    {
      name: "Facebook",
      iconColor: "bg-[#1877F2]",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: "Messenger",
      iconColor: "bg-gradient-to-tr from-[#00B2FF] via-[#006AFF] to-[#9900FF]",
      // Trên mobile gọi app messenger, trên web mở giao diện gửi
      url: `fb-messenger://share/?link=${encodeURIComponent(shareUrl)}`,
      fallbackUrl: `https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&redirect_uri=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.302 2.247.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.192 14.963-3.056-3.26-5.963 3.26L10.72 6.8l3.131 3.259 5.888-3.259-6.547 8.163z"/>
        </svg>
      ),
    },
    {
      name: "Zalo",
      iconColor: "bg-[#0068FF]",
      url: `https://zalo.me/share?url=${encodeURIComponent(shareUrl)}`,
      icon: (
        <span className="font-bold text-xs text-white tracking-tighter">Zalo</span>
      ),
    },
    {
      name: "Telegram",
      iconColor: "bg-[#229ED9]",
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      icon: (
        <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
    },
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[420px] rounded-[28px] bg-white p-6 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút Đóng */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 transition"
        >
          ✕
        </button>

        <h3 className="font-['Phudu'] text-lg font-bold uppercase text-[#1C753A]">
          Chia sẻ tác phẩm
        </h3>
        <p className="mt-1 font-['Fz_Poppins'] text-xs text-neutral-600 line-clamp-1">
          {post.title} — {post.author}
        </p>

        {/* Danh sách các nền tảng mạng xã hội */}
        <div className="mt-6 grid grid-cols-4 gap-3 text-center">
          {sharePlatforms.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
              onClick={(e) => {
                if (item.name === "Messenger" && !navigator.userAgent.includes("Mobi")) {
                  e.preventDefault()
                  window.open(item.fallbackUrl, "_blank", "width=600,height=500")
                }
              }}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm transition-transform duration-200 group-hover:scale-110 ${item.iconColor}`}
              >
                {item.icon}
              </div>
              <span className="font-['Fz_Poppins'] text-xs font-medium text-neutral-700">
                {item.name}
              </span>
            </a>
          ))}
        </div>

        {/* Nút kích hoạt khay chia sẻ native (Tin nhắn SMS, các app khác) */}
        {typeof navigator !== "undefined" && navigator.share && (
          <button
            type="button"
            onClick={handleNativeShare}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-lime-50 py-2.5 font-['Fz_Poppins'] text-xs font-semibold text-[#1C753A] border border-[#8DC359] hover:bg-lime-100 transition"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Chia sẻ qua Tin nhắn hoặc Ứng dụng khác
          </button>
        )}

        {/* Khung Sao chép liên kết */}
        <div className="mt-5">
          <label className="block font-['Fz_Poppins'] text-xs font-semibold text-neutral-500 mb-1.5">
            Liên kết bài thi:
          </label>
          <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-1.5">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="w-full bg-transparent px-2 font-['Fz_Poppins'] text-xs text-neutral-600 outline-none"
            />
            <button
              type="button"
              onClick={handleCopy}
              className={`shrink-0 rounded-lg px-3 py-1.5 font-['Fz_Poppins'] text-xs font-semibold text-white transition ${
                copied ? "bg-emerald-600" : "bg-[#247A3E] hover:bg-[#1D6634]"
              }`}
            >
              {copied ? "Đã chép!" : "Sao chép"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShareModal