import CypressIcon from "./CypressIcon";
import DockerIcon from "./DockerIcon";
import FigmaIcon from "./FigmaIcon";
import GooglecloudIcon from "./GooglecloudIcon";
import GrafanaIcon from "./GrafanaIcon";
import KubernetsIcon from "./KubernetsIcon";
import LinuxIcon from "./LinuxIcon";
import PostmanIcon from "./PostmanIcon";
import PrometheusIcon from "./PrometheusIcon";
import RabbitmqIcon from "./RabbitmqIcon";

interface LanguageIconData {
  [key: string]: React.FC;
}

export const languageIcons: LanguageIconData = {
  docker: DockerIcon,
  kubernets: KubernetsIcon,
  postman: PostmanIcon,
  cypress: CypressIcon,
  rabbitmq: RabbitmqIcon,
  prometheus: PrometheusIcon,
  grafana: GrafanaIcon,
  "google cloud": GooglecloudIcon,
  linux: LinuxIcon,
  figma: FigmaIcon,
};

interface Props {
  tech: string;
}

export default function DynamicLanguageIcon({ tech }: Props) {
  const IconComponent = languageIcons[tech.toLowerCase()];

  return IconComponent ? <IconComponent /> : <span>Icon not found</span>;
}
