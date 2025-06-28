'use client'
import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home/Section1";
import Section2 from "@/components/sections/home/Section2";
import Section3 from "@/components/sections/home/Section3";
import Section4 from "@/components/sections/home/Section4";

import { useState, useEffect } from 'react'

function urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}


export default function Home() {

    return (
        <>
            <Layout>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                {/* <Section5 />
                <Section6 />
                <Section7 />
                <Section8 /> */}
                {/* <Section9 bordertop="border-top" /> */}

            </Layout>
        </>
    );
}
