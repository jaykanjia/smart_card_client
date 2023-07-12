import React from "react";
import Image from "next/image";
export default function Chacomp() {
  return (
    <div className="max-w-7xl m-auto bg-[#222222] p-[10px_20px]">
      <div className="relative p-[10px_0px] flex flex-col justify-end items-center md:items-start">
        <div className="relative rounded-[10px] overflow-hidden bg-[white]">
          <Image
            src="/banner.png"
            style={{ objectFit: "cover" }}
            width={1280}
            height={200}
          />
        </div>
        <div className="absolute w-[28%] sm:w-[15%] top-[40%] sm:top-[55%] rounded-full overflow-hidden bg-[white] border-2 border-solid border-white m-[0px_30px]">
          <Image
            src="/photo.jpeg"
            style={{ objectFit: "cover" }}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div>
        
      </div>
      <div>
        <div className="flex flex-col sm:items-start sm:pl-[30px] items-center pt-[50px]">
          <p className="font-medium text-[24px]">Hirpara Zeel</p>
          <p className="text-sm font-light italic">Ui/Ux Developer</p>
        </div>
        <div className="rounded-[10px] p-[10px] mt-[20px]">
          <p className="text-lg font-semibold sm:pl-[20px] p-[0px_0px_10px_0px]">
            About
          </p>
          <p className="text-left sm:pl-[20px] font-light">
            Web Developer Intern at The Special Character Building Scalable
            Solutions with React JS, Java script, MongoDB, and Next.js
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col rounded-[10px] p-[10px] justify-start mt-[20px]">
          <p className="text-lg font-semibold p-[0px_0px_10px_0px]">
            Social Networks
          </p>
          <div className="whitespace-nowrap overflow-y-hidden overflow-x-auto">
            <div className="p-[10px] mr-[15px] inline-block bg-[#323f4b] rounded-[20px]">
              <Image src="/facebook.png" width={45} height={45} />
            </div>
            <div className="p-[10px] mr-[15px] inline-block bg-[#323f4b] rounded-[20px]">
              <Image src="/linkedin.png" width={45} height={45} />
            </div>
            <div className="p-[10px] mr-[15px] inline-block bg-[#323f4b] rounded-[20px]">
              <Image src="/instagram.png" width={45} height={45} />
            </div>
            <div className="p-[10px] mr-[15px] inline-block bg-[#323f4b] rounded-[20px]">
              <Image src="/skype.png" width={45} height={45} />
            </div>
            <div className="p-[10px] mr-[15px] inline-block bg-[#323f4b] rounded-[20px]">
              <Image src="/twitter.png" width={45} height={45} />
            </div>
            <div className="p-[10px] mr-[15px] inline-block bg-[#323f4b] rounded-[20px]">
              <Image src="/whatsapp.png" width={45} height={45} />
            </div>
          </div>
        </div>
        <div>
          <div className="flex p-[10px] rounded-[10px]">
            <div className="bg-[#323f4b] p-[10px] rounded-[20px]">
              <Image src="/trial2.png" height={30} width={30} />
            </div>
            <div className="p-[0px_10px]">
              <p className="font-semibold">9999911111</p>
              <p className="font-light">work</p>
            </div>
          </div>
          <div className="flex p-[10px] rounded-[10px]">
            <div className="bg-[#323f4b] p-[10px] rounded-[20px]">
              <Image src="/mail.png" height={30} width={30} />
            </div>
            <div className="p-[0px_10px]">
              <p className="font-semibold">abc@gmail.com</p>
              <p className="font-light">work</p>
            </div>
          </div>
          <div className="flex p-[10px] rounded-[10px]">
            <div className="bg-[#323f4b] p-[10px] rounded-[20px]">
              <Image src="/address.png" height={30} width={30} />
            </div>
            <div className="p-[0px_10px]">
              <p className="font-semibold">www.pruthatek.com</p>
              <p className="font-light">company</p>
            </div>
          </div>
          <div className="p-[10px] rounded-[10px] flex ">
            <div>
              <div className="bg-[#323f4b] w-[50px] h-[50px] p-[10px] rounded-[20px]">
                <Image src="/weblink.png" height={30} width={30} />
              </div>
            </div>
            <div className="p-[0px_10px]">
              <p className="font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, impedit?
              </p>
              <p className="font-light">company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
