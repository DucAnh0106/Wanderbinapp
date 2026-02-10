import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { useEffect } from "react";

export function Departure() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-return to home after 3 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        {/* Animated Robot Leaving */}
        <motion.div
          initial={{ x: 0, rotate: 0 }}
          animate={{
            x: [0, 50, 100, 150],
            rotate: [0, -10, -5, 0],
            opacity: [1, 1, 0.8, 0.3],
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
          }}
          className="text-9xl mb-8"
        >
          🦀👋
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-medium text-gray-900 mb-3">
            Thanks for recycling!
          </h2>
          <p className="text-lg text-gray-600">
            Your CRAB-E bot is heading back to patrol
          </p>
        </motion.div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            onClick={handleBackToHome}
            className="h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white rounded-xl"
          >
            Back to Home
          </Button>
        </motion.div>

        {/* Auto-redirect indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-sm text-gray-400 mt-6"
        >
          Returning to home automatically...
        </motion.p>
      </motion.div>
    </div>
  );
}
