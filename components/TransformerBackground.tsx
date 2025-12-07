import React, { useEffect, useRef } from 'react';

const TransformerBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let frameId: number;
        let scrollY = window.scrollY;

        // Theme Colors
        let gridColor = 'rgba(34, 211, 238, 0.5)';
        let horizonColor = 'rgba(34, 211, 238, 0.8)';

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            updateColors();
        };

        const updateColors = () => {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
                // Dark Mode: Bright Cyan/Blue
                gridColor = 'rgba(34, 211, 238, 0.1)'; // Increased to 10% visibility
                horizonColor = 'rgba(34, 211, 238, 0.3)';
            } else {
                // Light Mode: Deep Blue
                gridColor = 'rgba(29, 78, 216, 0.06)'; // Increased to 6% visibility
                horizonColor = 'rgba(29, 78, 216, 0.15)';
            }
        };

        const handleScroll = () => {
            scrollY = window.scrollY;
        };

        const drawGrid = () => {
            ctx.clearRect(0, 0, width, height);

            // Horizon Line
            const horizonY = height * 0.4;

            // Gradient Background (Subtle Fog)
            const gradient = ctx.createLinearGradient(0, horizonY, 0, height);
            gradient.addColorStop(0, 'rgba(0,0,0,0)');
            gradient.addColorStop(0.2, 'rgba(0,0,0,0)');
            gradient.addColorStop(1, 'rgba(0,0,0,0.05)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, horizonY, width, height - horizonY);

            ctx.lineWidth = 1; // Reduced from 2 for thinner, subtler lines
            ctx.strokeStyle = gridColor;

            // Vertical Lines (Perspective)
            // Radiate from center horizon
            const centerX = width / 2;
            const fov = 300;

            ctx.beginPath();
            for (let x = -width; x <= width * 2; x += 100) {
                // Simple perspective: Line from vanishing point to bottom
                // We cheat slightly for the "retro" look by just drawing lines from horizon
                // But let's make them spread out properly

                // Bottom x position
                const bottomX = centerX + (x - centerX) * 4;

                ctx.moveTo(x, horizonY);
                ctx.lineTo(bottomX, height);
            }
            ctx.stroke();

            // Horizontal Lines (Scroll Driven - True 3D Perspective)
            // They move towards the viewer (down) as you scroll down
            const gridSize = 100; // World units
            const speed = 2; // Scroll speed multiplier

            // Calculate Z-offset based on scroll. 
            // We want the grid to move towards us (decrease Z) as we scroll down
            const scrollZ = (scrollY * speed) % gridSize;

            ctx.beginPath();

            // Render lines from Z=Near to Z=Far
            // We iterate in world space Z units
            const cameraHeight = 100; // Height of camera above grid
            const projectionScale = 300; // FOV scale factor

            for (let i = 0; i < 40; i++) {
                // Z position in world space relative to camera
                // Start a bit in front of camera (z=10) and go back
                let z = 10 + (i * gridSize) - scrollZ;

                // If z becomes too small (behind camera), wrap it to the back
                if (z < 10) z += (40 * gridSize);

                // Perspective Projection: y = horizon + (height / z) * scale
                const projectedY = horizonY + (cameraHeight / z) * projectionScale;

                if (projectedY > height) continue;
                if (projectedY < horizonY) continue;

                // Opacity fade near horizon (far Z)
                // Alpha is 1 when close, 0 when far
                const alpha = Math.max(0, 1 - (z / 2000));
                ctx.globalAlpha = alpha;

                ctx.moveTo(0, projectedY);
                ctx.lineTo(width, projectedY);
            }
            ctx.stroke();
            ctx.globalAlpha = 1;

            // Horizon Glow Line - REMOVED for subtlety
            // ctx.strokeStyle = horizonColor;
            // ctx.lineWidth = 1;
            // ctx.beginPath();
            // ctx.moveTo(0, horizonY);
            // ctx.lineTo(width, horizonY);
            // ctx.stroke();
        };

        const render = () => {
            updateColors();
            drawGrid();
            frameId = requestAnimationFrame(render);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('scroll', handleScroll);

        resize();
        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: 'transparent' }}
        />
    );
};

export default TransformerBackground;
