import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Move the main crosshair immediately
            if (cursor) {
                cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        // Check for hoverable elements
        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.classList.contains('hover-target')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        // Animation loop for the follower (smooth mechanical lag)
        const animateFollower = () => {
            // Linear interpolation (lerp) for smooth following but tighter than fluid
            followerX += (mouseX - followerX) * 0.2;
            followerY += (mouseY - followerY) * 0.2;

            if (follower) {
                follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) rotate(${isHovering ? '45deg' : '0deg'})`;
            }

            requestAnimationFrame(animateFollower);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('mouseover', onMouseOver);

        const animationId = requestAnimationFrame(animateFollower);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mouseover', onMouseOver);
            cancelAnimationFrame(animationId);
        };
    }, [isHovering]);

    return (
        <>
            {/* Main Crosshair */}
            <div
                ref={cursorRef}
                className={`fixed top-0 left-0 pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out mix-blend-difference flex items-center justify-center`}
            >
                <div className={`w-1 h-4 bg-blue-500 absolute transition-all duration-200 ${isHovering ? 'h-6 bg-red-500' : ''} ${isClicking ? 'scale-x-150' : ''}`}></div>
                <div className={`w-4 h-1 bg-blue-500 absolute transition-all duration-200 ${isHovering ? 'w-6 bg-red-500' : ''} ${isClicking ? 'scale-y-150' : ''}`}></div>
            </div>

            {/* Mechanical Ring / Brackets */}
            <div
                ref={followerRef}
                className={`fixed top-0 left-0 w-12 h-12 border-2 border-blue-500/30 rounded-none pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center
          ${isHovering ? 'w-16 h-16 border-red-500/50 border-dashed rotate-45' : 'border-solid'}
          ${isClicking ? 'scale-90 border-red-500' : ''}
        `}
            >
                {/* Corner Brackets */}
                <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 transition-all duration-300 ${isHovering ? 'border-red-500 -top-1 -left-1' : ''}`}></div>
                <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500 transition-all duration-300 ${isHovering ? 'border-red-500 -top-1 -right-1' : ''}`}></div>
                <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500 transition-all duration-300 ${isHovering ? 'border-red-500 -bottom-1 -left-1' : ''}`}></div>
                <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500 transition-all duration-300 ${isHovering ? 'border-red-500 -bottom-1 -right-1' : ''}`}></div>
            </div>
        </>
    );
};

export default CustomCursor;
