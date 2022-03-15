import * as React from "react"

import AWS from "../images/aws.svg"
import { StaticImage } from "gatsby-plugin-image"

const SafetyBlock = () => (
  <div className="container flex flex-col mx-auto px-3 pt-16 pb-16 md:pt-20 md:pb-20 md:w-[700px]">
    <h1 className="font-bold pb-10 text-center text-[30px] md:text-[32px] text-[#001133]">
      How we keep you safe?
    </h1>

    <div className="flex flex-col md:flex-row items-start mb-12">
      <p className="w-full text-[90px] leading-none text-center mb-6 md:mb-0 md:mr-[48px] md:text-left md:w-auto">
        🕵️‍
      </p>
      <p className="font-black font-normal max-w-4xl text-[18px] text-[#3C455D]">
        Your safety and security are our highest priorities. This is why all of
        the organizations on the Samaritan network are hand screened by our crew
        before they gain access.
      </p>
    </div>

    <div className="flex flex-col md:flex-row items-start mb-12">
      <p className="w-full text-[90px] leading-none text-center mb-6 md:mb-0 md:mr-[48px] md:text-left md:w-auto">
        🇪🇺
      </p>
      <p className="font-black font-normal max-w-4xl text-[18px] text-[#3C455D]">
        Privacy is another very important aspect, and this is why we never
        process any of your data outside the European Union. Even more
        specifically, your data is never processed outside Germany. We also
        never share your details with anyone that you don't explicitly consent
        to through our app.
      </p>
    </div>

    <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start md:mb-12">
      <StaticImage
        className="relative md:ml-[-30px] md:top-[-8px] md:mr-[48px]"
        src="../images/aws.png"
        alt="Amazon Web Services"
        width={200}
        quality={100}
        formats={["auto", "webp", "avif"]}
      />

      <p className="font-black font-normal max-w-4xl text-[18px] text-[#3C455D]">
        Our infrastructure is fully managed by Amazon. They make sure that the
        platform always is secure and that we can focus fully on connecting you
        to the right organizations.
      </p>
    </div>
  </div>
)

export default SafetyBlock
