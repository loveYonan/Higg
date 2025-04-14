import React from 'react'

export const Hero = () => {
    return (
        <div>
            <section className="flex flex-col justify-center relative bg-[#070809]">

                <img src="/assets/image/star.png" alt="" className="absolute top-0 left-1/2 -translate-x-1/2" />

                <div className="container  flex flex-col justify-center md:gap-y-[145px] gap-y-[80px]">
                    <div className="flex flex-col justify-center items-center gap-y-8 text-center max-w-4xl mx-auto relative ">
                        <img src="/assets/image/grid.svg" alt="" className="absolute top-0 left-1/2 -translate-x-1/2" />
                        <div className="flex flex-col justify-center items-center sm:gap-y-8 gap-y-4 relative z-50" style={{
                            opacity: 1,
                            transform: 'none',
                        }}>

                            <div className="subtitle flex items-center gap-3 text-white">

                                <img src="/assets/image/icons/line-1.svg" alt="" className="sm:w-auto w-[100px]" />

                                <p className="badge-gradient text-white">Crypto Spending Made Easy</p>

                                <img src="/assets/image/icons/line-2.svg" alt="" className="sm:w-auto w-[100px]" />
                            </div>
                            <h1 className="lg:text-[74px] sm:text-[60px] text-4xl lg:leading-[79px] leading-tight font-medium tracking-[-.07em] pb-1 diamond-gradient text-white">Invest with us today to be part of the success story tomorrow</h1><p className="max-w-[654px] sm:text-[22px] text-lg sm:leading-[29px] leading-[25px] tracking-[-.06em] font-normal text-[#D9D9DA]">We’re at the intersection of innovation and opportunity; the best time to invest was yesterday. The perfect time is NOW!!!</p>



                            <p className="max-w-[654px] sm:text-[22px] text-lg sm:leading-[29px] leading-[25px] tracking-[-.06em] font-normal text-[#D9D9DA]">Fortune favors the bold, and our strategy is built on smart, calculated boldness.</p>

                            <div className="relative w-full max-w-[436px] h-[94px] flex justify-center items-center gap-6 max-[425px]:gap-3 mt-6"><span className="text-base text-white max-[390px]:text-xs">Register with Early Access</span><a className="hover:bg-opacity-90 cursor-pointer z-10 px-6 py-3 bg-white rounded-full text-black max-[390px]:py-2 max-[390px]:px-2 text-base max-[390px]:text-xs font-semibold" href="/sign-up">Get started</a><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="94" viewBox="0 0 436 94" fill="none" preserveAspectRatio="xMidYMid meet" className="absolute top-0 left-0 z-0"><g filter="url(#filter0_bd_3325_25006)"><path d="M0 40C0 17.9086 17.9086 0 40 0H396C418.091 0 436 17.9086 436 40V54C436 76.0914 418.091 94 396 94H40C17.9086 94 0 76.0914 0 54V40Z" fill="white" fill-opacity="0.05" shape-rendering="geometricPrecision"></path><path d="M40 1H396C417.539 1 435 18.4609 435 40V54C435 75.5391 417.539 93 396 93H40C18.4609 93 1 75.5391 1 54V40C1 18.4609 18.4609 1 40 1Z" stroke="url(#paint0_linear_3325_25006)" stroke-width="1" shape-rendering="geometricPrecision"></path></g><defs><filter id="filter0_bd_3325_25006" x="-50" y="-50" width="572" height="230" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="10"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3325_25006"></feComposite><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="5" dy="5"></feOffset><feGaussianBlur stdDeviation="10"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="effect1_backgroundBlur_3325_25006" result="effect2_dropShadow_3325_25006"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3325_25006" result="shape"></feBlend></filter><linearGradient id="paint0_linear_3325_25006" x1="0" y1="0" x2="119.966" y2="247.306" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE7E7" stop-opacity="0.46"></stop><stop offset="0.0730497" stop-color="white" stop-opacity="0.47"></stop><stop offset="0.239583" stop-opacity="0"></stop><stop offset="0.578125" stop-color="white" stop-opacity="0.3"></stop><stop offset="0.785571" stop-opacity="0.47"></stop><stop offset="0.880136" stop-color="#2E2A2A" stop-opacity="0.471811"></stop><stop offset="1" stop-color="#FFE7E7" stop-opacity="0.48"></stop></linearGradient></defs></svg></div></div></div><div className="flex justify-center relative mb-[-200px]" style={{
                                opacity: 1,
                            }}>

                        <img style={{
                            transform: 'rotate(-15deg)',
                            transition: '0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                        }} src="/assets/image/card.webp" alt="" className="md:max-w-[479px] max-w-[200px] w-full absolute rotate-[-15deg] hero-card" />


                        <img src="/assets/image/card.webp" alt="" className="md:max-w-[479px] max-w-[200px] w-full" />

                    </div></div>

            </section>
            <section className="innovation-section relative z-20 pt-[280px]" id="features">
                <div className="container flex flex-col justify-center md:gap-y-[76px] sm:gap-y-12 gap-y-8">
                    <div>
                        <h2 className="lg:text-[80px] sm:text-[60px] text-4xl lg:leading-[85px] leading-tight text-center font-medium tracking-[-.07em] pb-1 diamond-gradient" style={{ opacity: 0.2 }}>
                            Fueling <br /> Innovation Growth
                        </h2>
                    </div>

                    <div className="innovation-card-wrapper max-w-[1092px] mx-auto w-full flex flex-col gap-[13px]">
                        <div
                            className="w-full flex sm:flex-row flex-col-reverse gap-5 items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[40px] lg:py-[50px] lg:px-[65px] py-6 px-6"
                            style={{ opacity: 1 }}
                        >
                            <h3 className=" text-white content-card__title md:text-[35px] text-2xl md:leading-[42px] leading-tight font-medium sm:max-w-[370px] sm:text-left text-center diamond-gradient">
                                Unlimited Daily Top-up &amp; Spending
                            </h3>
                            <img src="/assets/image/icons/arrow-fill-top.svg" alt="" />
                        </div>

                        <div
                            className="w-full flex sm:flex-row flex-col-reverse gap-5 items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[40px] lg:px-[65px] px-6 md:py-0 py-5"
                            style={{ opacity: 1 }}
                        >
                            <h3 className="text-white content-card__title lg:text-[52px] md:text-4xl text-2xl lg:leading-[60px] leading-tight font-bold sm:text-left text-center sm:max-w-[370px] diamond-gradient">
                                No ATM Withdrawal Limit
                            </h3>
                            <img
                                src="/assets/image/atm-2.png"
                                alt=""
                                className="md:max-w-full sm:max-w-[200px] max-w-[120px]"
                            />
                        </div>

                        <div className="feature-grid" style={{ opacity: 1 }}>
                            <div className="feature-grid-1 w-full flex sm:flex-row flex-col-reverse gap-5 items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] lg:py-[50px] py-6 lg:px-[65px] px-6">
                                <h3 className="text-white content-card__title md:text-[35px] text-2xl md:leading-[42px] leading-tight font-medium max-w-[370px] sm:text-left text-center diamond-gradient">
                                    Accepted Worldwide
                                </h3>
                                <img src="/assets/image/icons/feature-icon-2.svg" alt="" />
                            </div>
                            <div className="feature-grid-2 w-full flex sm:flex-row flex-col-reverse gap-5 items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] lg:py-[50px] py-6 lg:px-[65px] px-6">
                                <h3 className="text-white content-card__title md:text-[35px] text-2xl md:leading-[42px] leading-tight font-medium sm:max-w-[370px] sm:text-left text-center diamond-gradient">
                                    24/7 Customer Support
                                </h3>
                                <img src="/assets/image/icons/feature-icon-3.svg" alt="" />
                            </div>
                            <div className="feature-grid-3 w-full flex sm:flex-row flex-col-reverse gap-5 items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] lg:py-[50px] py-6 lg:px-[65px] px-6">
                                <h3 className="text-white content-card__title md:text-[35px] text-2xl md:leading-[42px] leading-tight font-medium sm:max-w-[370px] sm:text-left text-center diamond-gradient">
                                    All funds are protected by Visa
                                </h3>
                                <img src="/assets/image/icons/feature-icon-4.svg" alt="" />
                            </div>
                            <div
                                className="feature-grid-4 w-full flex sm:flex-row flex-col-reverse gap-5 items-center justify-between gap-y-10 bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] py-[40px] px-[34px]"
                                style={{ opacity: 1 }}
                            >
                                <h3 className="text-white content-card__title md:text-[35px] text-2xl md:leading-[42px] leading-tight sm:text-left text-center font-medium diamond-gradient">
                                    Deposit with 6 different crypto currencies
                                </h3>
                                <div className="flex flex-wrap justify-between w-full">
                                    <img src="/assets/image/icons/feature-1.svg" alt="" />
                                    <img src="/assets/image/icons/feature-2.svg" alt="" />
                                    <img src="/assets/image/icons/feature-3.svg" alt="" />
                                    <img src="/assets/image/icons/feature-4.svg" alt="" />
                                    <img src="/assets/image/icons/feature-5.svg" alt="" />
                                    <img src="/assets/image/icons/feature-6.svg" alt="" />
                                </div>
                            </div>
                            <div className="feature-grid-5 w-full flex sm:flex-row flex-col-reverse items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] px-[34px] md:py-0 py-5">
                                <h3 className=" text-white content-card__title md:text-[35px] text-2xl md:leading-[42px] leading-tight font-medium sm:max-w-[370px] sm:text-left text-center diamond-gradient">
                                    Plastic and Metal Cards
                                </h3>
                                <img
                                    src="/assets/image/icons/credit-card.svg"
                                    alt=""
                                    className="md:max-w-full sm:max-w-[200px] max-w-[120px]"
                                />
                            </div>
                        </div>

                        <div
                            className="w-full flex sm:flex-row flex-col-reverse gap-5 items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[40px] lg:px-[65px] px-6 md:py-0 py-5"
                            style={{ opacity: 1 }}
                        >
                            <h3 className=" text-white content-card__title md:text-[35px] text-2xl md:leading-[40px] leading-tight font-bold sm:max-w-[516px] sm:text-left text-center diamond-gradient">
                                Off-shore Company and Bank
                            </h3>
                            <img
                                src="/assets/image/vault.png"
                                alt=""
                                className="md:max-w-full sm:max-w-[200px] max-w-[120px]"
                            />
                        </div>
                    </div>
                </div>
            </section>


        </div>

    )
}
