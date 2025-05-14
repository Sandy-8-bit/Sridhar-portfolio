import { cn } from "../lib/utils";
import Navbar from "../Navbar";
import { VortexDemo } from "./VortexDemo";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-[100vh] md:[100vh] pb-10 flex-col w-full items-center justify-between bg-white dark:bg-black overflow-hidden">
      {/* Navbar */}
      <div className="w-full z-20">
        <Navbar />
      </div>

      {/* Background Animation */}
  <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
  <VortexDemo />
</div>


      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

  



      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </div>
  );
}
