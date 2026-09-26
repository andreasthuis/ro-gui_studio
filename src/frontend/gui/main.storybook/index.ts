import { Storybook } from "@rbxts/ui-labs";

const storybook: Storybook = {
	name: "ro-gui studio",
	storyRoots: [
		(script.FindFirstChild("explorer") ?? script.WaitForChild("explorer")) as Folder,
		(script.FindFirstChild("assets") ?? script.WaitForChild("assets")) as Folder,
	],
	groupRoots: true,
};

export = storybook;