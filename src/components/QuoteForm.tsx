import { useState, type FormEvent } from "react";

const ORIGINS = ["India", "China", "USA", "Germany", "UAE", "UK", "Singapore", "Vietnam", "Thailand", "Other"];
const DESTINATIONS = ["India", "China", "USA", "Germany", "UAE", "UK", "Singapore", "Vietnam", "Thailand", "Other"];
const COMMODITIES = ["Electronics", "Textiles", "Machinery", "Auto Parts", "Food Products", "Chemicals", "Pharmaceuticals", "Furniture", "Other"];
const INCOTERMS = ["EXW", "FCA", "FAS", "FOB", "CFR", "CIF", "CPT", "CIP", "DAP", "DPU", "DDP"];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    origin: "", destination: "", commodity: "",
    date: "", incoterm: "",
    name: "", email: "", phone: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div class="bg-green-50 border border-green-200 rounded-sm p-6 text-center">
        <p class="text-green-700 font-medium">Quote request submitted! We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="bg-white border border-linen rounded-sm p-6 md:p-8">
      {/* Progress */}
      <div class="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} class="flex items-center gap-2 flex-1">
            <div class={`w-8 h-8 rounded-sm flex items-center justify-center text-sm font-medium ${
              s <= step ? "bg-iron text-white" : "bg-linen text-stone"
            }`}>
              {s}
            </div>
            <div class={`h-0.5 flex-1 ${s < step ? "bg-iron" : "bg-linen"}`} />
          </div>
        ))}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div class="space-y-4">
          <h3 class="text-lg font-display font-bold text-coal mb-4">Shipment Details</h3>
          <div>
            <label for="origin" class="block text-sm font-medium text-coal mb-1">Origin</label>
            <select id="origin" value={form.origin} onChange={e => setForm({...form, origin: e.target.value})}
              class="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron" required>
              <option value="">Select origin</option>
              {ORIGINS.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label for="destination" class="block text-sm font-medium text-coal mb-1">Destination</label>
            <select id="destination" value={form.destination} onChange={e => setForm({...form, destination: e.target.value})}
              class="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron" required>
              <option value="">Select destination</option>
              {DESTINATIONS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label for="commodity" class="block text-sm font-medium text-coal mb-1">Commodity</label>
            <select id="commodity" value={form.commodity} onChange={e => setForm({...form, commodity: e.target.value})}
              class="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron" required>
              <option value="">Select commodity</option>
              {COMMODITIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <button type="button" onClick={() => setStep(2)} class="bg-iron text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-iron-dark transition-colors">
            Next →
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div class="space-y-4">
          <h3 class="text-lg font-display font-bold text-coal mb-4">Shipping Preferences</h3>
          <div>
            <label for="date" class="block text-sm font-medium text-coal mb-1">Preferred Shipping Date</label>
            <input id="date" type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})}
              class="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron" />
          </div>
          <div>
            <label for="incoterm" class="block text-sm font-medium text-coal mb-1">Incoterm</label>
            <select id="incoterm" value={form.incoterm} onChange={e => setForm({...form, incoterm: e.target.value})}
              class="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron" required>
              <option value="">Select incoterm</option>
              {INCOTERMS.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
          <div class="flex gap-3">
            <button type="button" onClick={() => setStep(1)} class="border border-iron text-iron px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-iron hover:text-white transition-colors">
              ← Back
            </button>
            <button type="button" onClick={() => setStep(3)} class="bg-iron text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-iron-dark transition-colors">
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div class="space-y-4">
          <h3 class="text-lg font-display font-bold text-coal mb-4">Contact Information</h3>
          <div>
            <label for="q-name" class="block text-sm font-medium text-coal mb-1">Name *</label>
            <input id="q-name" type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
              class="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron" required />
          </div>
          <div>
            <label for="q-email" class="block text-sm font-medium text-coal mb-1">Email *</label>
            <input id="q-email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
              class="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron" required />
          </div>
          <div>
            <label for="q-phone" class="block text-sm font-medium text-coal mb-1">Phone *</label>
            <input id="q-phone" type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
              class="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron" required />
          </div>
          <div class="flex gap-3">
            <button type="button" onClick={() => setStep(2)} class="border border-iron text-iron px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-iron hover:text-white transition-colors">
              ← Back
            </button>
            <button type="submit" class="bg-iron text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-iron-dark transition-colors">
              Submit Quote Request
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
