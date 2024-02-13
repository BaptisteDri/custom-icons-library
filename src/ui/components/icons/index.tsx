import { SVGProps } from "react";
import { ArrowDownTray } from "@/ui/components/icons/arrow-down-tray";
import { Bell } from "@/ui/components/icons/bell";
import { ChatBubble } from "@/ui/components/icons/chat-bubble";
import { Check } from "@/ui/components/icons/check";
import { Cog } from "@/ui/components/icons/cog";
import { Home } from "@/ui/components/icons/home";
import { Lock } from "@/ui/components/icons/lock";
import { MagnifyingGlass } from "@/ui/components/icons/magnifying-glass";
import { PencilSquare } from "@/ui/components/icons/pencil-square";
import { Trash } from "@/ui/components/icons/trash";
import { User } from "@/ui/components/icons/user";
import { XMark } from "@/ui/components/icons/x-mark";

const ICONS = {
  "arrow-down-tray": ArrowDownTray,
  bell: Bell,
  "chat-bubble": ChatBubble,
  check: Check,
  cog: Cog,
  home: Home,
  lock: Lock,
  "magnifying-glass": MagnifyingGlass,
  "pencil-square": PencilSquare,
  trash: Trash,
  user: User,
  "x-mark": XMark,
};

type Props = {
  name: keyof typeof ICONS;
  size?: 16 | 24 | 32 | 48;
} & SVGProps<SVGSVGElement>;

export const Icon = ({ name, size = 24, ...rest }: Props) => {
  const Component = ICONS[name];
  return <Component height={size} width={size} {...rest} />;
};
