import { useRef, useEffect, FC } from "react";

type Props = {};

const Canvas: FC = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    }) as CanvasRenderingContext2D;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    class Particle {
      effect: Effect;
      x: number;
      y: number;
      originX: number;
      originY: number;
      size: number;
      color: string;
      dx: number;
      dy: number;
      vx: number;
      vy: number;
      force: number;
      angle: number;
      distance: number;
      friction: number;
      ease: number;

      constructor(effect: Effect, x: number, y: number, color: string) {
        this.effect = effect;
        this.x = Math.random() * this.effect.canvasWidth;
        this.y = Math.random() * this.effect.canvasWidth;
        this.originX = x;
        this.originY = y;
        this.size = this.effect.gap;
        this.color = color;
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;
        this.force = 0;
        this.angle = 0;
        this.distance = 0;
        this.friction = 0.9;
        this.ease = 0.2;
      }
      draw() {
        this.effect.context.fillStyle = this.color;
        this.effect.context.fillRect(this.x, this.y, this.size, this.size);
      }
      update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force -= this.effect.mouse.radius / this.distance;

        if (this.distance < this.effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }
        this.x +=
          (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y +=
          (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
      }
    }
    class Effect {
      context: CanvasRenderingContext2D;
      canvasWidth: number;
      canvasHeight: number;
      textX: number;
      textY: number;
      fontSize: number;
      maxTextWidth: number;
      lineHeight: number;
      particles: Array<any>;
      gap: number;
      mouse: {
        radius: number;
        x: number;
        y: number;
      };
      constructor(
        contex: CanvasRenderingContext2D,
        canvasWidth: number,
        canvasHeight: number
      ) {
        this.context = contex;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.textX = 20;
        this.textY = canvasHeight;
        this.fontSize = (canvasWidth * 0.01 + canvasHeight * 0.01) * 3;
        this.maxTextWidth = canvas.width * 0.3;
        this.lineHeight = (canvasWidth * 0.01 + canvasHeight * 0.01) * 3;
        this.particles = [];
        this.gap = 1;
        this.mouse = {
          radius: 2000,
          x: 0,
          y: 0,
        };
        window.addEventListener("mousemove", (e) => {
          this.mouse.x = e.x;
          this.mouse.y = e.y;
        });
      }
      wrapText(text: string) {
        console.log(this.canvasWidth);
        const gradient = this.context.createLinearGradient(
          0,
          0,
          this.canvasWidth / 2.5,
          this.canvasHeight / 2.5
        );
        gradient.addColorStop(0.2, "magenta");
        gradient.addColorStop(0.5, "red");
        gradient.addColorStop(0.6, "purple");
        this.context.fillStyle = gradient;
        this.context.textAlign = "start";
        this.context.textBaseline = "middle";

        this.context.font = `${String(this.fontSize)}px  BlinkMacSystemFont`;

        //multiple text
        let linesArray = [];
        let lineCounter = 0;
        let line = "";
        let words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
          let textLine = line + words[i] + " ";
          if (ctx.measureText(textLine).width > this.maxTextWidth) {
            line = words[i] + " ";
            lineCounter++;
          } else {
            line = textLine;
          }
          linesArray[lineCounter] = line;
        }
        let textheight = this.lineHeight + lineCounter;
        this.textY = this.canvasHeight / 2 - textheight;
        linesArray.forEach((el, i) =>
          ctx.fillText(el, this.textX, this.textY + i * this.lineHeight)
        );
        this.converToParticles();
      }

      converToParticles() {
        this.particles = [];
        const pixels = this.context.getImageData(
          0,
          0,
          this.canvasWidth,
          this.canvasHeight
        ).data;
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasWidth);
        for (let y = 0; y < this.canvasHeight; y += this.gap) {
          for (let x = 0; x < this.canvasWidth; x += this.gap) {
            const index = (y * this.canvasWidth + x) * 4;
            const alpha = pixels[index + 3];
            if (alpha > 0) {
              const red = pixels[index];
              const green = pixels[index + 1];
              const blue = pixels[index + 2];
              const color = `rgb(${red},${green},${blue})`;
              this.particles.push(new Particle(this, x, y, color));
            }
          }
        }
      }
      render() {
        this.particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
      }
      resize(width: number, height: number) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.maxTextWidth = canvas.width * 0.3;
      }
    }

    const effect = new Effect(ctx, canvas.width, canvas.height);

    effect.wrapText("Разработка Веб приложений");
    effect.render();
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.render();
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      effect.resize(canvas.width, canvas.height);
      effect.wrapText("Разработка Веб приложений");
    });
  }, []);
  return (
    <canvas id="canvas" ref={canvasRef}>
      <style jsx>{`
        #canvas {
          position: absolute;
          background: black;
          top: 0;
          left: 0;
        }
      `}</style>
    </canvas>
  );
};

export default Canvas;
