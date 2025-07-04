import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*ai-solutions-about section 1*/}
            <section className="ai-solutions-about-section-1 position-relative overflow-hidden py-120">
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-none d-lg-block wow img-custom-anim-top">
                            <img className="zoom-img" src="assets/imgs/pages/ai-solutions/page-about/img-1.png" alt="AstraX" />
                        </div>
                        <div className="col-lg-6 col-md-12 order-2 ">
                            <div className="d-flex align-items-center gap-3">
                                <span className="small-line" />
                                <span className="btn-text text-primary">about us</span>
                            </div>
                            <h2 className="text-dark my-3 text-anime-style-3">Shaping Tomorrow with AI and Robotics</h2>
                            <p className="pb-4 text wow img-custom-anim-top">At AstraX - AI, we are dedicated to transforming the world through cutting-edge artificial intelligence solutions. With a focus on innovation, precision, and impact, we empower businesses and individuals to achieve unprecedented efficiency and success.</p>
                            <ul className="list-unstyled d-flex flex-wrap wow img-custom-anim-top">
                                <li className="d-flex align-items-center mb-3 gap-2 w-md-50 w-100">
                                    <div className="position-relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                                            <circle className="fill-primary" cx={7} cy={7} r={7} fill="#794AFF" />
                                            <path
                                                d="M10.5308 4.36671C10.4785 4.31395 10.4162 4.27207 10.3476 4.24349C10.279 4.21491 10.2055 4.2002 10.1312 4.2002C10.0568 4.2002 9.98327 4.21491 9.91467 4.24349C9.84607 4.27207 9.78381 4.31395 9.73148 4.36671L5.53768 8.56613L3.77573 6.79855C3.72139 6.74606 3.65725 6.70479 3.58697 6.67709C3.51668 6.64939 3.44163 6.63581 3.3661 6.63712C3.29056 6.63842 3.21603 6.6546 3.14674 6.68471C3.07746 6.71482 3.01478 6.75829 2.9623 6.81262C2.90981 6.86696 2.86854 6.9311 2.84084 7.00138C2.81314 7.07166 2.79956 7.14672 2.80087 7.22225C2.80217 7.29778 2.81835 7.37232 2.84846 7.4416C2.87857 7.51089 2.92204 7.57356 2.97637 7.62605L5.13801 9.78768C5.19034 9.84045 5.2526 9.88232 5.32119 9.9109C5.38979 9.93948 5.46337 9.9542 5.53768 9.9542C5.612 9.9542 5.68557 9.93948 5.75417 9.9109C5.82277 9.88232 5.88503 9.84045 5.93736 9.78768L10.5308 5.19421C10.588 5.1415 10.6336 5.07752 10.6648 5.00631C10.696 4.9351 10.7121 4.8582 10.7121 4.78046C10.7121 4.70272 10.696 4.62582 10.6648 4.55461C10.6336 4.4834 10.588 4.41942 10.5308 4.36671Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-dark text-uppercase">Custom AI Development</p>
                                </li>
                                <li className="d-flex align-items-center mb-3 gap-2 w-md-50 w-100">
                                    <div className="position-relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                                            <circle className="fill-primary" cx={7} cy={7} r={7} fill="#794AFF" />
                                            <path
                                                d="M10.5308 4.36671C10.4785 4.31395 10.4162 4.27207 10.3476 4.24349C10.279 4.21491 10.2055 4.2002 10.1312 4.2002C10.0568 4.2002 9.98327 4.21491 9.91467 4.24349C9.84607 4.27207 9.78381 4.31395 9.73148 4.36671L5.53768 8.56613L3.77573 6.79855C3.72139 6.74606 3.65725 6.70479 3.58697 6.67709C3.51668 6.64939 3.44163 6.63581 3.3661 6.63712C3.29056 6.63842 3.21603 6.6546 3.14674 6.68471C3.07746 6.71482 3.01478 6.75829 2.9623 6.81262C2.90981 6.86696 2.86854 6.9311 2.84084 7.00138C2.81314 7.07166 2.79956 7.14672 2.80087 7.22225C2.80217 7.29778 2.81835 7.37232 2.84846 7.4416C2.87857 7.51089 2.92204 7.57356 2.97637 7.62605L5.13801 9.78768C5.19034 9.84045 5.2526 9.88232 5.32119 9.9109C5.38979 9.93948 5.46337 9.9542 5.53768 9.9542C5.612 9.9542 5.68557 9.93948 5.75417 9.9109C5.82277 9.88232 5.88503 9.84045 5.93736 9.78768L10.5308 5.19421C10.588 5.1415 10.6336 5.07752 10.6648 5.00631C10.696 4.9351 10.7121 4.8582 10.7121 4.78046C10.7121 4.70272 10.696 4.62582 10.6648 4.55461C10.6336 4.4834 10.588 4.41942 10.5308 4.36671Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-dark text-uppercase">Custom AI Development</p>
                                </li>
                                <li className="d-flex align-items-center mb-3 gap-2 w-md-50 w-100">
                                    <div className="position-relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                                            <circle className="fill-primary" cx={7} cy={7} r={7} fill="#794AFF" />
                                            <path
                                                d="M10.5308 4.36671C10.4785 4.31395 10.4162 4.27207 10.3476 4.24349C10.279 4.21491 10.2055 4.2002 10.1312 4.2002C10.0568 4.2002 9.98327 4.21491 9.91467 4.24349C9.84607 4.27207 9.78381 4.31395 9.73148 4.36671L5.53768 8.56613L3.77573 6.79855C3.72139 6.74606 3.65725 6.70479 3.58697 6.67709C3.51668 6.64939 3.44163 6.63581 3.3661 6.63712C3.29056 6.63842 3.21603 6.6546 3.14674 6.68471C3.07746 6.71482 3.01478 6.75829 2.9623 6.81262C2.90981 6.86696 2.86854 6.9311 2.84084 7.00138C2.81314 7.07166 2.79956 7.14672 2.80087 7.22225C2.80217 7.29778 2.81835 7.37232 2.84846 7.4416C2.87857 7.51089 2.92204 7.57356 2.97637 7.62605L5.13801 9.78768C5.19034 9.84045 5.2526 9.88232 5.32119 9.9109C5.38979 9.93948 5.46337 9.9542 5.53768 9.9542C5.612 9.9542 5.68557 9.93948 5.75417 9.9109C5.82277 9.88232 5.88503 9.84045 5.93736 9.78768L10.5308 5.19421C10.588 5.1415 10.6336 5.07752 10.6648 5.00631C10.696 4.9351 10.7121 4.8582 10.7121 4.78046C10.7121 4.70272 10.696 4.62582 10.6648 4.55461C10.6336 4.4834 10.588 4.41942 10.5308 4.36671Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-dark text-uppercase">Machine Learning Solutions</p>
                                </li>
                                <li className="d-flex align-items-center mb-3 gap-2 w-md-50 w-100">
                                    <div className="position-relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                                            <circle className="fill-primary" cx={7} cy={7} r={7} fill="#794AFF" />
                                            <path
                                                d="M10.5308 4.36671C10.4785 4.31395 10.4162 4.27207 10.3476 4.24349C10.279 4.21491 10.2055 4.2002 10.1312 4.2002C10.0568 4.2002 9.98327 4.21491 9.91467 4.24349C9.84607 4.27207 9.78381 4.31395 9.73148 4.36671L5.53768 8.56613L3.77573 6.79855C3.72139 6.74606 3.65725 6.70479 3.58697 6.67709C3.51668 6.64939 3.44163 6.63581 3.3661 6.63712C3.29056 6.63842 3.21603 6.6546 3.14674 6.68471C3.07746 6.71482 3.01478 6.75829 2.9623 6.81262C2.90981 6.86696 2.86854 6.9311 2.84084 7.00138C2.81314 7.07166 2.79956 7.14672 2.80087 7.22225C2.80217 7.29778 2.81835 7.37232 2.84846 7.4416C2.87857 7.51089 2.92204 7.57356 2.97637 7.62605L5.13801 9.78768C5.19034 9.84045 5.2526 9.88232 5.32119 9.9109C5.38979 9.93948 5.46337 9.9542 5.53768 9.9542C5.612 9.9542 5.68557 9.93948 5.75417 9.9109C5.82277 9.88232 5.88503 9.84045 5.93736 9.78768L10.5308 5.19421C10.588 5.1415 10.6336 5.07752 10.6648 5.00631C10.696 4.9351 10.7121 4.8582 10.7121 4.78046C10.7121 4.70272 10.696 4.62582 10.6648 4.55461C10.6336 4.4834 10.588 4.41942 10.5308 4.36671Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-dark text-uppercase">Natural Language Processing</p>
                                </li>
                                <li className="d-flex align-items-center mb-3 gap-2 w-md-50 w-100">
                                    <div className="position-relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                                            <circle className="fill-primary" cx={7} cy={7} r={7} fill="#794AFF" />
                                            <path
                                                d="M10.5308 4.36671C10.4785 4.31395 10.4162 4.27207 10.3476 4.24349C10.279 4.21491 10.2055 4.2002 10.1312 4.2002C10.0568 4.2002 9.98327 4.21491 9.91467 4.24349C9.84607 4.27207 9.78381 4.31395 9.73148 4.36671L5.53768 8.56613L3.77573 6.79855C3.72139 6.74606 3.65725 6.70479 3.58697 6.67709C3.51668 6.64939 3.44163 6.63581 3.3661 6.63712C3.29056 6.63842 3.21603 6.6546 3.14674 6.68471C3.07746 6.71482 3.01478 6.75829 2.9623 6.81262C2.90981 6.86696 2.86854 6.9311 2.84084 7.00138C2.81314 7.07166 2.79956 7.14672 2.80087 7.22225C2.80217 7.29778 2.81835 7.37232 2.84846 7.4416C2.87857 7.51089 2.92204 7.57356 2.97637 7.62605L5.13801 9.78768C5.19034 9.84045 5.2526 9.88232 5.32119 9.9109C5.38979 9.93948 5.46337 9.9542 5.53768 9.9542C5.612 9.9542 5.68557 9.93948 5.75417 9.9109C5.82277 9.88232 5.88503 9.84045 5.93736 9.78768L10.5308 5.19421C10.588 5.1415 10.6336 5.07752 10.6648 5.00631C10.696 4.9351 10.7121 4.8582 10.7121 4.78046C10.7121 4.70272 10.696 4.62582 10.6648 4.55461C10.6336 4.4834 10.588 4.41942 10.5308 4.36671Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-dark text-uppercase">AI-Powered Data Analytics</p>
                                </li>
                                <li className="d-flex align-items-center mb-3 gap-2 w-md-50 w-100">
                                    <div className="position-relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                                            <circle className="fill-primary" cx={7} cy={7} r={7} fill="#794AFF" />
                                            <path
                                                d="M10.5308 4.36671C10.4785 4.31395 10.4162 4.27207 10.3476 4.24349C10.279 4.21491 10.2055 4.2002 10.1312 4.2002C10.0568 4.2002 9.98327 4.21491 9.91467 4.24349C9.84607 4.27207 9.78381 4.31395 9.73148 4.36671L5.53768 8.56613L3.77573 6.79855C3.72139 6.74606 3.65725 6.70479 3.58697 6.67709C3.51668 6.64939 3.44163 6.63581 3.3661 6.63712C3.29056 6.63842 3.21603 6.6546 3.14674 6.68471C3.07746 6.71482 3.01478 6.75829 2.9623 6.81262C2.90981 6.86696 2.86854 6.9311 2.84084 7.00138C2.81314 7.07166 2.79956 7.14672 2.80087 7.22225C2.80217 7.29778 2.81835 7.37232 2.84846 7.4416C2.87857 7.51089 2.92204 7.57356 2.97637 7.62605L5.13801 9.78768C5.19034 9.84045 5.2526 9.88232 5.32119 9.9109C5.38979 9.93948 5.46337 9.9542 5.53768 9.9542C5.612 9.9542 5.68557 9.93948 5.75417 9.9109C5.82277 9.88232 5.88503 9.84045 5.93736 9.78768L10.5308 5.19421C10.588 5.1415 10.6336 5.07752 10.6648 5.00631C10.696 4.9351 10.7121 4.8582 10.7121 4.78046C10.7121 4.70272 10.696 4.62582 10.6648 4.55461C10.6336 4.4834 10.588 4.41942 10.5308 4.36671Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-dark text-uppercase">Robotic Process Automation</p>
                                </li>
                                <li className="d-flex align-items-center mb-3 gap-2 w-md-50 w-100">
                                    <div className="position-relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                                            <circle className="fill-primary" cx={7} cy={7} r={7} fill="#794AFF" />
                                            <path
                                                d="M10.5308 4.36671C10.4785 4.31395 10.4162 4.27207 10.3476 4.24349C10.279 4.21491 10.2055 4.2002 10.1312 4.2002C10.0568 4.2002 9.98327 4.21491 9.91467 4.24349C9.84607 4.27207 9.78381 4.31395 9.73148 4.36671L5.53768 8.56613L3.77573 6.79855C3.72139 6.74606 3.65725 6.70479 3.58697 6.67709C3.51668 6.64939 3.44163 6.63581 3.3661 6.63712C3.29056 6.63842 3.21603 6.6546 3.14674 6.68471C3.07746 6.71482 3.01478 6.75829 2.9623 6.81262C2.90981 6.86696 2.86854 6.9311 2.84084 7.00138C2.81314 7.07166 2.79956 7.14672 2.80087 7.22225C2.80217 7.29778 2.81835 7.37232 2.84846 7.4416C2.87857 7.51089 2.92204 7.57356 2.97637 7.62605L5.13801 9.78768C5.19034 9.84045 5.2526 9.88232 5.32119 9.9109C5.38979 9.93948 5.46337 9.9542 5.53768 9.9542C5.612 9.9542 5.68557 9.93948 5.75417 9.9109C5.82277 9.88232 5.88503 9.84045 5.93736 9.78768L10.5308 5.19421C10.588 5.1415 10.6336 5.07752 10.6648 5.00631C10.696 4.9351 10.7121 4.8582 10.7121 4.78046C10.7121 4.70272 10.696 4.62582 10.6648 4.55461C10.6336 4.4834 10.588 4.41942 10.5308 4.36671Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-dark text-uppercase">Computer Vision Systems</p>
                                </li>
                                <li className="d-flex align-items-center mb-3 gap-2 w-md-50 w-100">
                                    <div className="position-relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                                            <circle className="fill-primary" cx={7} cy={7} r={7} fill="#794AFF" />
                                            <path
                                                d="M10.5308 4.36671C10.4785 4.31395 10.4162 4.27207 10.3476 4.24349C10.279 4.21491 10.2055 4.2002 10.1312 4.2002C10.0568 4.2002 9.98327 4.21491 9.91467 4.24349C9.84607 4.27207 9.78381 4.31395 9.73148 4.36671L5.53768 8.56613L3.77573 6.79855C3.72139 6.74606 3.65725 6.70479 3.58697 6.67709C3.51668 6.64939 3.44163 6.63581 3.3661 6.63712C3.29056 6.63842 3.21603 6.6546 3.14674 6.68471C3.07746 6.71482 3.01478 6.75829 2.9623 6.81262C2.90981 6.86696 2.86854 6.9311 2.84084 7.00138C2.81314 7.07166 2.79956 7.14672 2.80087 7.22225C2.80217 7.29778 2.81835 7.37232 2.84846 7.4416C2.87857 7.51089 2.92204 7.57356 2.97637 7.62605L5.13801 9.78768C5.19034 9.84045 5.2526 9.88232 5.32119 9.9109C5.38979 9.93948 5.46337 9.9542 5.53768 9.9542C5.612 9.9542 5.68557 9.93948 5.75417 9.9109C5.82277 9.88232 5.88503 9.84045 5.93736 9.78768L10.5308 5.19421C10.588 5.1415 10.6336 5.07752 10.6648 5.00631C10.696 4.9351 10.7121 4.8582 10.7121 4.78046C10.7121 4.70272 10.696 4.62582 10.6648 4.55461C10.6336 4.4834 10.588 4.41942 10.5308 4.36671Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <p className="mb-0 text-dark text-uppercase">AI Consulting &amp; Strategy</p>
                                </li>
                            </ul>
                            <Link href="/contact" className="btn btn-linear hover-up mt-3">
                                <span>Contact us</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_914_180)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
