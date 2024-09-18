import { BorderBeam } from "../magicui/border-beam";

export function BorderBeamShow() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Border Beam
      </span>
      <BorderBeam size={250} duration={12} delay={9} colorFrom="#6b7280" borderWidth={1} colorTo="white"/>
    </div>
  );
}
