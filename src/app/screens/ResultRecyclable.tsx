import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { LEDCrabFace } from "../components/LEDCrabFace";
import { CheckCircle, Hand } from "lucide-react";

export function ResultRecyclable() {
  const navigate = useNavigate();

  const handleOpenLid = () => {
    // Simulate opening lid, then go to departure
    setTimeout(() => {
      navigate("/departure");
    }, 1500);
  };

  const handleScanAnother = () => {
    navigate("/scan");
  };

  const handleDismiss = () => {
    navigate("/departure");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col p-6">
      {/* Success Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 mt-4"
      >
        <Card className="p-4 bg-green-100 border-green-300 rounded-2xl flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-green-600" />
          <p className="text-green-800 font-medium">
            This item is recyclable!
          </p>
        </Card>
      </motion.div>

      {/* LED Crab Face */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <LEDCrabFace expression="happy" color="green" />
      </motion.div>

      {/* Instructions Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 mb-8"
      >
        <Card className="p-5 rounded-2xl shadow-md border border-gray-200">
          <div className="flex items-start gap-3 mb-4">
            <Hand className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
            <p className="text-base text-gray-800 leading-relaxed font-medium">
              Wave your hand near the bin to open the lid
            </p>
          </div>
          <p className="text-sm text-gray-500 mb-4 pl-9">
            If waving your hand doesn't work, use the button below
          </p>
          <Button
            onClick={handleOpenLid}
            className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl text-base font-medium"
          >
            Open Lid
          </Button>
        </Card>
      </motion.div>

      {/* Secondary Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-3 mt-auto"
      >
        <Button
          onClick={handleScanAnother}
          variant="outline"
          className="w-full h-12 rounded-xl border-2 border-gray-300"
        >
          Scan Another Item
        </Button>
        <Button
          onClick={handleDismiss}
          variant="ghost"
          className="w-full h-12 text-gray-500 hover:text-gray-700"
        >
          Dismiss Robot
        </Button>
      </motion.div>
    </div>
  );
}