import Image from "next/image";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaGlobe
} from "react-icons/fa";

export default function QRProfileLandingPage() {
  const links = [
    {
    title: 'Instagram',
    url: 'https://instagram.com/ekeperfumes',
    icon: (
      <FaInstagram
        size={24}
        className="text-pink-500 group-hover:scale-110 transition-transform"
      />
    ),
  },
  {
    title: 'TikTok',
    url: 'https://tiktok.com/@ekeperfumes',
    icon: (
      <FaTiktok
        size={24}
        className="text-white group-hover:scale-110 transition-transform"
      />
    ),
  },
  {
    title: 'WhatsApp',
    url: 'https://wa.me/994559436667',
    icon: (
      <FaWhatsapp
        size={24}
        className="text-green-500 group-hover:scale-110 transition-transform"
      />
    ),
  },
  // {
  //   title: 'Instagram',
  //   url: 'https://instagram.com/ekeperfumes',
  //   icon: <FaInstagram size={24} className="text-pink-500" />,
  // },
  // {
  //   title: 'TikTok',
  //   url: 'https://tiktok.com/@ekeperfumes',
  //   icon: <FaTiktok size={24} className="text-white" />,
  // },
  // {
  //   title: 'WhatsApp',
  //   url: 'https://wa.me/994559436667',
  //   icon: <FaWhatsapp size={24} className="text-green-500" />,
  // },
  // {
  //   title: 'Portfolio',
  //   url: '#',
  //   icon: <FaGlobe size={24} />,
  // },
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex items-center justify-center px-4 py-10">
     <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative h-40 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-300">
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
            <Image src="/logo.png" alt="Profile" width={112} height={112}
  className="rounded-full border-4 border-black object-cover shadow-xl"
/>
          </div>
        </div>

        <div className="pt-20 pb-8 px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">EKE perfumes</h1>
          <p className="text-zinc-400 mt-2 text-sm">
            Handcrafted Fragrances • Baku, Azerbaijan
          </p>

          <p className="mt-5 text-zinc-300 leading-relaxed text-sm">
            Hər ətir bir hekayədir. EKE Perfumes ilə özünəməxsus qoxunuzu tapın — təbii inqrediyentlər, əl işi və sonsuz zövq.
          </p>

          <div className="mt-8 space-y-4">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 rounded-2xl px-5 py-4 group hover:scale-[1.02]"
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

          <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-4 text-left backdrop-blur-md">
            <h2 className="font-semibold mb-3 text-white">Əlaqə</h2>

            <div className="space-y-2 text-sm text-zinc-300">
              <p>📞 +994 55 943 66 67</p>
              <p>✉️ ekeperfume@gmail.com</p>
              <p>📍 Bakı, Azərbaycan</p>
            </div>
          </div>

          <a
  href="tel:+994559436667"
  className="block mt-8 w-full bg-gradient-to-r from-yellow-500 to-amber-300 text-black font-bold py-4 rounded-2xl hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-yellow-500/20"
>
  Mənimlə Əlaqə
</a>
        </div>
      </div>
    </div>
  );
}
