import React from "react";
import { TerminalIcon, VSCodeIcon, GlobeIcon, SSHIcon } from "./Icons";

const options = [
  {
    title: "VS Code extension",
    href: "/getting-started/vscode",
    icon: VSCodeIcon,
  },
  {
    title: "CLI",
    href: "/getting-started/cli",
    icon: TerminalIcon,
  },
  {
    title: "VS Code via SSH",
    href: "/getting-started/vscode-ssh",
    icon: SSHIcon,
  },
  {
    title: "Web browser",
    href: "/getting-started/web",
    icon: GlobeIcon,
  },
];

export default function EnvironmentOptions() {
  return (
    <div className="grid grid-cols-2 gap-2 justify-center items-center">
      {options.map(({ href, title, icon }) => {
        return (
          <a
            className="text-center shadow-md p-2 m-2 min-w-[200px] rounded"
            href={href}
            title={title}
            target="_self"
          >
            {icon({ className: "my-0 mx-auto" })}
            <span>{title}</span>
          </a>
        );
      })}
    </div>
  );
}
