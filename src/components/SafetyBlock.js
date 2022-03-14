import * as React from "react"

import AWS from "../images/aws.svg"

const SafetyBlock = () => (
  <div className="flex flex-col mx-auto pt-20 pb-20 w-[700px]">
    <h1 className="font-bold pb-10 text-center text-[32px] text-[#001133]">
      How do we keep you safe?
    </h1>

    <div className="flex flex-row items-start mb-12">
      <p className="flex text-[90px] mr-[58px] leading-none">🕵️‍</p>
      <p
        className="font-black font-normal max-w-4xl"
        style={{ fontSize: 18, color: "#3C455D" }}
      >
        Your safety and security are our highest priorities. This is why all of
        the organizations on the Samaritan network are hand screened by our crew
        before they gain access.
      </p>
    </div>

    <div className="flex flex-row items-start mb-12">
      <p className="flex text-[90px] mr-[58px] leading-none">🇪🇺</p>
      <p
        className="font-black font-normal max-w-4xl"
        style={{ fontSize: 18, color: "#3C455D" }}
      >
        Privacy is another very important aspect, and this is why we never
        process any of your data outside the European Union. Even more
        specifically, your data is never processed outside Germany. We also
        never share your details with anyone that you don't explicitly consent
        to through our app.
      </p>
    </div>

    <div className="flex flex-row justify-between items-start mb-12">
      <AWS className="h-[72px] w-[300px]" />

      <p
        className="font-black font-normal max-w-4xl"
        style={{ fontSize: 18, color: "#3C455D" }}
      >
        Our infrastructure is fully managed by Amazon. They make sure all of
        your data can be shared with the right people in a secure and private
        way.
      </p>
    </div>
  </div>
)

export default SafetyBlock
