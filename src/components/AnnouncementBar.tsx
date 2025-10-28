import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  
  if (!visible) return null;
  
  return (
    <div className="relative bg-gradient-to-r from-brand-primary to-brand-purple-glow text-white text-center py-2 px-4">
      <p className="text-sm font-medium">
        Free US shipping $35+ • Washable color • No harsh chemicals
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded transition"
        aria-label="Close announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
