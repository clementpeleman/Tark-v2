"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pointer } from "@/components/magicui/pointer";
import { motion } from "motion/react";
import { AnimatedBeamMultipleOutputDemo } from "./animated-beam-mi";

export function FourthBentoAnimation() {
  return (
    // <div className="grid grid-cols-1 gap-3 md:grid-cols-2 h-[95%]">
    //   <Card className="col-span-1 rounded-md row-span-1 overflow-hidden border bg-gradient-to-br from-slate-50 to-slate-100 transition-all dark:from-slate-900 dark:to-slate-800 shadow-none">
    //     <CardHeader className="relative pb-2">
    //       <CardTitle className="text-xl font-bold">Animated Pointer</CardTitle>
    //       <CardDescription className="text-sm text-blue-400 dark:text-blue-300">
    //         A custom pointer with different color
    //       </CardDescription>
    //     </CardHeader>
    //     <CardContent className="relative flex h-40 items-center justify-center p-6">
    //       <span className="pointer-events-none text-center text-xl font-medium text-slate-800 dark:text-slate-200">
    //         Move your cursor here
    //       </span>
    //     </CardContent>
    //     <Pointer>
    //       <motion.div
    //         animate={{
    //           scale: [0.8, 1, 0.8],
    //           rotate: [0, 5, -5, 0],
    //         }}
    //         transition={{
    //           duration: 1.5,
    //           repeat: Infinity,
    //           ease: "easeInOut",
    //         }}
    //       >
    //         <svg
    //           width="40"
    //           height="40"
    //           viewBox="0 0 40 40"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="text-pink-600"
    //         >
    //           <motion.path
    //             d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    //             fill="currentColor"
    //             animate={{ scale: [1, 1.2, 1] }}
    //             transition={{
    //               duration: 0.8,
    //               repeat: Infinity,
    //               ease: "easeInOut",
    //             }}
    //           />
    //         </svg>
    //       </motion.div>
    //     </Pointer>
    //   </Card>

    //   <Card className="col-span-1 rounded-md row-span-1 overflow-hidden border bg-gradient-to-br from-blue-50 to-blue-100 transition-all dark:from-blue-900 dark:to-blue-800 shadow-none">
    //     <CardHeader className="relative pb-2">
    //       <CardTitle className="text-xl font-bold">Colored Pointer</CardTitle>
    //       <CardDescription className="text-sm text-blue-700 dark:text-blue-300">
    //         A custom pointer with different color
    //       </CardDescription>
    //     </CardHeader>
    //     <CardContent className="relative flex h-40 items-center justify-center p-6">
    //       <span className="pointer-events-none text-center text-xl font-medium text-blue-800 dark:text-blue-200">
    //         Try me out
    //       </span>
    //     </CardContent>
    //     <Pointer className="fill-blue-500" />
    //   </Card>

    // </div>
    <AnimatedBeamMultipleOutputDemo />
  );
}
