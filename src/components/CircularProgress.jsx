const CircularProgress = ({ progress }) => {
  const circumference = 2 * Math.PI * 15;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg className="w-16 h-16" viewBox="0 0 36 36">
      <circle
        className="text-[#142E15] stroke-current"
        strokeWidth="3"
        cx="18"
        cy="18"
        r="15"
        fill="none"
      ></circle>
      <circle
        className="text-[#3F9142] stroke-current"
        strokeWidth="3"
        cx="18"
        cy="18"
        r="15"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(180 18 18)"
      ></circle>
    </svg>
  );
};

export default CircularProgress;
