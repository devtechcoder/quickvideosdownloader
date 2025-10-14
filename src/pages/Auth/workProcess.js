import { motion } from "framer-motion";

const steps = [
  { number: "01", text: "Understanding\nRequirement" },
  { number: "02", text: "Analyzing &\nPlanning" },
  { number: "03", text: "Design &\nDevelop" },
  { number: "04", text: "Evaluate &\nTesting" },
  { number: "05", text: "Final\nDeliver" },
];

export default function WorkProcess() {
  return (
    <div className="w-full bg-white py-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Work <span className="text-orange-500">Process</span>
      </h2>

      <div className="relative w-full max-w-5xl">
        {/* Animated Wave Line */}
        <motion.div
          className="absolute left-0 top-1/2 h-[4px] bg-orange-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
        ></motion.div>

        {/* Steps */}
        <div className="flex justify-between relative z-10 flex-wrap gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`w-32 h-32 rounded-full border-4 ${index % 2 === 0 ? "border-orange-500" : "border-gray-300"} flex flex-col items-center justify-center bg-white shadow-md`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.2, type: "spring" }}
            >
              <motion.span className="text-3xl font-extrabold text-cyan-400" initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ delay: 1 + index * 0.2 }}>
                {step.number}
              </motion.span>
              <p className="text-center text-sm font-semibold whitespace-pre-line">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
