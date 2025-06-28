"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import TriggerNotification from "../elements/TriggerNotification";

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: MobileMenuProps) {
    const [isAccordion, setIsAccordion] = useState<number | null>(null);
    const pathname = usePathname();

    const handleAccordion = (key: number) => {
        setIsAccordion((prevState) => (prevState === key ? null : key));
    };

    useEffect(() => {
        if (isMobileMenu) {
            handleMobileMenu();
        }
    }, [pathname]);

    return (
        <>
            {isMobileMenu && <div className="mobile-menu-overlay" onClick={handleMobileMenu} />}

            <div className={`mobile-header-active mobile-header-wrapper-style ${isMobileMenu ? "sidebar-visible" : ""}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-logo">
                        <Link className="d-flex align-items-center gap-2" href="/">
                            <img src="/assets/logo.png" style={{ width: '90px' }} />
                        </Link>
                        <div className={`burger-icon burger-icon-white border rounded-circle ${isMobileMenu ? "burger-close" : ""}`} onClick={handleMobileMenu}>
                            <span className="burger-icon-top" />
                            <span className="burger-icon-mid" />
                            <span className="burger-icon-bottom" />
                        </div>

                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu ps-0">
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">Schedule</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Support</Link>
                                        </li>
                                        <li>
                                            <Link href="/login">login</Link>
                                        </li>
                                        <li>
                                            <Link href="/PNotification">Push Notification</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="tgmobile__menu-bottom mt-auto">
                        <div className="contact-info">
                            <ul className="list-wrap">
                                <li>
                                    <span className="opacity-50">Mail:</span> <Link href="/mailto:info@valom.com">info@astrax.com</Link>
                                </li>
                                <li>
                                    <span className="opacity-50">Phone:</span> <Link href="/tel:0123456789">+123 888 9999</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="social-links">
                            <div className="social-icons gap-4 mt-4">
                                <Link href="#" className="border border-opacity-10 border-white icon-shape icon-md">
                                    <i className="bi bi-facebook" />
                                </Link>
                                <Link href="#" className="border border-opacity-10 border-white icon-shape icon-md">
                                    <i className="bi bi-twitter-x" />
                                </Link>
                                <Link href="#" className="border border-opacity-10 border-white icon-shape icon-md">
                                    <i className="bi bi-linkedin" />
                                </Link>
                                <Link href="#" className="border border-opacity-10 border-white icon-shape icon-md">
                                    <i className="bi bi-behance" />
                                </Link>
                                <TriggerNotification></TriggerNotification>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
