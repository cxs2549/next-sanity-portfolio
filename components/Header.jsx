/* eslint-disable @next/next/no-img-element */
import {AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai'
export const Header = () => {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          className="w-full fill-white dark:fill-neutral-800 -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>

      <div className="px-4 mx-auto  md:max-w-full bg-sky-300 dark:bg-sky-900  md:px-24 lg:px-8 py-4">
        <div className=" flex justify-between max-w-7xl mx-auto">
          <img
            src="/face.jpg"
            className="rounded-full w-20 h-20 mb-12"
            alt=""
          />
          <div className="flex gap-3 text-white">
            <a href="https://github.com/cxs2549" target={`_blank`}>
              <AiFillGithub size={28} />
            </a>
            <AiOutlineLinkedin size={28} />
          </div>
        </div>

        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-4xl font-bold md:text-4xl tracking-tighter text-white lg:text-5xl xl:text-7xl sm:leading-none">
            Web development <br /> with a <span className="">smile</span>
          </h2>
        </div>
      </div>
    </div>
  )
}
