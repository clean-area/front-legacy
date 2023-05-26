import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { name: "HOME", href: "./" },
  { name: "전체", href: "./a" },
  { name: "진로", href: "./b" },
  { name: "일자리", href: "./c" },
  { name: "신체건강", href: "./d" },
  { name: "마음건강", href: "./e" },
  { name: "교육", href: "./f" },
  { name: "문화/예술", href: "./g" },
  { name: "창업", href: "./h" },
  { name: "주거", href: "./i" },
  { name: "생활지원", href: "./j" },
  { name: "금융", href: "./k" },
  { name: "사회참여", href: "./l" },
  { name: "커뮤니티", href: "./m" },
  { name: "대외활동", href: "./n" },
  { name: "공간", href: "./o" },
];

export default function SubMenuBar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex items-center space-x-[16px] w-[100% - 200px] h-[50px] overflow-auto">
      <div className="w-[25px]"></div>
      {menus.map((el, idx) => (
        <Link
          key={idx}
          href={el.href}
          className={`${
            true && "border-b-2 border-[#3592FF]"
          } text-[14px] pb-1 font-semibold grow-0 shrink-0`}
        >
          {el.name}
        </Link>
      ))}
      <div className="w-[25px]"></div>
    </div>
  );
}
