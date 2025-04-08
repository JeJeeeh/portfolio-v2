import CplusIcon from "./CplusIcon";
import CsharpIcon from "./CsharpIcon";
import CssIcon from "./CssIcon";
import HtmlIcon from "./HtmlIcon";
import JavaIcon from "./JavaIcon";
import JavascriptIcon from "./JavascriptIcon";
import KotlinIcon from "./KotlinIcon";
import MysqlIcon from "./MysqlIcon";
import PhpIcon from "./PhpIcon";
import PythonIcon from "./PythonIcon";
import TailwindIcon from "./TailwindIcon";
import TypescriptIcon from "./TypescriptIcon";

interface LanguageIconData {
  [key: string]: React.FC;
}

export const languageIcons: LanguageIconData = {
  html: HtmlIcon,
  css: CssIcon,
  tailwind: TailwindIcon,
  javascript: JavascriptIcon,
  typescript: TypescriptIcon,
  php: PhpIcon,
  java: JavaIcon,
  "c#": CsharpIcon,
  "c++": CplusIcon,
  python: PythonIcon,
  kotlin: KotlinIcon,
  mysql: MysqlIcon,
};

interface Props {
  tech: string;
}

export default function DynamicLanguageIcon({ tech }: Props) {
  const IconComponent = languageIcons[tech.toLowerCase()];

  return IconComponent ? <IconComponent /> : <span>Icon not found</span>;
}
