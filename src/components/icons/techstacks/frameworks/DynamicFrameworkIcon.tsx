import ArduinoIcon from "./ArduinoIcon";
import DotnetIcon from "./DotnetIcon";
import ExpressjsIcon from "./ExpressjsIcon";
import FlutterIcon from "./FlutterIcon";
import LaravelIcon from "./LaravelIcon";
import NextjsIcon from "./NextjsIcon";
import ReactIcon from "./ReactIcon";
import SpringbootIcon from "./SpringbootIcon";

interface LanguageIconData {
  [key: string]: React.FC;
}

export const languageIcons: LanguageIconData = {
  react: ReactIcon,
  nextjs: NextjsIcon,
  laravel: LaravelIcon,
  expressjs: ExpressjsIcon,
  ".net": DotnetIcon,
  springboot: SpringbootIcon,
  flutter: FlutterIcon,
  arduino: ArduinoIcon,
};

interface Props {
  tech: string;
}

export default function DynamicLanguageIcon({ tech }: Props) {
  const IconComponent = languageIcons[tech.toLowerCase()];

  return IconComponent ? <IconComponent /> : <span>Icon not found</span>;
}
