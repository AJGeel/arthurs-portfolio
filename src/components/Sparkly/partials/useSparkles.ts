import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import useRandomInterval from "@/hooks/useRandomInterval";
import { randomInRange, range } from "@/utils";
import { useState } from "react";
import { DEFAULT_COLOR } from "../Sparkly";

type Sparkle = {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: {
    top: string;
    left: string;
  };
};

const generateSparkle = (color: string): Sparkle => ({
  id: String(randomInRange(10000, 99999)),
  createdAt: Date.now(),
  color,
  size: randomInRange(10, 20),
  style: {
    top: randomInRange(0, 100) + "%",
    left: randomInRange(0, 100) + "%",
  },
});

const useSparkles = (color = DEFAULT_COLOR) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>(() =>
    range(3).map(() => generateSparkle(color))
  );

  const prefersReducedMotion = usePrefersReducedMotion();

  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color);

      const now = Date.now();

      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });

      nextSparkles.push(sparkle);

      setSparkles(nextSparkles);
    },
    prefersReducedMotion ? 0 : 50,
    prefersReducedMotion ? 0 : 450
  );

  return {
    sparkles,
  };
};

export default useSparkles;
