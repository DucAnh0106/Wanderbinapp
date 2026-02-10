import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { useState } from "react";

export function ScanItem() {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    
    // Simulate scanning - randomly decide if item is recyclable
    setTimeout(() => {
      const isRecyclable = Math.random() > 0.5;
      if (isRecyclable) {
        navigate("/result/recyclable");
      } else {
        navigate("/result/not-recyclable");
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Camera Viewfinder Simulation */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900">
        {/* Animated scan lines for effect */}
        {isScanning && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
      </div>

      {/* Header Label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 pt-12 pb-6 px-6 text-center"
      >
        <p className="text-white text-lg">Point camera at your item</p>
      </motion.div>

      {/* Scanning Frame Overlay */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full max-w-sm aspect-square"
        >
          {/* Rounded rectangular frame */}
          <div className="absolute inset-0 border-4 border-white rounded-3xl">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-orange-500 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-orange-500 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-orange-500 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-orange-500 rounded-br-3xl" />
          </div>

          {/* Scanning animation */}
          {isScanning && (
            <motion.div
              className="absolute inset-4 border-2 border-orange-500 rounded-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      </div>

      {/* Scan Button */}
      <div className="relative z-10 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            onClick={handleScan}
            disabled={isScanning}
            className="w-20 h-20 rounded-full bg-orange-500 hover:bg-orange-600 mx-auto flex items-center justify-center shadow-lg disabled:opacity-50"
          >
            {isScanning ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-4 border-white border-t-transparent rounded-full"
              />
            ) : (
              <div className="w-16 h-16 rounded-full border-4 border-white" />
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
