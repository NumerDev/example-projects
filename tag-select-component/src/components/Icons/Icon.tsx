import { SVGProps } from "react";
import ClearIcon from "./Variants/ClearIcon";
import CloseIcon from "./Variants/CloseIcon";
import SearchIcon from "./Variants/SearchIcon";
import SparklesIcon from "./Variants/SparklesIcon";
import TagIcon from "./Variants/TagIcon";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const Icon = {
  CloseIcon,
  ClearIcon,
  SearchIcon,
  SparklesIcon,
  TagIcon,
};

export default Icon;
