import * as React from "react"
import { Link } from "gatsby"
import Apple from "../images/appstore.svg"
import Google from "../images/googleplay.svg"

const AppFooter = () => (
  <div className="w-full overflow-hidden pt-6 pb-6 bg-gradient-to-b from-[#005099] to-blue">
    <div className="container overflow-hidden flex flex-row items-center justify-center md:justify-between">
      <span className="flex flex-row">
        <p className="text-white text-[16px] font-light">
          Samaritan © 2022&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        </p>
        <Link
          className="text-white hover:underline"
          target="_blank"
          to="https://samaritan-documents.s3.eu-central-1.amazonaws.com/privacy_policy.pdf"
        >
          Privacy policy
        </Link>
      </span>
      <span className="md:flex hidden">
        <Link to="https://apps.apple.com/nl/app/samaritan/id1612983051">
          <Apple className="h-[56px]" />
        </Link>
        <Link
          to="https://play.google.com/store/apps/details?id=org.samaritan.refugee_helper"
          title="The Android version is sadly still in review by Google. Please check back tomorrow!"
        >
          <Google className="h-[56px]" />
        </Link>
      </span>
    </div>
  </div>
)

export default AppFooter
