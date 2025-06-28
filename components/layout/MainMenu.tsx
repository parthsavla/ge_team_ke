"use client";
import Link from "next/link";

export default function MainMenu() {
    return (
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/">
                    <span>Home</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/about">
                    <span>Schedule</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/about">
                    <span>Support</span>
                </Link>
            </li>


        </ul>
    );
}
