import { motion } from "motion/react";

interface LEDCrabFaceProps {
  expression: "happy" | "sad" | "neutral";
  color?: "green" | "red" | "orange";
}

export function LEDCrabFace({ expression, color = "green" }: LEDCrabFaceProps) {
  const dotColor =
    color === "green"
      ? "bg-green-500"
      : color === "red"
        ? "bg-red-500"
        : "bg-orange-500";

  // 8x8 LED matrix patterns
  const patterns = {
    happy: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    sad: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    neutral: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
  };

  const pattern = patterns[expression];

  return (
    <div className="flex items-center justify-center p-8">
      <div className="inline-block p-6 bg-gray-900 rounded-2xl shadow-lg">
        <div className="grid grid-cols-8 gap-2">
          {pattern.map((row, rowIndex) =>
            row.map((dot, colIndex) => (
              <motion.div
                key={`${rowIndex}-${colIndex}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: dot ? 1 : 0.1,
                  scale: dot ? 1 : 0.8,
                }}
                transition={{ delay: (rowIndex * 8 + colIndex) * 0.01 }}
                className={`w-3 h-3 rounded-full ${
                  dot ? dotColor : "bg-gray-800"
                }`}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
