"use client"

import React, { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavListProps {
  links: { path: string; name: string }[];
  align: "row" | "column";
}

const NavList: FC<NavListProps> = (props) => {
  const { links, align } = props;

  return (
    <ul
      className={`list-none flex flex-wrap justify-center ${
        align === "row" ? "flex-col" : "flex-row"
      } gap-5`}
    >
      {links.map((link, index) => {
        return (
          <li key={index}>
            <Link 
                href={`${link.path}`}
            >
              <Button variant="ghost" className="hover:cursor-pointer">
                <h3 className="scroll-m-20 font-semibold tracking-tight cursor-pointer dark:text-white text-black">
                  {link.name}
                </h3>
              </Button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;