import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion";

const faqs = [
    {
        question: "What types of life insurance do you offer?",
        answer: "We offer a comprehensive range of life insurance products including Term Life Insurance, Whole Life Insurance, and other great Insurance options. Each type has unique benefits, and we’ll help you choose the coverage that best fits your needs and budget."
    },
    {
        question: "What is the difference between Term and Whole Life Insurance?",
        answer: (
            <>
                <strong>Term Insurance</strong> is like “renting” coverage for a specific period (e.g. 20 years) — it’s affordable and great for temporary needs. <strong></strong> is like “owning”—it lasts your entire life and includes a cash-value component that can grow over time."
            </>
        )
    }, 
    {
        question: "How much life insurance coverage do I need?",
        answer: "The amount of coverage you need depends on several factors including you income, debts, familiy size, and future financial goals. A common rule of thumb is 10-12 times your annual income, but we provide personalized assessments to determine the right coverage for your specific situation."
    }, 
    {
        question: "What happens if I outlive my Term Life Policy?",
        answer: 'Once the term ends, the coverage typically expires. However, many of our policies include a "Conversion Option", allowing you to switch to a permanent policy wihout taking a new medical exam, regardless of your health at that time.'
    }, 
    {
        question: 'What is “Cash Value” in Whole Life Insurance and how can I use it?',
        answer: 'Cash value is the “living benefit” of a permanent policy. As you pay premiums, a portion grows tax-deferred. You can borrow against it for emergencies, use it to pay your premiums later in life, or even use it to fund a business venture. You create your own bank within your Whole Life Policy, which you can always borrow from without having to borrow from a lender ever again.'
    }, 
    {
        question: "When should I start planning for retirement?",
        answer: "The earlier you start, the better! Ideally, you should begin retirement planning in your 20s or 30s to take full advantage of compound interest. However, it's never too late to start. We can create a customized retirement plan regardless of your age or current financial situation."
    }, 
    {
        question: 'How does my health affect my premiums?',
        answer: 'Insurance companies use “underwriting” to set your rates based on your age, health history, and lifestyle. However, we work with a variety of carriers to find the best fit for your specific profile, even if you have pre-existing conditions.'
    }, 
    {
        question: 'Which Insurance companies do you work with?',
        answer: (
            <>
            I partner with all the major, A-rated insurance providers in the United States, such as Lafayette Life, Mass Mutual, and New York Life. Because I am independent, I don’t work <em>for</em> the insurance companies; I work <em>for you</em>. I personally negotiate with these carriers to design a custom policy that fits your unique needs and secures your legacy.
            </>
        )   
    }, 
];

export function FAQ() {
    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600">
                        Get answers to common questions about our Services
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem 
                            key={index}
                            value={`item-${index}`}
                            className="border border-gray-200 rounded-lg px-6 bg-white hover:shadow-md transition-shadow"
                        >
                            <AccordionTrigger className="text-left hover:no-underline py-6 ">
                                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <a 
                        href="#contact"
                        className="text-amber-700 hover:text-amber-800 font-semibold underline"
                    >
                        Contact us for personalized answers
                    </a>
                </div>
            </div>
        </section>
    );
}