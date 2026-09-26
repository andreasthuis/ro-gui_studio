import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { Instance } from "../../explorer/instance";

export = CreateReactStory(
    {
        react: React,
        reactRoblox: ReactRoblox,
    },
    () => {
        return (
            <frame
                Size={new UDim2(1, 0, 1, 0)}
                BackgroundTransparency={1}
            >
                <Instance
                    name="Test Instance"
                    className="Frame"
                    uuid="1234-5678-9012"
                />
            </frame>
        );
    }
);