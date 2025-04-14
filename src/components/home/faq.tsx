"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

export const Faq = () => {
    return (
        <section className="innovation-section md:py-[100px] py-[60px] relative z-20" id="faq">
            <div className="container flex flex-col justify-center md:gap-y-[76px] sm:gap-y-12 gap-y-8">
                <div>
                    <h2 className="lg:text-[80px] sm:text-[60px] text-white text-4xl lg:leading-[85px] leading-tight text-center font-medium tracking-[-.07em] pb-1 diamond-gradient" style={{ opacity: 1 }}>
                        Frequently asked questions
                    </h2>
                </div>

                <Accordion type="single" collapsible className="w-full text-xl">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className=" text-white text-xl">What are the costs associated with a Coreeden?</AccordionTrigger>
                        <AccordionContent className=" text-white text-xl">
                            We’re at the intersection of innovation and opportunity
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className=" text-white text-xl">How can I obtain cryptocurrency?</AccordionTrigger>
                        <AccordionContent className=" text-white text-xl">
                            Visit the below website to obtain your crypto:
                            <ul>
                                <li><Link href="http://crypto.com">Crypto</Link></li>
                                <li><Link href="https://robinhood.com/">Robinhood</Link></li>
                                <li><Link href="https://Kraken.com">Kraken</Link></li>
                                <li><Link href="https://Gemini.com">Gemini</Link></li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className=" text-white text-xl">Is the Coreeden globally accessible?</AccordionTrigger>
                        <AccordionContent className=" text-white text-xl">
                            Yes, Our success is your success. Together, we can achieve exceptional outcomes.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>





            </div>
        </section>

    )
}
