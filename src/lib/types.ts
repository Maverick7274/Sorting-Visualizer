export type SortingAlgorithmType =
	| "bubble"
	| "selection"
	| "insertion"
	| "merge"
	| "quick";

export type SelectOptionsType = {
    label: string;
    value: string;
};

export type AnimationArrayType = [number[], boolean][];