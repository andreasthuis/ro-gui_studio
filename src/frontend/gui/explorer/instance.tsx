import React from 'react';

interface InstanceProps {
    name: string;
    className: string;
    uuid: string;
    children?: InstanceProps[];
}

export function Instance({ name, className, uuid, children }: InstanceProps) {
    return (
        <frame
            Size={new UDim2(1, 0, 0, 30)}
            BackgroundTransparency={0}
            Position={new UDim2(0, 0, 0, 0)}
        >
            <textlabel
                Text={name}
                Size={new UDim2(1, 0, 1, 0)}
                BackgroundTransparency={1}
            />
        </frame>
    );
}  