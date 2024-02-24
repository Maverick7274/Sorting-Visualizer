import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { AnimationArrayType, SortingAlgorithmType } from "./types";
import { generateBubbleSortAnimationArray } from "@/Algorithms/bubbleSort";

export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

export function generateRandomNumberInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const algorithmOptions = [
    { label: "Bubble Sort", value: "bubble" },
    { label: "Selection Sort", value: "selection" },
    { label: "Insertion Sort", value: "insertion" },
    { label: "Merge Sort", value: "merge" },
    { label: "Quick Sort", value: "quick" },
];

export function generateAnimationArray(
    selectedAlgorithm: SortingAlgorithmType,
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void,
) {
    switch (selectedAlgorithm) {
        case "bubble":
            generateBubbleSortAnimationArray(isSorting, array, runAnimation)
            break;
        default:
            break;
        
    
    }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
