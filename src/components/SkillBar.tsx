
import { useEffect, useRef, useState } from "react";
import { useElementOnScreen } from "@/hooks/use-scroll-position";

interface SkillBarProps {
  name: string;
  level: number;
}

export default function SkillBar({ name, level }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const [setRef, isVisible] = useElementOnScreen({ threshold: 0.3 });

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(level);
      }, 200);
      
      return () => clearTimeout(timer);
    }
    
    return undefined;
  }, [isVisible, level]);

  return (
    <div className="mb-4" ref={setRef as any}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
