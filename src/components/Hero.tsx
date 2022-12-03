import React from 'react'
import TypeWriter from '@site/src/components/TypeWriter'

export function Hero() {
  const sequence = [
    ['pauseFor', 500],
    ['typeString', '<i>Runme</i>.md'],
    ['pauseFor', 1500],
    ['deleteAll'],
    ['pauseFor', 2500],
    ['typeString', 'Docs!'],
    ['pauseFor', 3000],
    ['deleteAll'],
    ['pauseFor', 1500],
    ['typeString', 'Readme.md'],
    ['pauseFor', 3000],
    ['deleteAll'],
    ['pauseFor', 1500],
  ]

  return (
    <div className="text-center space-y-12 pt-24 text-white relative">
      <div className="absolute top-0 left-0 w-full h-[85%] lg:h-[75%] z-[-1]">
        <svg className='z-0 min-h-full' xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1567 884" fill="none" preserveAspectRatio="none"
        >
          <path className='z-0' d="M0 -103L1567 -57.3276V776L0 884V-103Z" fill="#0D003D" />
        </svg>
      </div>
      <div className="z-10 space-y-8 select-none bg-[#0D003D]">
        <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-[0.03em] min-h-[100px] sm:min-h-full">
          Run your{" "}
          <TypeWriter sequence={sequence} />
        </h2>
        <h3 className="text-2xl">
          Everything a markdown file can do and way more.{' '}
          <span id="underline-graphic" className="relative whitespace-nowrap">No changes </span>
          required.
        </h3>
        <div className="flex flex-col items-center justify-center space-y-8">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=stateful.runme"
            className="bg-[#5B3ADF] py-[20px] rounded-[60px] text-base w-[280px] h-[40px] leading-[0px] font-semibold"
          >
            Install the extension
          </a>

          <div className="">
            or search{" "}
            <i className="rounded-[6px] font-bold text-black bg-[#42FCCC] p-1.5">runme</i> in
            the VS Code extension panel
          </div>
        </div>
      </div>
      <div className="mt-12 w-4/5 md:w-3/4 mx-auto lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px]">
        <img src="/img/intro.gif" className="rounded-lg shadow-2xl select-none" />
      </div>
    </div>
  );
}
