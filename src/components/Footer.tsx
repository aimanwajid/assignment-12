import logo from "@/app/public/Logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-[1920] h-[461px] py-[140px] px-[220px] bg-[#043873]">
      <div className="grid grid-cols-4 gap-[200px] text-white">
        {/* Logo and Description */}
        <div className="flex flex-col space-y-4">
          <Image src={logo} alt="Logo" className="w-[191px] h-[34px]" />
          <p className="w-[240px] text-[18px] leading-[30px] tracking-[-0.02em]">
            Whitespace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-[18px] font-bold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-[16px] hover:text-gray-300">Overview</a></li>
            <li><a href="#" className="text-[16px] hover:text-gray-300">Pricing</a></li>
            <li><a href="#" className="text-[16px] hover:text-gray-300">Customer stories</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-[18px] font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-[16px] hover:text-gray-300">Blog</a></li>
            <li><a href="#" className="text-[16px] hover:text-gray-300">Guides & tutorials</a></li>
            <li><a href="#" className="text-[16px] hover:text-gray-300">Help center</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-[18px] font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-[16px] hover:text-gray-300">About us</a></li>
            <li><a href="#" className="text-[16px] hover:text-gray-300">Careers</a></li>
            <li><a href="#" className="text-[16px] hover:text-gray-300">Media kit</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#2E4E73] mt-[100px]"></div>

      {/* Copyright */}
      <div className="flex justify-center mt-[20px]">
        <p className="text-[16px] text-white tracking-[-0.02em]">
          ©2021 Whitespace LLC.
        </p>
      </div>
    </footer>
  );
}