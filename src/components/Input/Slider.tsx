import { MIN_ANIMATION_SPEED, MAX_ANIMATION_SPEED } from "@/lib/utils";
import React from "react";

export function AnimationSlider({
	min = MIN_ANIMATION_SPEED,
	max = MAX_ANIMATION_SPEED,
	step = 10,
	value,
	defaultValue,
	handleChange,
	isDisabled,
}: {
	min?: number;
	max?: number;
	step?: number;
	value: number;
	defaultValue?: number;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isDisabled: boolean;
}) {
	return (
		<div className="flex gap-5 items-center justify-between">
			<span className="scroll-m-20 text-xl font-semibold tracking-tight">
				Slow
			</span>
			<input
				type="range"
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={handleChange}
				disabled={isDisabled}
				className="w-full cursor-pointer rounded-lg border bg-slate-300 dark:bg-slate-700 h-2 appearance-none"
				defaultValue={defaultValue}
			/>
			<span className="scroll-m-20 text-xl font-semibold tracking-tight">
				Fast
			</span>
		</div>
	);
}
