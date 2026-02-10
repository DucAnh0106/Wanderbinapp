import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { LEDCrabFace } from "../components/LEDCrabFace";
import { XCircle, AlertCircle } from "lucide-react";

export function ResultNotRecyclable() {
  const navigate = useNavigate();

  const handleScanAnother = () => {
    navigate("/scan");
  };

  const handleDismiss = () => {
    navigate("/departure");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex flex-col p-6">
      {/* Rejection Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 mt-4"
      >
        <Card className="p-4 bg-red-100 border-red-300 rounded-2xl flex items-center gap-3">
          <XCircle className="w-6 h-6 text-red-600" />
          <p className="text-red-800 font-medium">
            This item is not recyclable.
          </p>
        </Card>
      </motion.div>

      {/* LED Crab Face */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <LEDCrabFace expression="sad" color="red" />
      </motion.div>

      {/* Guidance Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 mb-8"
      >
        <Card className="p-6 rounded-2xl shadow-md border border-gray-200 bg-gray-50">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-gray-600 mt-0.5" />
            <div>
              <p className="text-gray-900 font-medium mb-2">Lid is locked</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Please dispose of this item in the general waste bin instead.
                Thank you for checking!
              </p>
            </div>
          </div>
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
