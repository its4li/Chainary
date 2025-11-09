import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Code2 } from "lucide-react";
import FileTree from "../components/FileTree";

export default function ChainaryContracts() {
  return (
    <div className="min-h-screen bg-[#0B011A] text-white font-inter">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0B011A]/80 backdrop-blur-md py-5 border-b border-[#1f1a38] flex justify-between items-center px-10">
        <h1 className="text-2xl font-bold text-[#A78BFA] flex items-center gap-2">
          <Code2 className="w-8 h-8 text-[#A78BFA]" />
          Chainary Contracts
        </h1>
        <Link href="/products">
          <Button className="bg-[#00E6A8] hover:bg-[#00c48a] text-black px-6 py-2 rounded-xl">
            بازگشت به محصولات
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
          Chainary Contracts
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          کتابخانه‌ای از قراردادهای هوشمند آماده و بهینه برای توسعه سریع‌تر و ایمن‌تر پروژه‌های بلاک‌چینی فارسی.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-3xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6 text-[#A78BFA] text-center">ویژگی‌ها</h2>
        <ul className="space-y-4 text-lg">
          <li>✅ کاملاً متن‌باز و قابل توسعه</li>
          <li>✅ مستندات فارسی و مثال‌های کاربردی</li>
          <li>✅ پیاده‌سازی استانداردهای ERC20، ERC721 و ...</li>
          <li>✅ بهینه‌سازی مصرف گس و امنیت بالا</li>
          <li>✅ مناسب برای استارتاپ‌ها و توسعه‌دهندگان ایرانی</li>
        </ul>
      </section>

      {/* FileTree - ساختار پروژه */}
      <section className="max-w-3xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6 text-[#A78BFA] text-center">ساختار پروژه</h2>
        <FileTree />
      </section>

      {/* Sample Code */}
      <section className="max-w-3xl mx-auto py-10 px-4">
        <h2 className="text-xl font-bold mb-4 text-[#00E6A8]">نمونه قرارداد ERC20 فارسی</h2>
        <div className="bg-[#1A1033] rounded-xl p-6 text-sm font-mono text-gray-200 overflow-x-auto border border-[#231943]">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PersianToken {
    string public name = "توکن فارسی";
    string public symbol = "FARSI";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000000 * (10 ** uint256(decimals));
    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "موجودی کافی نیست");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}
`}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <Button className="bg-[#A78BFA] hover:bg-[#8B5CF6] text-white text-lg px-10 py-4 rounded-2xl">
          دانلود کتابخانه و مستندات
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 border-t border-[#1f1a38]">
        <p>© 2025 Chainary — تمامی حقوق محفوظ است.</p>
      </footer>
    </div>
  );
}
