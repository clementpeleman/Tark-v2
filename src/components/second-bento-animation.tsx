"use client";

import { Icons } from "@/components/icons";
import { OrbitingCircles } from "@/components/ui/orbiting-circle";
import { cn } from "@/lib/utils";
import { forwardRef, useRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function SecondBentoAnimation() {
  // const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20"></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 size-16 bg-secondary p-2 rounded-full z-30 md:bottom-0 md:top-auto">
        <Icons.logo className="fill-white size-10" />
      </div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="relative flex h-full w-full items-center justify-center translate-y-0 md:translate-y-32">
          <OrbitingCircles
            index={0}
            iconSize={60}
            radius={100}
            reverse
            speed={1}
          >
            <Circle ref={div1Ref}>
              <Icons.clickup />
            </Circle>
            <Circle ref={div1Ref}>
              <Icons.confluence />
            </Circle>
            <Circle ref={div1Ref}>
              <Icons.dropbox />
            </Circle>
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={60} speed={0.5}>
            <Circle ref={div1Ref}>
              <Icons.salesforce />
            </Circle>
            <Circle ref={div1Ref}>
              <Icons.slack />
            </Circle>
            <Circle ref={div1Ref}>
              <Icons.github />
            </Circle>
          </OrbitingCircles>

          <OrbitingCircles
            index={2}
            iconSize={60}
            radius={230}
            reverse
            speed={0.5}
          >
            <Circle ref={div1Ref}>
              <Icons.gmail />
            </Circle>
            <Circle ref={div1Ref}>
              <Icons.hubspot />
            </Circle>
            <Circle ref={div1Ref}>
              <Icons.aws />
            </Circle>
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}
