import { n } from "maath/dist/index-43782085.esm";
import React, { useRef, useEffect } from "react";

const BallCanvas = ({ size = 150, baseColor = "#4A90E2", icon, name }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, size, size);

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2;

    // Draw hexagon path
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = Math.PI / 3 * i - Math.PI / 6; // rotated -30deg
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    // Clip to hexagon
    ctx.save();
    ctx.clip();

    // Draw icon image inside hexagon
    if (icon) {
      const img = new Image();
      img.src = icon;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, size, size);
      };
    }

    ctx.restore();
  }, [size, icon]);

  return (
    <div title={name} style={{ display: "inline-block", cursor: "pointer" }}>
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        style={{ display: "block", background: "transparent" }}
      />
    </div>
  );
};

export default BallCanvas;
