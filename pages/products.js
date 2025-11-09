import { motion } from "framer-motion";
import { BookOpen, Code2, Shield, Layers } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function ChainaryDocs() {
  const sections = [
    {
      icon: <BookOpen className="w-8 h-8 text-[#A78BFA]" />,
      title: "راهنمای شروع",
      desc: "آموزش قدم‌به‌قدم برای شروع کار با Chainary و ساخت اولین قرارداد هوشمند."
    },
    {
      icon: <Code2 className="w-8 h-8 text-[#A78BFA]" />,
      title: "کتابخانه قراردادها",
      desc: "مروری بر قراردادهای آماده در Chainary Contracts از ERC20 تا NFT و DAO."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#A78BFA]" />,
      title: "امنیت و ممیزی",
      desc: "اصول امنیتی، تست‌ها، و راهنمای جلوگیری از خطاهای رایج در قراردادهای هوشمند."
    },
    {
      icon: <Layers className="w-8 h-8 text-[#A78BFA]" />,
      title: "Chainary Agent",
      desc: "نحوه استفاده از ابزار تولید خودکار قرارداد هوشمند و سفارشی‌سازی آن."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B011A] text-white font-inter">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0B011A]/80 backdrop-blur-md py-5 border-b border-[#1f1a38] flex justify-between items-center px-10">
        <h1 className="text-2xl font-bold text-[#A78BFA]">Chainary Docs</h1>
        <Link href="/">
          <Button className="bg-[#00E6A8] hover:bg-[#00c48a] text-black px-6 py-2 rounded-xl">
            صفحه اصلی
          </Button>
        </Link>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#A78BFA] to-[#00E6A8] bg-clip-text text-transparent"
        >
          مستندات Chainary
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          همه چیز درباره توسعه، امنیت و استفاده از ابزارهای Chainary در یک مکان.
        </p>
      </section>

      {/* Docs Sections */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-16 max-w-7xl mx-auto">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-gradient-to-b from-[#120A2A] to-[#1A1033] p-8 rounded-2xl shadow-md border border-[#231943] hover:scale-105 transition-transform"
          >
            <div className="flex justify-center mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-center">{s.title}</h3>
            <p className="text-gray-400 text-center leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center py-24 bg-[#100826]">
        <h2 className="text-3xl font-bold mb-4 text-[#A78BFA]">آماده‌ای برای یادگیری بیشتر؟</h2>
        <p className="text-gray-300 mb-6">
          در دوره‌ها و بوت‌کمپ‌های Chainary شرکت کن و متخصص قراردادهای هوشمند شو.
        </p>
        <Button className="bg-[#A78BFA] hover:bg-[#8B5CF6] text-white text-lg px-10 py-4 rounded-2xl">
          ورود به آکادمی
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 border-t border-[#1f1a38]">
        <p>© 2025 Chainary — تمامی حقوق محفوظ است.</p>
      </footer>
    </div>
  );
}
