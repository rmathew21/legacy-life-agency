import * as React from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit, reset] = useForm("mdadpwje"); // mine:xkozzvrp rosh:mdadpwje
  const formRef = React.useRef(null);

  const [showAppt, setShowAppt] = React.useState(false);
  const [reachMethod, setReachMethod] = React.useState("email");
  const [phonePreference, setPhonePreference] = React.useState("either");
  const [submissionType, setSubmissionType] = React.useState("inquiry");
  const [lastSubmitted, setLastSubmitted] = React.useState(null);
  const [selectedReasons, setSelectedReasons] = React.useState([]);

  const shouldShowPhone = reachMethod === "phone" || reachMethod === "both";
  const shouldShowEmail = reachMethod === "email" || reachMethod === "both";

  const toggleReason = value => {
    setSelectedReasons((prev) =>
    prev.includes(value)
    ? prev.filter((v) => v !== value)
    : [...prev, value]    
    );
  };

  // When submission succeeds, clear the form but keep section visible
  React.useEffect(() => {
    if (!state.succeeded) return;
    
    const t = setTimeout(() => {
      formRef.current?.reset();
      reset();

      if (lastSubmitted === "appointment") setShowAppt(false);
    }, 5000);

    return () => clearTimeout(t);
  }, [state.succeeded, lastSubmitted, reset]);

  return (
    <section
      id="contact"
    //   className="py-20 bg-linear-to-b from-amber-50 to-white"
    // >
      className="py-16 scroll-mt-24 bg-[#0f172a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          {/* <h2 className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            Get in Touch
          </h2> */}
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to start planning your legacy? We're here to help.
          </p>
        </div>

        <form
          // action="https://formspree.io/f/xkozzvrp"
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input type="hidden" name="submission_type" value={submissionType} />
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <Card className="mb-8 bg-white/5 border border-white/10 text-slate-100 shadow-lg">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Success msg stays visible but doesn't replace the whole section */}
                  {state.succeeded && lastSubmitted === "inquiry" && (
                    <div
                      role="status"
                      className="mb-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-emerald-200"
                    >
                      <p className="font-semibold">Message sent!</p>
                      <p className="text-sm text-emarald-200/90">
                        Thanks! We'll get back to you shortly.
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-gray-200">
                        First Name
                      </label>
                      <Input
                        name="firstName"
                        // placeholder="John"
                        required={submissionType === "inquiry"}
                        className="bg-slate-950/60 text-slate-100 placeholder:text-slate-400 border-white/10 focus-visible:ring-amber-400/40 focus-visible:border-amber-400/40"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-200">
                        Last Name
                      </label>
                      <Input
                        name="lastName"
                        // placeholder="Smith"
                        required={submissionType === "inquiry"}
                        className="bg-slate-950/60 text-slate-100 placeholder:text-slate-400 border-white/10 focus-visible:ring-amber-400/40 focus-visible:border-amber-400/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-200">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      // placeholder="john.smith@example.com"
                      required={submissionType === "inquiry"}
                      className="bg-slate-950/60 text-slate-100 placeholder:text-slate-400 border-white/10 focus-visible:ring-amber-400/40 focus-visible:border-amber-400/40"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-200">
                      Phone
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      // placeholder="(555) 555-5555"
                      className="bg-slate-950/60 text-slate-100 placeholder:text-slate-400 border-white/10 focus-visible:ring-amber-400/40 focus-visible:border-amber-400/40"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-200">
                      I'm interested in:
                    </label>
                    <select
                      name="interest"
                      className="w-full px-3 py-2 border border-white/10 rounded-md bg-slate-950/60 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/40"
                      required={submissionType === "inquiry"}
                      defaultValue=""
                    >
                    <option value="" disabled className="bg-slate-950">Select a service..</option>
                      <option value="Life Insurance className=bg-slate-950">Life Insurance</option>
                      <option value="Asset Management">
                        Asset Management
                      </option>
                      <option value="Retirement Planning className=bg-slate-950">
                        Retirement Planning
                      </option>
                      <option value="All Services className=bg-slate-950">All Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-200">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your needs..."
                      rows={4}
                      required={submissionType === "inquiry"}
                      className="bg-slate-950/60 text-slate-100 placeholder:text-slate-400 border-white/10 focus-visible:ring-amber-400/40 focus-visible:border-amber-400/40"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <Button
                    type="submit"
                    onClick={() => {
                      setSubmissionType("inquiry");
                      setLastSubmitted("inquiry");
                      setShowAppt(false);
                    }}
                    disabled={state.submitting}
                    className="w-full text-white bg-[#A38332] hover:bg-gold disabled:opacity-60"
                  >
                    {state.submitting ? "Sending..." : "Submit Inquiry"}
                  </Button>

                  <ValidationError errors={state.errors} />
                </CardContent>
              </Card>
            </div>
            {/* Right Column */}
            <div className="space-y-6">
              {/* Phone card */}
              <Card className="rounded-xl overflow-hidden transition hover:shadow-md hover:-translate-y-0.5 bg-slate-900/60 border border-white/10 text-slate-100">
                <a
                  href="tel:+19725228687"
                  aria-label="Call Legacy Life Agency at 972 522 8687"
                  className="block focus:outline-none focus:ring-2 focus:ring-amber-400/60"
                >
                  <CardContent className="pt-6 transition cursor-pointer hover:bg-white/5">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gold/15 p-3 rounded-lg border border-amber-400/20">
                        <Phone className="h-6 w-6 text-[#A38332]" />
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-100 mb-1">Phone</h3>
                        <p className="text-slate-300 break-all">
                          (972) 522-8687
                        </p>
                        {/* <p className="text-sm text-gray-500 mt-1">
                                            Mon - Fri 9AM - 5PM CST
                                        </p> */}
                      </div>
                    </div>
                  </CardContent>
                </a>
              </Card>

              {/* Email card */}
              <Card className="rounded-xl overflow-hidden transition hover:shadow-md hover:-translate-y-0.5 bg-slate-900/60 border border-white/10 text-slate-100">
                <a
                  href="mailto:roshanskariah@legacylifeagency.net"
                  aria-label="Email Legacy Life Agency"
                  className="block focus:outline-none focus:ring-2 focus:ring-amber-400/60"
                >
                  <CardContent className="pt-6 transition cursor-pointer hover:bg-white/5">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gold/15 p-3 rounded-lg border border-amber-400/20">
                        <Mail className="h-6 w-6 text-[#A38332]" />
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-100 mb-1">Email</h3>
                        <p className="text-slate-300 text-sm sm:text-base wrap-break-words">
                          roshanskariah@legacylifeagency.net
                        </p>
                        {/* <p className="text-sm text-slate-400 mt-1">
                          We'll respond shortly
                        </p> */}
                      </div>
                    </div>
                  </CardContent>
                </a>
              </Card>

              {/* Appointment box */}
              <div className="bg-slate-900/70 border border-white/10 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2 text-slate-100">
                  Request an Appointment
                </h3>
                <p className="text-slate-300 mb-6">
                  Submit your preferences and we'll follow up to confirm a time.
                </p>

                {state.succeeded && lastSubmitted === "appointment" && (
                    <div className="mb-4 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-emerald-200"
                    >
                        <p className="font-semibold">Appointment request sent!</p>
                        <p className="text-sm text-emerald-200/90">Thanks! We'll reach out to confirm a time.</p>
                    </div>
                )}

                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-[#A38332] text-[#A38332] bg-transparent hover:bg-gold hover:text-white"
                  onClick={() => {
                    setShowAppt((v) => !v);
                    setSubmissionType("appointment");
                  }}
                >
                  {showAppt ? "Hide Request Form" : "Request An Appointment"}
                </Button>

                {showAppt && (
                  <div className="mt-6 space-y-4 rounded-lg bg-slate-950/60 border border-white/10 p-4 text-slate-100">
                    {/* 1) Best way to reach you */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-200">
                        Best way to reach you
                      </label>

                      <div className="flex flex-wrap gap-2">
                        {["phone", "email", "both"].map((value) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setReachMethod(value)}
                            className={[
                              "px-3 py-2 rounded-lg border text-sm capitalize transition",
                              reachMethod === value
                                ? "border-amber-400/60 bg-[#A38332] text-white"
                                : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10",
                            ].join(" ")}
                          >
                            {value}
                          </button>
                        ))}
                      </div>

                      <input
                        type="hidden"
                        name="reach_method"
                        value={reachMethod}
                      />
                    </div>

                    {/* Phone block */}
                    {shouldShowPhone && (
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold mb-3 text-slate-100">
                          Phone details
                        </p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {["call", "text", "either"].map((value) => (
                            <button
                              key={value}
                              type="button"
                              onClick={() => setPhonePreference(value)}
                              className={[
                                "px-3 py-2 rounded-lg border text-sm capitalize transition",
                                phonePreference === value
                                  ? "border-amber-400/60 bg-[#A38332] text-white"
                                  : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10",
                              ].join(" ")}
                            >
                              {value}
                            </button>
                          ))}
                        </div>

                        <input
                          type="hidden"
                          name="phone_preference"
                          value={phonePreference}
                        />

                        <label className="block text-sm text-slate-200 mb-2">
                          Phone number
                        </label>
                        <Input
                          name="appointment_phone"
                          // placeholder="(555) 123-4567"
                          required={
                            submissionType === "appointment" && shouldShowPhone
                          }
                          className="bg-slate-950/60 text-slate-100 placeholder:text-slate-400 border-white/10 focus-visible:ring-amber-400/40 focus-visible:border-amber-400/40"
                        />
                      </div>
                    )}

                    {/* Email block */}
                    {shouldShowEmail && (
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        {/* <p className="text-sm font-semibold mb-3 text-slate-100">
                          Email details
                        </p> */}

                        <label className="block text-sm text-slate-200 mb-2">
                          Email 
                        </label>
                        <Input
                          type="email"
                          name="appointment_email"
                          // placeholder="you@example.com"
                          required={
                            submissionType === "appointment" && shouldShowEmail
                          }
                          className="bg-slate-950/60 text-slate-100 placeholder:text-slate-400 border-white/10 focus-visible:ring-amber-400/40 focus-visible:border-amber-400/40"
                        />
                      </div>
                    )}

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-slate-200">
                          Name
                        </label>
                        <Input 
                        name="name"
                        type="text"
                        // placeholder="John Smith" 
                        autoComplete="name"
                        required={submissionType === "appointment"}
                        className="bg-slate-950/60 text-slate-100 placeholder:text-slate-400 border-white/10 focus-visible:ring-amber-400/40 focus-visible:border-amber-400/40"
                        />
                    </div>

                    {/* Reason */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-200">
                        Reason for appointment (select all that apply)
                      </label>

                      <div className="space-y-2">
                        {[
                            { label: "Life Insurance", value: "life_insurance" },
                            { label: "Asset Management", value: "asset_management" },
                            { label: "Retirement", value: "retirement" },
                        ].map((reason) => (
                            <label 
                            key={reason.value} 
                            className="flex items-center gap-2 text-sm text-slate-200"
                            >
                                <input 
                                type="checkbox" 
                                name="appointment_reason[]"
                                className="h-4 w-4 accent-[#A38332]"
                                value={reason.value}
                                checked={selectedReasons.includes(reason.value)}
                                onChange={() => toggleReason(reason.value)}
                                // required={submissionType === "appointment" && index === 0}
                                />
                                {reason.label}
                            </label>
                        ))}
                      </div>

                      {/* Hidden Validator */}
                      <input 
                      type="hidden" 
                      name="appointment_reason_required"
                      value={selectedReasons.length > 0 ? "ok" : ""}
                      required={submissionType === "appointment"}
                      />
                    </div>

                    {/* Best days */}
                    <div>
                      <p className="block text-sm font-medium mb-2 text-slate-200">
                        Best days
                      </p>
                      <div className="flex flex-col gap-2">
                        <label className="inline-flex items-center gap-2 text-sm text-slate-200">
                          <input
                            type="checkbox"
                            name="best_days"
                            value="weekdays"
                            className="h-4 w-4 accent-[#A38332]"
                          />
                          Weekdays
                        </label>
                        <label className="inline-flex items-center gap-2 text-sm text-slate-200">
                          <input
                            type="checkbox"
                            name="best_days"
                            value="weekends"
                            className="h-4 w-4 accent-[#A38332]"
                          />
                          Weekends
                        </label>
                        <label className="inline-flex items-center gap-2 text-sm text-slate-200">
                          <input
                            type="checkbox"
                            name="best_days"
                            value="anytime"
                            className="h-4 w-4 accent-[#A38332}"
                          />
                          Anytime
                        </label>
                      </div>
                    </div>

                    {/* Time window */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-200">
                        Time window
                      </label>
                      <select
                        name="time_window"
                        className="w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/40"
                        required={submissionType === "appointment"}
                        defaultValue=""
                      >
                        <option value="" disabled className="bg-slate-950">
                          Select a time window...
                        </option>
                        <option value="morning" className="bg-slate-950">Morning</option>
                        <option value="afternoon" className="bg-slate-950">Afternoon</option>
                        <option value="evening" className="bg-slate-950">Evening</option>
                      </select>
                    </div>

                    {/* Additional info */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Additional information
                      </label>
                      <Textarea
                        name="additional_info"
                        placeholder="Tell us anything helpful (goals, questions, timeline, etc.)"
                        className="min-h-25 bg-slate-950/60 text-slate-100 placeholder:text-slate-400 border-white/10 focus-visible:ring-amber-400/40 focus-visible::border-amber-400/40"
                      />
                    </div>

                    <Button
                      type="submit"
                      onClick={(e) => {
                        setSubmissionType("appointment");
                        setLastSubmitted("appointment");
                    }}
                      disabled={state.submitting}
                      className="w-full text-white  bg-[#A38332] hover:bg-gold disabled:opacity-60"
                    >
                      {/* {state.submitting ? "Sending..." : "Submit Inquiry"} */}
                      Submit Appointment Request
                    </Button>
                  </div>
                )}
              </div>
            </div>{" "}
          </div>{" "}
        </form>
      </div>
    </section>
  );
}
