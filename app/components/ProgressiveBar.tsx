interface ProgressiveBarProps {
    value: number; // Match Score (0 - 100)
  }
  
  const ProgressiveBar: React.FC<ProgressiveBarProps> = ({ value }) => {
    const getColor = (score: number) => {
      if (score >= 80) return 'bg-green-500'; // High match
      if (score >= 50) return 'bg-yellow-500'; // Medium match
      return 'bg-red-500'; // Low match
    };
  
    return (
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 ${getColor(value)} rounded-full transition-all`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressiveBar;
  