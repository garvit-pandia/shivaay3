import { useState, type FormEvent } from "react";

export default function TrackSearch() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    setIsSearching(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      console.log("Tracking number searched:", trackingNumber);
      setSearched(true);
    } finally {
      setIsSearching(false);
    }
  };

  if (searched) {
    return (
      <div aria-live="polite" className="bg-white border border-linen rounded-sm p-6 md:p-8 text-center">
        <p className="text-lg font-display font-semibold text-coal mb-2">Tracking information for: {trackingNumber}</p>
        <p className="text-graphite text-sm">Tracking details will be displayed here once the tracking system is integrated.</p>
        <button onClick={() => { setSearched(false); setTrackingNumber(""); }} aria-label="Reset tracking search"
          className="mt-4 text-iron text-sm font-medium hover:underline">
          Track another shipment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="bg-white border border-linen rounded-sm p-6 md:p-8">
        <label htmlFor="tracking" className="block text-sm font-medium text-coal mb-2">Enter your container or tracking number</label>
        <div className="flex gap-2">
          <input
            id="tracking"
            type="text"
            value={trackingNumber}
            onChange={e => setTrackingNumber(e.target.value)}
            className="flex-1 border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron transition-colors"
            placeholder="e.g., SHIV-2024-001"
            required
          />
          <button type="submit" disabled={isSearching} className={`bg-iron text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-iron-dark transition-colors whitespace-nowrap ${isSearching ? "opacity-70 cursor-not-allowed" : ""}`}>
            {isSearching ? "Searching..." : "Search"}
          </button>
        </div>
        <p className="text-stone text-xs mt-3">Enter your container number to track your shipment status in real-time.</p>
      </div>
    </form>
  );
}
