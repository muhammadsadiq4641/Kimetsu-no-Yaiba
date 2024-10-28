// SpiderCanvas.tsx
import React, { useRef, useEffect } from "react";

interface Point {
  x: number;
  y: number;
  len: number;
  r: number;
  t?: number;
}

interface InnerPoint {
  x: number;
  y: number;
}

const SpiderCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    ctx.fillStyle = "#000";

    const { sin, cos, PI, hypot, min, max } = Math;

    const rnd = (x = 1, dx = 0) => Math.random() * x + dx;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const many = <T,>(n: number, f: (i: number) => T): T[] =>
      Array.from({ length: n }, (_, i) => f(i));

    const drawCircle = (x: number, y: number, r: number) => {
      ctx.beginPath();
      ctx.ellipse(x, y, r, r, 0, 0, PI * 2);
      ctx.fill();
    };

    const drawLine = (x0: number, y0: number, x1: number, y1: number) => {
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      many(100, (i) => {
        i = (i + 1) / 100;
        const x = lerp(x0, x1, i);
        const y = lerp(y0, y1, i);
        const k = noise(x / 5 + x0, y / 5 + y0) * 2;
        ctx.lineTo(x + k, y + k);
      });
      ctx.stroke();
    };

    const noise = (x: number, y: number, t = 101) => {
      const w0 = sin(
        0.3 * x + 1.4 * t + 2.0 + 2.5 * sin(0.4 * y + -1.3 * t + 1.0)
      );
      const w1 = sin(
        0.2 * y + 1.5 * t + 2.8 + 2.3 * sin(0.5 * x + -1.2 * t + 0.5)
      );
      return w0 + w1;
    };

    const pt = (x: number, y: number) => ({ x, y });

    function spawn() {
      const pts: Point[] = many(333, () => ({
        x: rnd(w),
        y: rnd(h),
        len: 0,
        r: 0,
      }));
      const pts2: InnerPoint[] = many(9, (i) => ({
        x: cos((i / 9) * PI * 2),
        y: sin((i / 9) * PI * 2),
      }));

      let seed = rnd(100);
      let tx = rnd(w);
      let ty = rnd(h);
      let x = rnd(w);
      let y = rnd(h);
      let kx = rnd(0.8, 0.8);
      let ky = rnd(0.8, 0.8);
      let walkRadius = pt(rnd(50, 50), rnd(50, 50));
      let r = w / rnd(100, 150);

      const paintPt = (pt: Point) => {
        pts2.forEach((pt2) => {
          if (!pt.len) return;
          drawLine(
            lerp(x + pt2.x * r, pt.x, pt.len * pt.len),
            lerp(y + pt2.y * r, pt.y, pt.len * pt.len),
            x + pt2.x * r,
            y + pt2.y * r
          );
        });
        drawCircle(pt.x, pt.y, pt.r);
      };

      return {
        follow(newX: number, newY: number) {
          tx = newX;
          ty = newY;
        },
        tick(t: number) {
          const selfMoveX = cos(t * kx + seed) * walkRadius.x;
          const selfMoveY = sin(t * ky + seed) * walkRadius.y;
          let fx = tx + selfMoveX;
          let fy = ty + selfMoveY;

          x += min(w / 100, (fx - x) / 10);
          y += min(w / 100, (fy - y) / 10);

          let i = 0;
          pts.forEach((pt) => {
            const dx = pt.x - x;
            const dy = pt.y - y;
            const len = hypot(dx, dy);
            let r = min(2, w / len / 5);
            pt.t = 0;
            const increasing = len < w / 10 && i++ < 8;
            let dir = increasing ? 0.1 : -0.1;
            if (increasing) r *= 1.5;
            pt.r = r;
            pt.len = max(0, min(pt.len + dir, 1));
            paintPt(pt);
          });
        },
      };
    }

    const spiders = many(2, spawn);

    const pointerMove = (e: PointerEvent) => {
      spiders.forEach((spider) => spider.follow(e.clientX, e.clientY));
    };

    const animate = (t: number) => {
      if (canvas.width !== w) canvas.width = w = window.innerWidth;
      if (canvas.height !== h) canvas.height = h = window.innerHeight;
      ctx.fillStyle = "#000";
      drawCircle(0, 0, w * 10);
      ctx.fillStyle = ctx.strokeStyle = "#fff";
      t /= 1000;
      spiders.forEach((spider) => spider.tick(t));
      requestAnimationFrame(animate);
    };

    addEventListener("pointermove", pointerMove);
    requestAnimationFrame(animate);

    return () => {
      removeEventListener("pointermove", pointerMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ display: "block", cursor: "pointer" }} />
  );
};

export default SpiderCanvas;
