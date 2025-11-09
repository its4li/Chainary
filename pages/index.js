import { Button } from "../components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, BookOpen, Zap, ArrowRight } from "lucide-react";

export default function ChainaryLanding() {
  const features = [
    {
      icon: <Code2 className="w-10 h-10 text-[#A78BFA]" />,
      title: "Chainary Contracts",
      desc: "کتابخانه‌ای از قراردادهای هوشمند آماده، با توضیحات فارسی و بهترین پرکتیس‌ها."
    },
    {
      icon: <Zap className="w-10 h-10 text-[#A78BFA]" />,
      title: "Chainary Agent",
      desc: "ایجاد خودکار قراردادهای امن بدون نیاز به دانش برنامه‌نویسی Solidity."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-[#A78BFA]" />,
      title: "Chainary Docs",
      desc: "مرجع کامل آموزش، نمونه‌کد و دستورالعمل‌های امنیتی به زبان فارسی."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B011A] text-white font-inter">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#A78BFA] to-[#00E6A8] bg-clip-text text-transparent">
            Chainary
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            پلتفرم هوشمند و فارسی برای توسعه، یادگیری و امنیت قراردادهای هوشمند بلاک‌چین.
          </p>
          <div className="flex justify-center gap-4 mt-10">
            <Button className="text-lg px-8 py-3 rounded-2xl transition-all">
              شروع کنید <ArrowRight className="inline ml-2 w-4 h-4" />
            </Button>
            <Link href="/products">
              <Button variant="outline" className="text-lg px-8 py-3 rounded-2xl">
                مشاهده مستندات
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute w-[600px] h-[600px] bg-[#A78BFA] rounded-full blur-[160px]"
        />
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-8 py-24 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-gradient-to-b from-[#120A2A] to-[#1A1033] p-10 rounded-3xl shadow-lg border border-[#231943] hover:scale-105 transition-transform"
          >
            <div className="flex justify-center mb-6">{f.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-center">{f.title}</h3>
            <p className="text-gray-400 text-center leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center py-28 bg-[#100826]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-6 text-[#A78BFA]"
        >
          Chainary را کشف کنید
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 mb-8 text-lg"
        >
          دانش، ابزار و امنیت قراردادهای هوشمند — در یک پلتفرم.
        </motion.p>
        <Button className="bg-[#00E6A8] hover:bg-[#00c48a] text-black text-lg px-10 py-4 rounded-2xl">
          ورود به Docs
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 border-t border-[#1f1a38]">
        <p>© 2025 Chainary — تمامی حقوق محفوظ است.</p>
      </footer>
    </div>
  );
}
