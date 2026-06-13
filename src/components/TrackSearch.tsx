import { useState, type FormEvent } from "react";

export default function TrackSearch() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    setSearched(true);
  };

  if (searched) {
    return (
      <div class="bg-white border border-linen rounded-sm p-6 md:p-8 text-center">
        <p class="text-lg font-display font-semibold text-coal mb-2">Tracking information for: {trackingNumber}</p>
        <p class="text-graphite text-sm">Tracking details will be displayed here once the tracking system is integrated.</p>
        <button onClick={() => { setSearched(false); setTrackingNumber(""); }}
          class="mt-4 text-iron text-sm font-medium hover:underline">
          Track another shipment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="max-w-xl mx-auto">
      <div class="bg-white border border-linen rounded-sm p-6 md:p-8">
        <label for="tracking" class="block text-sm font-medium text-coal mb-2">Enter your container or tracking number</label>
        <div class="flex gap-2">
          <input
            id="tracking"
            type="text"
            value={trackingNumber}
            onChange={e => setTrackingNumber(e.target.value)}
            class="flex-1 border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron transition-colors"
            placeholder="e.g., SHIV-2024-001"
          />
          <button type="submit" class="bg-iron text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-iron-dark transition-colors whitespace-nowrap">
            Search
          </button>
        </div>
        <p class="text-stone text-xs mt-3">Enter your container number to track your shipment status in real-time.</p>
      </div>
    </form>
  );
}
