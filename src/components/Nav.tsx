import type { Navlink } from "@/interfaces/navlink";
import { useSearchParams } from "react-router";

interface Props {
  navLinks: Navlink[];
}

export const Nav = ({ navLinks }: Props) => {
  const [, setSearchParams] = useSearchParams();

  const changeTab = (tab: string) => {
    setSearchParams({ tab });
  };

  return (
    <div className=" hidden laptop:flex justify-center items-center gap-6 p-2 mr-30 ">
      {navLinks.map((link) => (
        <a
          className="  p-2 text-2xl text-lightGray font-semibold hover:text-lightGreen hover:underline  transition-colors"
          key={link.label}
          href="#tab-section"
          onClick={() => changeTab(link.tab)}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
