import React from "react";
import { TerminalIcon, VSCodeIcon, GlobeIcon, SSHIcon } from "./Icons";

const options = [
  {
    title: "Runme VS Code Extension",
    href: "/how-runme-works/vs-code",
    icon: VSCodeIcon,
  },
  {
    title: "Runme CLI",
    href: "/how-runme-works/cli",
    icon: TerminalIcon,
  },
  {
    title: "Runme via SSH",
    href: "/how-runme-works/runme-via-ssh",
    icon: SSHIcon,
  },
  {
    title: "Runme Web",
    href: "/how-runme-works/web",
    icon: GlobeIcon,
  },
];

export default function EnvironmentOptions() {
  return (
    <div className="flex gap-1.5 justify-center items-center flex-row p-2 m-2 flex-wrap">
      {options.map(({ href, title, icon }) => {
        return (
          <a
            className="text-center shadow-md p-2 m-4 min-w-[200px] rounded"
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
