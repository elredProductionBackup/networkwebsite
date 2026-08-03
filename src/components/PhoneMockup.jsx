export default function PhoneMockup({ children, className = "", width }) {
  return (
    <div
      className={`relative aspect-[9/19] rounded-[2.5rem] border-[10px] border-black bg-black shadow-2xl ${
        width ? "" : "w-64 sm:w-72"
      } ${className}`}
      style={width ? { width } : undefined}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-white">
        <div className="absolute inset-x-0 bottom-0 top-9">{children}</div>
      </div>
      <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

      {/* Side buttons */}
      <div className="absolute -left-[10px] top-24 h-8 w-[3px] rounded-l-sm bg-black" />
      <div className="absolute -left-[10px] top-36 h-14 w-[3px] rounded-l-sm bg-black" />
      <div className="absolute -left-[10px] top-52 h-14 w-[3px] rounded-l-sm bg-black" />
      <div className="absolute -right-[10px] top-32 h-20 w-[3px] rounded-r-sm bg-black" />
    </div>
  );
}
