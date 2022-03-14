import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import House from "../images/splash.svg"
import Apple from "../images/appstore.svg"
import Google from "../images/googleplay.svg"

const AppHeader = () => (
  <header className="flex-1 relative">
    <div className="mx-auto relative h-[430px] md:h-[566px]">
      <StaticImage
        style={{ position: "absolute" }}
        className="top-0 left-0 right-0 bottom-0 object-contain z-1"
        src="../images/header.jpg"
        alt="Refugees in line"
        height={566}
        quality={95}
        formats={["auto", "webp", "avif"]}
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 z-2">
        <div className="container flex h-full items-center flex-col md:flex-row md:px-12 relative">
          <House className="mb-6 mt-6 h-[100px] w-[100px] md:mr-12 md:mt-0 md:mb-0 md:h-[180px] md:w-[180px]" />

          <div className="flex flex-col justify-center md:justify-between md:h-[180px]">
            <span>
              <h2 className="text-white font-medium text-[24px] text-center md:text-[40px] md:text-left">
                Samaritan
              </h2>
              <h5 className="text-white font-light text-[18px] text-center md:text-[25px] md:text-left">
                Give a safe space to a refugee/Ukrainian
              </h5>
            </span>
            <span className="flex flex-col justify-center md:justify-start md:flex-row">
              <Link
                className="flex justify-center"
                to="https://apps.apple.com/nl/app/samaritan/id1612983051"
              >
                <Apple className="h-[56px] mb-8 mt-8 md:mb-0 md:mt-0" />
              </Link>
              <Link
                className="flex justify-center"
                // to="https://play.google.com/store/apps/details?id=org.samaritan.refugee_helper"
                title="The Android version is sadly still in review by Google. Please check back tomorrow!"
              >
                <Google className="opacity-25 h-[56px]" />
              </Link>
            </span>
          </div>

          <StaticImage
            style={{ position: "absolute" }}
            className="right-[-36px] bottom-[-100px] invisible lg:visible"
            width={300}
            quality={95}
            src="../images/phone.png"
            alt="Samaritan in action"
          />
        </div>
      </div>
    </div>
  </header>
)

export default AppHeader
