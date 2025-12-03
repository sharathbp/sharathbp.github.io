import React from 'react';

interface StickerProps {
    Icon: React.ElementType;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    color: string;
    rotate: string;
    delay: string;
    animation?: string;
    size?: string;
    zIndex?: string;
}

const Sticker: React.FC<StickerProps> = ({
    Icon,
    top,
    left,
    right,
    bottom,
    color,
    rotate,
    delay,
    animation = "animate-swim-1",
    size = "w-12 h-12",
    zIndex = "z-0"
}) => (
    <div
        className={`absolute flex items-center justify-center p-2 rounded-2xl ${rotate} ${animation} opacity-20 hover:opacity-100 transition-all duration-500 cursor-pointer ${zIndex}`}
        style={{ top, left, right, bottom, animationDelay: delay }}
    >
        <Icon className={`${size} ${color} drop-shadow-md`} />
    </div>
);

export default Sticker;
