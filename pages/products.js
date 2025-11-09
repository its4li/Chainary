import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Code2, Zap, Shield, Database, Workflow } from "lucide-react";

export default function ChainaryProducts() {
  const products = [
    {
      icon: <Code2 className="w-12 h-12 text-[#A78BFA]" />,
      name: "Chainary Contracts",
      desc: "کتابخانه‌ای از قراردادهای هوشمند آماده و بهینه، برای توسعه سریع‌تر و ایمن‌تر.",
      tag: "Open Source",
      link: "#"
    },
    {
      icon: <Zap className="w-12 h-12 text-[#A78BFA]" />,
      name: "Chainary Agent",
      desc: "ابزار ساخت خودکار قراردادهای هوشمند با رابط گرافیکی ساده و فارسی.",
      tag: "Interactive Tool",
      link: "#"
    },
    {
      icon: <Shield className="w-12 h-12 text-[#A78BFA]" />,
      name: "Chainary Shield",
      desc: "سرویس ممیزی خودکار قراردادها با تحلیل امنیتی و گزارش کامل.",
      tag: "Security",
      link: "#"
    },
    {
      icon: <Database className="w-12 h-12 text-[#A78BFA]" />,
      name: "Chainary Analytics",
      desc: "ابزار تحلیلی برای بررسی عملکرد و هزینه‌های گس در قراردادهای هوشمند.",
      tag: "Pro Service",
      link: "#"
    },
    {
      icon: <Workflow className="w-12 h-12 text-[#A78BFA]" />,
      name: "Chainary Academy",
      desc: "پلتفرم آموزشی و بوت‌کمپ برای یادگیری توسعه و امنیت قراردادهای هوشمند.",
      tag: "Education",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B011A] text-white font-inter">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0B011A]/80 backdrop-blur-md py-5 border-b border-[#1f1a38] flex justify-between items-center px-10">
        <h1 className="text-2xl font-bold text-[#A78BFA]">محصولات Chainary</h1>
        <Link href="/">
          <Button className="bg-[#00E6A8] hover:bg-[#00c48a] text-black px-6 py-2 rounded-xl">
            صفحه اصلی
          </Button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#A78BFA] to-[#00E6A8] bg-clip-text text-transparent"
        >
          محصولات Chainary
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          مجموعه‌ای از ابزارهای متن‌باز و حرفه‌ای برای توسعه‌دهندگان، استارتاپ‌ها و تیم‌های بلاک‌چینی.
        </p>
      </section>

      {/* Products Column */}
      <section className="flex flex-col items-center gap-10 px-4 py-10 max-w-2xl mx-auto">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="w-full bg-gradient-to-b from-[#120A2A] to-[#1A1033] p-12 rounded-3xl border border-[#231943] hover:scale-105 transition-transform flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex justify-center mb-6">{p.icon}</div>
              <h3 className="text-3xl font-semibold mb-3 text-center">{p.name}</h3>
              <p className="text-gray-400 text-center leading-relaxed mb-4 text-lg">{p.desc}</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-base text-[#00E6A8] bg-[#1A1033] px-5 py-2 rounded-full border border-[#00E6A8]/30">{p.tag}</span>
              <Button className="bg-[#A78BFA] hover:bg-[#8B5CF6] text-white w-full rounded-xl mt-2 text-lg py-3">
                جزئیات بیشتر
              </Button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-[#100826]">
        <h2 className="text-3xl font-bold mb-4 text-[#A78BFA]">آماده استفاده از Chainary هستی؟</h2>
        <p className="text-gray-300 mb-6">همین امروز شروع کن و آینده بلاک‌چین فارسی را بساز.</p>
        <Button className="bg-[#00E6A8] hover:bg-[#00c48a] text-black text-lg px-10 py-4 rounded-2xl">
          شروع کنید
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 border-t border-[#1f1a38]">
        <p>© 2025 Chainary — تمامی حقوق محفوظ است.</p>
      </footer>
    </div>
  );
}
