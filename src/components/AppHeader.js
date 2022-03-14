import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import House from "../images/splash.svg"
import Apple from "../images/appstore.svg"
import Google from "../images/googleplay.svg"

const AppHeader = () => (
  <header className="flex-1 relative">
    <div className="mx-auto relative h-[566px]">
      <StaticImage
        className="absolute top-0 left-0 right-0 bottom-0 object-contain z-1"
        src="../images/header.jpg"
        alt="Refugees in line"
        height={566}
        quality={95}
        formats={["auto", "webp", "avif"]}
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 z-2">
        <div className="container flex h-full items-center flex-row px-12 relative">
          <House className="mr-12 h-[180px] w-[180px]" />

          <div className="flex flex-col justify-between h-[180px]">
            <span>
              <h2 className="text-white font-medium text-[40px]">Samaritan</h2>
              <h5 className="text-white font-light text-[25px]">
                Give a safe space to a refugee/Ukrainian
              </h5>
            </span>
            <span className="flex flex-row">
              <Link to="https://apps.apple.com/nl/app/samaritan/id1612983051">
                <Apple className="h-[56px]" />
              </Link>
              <Link
                // to="https://play.google.com/store/apps/details?id=org.samaritan.refugee_helper"
                title="The Android version is sadly still in review by Google. Please check back tomorrow!"
              >
                <Google className="opacity-25 h-[56px]" />
              </Link>
            </span>
          </div>

          <StaticImage
            className="absolute right-[-36px] bottom-[-100px]"
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
