import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Factory, Printer, Layers, Settings, CheckCircle, Truck } from "lucide-react";

const nodes = [
  { id: "film", label: "Film", icon: Factory, info: { title: "SHIPMENT #3410", metric: "58.54°F" } },
  { id: "printing", label: "Printing", icon: Printer, info: { title: "Run", metric: "In Progress" } },
  { id: "lamination", label: "Lamination", icon: Layers, info: { title: "Lamination", metric: "Active" } },
  { id: "converting", label: "Converting", icon: Settings, info: { title: "Converting", metric: "Ready" } },
  { id: "qc", label: "QC", icon: CheckCircle, info: { title: "QC", metric: "Pass" } },
  { id: "ship", label: "Ship", icon: Truck, info: { title: "Shipping", metric: "Ready" } },
];

export default function ManufacturingFlow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCard, setShowCard] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    let mounted = true;

    async function run() {
      await controls.start({ pathLength: 1, transition: { duration: 1.8, ease: "easeInOut" } });

      // cycle highlight slowly
      while (mounted) {
        for (let i = 0; i < nodes.length; i++) {
          setActiveIndex(i);
          setShowCard(true);
          await new Promise((r) => setTimeout(r, 1400));
        }
      }
    }

    run();
    return () => {
      mounted = false;
    };
  }, [controls]);

  const positions = [
    { x: 100, y: 200 },
    { x: 300, y: 120 },
    { x: 540, y: 160 },
    { x: 760, y: 120 },
    { x: 980, y: 200 },
    { x: 1100, y: 240 },
  ];

  const pathD = `M ${positions[0].x} ${positions[0].y} C ${positions[0].x + 120} ${positions[0].y - 60}, ${positions[1].x - 40} ${positions[1].y - 40}, ${positions[1].x} ${positions[1].y} S ${positions[2].x} ${positions[2].y - 40}, ${positions[2].x} ${positions[2].y} S ${positions[3].x} ${positions[3].y - 40}, ${positions[3].x} ${positions[3].y} S ${positions[4].x} ${positions[4].y - 40}, ${positions[4].x} ${positions[4].y} L ${positions[5].x} ${positions[5].y}`;

  return (
    <section className="py-12 bg-white">
      <div className="container-wide">
        <div className="text-center mb-6">
          <h3 className="text-accent text-sm font-medium">Manufacturing Control</h3>
          <h2 className="text-2xl md:text-3xl font-semibold">Production Flow & Status</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">A lightweight schematic of our process flow.</p>
        </div>

        <div className="relative rounded-2xl bg-slate-50 shadow-sm overflow-hidden border border-slate-100">
          <div className="p-6">
            <svg viewBox="0 0 1200 360" className="w-full h-[300px]">
              <defs>
                <linearGradient id="routeLight" x1="0" x2="1">
                  <stop offset="0%" stopColor="#e6f3ff" />
                  <stop offset="100%" stopColor="#f7fbff" />
                </linearGradient>
              </defs>

              {/* subtle background line */}
              <path d={pathD} fill="none" stroke="#e9f2ff" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />

              {/* animated route */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="#9fc8ff"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />

              {/* nodes */}
              {positions.map((pos, i) => {
                const N = nodes[i];
                const Icon = N.icon;
                const isActive = i === activeIndex;
                return (
                  <g key={N.id} transform={`translate(${pos.x}, ${pos.y})`}>
                    <circle r={18} fill={isActive ? "#eaf6ff" : "#ffffff"} stroke={isActive ? "#4286c5" : "#dbe7f7"} strokeWidth={isActive ? 3 : 1.5} />
                    <foreignObject x={-12} y={-12} width={24} height={24}>
                      <div className="w-6 h-6 flex items-center justify-center text-accent">
                        <Icon className="h-4 w-4 text-accent" />
                      </div>
                    </foreignObject>
                    <text x={0} y={34} textAnchor="middle" className="text-[12px] font-medium fill-[#475569]" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>{N.label}</text>
                  </g>
                );
              })}
            </svg>

            {/* compact info card at bottom-right */}
            {showCard && (
              <div className="absolute right-6 bottom-6 w-[260px]">
                <div className="p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">{nodes[activeIndex].info.title}</p>
                      <p className="text-sm font-semibold mt-1">{nodes[activeIndex].info.metric}</p>
                    </div>
                    <div className="w-24 h-10">
                      <svg viewBox="0 0 60 20" className="w-full h-full">
                        <polyline points="0,14 10,10 20,12 30,8 40,11 50,6 60,9" fill="none" stroke="#dbeafe" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="0,14 10,12 20,10 30,7 40,9 50,5 60,8" fill="none" stroke="#7fb7ff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
