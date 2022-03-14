import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AboutPlatformBlock = () => (
  <div className="w-full flex pt-20 pb-20 bg-[#F4F5F9]">
    <div className="container flex flex-col">
      <h1 className="font-bold pb-10 text-center text-[32px] text-[#001133]">
        How Samaritan works:
      </h1>

      <span className="flex flex-row justify-center">
        <StaticImage
          width={300}
          quality={95}
          src="../images/phone.png"
          alt="Samaritan in action"
        />
        <div className="flex flex-col w-[500px]">
          <div className="flex flex-row">
            <div className="flex justify-center items-center rounded-full min-w-[1.75rem] w-[1.75rem] h-[1.75rem] text-blue mr-6 bg-[#CCD6EB] text=[18px] font-semibold">
              1
            </div>

            <div className="flex flex-col flex-shrink">
              <h4 className="font-semibold mb-1 text-[18px] text-[#001133]">
                Share your space
              </h4>
              <p className="font-black font-normal max-w-4xl text-[16px] text-[#3C455D]">
                You register on the platform and tell us where you're situated
                and how much space you have available.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-6">
            <div className="flex justify-center items-center rounded-full min-w-[1.75rem] w-[1.75rem] h-[1.75rem] text-blue mr-6 bg-[#CCD6EB] text=[18px] font-semibold">
              2
            </div>

            <div className="flex flex-col flex-shrink">
              <h4 className="font-semibold mb-1 text-[18px] text-[#001133]">
                We publish your space
              </h4>
              <p className="font-black font-normal max-w-4xl text-[16px] text-[#3C455D]">
                We publish your space to our hand-approved humanitarian
                organizations, without your personal details attached.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-6">
            <div className="flex justify-center items-center rounded-full min-w-[1.75rem] w-[1.75rem] h-[1.75rem] text-blue mr-6 bg-[#CCD6EB] text=[18px] font-semibold">
              3
            </div>

            <div className="flex flex-col flex-shrink">
              <h4 className="font-semibold mb-1 text-[18px] text-[#001133]">
                An organization shows their interest
              </h4>
              <p className="font-black font-normal max-w-4xl text-[16px] text-[#3C455D]">
                Once a partner finds you, they can show their interest to
                connect with you.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-6">
            <div className="flex justify-center items-center rounded-full min-w-[1.75rem] w-[1.75rem] h-[1.75rem] text-blue mr-6 bg-[#CCD6EB] text=[18px] font-semibold">
              4
            </div>

            <div className="flex flex-col flex-shrink">
              <h4 className="font-semibold mb-1 text-[18px] text-[#001133]">
                You decide whether to share your details
              </h4>
              <p className="font-black font-normal max-w-4xl text-[16px] text-[#3C455D]">
                After receiving a connection request, you can decide to share
                your details. Only then will the organization be able to access
                your personal and contact details.
              </p>
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
)

export default AboutPlatformBlock
