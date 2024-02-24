"use client";

import React, { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavList from "./NavList";
import { ModeToggle } from "../ModeToggle";
import { useSortingAlgorithm } from "@/Context/Visualizer";
import { AnimationSlider } from "@/components/Input/Slider";
import { SelectSorting } from "@/components/Input/Select";
import { algorithmOptions, generateAnimationArray } from "@/lib/utils";
import { SortingAlgorithmType } from "@/lib/types";

interface Link {
	name: string;
	path: string;
}

const Navbar: FC = () => {

	const {
		arrayToSort,
		setArrayToSort,
		selectedAlgorithm,
		setSelectedAlgorithm,
		isSorting,
		setIsSorting,
		animationSpeed,
		setAnimationSpeed,
		isAnimationComplete,
		setIsAnimationComplete,
		resetArrayAndAnimation,
		runAnimation,
		requireReset,
	} = useSortingAlgorithm();

	const handleStart = () => {
		if (requireReset) {
			resetArrayAndAnimation();
			return;
		}

		generateAnimationArray(
			selectedAlgorithm,
			isSorting,
			arrayToSort,
			runAnimation
		);
		// console.log("Start Sorting");
	};

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedAlgorithm(e.target.value as SortingAlgorithmType);
	};



	const links: Link[] = [
		{
			name: "About",
			path: "/about",
		},
		{
			name: "Contact",
			path: "/contact",
		},
	];


	const [open, setOpen] = useState<boolean>(false);

	const handleOpen = () => {
		setOpen(!open);
		// close after clicking
		if (open) {
			setOpen(false);
		}
	};

	return (
		<div className="fixed top-0 left-0 z-[100] w-full flex flex-col items-center justify-center">
			<nav className="backdrop-blur-sm flex w-full justify-between items-center px-7 h-14 border-b border-b-bg-zinc-950">
				{/* 
          // Desktop Navigation
        */}

				<Link href="/">
					<h1 className="scroll-m-20 text-xl tracking-tight lg:text-2xl">
						Sorting
						<span className="font-extrabold text-slate-700 dark:text-slate-300 text-heading">
							Visualizer
						</span>
					</h1>
				</Link>

				<div className="md:hidden flex">
					<Button
						className="hover:cursor-pointer"
						onClick={handleOpen}
					>
						{open ? (
							<svg
								width="20"
								height="20"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
									fill="currentColor"
									fillRule="evenodd"
									clipRule="evenodd"
								></path>
							</svg>
						) : (
							<svg
								width="20"
								height="20"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
									fill="currentColor"
									fillRule="evenodd"
									clipRule="evenodd"
								></path>
							</svg>
						)}
					</Button>
				</div>

				<div className="md:flex justify-between w-full items-center px-5 hidden">
					<div className="flex justify-center items-center">
						<NavList links={links} align="column" />
					</div>
					<div>
						<ul className="list-none flex items-center gap-5">
							<>
								{/* <li>
                  <div>
                      Controls
                  </div>
                </li> */}
								<li>
								<div className="flex md:flex-row flex-col gap-5 items-center justify-between">
						<div>
							<AnimationSlider
								isDisabled={isSorting}
								value={animationSpeed}
								defaultValue={50}
								handleChange={(e) =>
									setAnimationSpeed(parseInt(e.target.value))
								}
							/>
						</div>
						<div>
							<SelectSorting
								options={algorithmOptions}
								defaultValue={selectedAlgorithm}
								onChange={handleSelectChange}
								isDisabled={isSorting}
							/>
						</div>
						<div>
							<Button variant="outline" onClick={handleStart}>
								{requireReset ? (
									<div className="flex items-center justify-center gap-3">
										Reset{" "}
										<svg
											width="15"
											height="15"
											viewBox="0 0 15 15"
											fill="#BE123C"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.85355 2.14645C5.04882 2.34171 5.04882 2.65829 4.85355 2.85355L3.70711 4H9C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13H5C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12H9C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5H3.70711L4.85355 6.14645C5.04882 6.34171 5.04882 6.65829 4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645L4.14645 2.14645C4.34171 1.95118 4.65829 1.95118 4.85355 2.14645Z"
												fill="currentColor"
												fillRule="evenodd"
												clipRule="evenodd"
											></path>
										</svg>
									</div>
								) : (
									<div className="flex items-center justify-center gap-3">
										Start{" "}
										<svg
											width="10"
											height="11"
											viewBox="0 0 10 11"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M0.24182 0.32181C0.3919 0.23132 0.5784 0.22601 0.73338 0.30781L9.7334 5.05781C9.8974 5.14436 10 5.31457 10 5.5C10 5.68543 9.8974 5.85564 9.7334 5.94219L0.73338 10.6922C0.5784 10.774 0.3919 10.7687 0.24182 10.6782C0.0917501 10.5877 0 10.4252 0 10.25V0.75C0 0.57476 0.0917501 0.4123 0.24182 0.32181ZM1 1.57925V9.4207L8.4288 5.5L1 1.57925Z"
												fill="#15803D"
											/>
										</svg>
									</div>
								)}
							</Button>
						</div>
					</div>
								</li>
								<li>
									<ModeToggle />
								</li>
							</>
						</ul>
					</div>
				</div>
			</nav>

			{/* 
      // Mobile Navigation
 */}
			{open && (
				<div className="bg-zinc-50 dark:bg-zinc-950 w-full p-5 md:hidden flex flex-col gap-5 border-b border-b-bg-zinc-950">
					<div>
						<ul className="list-none flex flex-col gap-5">
							<NavList links={links} align="column" />
						</ul>
					</div>
					<div className="flex justify-center w-full items-center">
						<ul className="list-none flex gap-5">
							<>
								<li>
									<ModeToggle />
								</li>
							</>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
