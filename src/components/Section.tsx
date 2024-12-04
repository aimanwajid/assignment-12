import React from "react";
import Image, { StaticImageData } from "next/image";

interface SectionProps {
  title: string;
  text: string;
  imageSrc?: StaticImageData; // Optional image
  reverse?: boolean; // Controls layout direction
  bgColor: string;
  textColor: string;
  buttonLabel?: string; // Optional button text
}

const Section: React.FC<SectionProps> = ({
  title,
  text,
  imageSrc,
  reverse = true,
  bgColor,
  textColor,
  buttonLabel,
}) => {
  return ( 
    <div
      className={` w-[1920px] h-[829px] flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center justify-between px-[220px] py-[140px] top-[92px]`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Image or Placeholder Section */}
      <div className="w-[50%] flex justify-center items-center"> 
        {imageSrc ? (
          <Image src={imageSrc} alt={title} width={500} height={500} />
        ) : (
          <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
        )}
      </div>

      {/* Text Section */}
      <div
        className="w-[656px] h-[238px] "
        style={{
          color: textColor,
        }}
      >
        <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">
          {title}
        </h2>
        <p className="font-normal text-lg leading-[30px] tracking-[-0.02em]">{text}</p>
        {buttonLabel && (
          <button className=" w-[219px] h-[63px] p-5 mt-[60px] bg-[#4F9CF9] text-white rounded-md hover:bg-blue-600">
            {buttonLabel}
            <span className="m-1">→</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Section;