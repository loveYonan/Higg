import React from "react";

const ContactSection = () => {
    return (
        <section className="flex flex-col justify-center relative bg-[#070809] pb-14 md:pb-[60px] lg:pb-[136px] overflow-hidden min-h-screen">
            {/* Background Images */}
            <img
                src="/assets/image/lights.svg"
                alt=""
                className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
            />
            <img
                src="/assets/image/bg-shadows.svg"
                alt=""
                className="absolute top-[-500px] left-[-400px] z-10"
            />
            <img
                src="/assets/image/star.png"
                alt=""
                className="absolute top-0 left-1/2 -translate-x-1/2"
            />

            <div className="container z-10 flex flex-col justify-center gap-y-[40px] md:gap-y-[60px]">
                {/* Header Section */}
                <div className="flex flex-col justify-center items-center gap-y-8 text-center max-w-4xl mx-auto relative sm:pt-[155px] pt-[100px] w-full">
                    <img
                        src="/assets/image/grid.svg"
                        alt=""
                        className="absolute top-0 left-1/2 -translate-x-1/2"
                    />
                    <div
                        className="flex flex-col justify-center items-center sm:gap-y-8 gap-y-4 relative z-50"
                        style={{ opacity: 1, transform: "none" }}
                    >
                        <h1 className="lg:text-[74px] text-white sm:text-[60px] text-4xl lg:leading-[79px] leading-tight font-medium tracking-[-.07em] diamond-gradient">
                            Get in Touch
                        </h1>
                    </div>
                </div>

                {/* Contact Options */}
                <div className="flex justify-center relative" style={{ opacity: 1 }}>

                    {/* sm:grid-cols-2 lg:grid-cols-3 */}
                    <div className="grid grid-cols-1  gap-4 sm:gap-6 lg:gap-9 text-center">

                        {/* Telegram Contact */}
                        {/* <a href="https://t.me/CoreEdenbot">
                            <div className="w-full sm:w-[274px] bg-gradient-to-r from-[#182027] to-[#181E2A] rounded-[20px] border-2 border-[#e2e8ff1a] px-[30px] py-10 sm:py-[53px]">
                                <img
                                    src="/assets/image/icons/telegram.svg"
                                    alt=""
                                    className="w-[60px] h-[60px] sm:w-[84px] sm:h-[84px] mx-auto mb-7 sm:mb-11"
                                />
                                <p className="text-base text-white leading-[18px] font-medium pb-0.5 diamond-gradient">
                                    Telegram
                                </p>
                                <h3 className="text-[20px]  sm:text-2xl font-medium tracking-[-.07em] text-white">
                                    @CoreEdenbot
                                </h3>
                            </div>
                        </a> */}

                        {/* WhatsApp Contact */}
                        {/* <a href="https://wa.me/16173887087">
                            <div className="w-full sm:w-[274px] bg-gradient-to-r from-[#182027] to-[#181E2A] rounded-[20px] border-2 border-[#e2e8ff1a] px-[30px] py-10 sm:py-[53px]">
                                <img
                                    src="/assets/image/icons/whatsapp.svg"
                                    alt=""
                                    className="w-[60px] h-[60px] sm:w-[84px] sm:h-[84px] mx-auto mb-7 sm:mb-11"
                                />
                                <p className="text-base text-white leading-[18px] font-medium pb-0.5 diamond-gradient">
                                    Whatsapp
                                </p>
                                <h3 className="text-[20px] text-white sm:text-2xl font-medium tracking-[-.07em] text-white">
                                    +1 (617) 388‑7087
                                </h3>
                            </div>
                        </a> */}

                        {/* Email Contact */}
                        <a href="mailto:coreedenbot@outlook.com">
                            <div className="w-full sm:w-[274px] bg-gradient-to-r from-[#182027] to-[#181E2A] rounded-[20px] border-2 border-[#e2e8ff1a] px-[30px] py-10 sm:py-[53px]">
                                <img
                                    src="/assets/image/icons/mail.svg"
                                    alt=""
                                    className="w-[60px] h-[60px] sm:w-[84px] sm:h-[84px] mx-auto mb-7 sm:mb-11"
                                />
                                <p className="text-base leading-[18px] text-white font-medium pb-0.5 diamond-gradient">
                                    Email
                                </p>
                                <h3 className="text-[20px] sm:text-xl  font-medium tracking-[-.07em] text-white">
                                    coreedenbot@outlook.com
                                </h3>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
