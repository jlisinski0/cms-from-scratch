import HeaderHeading from "./HeaderHeading";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-start w-full h-full md:h-dvh bg-bg text-black py-20">
      <p className="text-main font-bold tracking-tighter text-5xl">
        hey, <br /> <span className="text-main/85">project</span> <br /> by:
      </p>
      <a
        href="https://github.com/jlisinski0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-main font-bold tracking-tighter text-5xl underline underline-offset-8 hover:text-main/80 transition-colors duration-300 mt-5"
      >
        jędrzej
      </a>
      <HeaderHeading />
    </header>
  );
}
