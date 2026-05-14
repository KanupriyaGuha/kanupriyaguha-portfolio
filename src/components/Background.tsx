export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508]" />
      {/* floating orbs */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-600/30 blur-[120px] animate-pulse" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[140px] animate-pulse" style={{ animationDelay: "1s", animationDuration: "6s" }} />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[130px] animate-pulse" style={{ animationDelay: "2s", animationDuration: "8s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_#050508_70%)]" />
    </div>
  );
}
