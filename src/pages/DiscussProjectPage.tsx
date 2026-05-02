import { useState, useEffect } from "react";
import { Send, CheckCircle, X } from "lucide-react";
import LightRays from "../components/LightRays";
import SilkBalls from "../components/SilkBalls";
import Footer from "../components/Footer";

interface FormFields {
  name: string;
  email: string;
  company: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  details?: string;
}

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!fields.details.trim())
    errors.details = "Please tell us a bit about your project.";
  return errors;
}

/* ─── Success Modal ─── */
function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-md bg-slate-900 border border-slate-700/60 rounded-3xl p-10 text-center shadow-2xl"
        style={{ animation: "modalIn 0.35s cubic-bezier(0.16,1,0.3,1) both" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-500 hover:text-slate-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/30 mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-indigo-400" />
        </div>

        <h3 className="text-2xl font-bold text-slate-100 mb-3">
          Thanks for reaching out!
        </h3>
        <p className="text-slate-400 leading-relaxed mb-8">
          We've received your message and will get back to you within{" "}
          <span className="text-slate-200 font-medium">24 hours</span> to
          discuss your project.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-3 rounded-xl font-medium hover:scale-[1.02] transition-transform"
        >
          Done
        </button>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>
    </div>
  );
}

/* ─── Page ─── */
export default function DiscussProjectPage() {
  const [show, setShow] = useState(false);
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    company: "",
    details: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);
    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const name = e.target.name;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate({ ...fields }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, details: true };
    setTouched(allTouched);
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setShowModal(true);
      setFields({ name: "", email: "", company: "", details: "" });
      setTouched({});
      setErrors({});
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-slate-950/50 border rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all ${
      errors[field] && touched[field]
        ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/30"
        : "border-slate-800 focus:border-indigo-500 focus:ring-indigo-500"
    }`;

  return (
    <>
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}

      <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center pt-32 pb-20 justify-center">
        <div className="absolute inset-0 z-0 bg-slate-950">
          <LightRays
            raysOrigin="top-center"
            raysColor="#4c00ff"
            raysSpeed={0.5}
            lightSpread={1.6}
            rayLength={2.5}
            followMouse
            mouseInfluence={0.3}
            fadeDistance={1}
            saturation={1}
          />
          <SilkBalls
            count={10}
            colors={["#4c00ff", "#8b5cf6", "#6366f1", "#818cf8", "#a78bfa"]}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex-grow flex flex-col justify-center">
          <div
            className="text-center mb-16"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <p className="text-indigo-400 font-medium text-sm tracking-widest uppercase mb-4">
              Start a Project
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight">
              Let's Build Something{" "}
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Incredible
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Tell us about your project, goals, and timeline. We'll get back to
              you within 24 hours to schedule a discovery call.
            </p>
          </div>

          <div
            className="relative p-8 md:p-12 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-md overflow-hidden"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 200ms",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />

            <form
              className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-300">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Doe"
                  className={inputClass("name")}
                />
                {errors.name && touched.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-300">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="john@example.com"
                  className={inputClass("email")}
                />
                {errors.email && touched.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Company */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-sm font-medium text-slate-300">
                  Company{" "}
                  <span className="text-slate-600 text-xs">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={fields.company}
                  onChange={handleChange}
                  placeholder="Acme Inc."
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              {/* Project Details */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-sm font-medium text-slate-300">
                  Project Details <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={4}
                  name="details"
                  value={fields.details}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your project, timeline, and budget range..."
                  className={`${inputClass("details")} resize-none`}
                />
                {errors.details && touched.details && (
                  <p className="text-red-400 text-xs mt-1">{errors.details}</p>
                )}
              </div>

              {/* Submit */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
