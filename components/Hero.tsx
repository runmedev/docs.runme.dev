export function Hero() {
  return (
    <div class="text-center space-y-2 pt-24 lg:pt-32 text-white relative">
      <div class="absolute top-0 left-0 w-full h-[85%] lg:h-[75%] z-[-1]">
        <svg class='z-0 min-h-full' xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1567 884" fill="none" preserveAspectRatio="none"
        >
          <path class='z-0' d="M0 -103L1567 -57.3276V776L0 884V-103Z" fill="#0D003D" />
        </svg>
      </div>
      <div class="z-10 space-y-8 select-none">
        <h2 class="text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-[0.03em]">
          <span title="Run your" class="glitch relative">Run your{" "}</span>
          <span class="relative">
            <span class="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#A38CF0] to-[#C83D79]">README.md</span>
            <span title="README.md" class="glitch top-[14px] left-[2px] absolute relative z-0 text-[#B36CC0]">
              README.md
            </span>
          </span>
        </h2>
        <h3 class="text-2xl">
          Use dev-friendly markdown to craft interactive runbooks for <br class="sm:hidden md:block lg:hidden" />
          <span id="vscode-bolt" class="relative">
            {" "}VS Code.
          </span>
        </h3>
        <div class="flex flex-col items-center justify-center py-12 space-y-4">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=stateful.runme"
            class="bg-[#5B3ADF] py-[20px] rounded-[60px] text-base w-[280px] h-[40px] leading-[0px] font-semibold"
          >
            Install the extension
          </a>

          <div class="">
            or search{" "}
            <i class="rounded-[6px] font-bold text-black bg-[#42FCCC] p-1.5">runme</i> in
            the VS Code extension panel
          </div>
        </div>
      </div>
      <div class="w-4/5 md:w-3/4 mx-auto lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px]">
        <img src="/intro.gif" class="rounded-lg shadow-2xl select-none" />
      </div>
    </div>
  );
}
