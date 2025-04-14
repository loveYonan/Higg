import React from "react";

const PricingSection = () => {
    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <div className="mt-[40px] mb-[40px]">
                    <h2
                        className="lg:text-[80px] text-white sm:text-[60px] text-4xl lg:leading-[85px] leading-tight text-center font-medium tracking-[-.07em] pb-1 diamond-gradient"
                        style={{ opacity: 1 }}
                    >
                        know Our Pricing
                    </h2>
                </div>

                {/* Pricing Cards */}
                <div className="flex flex-col-reverse md:flex-row justify-center gap-12 md:gap-6 lg:gap-8 xl:gap-[55px]">
                    <div className="w-full lg:w-[474px] flex flex-col md:items-center items-start justify-between gap-[54px] bg-[#0e0f11] border border-1 border-[#E2E8FF10] p-[30px] sm:pt-[76px] rounded-[14.12px] ">
                        <ul className="flex flex-col gap-[26px] max-w-[250px] w-full">
                            <li className="flex items-center gap-[44px] text-base font-medium text-white opacity-[1]">
                                <img
                                    className="w-[13px] h-[10px] text-white"
                                    src="/assets/image/check-icon.svg"
                                    alt=""
                                />
                                Multi-Currency Account
                            </li>
                            <li className="flex items-center gap-[44px] text-base font-medium text-white opacity-[1]">
                                <img
                                    className="w-[13px] h-[10px] text-white"
                                    src="/assets/image/check-icon.svg"
                                    alt=""
                                />
                                High spending limits
                            </li>
                            <li className="flex items-center gap-[44px] text-base font-medium text-white opacity-[1]">
                                <img
                                    className="w-[13px] h-[10px] text-white"
                                    src="/assets/image/check-icon.svg"
                                    alt=""
                                />
                                Plastic card
                            </li>
                            <li className="flex items-center gap-[44px] text-base font-medium text-white opacity-[1]">
                                <img
                                    className="w-[13px] h-[10px]"
                                    src="/assets/image/check-icon.svg"
                                    alt=""
                                />
                                24/7 live support
                            </li>
                            <li className="flex items-center gap-[44px] text-base font-medium text-white opacity-[1]">
                                <img
                                    className="w-[13px] h-[10px] text-white"
                                    src="/assets/image/check-icon.svg"
                                    alt=""
                                />
                                Free express shipping
                            </li>
                            <li className="flex items-center gap-[44px] text-base font-medium text-white ">
                                <img
                                    className="w-[13px] h-[10px] text-white"
                                    src="/assets/image/close-icon.svg"
                                    alt=""
                                />
                                Metal card
                            </li>
                            <li className="flex items-center gap-[44px] text-base font-medium text-white ">
                                <img
                                    className="w-[13px] h-[10px] text-white"
                                    src="/assets/image/close-icon.svg"
                                    alt=""
                                />
                                Anonymous
                            </li>
                        </ul>
                        <a
                            className="inline-flex items-center justify-center gap-x-4 whitespace-nowrap rounded-full font-bold cursor-pointer bg-white text-black hover:bg-white/90 sm:h-[60px] h-[48px] sm:px-[30px] px-[24px] sm:py-4 py-3 text-[18px] w-full"
                            href="/register"
                        >
                            REGISTER
                        </a>
                    </div>

                    <div className="w-full lg:w-[667px] flex flex-col gap-8">
                        <div className="w-full flex items-center justify-between border-[1px] rounded-[12px] p-[30px] md:py-[42px] lg:py-[52px] md:p-[56px] pl-[30px] cursor-pointer select-none border-[#E2E8FF10]">
                            <div className="flex items-center gap-[18px]">
                                <div className="border-[2px] border-[#699CB9] w-5 h-5 rounded-full bg-transparent"></div>
                                <p className="text-[24px] font-medium opacity-[80%] text-white">Virtual</p>
                            </div>
                            <h3 className="md:text-[38px] text-[24px] font-medium opacity-[60%] text-white">$75</h3>
                        </div>

                        <div className="w-full flex items-center justify-between border-[1px] rounded-[12px] p-[30px] md:py-[42px] lg:py-[52px] md:p-[56px] pl-[30px] cursor-pointer select-none border-[#699CB9] bg-[#161a2180]">
                            <div className="flex items-center gap-[18px]">
                                <div className="border-[2px] border-[#699CB9] w-5 h-5 rounded-full bg-white"></div>
                                <p className="text-[24px] font-medium opacity-[100%] text-white">Plastic</p>
                            </div>
                            <h3 className="md:text-[38px] text-[24px] font-medium opacity-[100%] text-white">$380</h3>
                        </div>

                        <div className="w-full flex items-center justify-between border-[1px] rounded-[12px] p-[30px] md:py-[42px] lg:py-[52px] md:p-[56px] pl-[30px] cursor-pointer select-none border-[#E2E8FF10]">
                            <div className="flex items-center gap-[18px]">
                                <div className="border-[2px] border-[#699CB9] w-5 h-5 rounded-full bg-transparent "></div>
                                <p className="text-[24px] font-medium opacity-[80%] text-white">Metal</p>
                            </div>
                            <h3 className="md:text-[38px] text-[24px] font-medium opacity-[60%] text-white">$750</h3>
                        </div>
                    </div>
                </div>

                {/* Corporate Pricing */}
                <div className="max-w-[1196px] w-full mx-auto mt-[38px] bg-[#0e0f11] border border-1 border-[#E2E8FF10] md:px-[56px] px-6 md:pt-[48px] pt-[24px] md:pb-[36px] pb-[24px] rounded-[13.12px]">
                    <div className="flex sm:items-center items-start justify-between sm:pl-[15px] sm:flex-row flex-col">
                        <p className="text-[24px] font-medium text-white">Corporate</p>
                        <h4 className="text-[38px] font-medium text-white">$3000</h4>
                    </div>

                    <ul className="w-full max-w-[720px] list-disc grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] sm:mt-[80px] mt-6 mb-[60px] sm:pl-[50px] pl-[24px]">
                        <li className="text-base font-medium text-white max-w-[220px]">
                            Multi-Currency Account
                        </li>
                        <li className="text-base font-medium text-white max-w-[220px]">
                            No spending limits
                        </li>
                        <li className="text-base font-medium text-white max-w-[220px]">
                            Custom metal card
                        </li>
                        <li className="text-base font-medium text-white max-w-[220px]">
                            24/7 live support
                        </li>
                        <li className="text-base font-medium text-white max-w-[220px]">
                            Free express shipping
                        </li>
                        <li className="text-base font-medium text-white max-w-[220px]">
                            Anonymous
                        </li>
                    </ul>
                    <a
                        className="inline-flex items-center justify-center gap-x-4 whitespace-nowrap rounded-full font-bold cursor-pointer bg-white text-black hover:bg-white/90 sm:h-[60px] h-[48px] sm:px-[30px] px-[24px] sm:py-4 py-3 text-[18px] w-full"
                        href="/contact-us"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
