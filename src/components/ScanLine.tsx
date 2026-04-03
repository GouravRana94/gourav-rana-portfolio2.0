const ScanLine = () => (
  <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
    <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-20 animate-scan" />
  </div>
);

export default ScanLine;
