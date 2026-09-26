import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { Icons } from "frontend/gui/assets/Icons";

export = CreateReactStory(
    {
        react: React,
        reactRoblox: ReactRoblox,
    },
    () => {
        const iconElements: React.Element[] = [];

        for (const [name, imageId] of pairs(Icons as Record<string, string>)) {
            iconElements.push(
                <frame
                    key={name}
                    BackgroundColor3={new Color3(0.15, 0.15, 0.15)}
                    BorderSizePixel={0}
                >
                    <uicorner CornerRadius={new UDim(0, 8)} />

                    <imagelabel
                        Size={new UDim2(0, 64, 0, 64)}
                        Position={new UDim2(0.5, 0, 0, 12)}
                        AnchorPoint={new Vector2(0.5, 0)}
                        Image={imageId}
                        BackgroundTransparency={1}
                        ScaleType={Enum.ScaleType.Fit}
                    />

                    <textlabel
                        Size={new UDim2(1, -12, 0, 28)}
                        Position={new UDim2(0.5, 0, 1, -8)}
                        AnchorPoint={new Vector2(0.5, 1)}
                        Text={name}
                        TextColor3={new Color3(0.9, 0.9, 0.9)}
                        TextSize={12}
                        TextTruncate={Enum.TextTruncate.AtEnd}
                        BackgroundTransparency={1}
                    />
                </frame>
            );
        }

        return (
            <scrollingframe
                Size={new UDim2(1, 0, 1, 0)}
                BackgroundTransparency={1}
                BorderSizePixel={0}
                CanvasSize={new UDim2(0, 0, 0, 0)}
                AutomaticCanvasSize={Enum.AutomaticSize.Y}
            >
                <uigridlayout
                    CellSize={new UDim2(0, 100, 0, 120)}
                    CellPadding={new UDim2(0, 12, 0, 12)}
                    HorizontalAlignment={Enum.HorizontalAlignment.Center}
                />
                <uipadding
                    PaddingTop={new UDim(0, 16)}
                    PaddingBottom={new UDim(0, 16)}
                    PaddingLeft={new UDim(0, 16)}
                    PaddingRight={new UDim(0, 16)}
                />
                {iconElements}
            </scrollingframe>
        );
    }
);