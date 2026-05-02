import { useEffect, useMemo } from "react";
import { motion, useAnimate } from "framer-motion";

interface Ball {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface SilkBallsProps {
  count?: number;
  colors?: string[];
}

function AnimatedBall({ ball, colors }: { ball: Ball; colors: string[] }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let cancelled = false;

    const animatePosition = async () => {
      while (!cancelled) {
        // Pick a destination that's far enough from current position
        const newX = 5 + Math.random() * 90;
        const newY = 5 + Math.random() * 90;

        await animate(
          scope.current,
          { left: `${newX}%`, top: `${newY}%` },
          { duration: 4 + Math.random() * 3, ease: "easeInOut" },
        );

        // Short pause at each destination before moving again
        await new Promise((res) => setTimeout(res, 400 + Math.random() * 600));
      }
    };

    animatePosition();

    return () => {
      cancelled = true;
    };
  }, [animate, scope]);

  return (
    <motion.div
      ref={scope}
      className="absolute rounded-full"
      initial={{
        left: `${ball.x}%`,
        top: `${ball.y}%`,
      }}
      animate={{
        backgroundColor: colors,
      }}
      transition={{
        backgroundColor: {
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        },
      }}
      style={{
        width: `${ball.size}px`,
        height: `${ball.size}px`,
        transform: "translate(-50%, -50%)",
        opacity: ball.opacity,
        filter: "blur(60px)",
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
}

export default function SilkBalls({
  count = 8,
  colors = ["#4c00ff", "#8b5cf6", "#6366f1", "#818cf8"],
}: SilkBallsProps) {
  const balls = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 200 + Math.random() * 300,
        duration: 10 + Math.random() * 15,
        delay: Math.random() * 5,
        opacity: 0.45 + Math.random() * 0.3,
      })),
    [count],
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {balls.map((ball) => (
        <AnimatedBall key={ball.id} ball={ball} colors={colors} />
      ))}

      {/* Additional soft glow overlay for silk effect */}
      <motion.div
        className="absolute inset-0 mix-blend-soft-light opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3), transparent 60%)",
            "radial-gradient(circle at 60% 40%, rgba(99, 102, 241, 0.3), transparent 60%)",
            "radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.3), transparent 60%)",
            "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3), transparent 60%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
