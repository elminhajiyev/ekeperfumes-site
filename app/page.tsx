export default function QRProfileLandingPage() {
  const links = [
    {
      title: 'Instagram',
      url: 'https://instagram.com/ekeperfumes',
      icon: '📸',
    },
    {
      title: 'TikTok',
      url: 'https://tiktok.com/@ekeperfumes',
      icon: '🎵',
    },
    {
      title: 'WhatsApp',
      url: 'https://wa.me/994559436667',
      icon: '💬',
    },
    {
      title: 'Portfolio',
      url: '#',
      icon: '💼',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative h-40 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop"
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-black object-cover shadow-xl"
            />
          </div>
        </div>

        <div className="pt-20 pb-8 px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Elmin</h1>
          <p className="text-zinc-400 mt-2 text-sm">
            Full Stack Developer • QA Chapter Lead
          </p>

          <p className="mt-5 text-zinc-300 leading-relaxed text-sm">
            Web development, automation, software solutions və digital məhsullar.
            Mənim sosial şəbəkələrim və əlaqə məlumatlarım aşağıdadır.
          </p>

          <div className="mt-8 space-y-4">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 rounded-2xl px-5 py-4 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{link.icon}</span>
                  <span className="font-medium">{link.title}</span>
                </div>

                <span className="opacity-60 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 bg-zinc-800 rounded-2xl p-4 text-left">
            <h2 className="font-semibold mb-3 text-white">Əlaqə</h2>

            <div className="space-y-2 text-sm text-zinc-300">
              <p>📞 +994 50 123 45 67</p>
              <p>✉️ elmin@example.com</p>
              <p>📍 Bakı, Azərbaycan</p>
            </div>
          </div>

          <button className="mt-8 w-full bg-white text-black font-semibold py-4 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
            Mənimlə Əlaqə
          </button>
        </div>
      </div>
    </div>
  );
}
