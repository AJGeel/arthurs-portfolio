import { useState } from "react";

import { MousePosition } from "@/hooks/useMousePosition";
import useRandomInterval from "@/hooks/useRandomInterval";
import { randomInRange, range } from "@/utils";

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

const generateSparkle = (
  color: string,
  mousePosition?: MousePosition
): Sparkle => {
  const base = {
    id: String(randomInRange(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: randomInRange(10, 20),
  };

  const createFixedPosition = (pos: number) =>
    pos + randomInRange(-15, 15) + "px";
  const createRelativePosition = () => randomInRange(0, 100) + "%";

  const style = mousePosition
    ? {
        top: createFixedPosition(mousePosition.y),
        left: createFixedPosition(mousePosition.x),
      }
    : {
        top: createRelativePosition(),
        left: createRelativePosition(),
      };

  return {
    ...base,
    style,
  };
};

type UseSparklesProps = {
  color: string;
  mousePosition?: MousePosition;
};

const useSparkles = ({
  color = DEFAULT_COLOR,
  mousePosition,
}: UseSparklesProps) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>(() =>
    range(3).map(() => generateSparkle(color, mousePosition))
  );

  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color, mousePosition);
      const now = Date.now();

      const nextSparkles = sparkles.filter(({ createdAt }) => {
        const delta = now - createdAt;
        return delta < 750;
      });

      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    50,
    450
  );

  return {
    sparkles,
  };
};

export default useSparkles;
