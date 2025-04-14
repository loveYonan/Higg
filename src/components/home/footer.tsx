import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="footer-section  text-white py-8">
            <div className="container footer-content">
                <div className="footer-content-inner flex flex-col lg:flex-row md:gap-[100px] sm:gap-10 gap-6 justify-between">

                    {/* Description Block */}
                    <div className="description-block max-w-[268px]">
                        <Link href="/">
                            <div className=' items-center flex '>
                                <Image src="/logoss.svg" alt='logo2' height={25} width={25} />
                                <p className=' font-semibold text-white text-xl ml-2.5'>
                                    COREEDEN
                                </p>
                            </div>
                        </Link>
                        <p className="text-sm leading-6 mb-4">Invest your crypto with no limits.</p>
                        {/* <address className="text-sm leading-6">
                            43rd Floor, Oceania Business Plaza, Urbanizacion Punta Pacifica, Panama City, Panama
                        </address> */}
                    </div>

                    {/* Company, Resources, Get Started, and Connect Sections */}
                    <div className="flex sm:flex-row flex-col justify-between md:gap-10 gap-6 w-full max-w-[816px]">

                        {/* Company */}
                        <div className="footer-list w-full max-w-[132px]">
                            <h3 className="footer-title text-xl leading-6 font-medium mb-4">Company</h3>
                            <ul className="list space-y-2">
                                <li><a className="text-sm leading-5 text-[#9AA19E]" href="/">About Us</a></li>
                                <li><a className="text-sm leading-5 text-[#9AA19E]" href="/">Blog</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="footer-list w-full max-w-[132px]">
                            <h3 className="footer-title text-xl leading-6 font-medium mb-4">Resources</h3>
                            <ul className="list space-y-2">
                                <li><a className="text-sm leading-5 text-[#9AA19E]" href="/#faq">FAQs</a></li>
                                <li><a className="text-sm leading-5 text-[#9AA19E]" href="/contact-us">Support Center</a></li>
                                <li><a className="text-sm leading-5 text-[#9AA19E]" href="/">Terms of Service</a></li>
                                <li><a className="text-sm leading-5 text-[#9AA19E]" href="/">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Get Started */}
                        <div className="footer-list w-full max-w-[132px]">
                            <h3 className="footer-title text-xl leading-6 font-medium mb-4">Get Started</h3>
                            <ul className="list space-y-2">
                                <li><a className="text-sm leading-5 text-[#9AA19E]" href="/">Get Started</a></li>
                                <li><a className="text-sm leading-5 text-[#9AA19E]" href="/register">Sign Up</a></li>
                                <li><a className="text-sm leading-5 text-[#9AA19E]" href="/#pricing">Pricing</a></li>
                            </ul>
                        </div>

                        {/* Connect */}
                        <div className="footer-list w-full max-w-[132px]">
                            <h3 className="footer-title text-xl leading-6 font-medium mb-4">Connect</h3>
                            <ul className="list space-y-2">
                                <li><a className="text-sm leading-5 text-[#9AA19E]" href="#" >Twitter</a></li>
                                <li><a className="text-sm leading-5 text-[#9AA19E]" href="#" >Instagram</a></li>
                                <li><a className="text-sm leading-5 text-[#9AA19E]" href="#" >Telegram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright Block */}
                <div className="copyright-block text-center mt-8">
                    <p className="text-sm leading-5 text-[#9AA19E]">Copyright ©Dogevest 2024. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
