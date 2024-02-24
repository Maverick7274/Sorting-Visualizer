"use client";

import { useSortingAlgorithm } from "@/Context/Visualizer";
import { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AnimationSlider } from "@/components/Input/Slider";
import { SelectSorting } from "@/components/Input/Select";
import { algorithmOptions, generateAnimationArray } from "@/lib/utils";
import { SortingAlgorithmType } from "@/lib/types";

export default function Home() {
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

	return (
		<main className="mt-[3.9rem] h-screen w-screen z-[-2]">
			<div className="flex h-full justify-center">
				<div
					id="content-container"
					className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4"
				>
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
					<div className="relative h-[calc(100vh-66px)] w-full">
						<div className="absolute bottom-[32px] w-full left-0 right-0 flex justify-center items-end">
							{arrayToSort.map((value, index) => {
								return (
									<div
										key={index}
										className="array-line relative w-1 mx-0.5 shadow-lg opacity-70 rounded-lg default-line-color"
										style={{
											height: `${value}px`,
										}}
									></div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
