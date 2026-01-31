import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion";

const faqs = [
    {
        question: "What types of life insurance do you offer?",
        answer: "We offer a comprehensive range of life insurance products including Term Life Insurance, Whole Life Insurance, Universal Lie Insurance, and Variable Lie Insurance. Each type has unique benefits, and we'll help you choose the coverage that best fits your needs and budget."
    },
    {
        question: "How much life insurance coverage do I need",
        answer: "The amount of coverage you need depends on several factors including you income, debts, familiy size, and future financial goals. A common rule of thumb is 10-12 times your annual income, but we provide personalized assessments to determine the right coverage for your specific situation."
    }, 
    {
        question: "When should I start planning for retirement?",
        answer: "The earlier you start, the better! Ideally, you should begin retirement planning in your 20s or 30s to take full advantage of compound interest. However, it's never too late to start. We can create a customized retirement plan regardless of your age or current financial situation."
    }, 
    {
        question: "What's the difference between financial planning and retirement planning?",
        answer: "Financial planning is a comprehensive approach that covers all aspects of your financial life including budgeting, investments, insurance, and estate planning. Retirement planning is a specific subset that focuses on accumulating assets and creating income streams for your retirement years. Both work together to secure your financial future."
    }, 
    {
        question: "Do I need to have a lot of money to work with a financial planner?",
        answer: "Not at all! We work with clients at various financial stages. Whether you're just starting to build wealth or have substantial assets, our advisors can provide valuable guidance. We believe everyone deserves access to professional financial advice to help secure their future."
    }, 
    {
        question: "How often should I review my financial plan?",
        answer: "We recommend reviewing your financial plan at least annually, or whenever you experience major life changes such as marriage, divorce, birth of a child, career change, or inheritance. Regular reviews ensure your plan stays aligned with your current goals and circumstances."
    }, 
    {
        question: "Are your consultations really free?",
        answer: "Yes! We offer free, no-obligation initial consultations. This gives us the opportunity to understand your needs and explain how we can help., while allowing you to get to know our team and approach without any commitment or pressure."
    }, 
    {
        question: "How do you get paid for your services?",
        answer: "Our compensation structure varies depending on the services provided. We may earn commissions on insurance products, charge fees for financial planning services, or use a combination of both. We're committed to full transparency and will clearly explain all costs before you make any decisions."
    } 
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