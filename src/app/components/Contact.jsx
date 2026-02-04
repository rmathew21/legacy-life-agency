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
import { Mail } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit] = useForm("mdadpwje"); // mine:xkozzvrp rosh:mdadpwje
  const formRef = React.useRef(null);

  const [showAppt, setShowAppt] = React.useState(false);
  const [reachMethod, setReachMethod] = React.useState("email");
  const [phonePreference, setPhonePreference] = React.useState("either");
  const [submissionType, setSubmissionType] = React.useState("inquiry");
  const [lastSubmitted, setLastSubmitted] = React.useState(null);

  const shouldShowPhone = reachMethod === "phone" || reachMethod === "both";
  const shouldShowEmail = reachMethod === "email" || reachMethod === "both";

  // When submission succeeds, clear the form but keep section visible
  React.useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
      if (lastSubmitted === "appointment") setShowAppt(false);
    }
  }, [state.succeeded, lastSubmitted]);

  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-b from-amber-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Success msg stays visible but doesn't replace the whole section */}
                  {state.succeeded && lastSubmitted === "inquiry" && (
                    <div
                      role="status"
                      className="mb-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800"
                    >
                      <p className="font-semibold">Message sent!</p>
                      <p className="text-sm">
                        Thanks! We'll get back to you shortly.
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">
                        First Name
                      </label>
                      <Input
                        name="firstName"
                        placeholder="John"
                        required={submissionType === "inquiry"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">
                        Last Name
                      </label>
                      <Input
                        name="lastName"
                        placeholder="Smith"
                        required={submissionType === "inquiry"}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="john.smith@example.com"
                      required={submissionType === "inquiry"}
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Phone
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="(555) 555-5555"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      I'm interested in:
                    </label>
                    <select
                      name="interest"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                      defaultValue="Life Insurance"
                    >
                      <option value="Life Insurance">Life Insurance</option>
                      <option value="Financial Planning">
                        Financial Planning
                      </option>
                      <option value="Retirement Planning">
                        Retirement Planning
                      </option>
                      <option value="All Services">All Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your needs..."
                      rows={4}
                      required={submissionType === "inquiry"}
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
                    className="w-full text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-60"
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
              <Card className="rounded-xl overflow-hidden transition hover:shadow-md hover:-translate-y-0.5">
                <a
                  href="tel:+19725228687"
                  aria-label="Call Legacy Life Agency at 972 522 8687"
                  className="block focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <CardContent className="pt-6 transition cursor-pointer hover:bg-amber-50">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-amber-700" />
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600 break-all">
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
              <Card className="rounded-xl overflow-hidden transition hover:shadow-md hover:-translate-y-0.5">
                <a
                  href="mailto:roshanskariah@legacylifeagency.net"
                  aria-label="Email Legacy Life Agency"
                  className="block focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <CardContent className="pt-6 transition cursor-pointer hover:bg-amber-50">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-amber-700" />
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600 break-all">
                          roshanskariah@legacylifeagency.net
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </a>
              </Card>

              {/* Appointment box */}
              {/* Appointment box */}
              <div className="bg-slate-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">
                  Request an Appointment
                </h3>
                <p className="text-white/80 mb-6">
                  Submit your preferences and we'll follow up to confirm a time.
                </p>

                {state.succeeded && lastSubmitted === "appointment" && (
                    <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900"
                    >
                        <p className="font-semibold">Appointment request sent!</p>
                        <p className="text-sm">Thanks! We'll reach out to confirm a time.</p>
                    </div>
                )}

                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-amber-600 text-amber-600 bg-white hover:bg-amber-600 hover:text-white"
                  onClick={() => {
                    setShowAppt((v) => !v);
                    setSubmissionType("appointment");
                  }}
                >
                  {showAppt ? "Hide Request Form" : "Request An Appointment"}
                </Button>

                {showAppt && (
                  <div className="mt-6 space-y-4 rounded-lg bg-white p-4 text-slate-900">
                    {/* 1) Best way to reach you */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
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
                                ? "border-slate-900 bg-slate-900 text-white"
                                : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
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
                      <div className="rounded-xl border bg-slate-50 p-4">
                        <p className="text-sm font-semibold mb-3">
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
                                  ? "border-slate-900 bg-white text-slate-900"
                                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
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

                        <label className="block text-sm text-slate-700 mb-2">
                          Phone number
                        </label>
                        <Input
                          name="appointment_phone"
                          placeholder="(555) 123-4567"
                          required={
                            submissionType === "appointment" && shouldShowPhone
                          }
                        />
                      </div>
                    )}

                    {/* Email block */}
                    {shouldShowEmail && (
                      <div className="rounded-xl border bg-slate-50 p-4">
                        <p className="text-sm font-semibold mb-3">
                          Email details
                        </p>

                        <label className="block text-sm text-slate-700 mb-2">
                          Email address
                        </label>
                        <Input
                          type="email"
                          name="appointment_email"
                          placeholder="you@example.com"
                          required={
                            submissionType === "appointment" && shouldShowEmail
                          }
                        />
                      </div>
                    )}

                    {/* Reason */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Reason for appointment
                      </label>
                      <select
                        name="appointment_reason"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                        required={submissionType === "appointment"}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a reason...
                        </option>
                        <option value="life_planning">Life planning</option>
                        <option value="financial_planning">
                          Financial planning
                        </option>
                        <option value="retirement">Retirement</option>
                      </select>
                    </div>

                    {/* Best days */}
                    <div>
                      <p className="block text-sm font-medium mb-2">
                        Best days
                      </p>
                      <div className="flex flex-col gap-2">
                        <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                          <input
                            type="checkbox"
                            name="best_days"
                            value="weekdays"
                            className="h-4 w-4"
                          />
                          Weekdays
                        </label>
                        <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                          <input
                            type="checkbox"
                            name="best_days"
                            value="weekends"
                            className="h-4 w-4"
                          />
                          Weekends
                        </label>
                        <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                          <input
                            type="checkbox"
                            name="best_days"
                            value="anytime"
                            className="h-4 w-4"
                          />
                          Anytime
                        </label>
                      </div>
                    </div>

                    {/* Time window */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Time window
                      </label>
                      <select
                        name="time_window"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                        required={submissionType === "appointment"}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a time window...
                        </option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
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
                        className="min-h-25"
                      />
                    </div>

                    <Button
                      type="submit"
                      onClick={(e) => {
                        setSubmissionType("appointment");
                        setLastSubmitted("appointment");
                    }}
                      disabled={state.submitting}
                      className="w-full text-white  bg-amber-800 hover:bg-amber-600 disabled:opacity-60"
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
