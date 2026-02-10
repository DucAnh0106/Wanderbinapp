import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { MapPin } from "lucide-react";
import mapBackground from "figma:asset/c3ea13ab7f4bf01221bfb3f7adc1fccc2b71602d.png";

interface Robot {
  id: string;
  name: string;
  status: "Ready" | "Busy";
  position: { top: string; left: string };
}

const mockRobots: Robot[] = [
  { id: "04", name: "CRAB-E #04", status: "Ready", position: { top: "25%", left: "65%" } },
  { id: "12", name: "CRAB-E #12", status: "Ready", position: { top: "45%", left: "35%" } },
  { id: "07", name: "CRAB-E #07", status: "Busy", position: { top: "20%", left: "85%" } },
  { id: "19", name: "CRAB-E #19", status: "Ready", position: { top: "55%", left: "75%" } },
];

export function Home() {
  const navigate = useNavigate();

  const handleSummon = () => {
    navigate("/en-route");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col relative overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0">
        <img
          src={mapBackground}
          alt="Map"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Header with Logo */}
      <header className="relative z-10 p-4 pb-2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg inline-flex"
        >
          <div className="text-2xl">🦀</div>
          <h1 className="text-xl font-semibold text-gray-900">Wander-Bin</h1>
        </motion.div>
      </header>

      {/* Location Card - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-4 right-4 z-10"
      >
        <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg p-3 pr-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-orange-500" />
            <div>
              <p className="text-xs text-gray-500">Current Location</p>
              <p className="text-sm font-semibold text-gray-900">Tampines Void Deck</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Main Map Area with Bot Markers */}
      <main className="flex-1 relative z-10 p-6">
        {/* User Location Marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute"
          style={{ top: "40%", left: "50%" }}
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 w-12 h-12 bg-blue-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            />
            <div className="w-6 h-6 bg-blue-500 border-4 border-white rounded-full shadow-lg" />
          </div>
        </motion.div>

        {/* Bot Location Markers */}
        {mockRobots.map((robot, index) => (
          <motion.div
            key={robot.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="absolute"
            style={{ top: robot.position.top, left: robot.position.left }}
          >
            <div className="relative -translate-x-1/2 -translate-y-full">
              {/* Bot Marker */}
              <div className="flex flex-col items-center">
                <div
                  className={`px-3 py-1.5 rounded-full shadow-lg mb-1 flex items-center gap-1.5 ${
                    robot.status === "Ready"
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }`}
                >
                  <div className="text-xs">🦀</div>
                  <span className="text-xs font-medium text-white whitespace-nowrap">
                    {robot.name}
                  </span>
                </div>
                {/* Marker Pin */}
                <div
                  className={`w-3 h-3 rotate-45 ${
                    robot.status === "Ready" ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </main>

      {/* Bottom Section with Legend and Summon Button */}
      <div className="relative z-10 p-6 pt-0 flex flex-col items-center">
        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-4 w-full max-w-sm"
        >
          <Card className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-3 shadow-lg hover:bg-white/95 transition-all duration-300">
            <div className="flex items-center justify-around gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                <span className="text-xs text-gray-700">Ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 bg-gray-400 rounded-full" />
                <span className="text-xs text-gray-700">Busy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                <span className="text-xs text-gray-700">You</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Summon Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="w-full max-w-sm"
        >
          <Button
            onClick={handleSummon}
            className="w-full h-12 bg-orange-500/80 hover:bg-orange-500 text-white rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300"
          >
            Summon the Closest Bot
          </Button>
        </motion.div>
      </div>
    </div>
  );
}