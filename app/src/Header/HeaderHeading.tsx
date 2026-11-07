import { headerUl } from "./headerData";

export default function HeaderHeading() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full py-50 px-20">
      <h1 className="font-manrope text-4xl lg:text-5xl text-main font-bold  text-center tracking-tighter">
        CMS from scratch
      </h1>
      <ul className="flex my-10 flex-wrap justify-center gap-5">
        {headerUl.map(({ id, href, name }) => (
          <li
            className="font-semibold underline underline-offset-3 decoration-main hover:opacity-80 text-black transition-colors duration-300 p-5 "
            key={id}
          >
            <a className="" href={href}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
