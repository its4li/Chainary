import { Shield, Users, KeyRound, Info } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function AccessDocs() {
  return (
    <div className="min-h-screen bg-[#0B011A] text-white font-inter px-4 py-8 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-3xl flex justify-between items-center mb-8">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-[#A78BFA]">
          <Shield className="w-7 h-7" />
          Chainary Contracts — Access Control
        </h1>
        <Button as="a" href="/products" className="bg-[#A78BFA] hover:bg-[#8B5CF6] text-white px-5 py-2 rounded-xl">
          بازگشت به محصولات
        </Button>
      </div>

      {/* معرفی */}
      <section className="bg-[#1A1033] rounded-2xl p-6 mb-8 w-full max-w-3xl shadow-lg">
        <div className="flex items-center gap-2 mb-2 text-lg font-bold text-[#00E6A8]">
          <KeyRound className="w-6 h-6" />
          معرفی
        </div>
        <p className="text-gray-300 leading-relaxed">
          ماژول <b>Access Control</b> در Chainary به شما کمک می‌کند تا دسترسی به بخش‌های حساس قرارداد هوشمند را مدیریت کنید.
          این بخش شامل دو قرارداد اصلی است:
        </p>
        <ul className="mt-4 space-y-2 text-gray-200">
          <li>• <b>Ownable.sol</b> → مدیریت مالک (owner)</li>
          <li>• <b>Roles.sol</b> → تعریف و مدیریت نقش‌ها برای کاربران مختلف</li>
        </ul>
      </section>

      {/* Ownable.sol */}
      <section className="bg-[#1A1033] rounded-2xl p-6 mb-8 w-full max-w-3xl shadow-lg">
        <div className="flex items-center gap-2 mb-2 text-lg font-bold text-[#A78BFA]">
          <KeyRound className="w-6 h-6" />
          Ownable.sol
        </div>
        <p className="mb-2 text-gray-300"><b>هدف:</b> مدیریت مالک (Owner) پروژه و محدودسازی توابع فقط برای مالک.</p>
        <ul className="mb-4 space-y-1 text-gray-200">
          <li>✅ تعیین خودکار مالک در زمان ساخت قرارداد</li>
          <li>✅ قابلیت انتقال مالکیت به آدرس جدید</li>
          <li>✅ استفاده از modifier برای محدودسازی توابع</li>
        </ul>
        <div className="mb-4">
          <div className="font-bold text-[#00E6A8] mb-2">کد نمونه:</div>
          <pre className="bg-[#0B011A] rounded-lg p-4 text-xs overflow-x-auto border border-[#231943]">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Ownable {
    address public owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor() {
        owner = msg.sender;
        emit OwnershipTransferred(address(0), msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Chainary: فقط مالک مجاز است");
        _;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Chainary: مالک جدید نامعتبر است");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }
}
`}</pre>
        </div>
        <div className="mb-2">
          <div className="font-bold text-[#00E6A8] mb-2">مثال کاربردی:</div>
          <pre className="bg-[#0B011A] rounded-lg p-4 text-xs overflow-x-auto border border-[#231943]">{`function withdraw() public onlyOwner {
    payable(owner).transfer(address(this).balance);
}`}</pre>
        </div>
      </section>

      {/* Roles.sol */}
      <section className="bg-[#1A1033] rounded-2xl p-6 mb-8 w-full max-w-3xl shadow-lg">
        <div className="flex items-center gap-2 mb-2 text-lg font-bold text-[#A78BFA]">
          <Users className="w-6 h-6" />
          Roles.sol
        </div>
        <p className="mb-2 text-gray-300"><b>هدف:</b> تعریف نقش‌های مختلف (مثل مدیر، حسابرس یا اپراتور) برای کاربران پروژه.</p>
        <p className="mb-2 text-gray-300">این قابلیت برای پروژه‌های چندمدیره یا DAO بسیار مفید است.</p>
        <div className="mb-4">
          <div className="font-bold text-[#00E6A8] mb-2">کد نمونه:</div>
          <pre className="bg-[#0B011A] rounded-lg p-4 text-xs overflow-x-auto border border-[#231943]">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Roles {
    mapping(address => mapping(bytes32 => bool)) private _roles;

    event RoleGranted(bytes32 indexed role, address indexed account);
    event RoleRevoked(bytes32 indexed role, address indexed account);

    modifier onlyRole(bytes32 role) {
        require(_roles[msg.sender][role], "Chainary: دسترسی مجاز نیست");
        _;
    }

    function grantRole(bytes32 role, address account) public {
        _roles[account][role] = true;
        emit RoleGranted(role, account);
    }

    function revokeRole(bytes32 role, address account) public {
        _roles[account][role] = false;
        emit RoleRevoked(role, account);
    }

    function hasRole(bytes32 role, address account) public view returns (bool) {
        return _roles[account][role];
    }
}
`}</pre>
        </div>
        <div className="mb-2">
          <div className="font-bold text-[#00E6A8] mb-2">نمونه استفاده:</div>
          <pre className="bg-[#0B011A] rounded-lg p-4 text-xs overflow-x-auto border border-[#231943]">{`bytes32 public constant AUDITOR = keccak256("AUDITOR");

function auditContract() public onlyRole(AUDITOR) {
    // اجرای عملیات ممیزی
}`}</pre>
        </div>
      </section>

      {/* نکات مهم */}
      <section className="bg-[#231943] rounded-2xl p-6 mb-8 w-full max-w-3xl shadow-lg">
        <div className="flex items-center gap-2 mb-2 text-lg font-bold text-[#00E6A8]">
          <Info className="w-6 h-6" />
          نکات مهم
        </div>
        <ul className="list-disc pl-5 text-gray-200 space-y-1">
          <li>استفاده از <b>modifier</b> برای امنیت بالاتر توصیه می‌شود.</li>
          <li>همیشه در هنگام انتقال مالکیت، آدرس جدید را بررسی کنید تا صفر نباشد.</li>
          <li>می‌توانید هر دو قرارداد (<b>Ownable</b> و <b>Roles</b>) را با هم ترکیب کنید تا کنترل دقیق‌تری داشته باشید.</li>
        </ul>
      </section>

      {/* جدول مقایسه */}
      <section className="bg-[#1A1033] rounded-2xl p-6 mb-8 w-full max-w-3xl shadow-lg">
        <div className="font-bold text-[#A78BFA] mb-4 text-lg">📘 جمع‌بندی</div>
        <table className="w-full text-center border-collapse text-gray-200">
          <thead>
            <tr className="bg-[#231943]">
              <th className="py-2 px-3 border border-[#231943]">ویژگی</th>
              <th className="py-2 px-3 border border-[#231943]">Ownable</th>
              <th className="py-2 px-3 border border-[#231943]">Roles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-3 border border-[#231943]">مالک یکتا</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border border-[#231943]">نقش‌های متعدد</td>
              <td>❌</td>
              <td>✅</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border border-[#231943]">مناسب برای DAO</td>
              <td>⚠️ متوسط</td>
              <td>✅ بالا</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border border-[#231943]">فارسی‌سازی پیام‌ها</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
