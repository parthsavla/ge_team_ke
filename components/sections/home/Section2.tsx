"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Import TableColumn for defining columns array type
import type { TableColumn } from "react-data-table-component";

// Correctly type the dynamic import for DataTable to expect ScheduleItem
// We use React.ComponentProps<typeof ...> to infer the props type
// of the DataTable component when it's explicitly genericized with <ScheduleItem>.
const DataTable = dynamic<
    React.ComponentProps<typeof import("react-data-table-component").default<ScheduleItem>>
>(
    () => import("react-data-table-component").then((mod) => mod.default),
    { ssr: false }
);

type ScheduleItem = {
    time: string;
    event: string;
    location: string;
};

const scheduleData: Record<string, ScheduleItem[]> = {
    '20th': [],
    '21st': [
        { time: "6:00–9:00", event: "Track & Field", location: "ISD Dubai Sports City" },
        { time: "7:30–11:00", event: "Golf", location: "Jumeirah Golf Estates" },
        { time: "8:00–15:00", event: "Pickleball", location: "Pickleturf" },
        { time: "8:00–00:00", event: "Football", location: "DWTC & ISD Dubai Sports City" },
        { time: "8:00–23:00", event: "Tennis", location: "Rackets Academy Dubai Hills" },
        { time: "9:00–13:00", event: "Swimming", location: "Hamdan Sports Complex" },
        { time: "9:00–14:00", event: "Squash", location: "Emirates Golf Club" },
        { time: "08:00–23:00", event: "Multi-Sports (Badminton, Basketball, etc.)", location: "DWTC" },
        { time: "20:00–6:00", event: "Cricket", location: "ISD Dubai Sports City & Dubai Cricket Stadium" },
    ],
    '22nd': [{ time: "Same as Day 2", event: "Same Events Continue", location: "Same Venues" }],
    '23rd': [{ time: "Same as Day 2", event: "Same Events Continue", location: "Same Venues" }],
    '24th': [{ time: "Same as Day 2", event: "Same Events Continue", location: "Same Venues" }],
    '25th': [{ time: "All Day", event: "SEMI-FINALS", location: "All Venues" }],
    '26th': [{ time: "All Day", event: "FINALS", location: "All Venues" }],
    '27th': [{ time: "20:00–6:00", event: "CRICKET FINALS", location: "Dubai Cricket Stadium" }],
};

const days = Object.keys(scheduleData);

export default function Section2() {
    const [activeDay, setActiveDay] = useState("Day2");

    const columns: TableColumn<ScheduleItem>[] = [
        {
            name: "Time",
            selector: (row) => row.time,
            sortable: true,
            wrap: true,
        },
        {
            name: "Event",
            selector: (row) => row.event,
            sortable: true,
            wrap: true,
        },
        {
            name: "Location",
            selector: (row) => row.location,
            sortable: true,
            wrap: true,
        },
    ];

    const customTableStyles = {
        rows: {
            style: {
                minHeight: '50px',
                backgroundColor: '#ffffff',
                color: '#212529',
                '&:hover': {
                    backgroundColor: 'rgba(23, 162, 184, 0.08)',
                },
            },
        },
        headCells: {
            style: {
                fontWeight: 'bold',
                fontSize: '14px',
                backgroundColor: '#f8f9fa',
                color: '#495057',
                borderBottom: '1px solid #dee2e6',
            },
        },
        cells: {
            style: {
                fontSize: '14px',
                padding: '0.75rem',
            },
        },
        pagination: {
            style: {
                backgroundColor: '#f8f9fa',
                color: '#495057',
                borderTop: '1px solid #dee2e6',
                padding: '0.75rem',
            },
            button: {
                style: {
                    backgroundColor: 'transparent',
                    color: '#6c757d',
                    border: '1px solid #ced4da',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.25rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
                    '&:hover': {
                        backgroundColor: '#e9ecef',
                        color: '#212529',
                        borderColor: '#17a2b8',
                    },

                },
            },
        },
    };

    return (
        <section className="bg-light py-4 py-sm-5">
            <div className="container px-3 px-sm-4 px-lg-5">
                {/* Header */}
                <div className="d-flex align-items-center mb-4">
                    <span className="bg-info rounded" style={{ width: '1.5rem', height: '0.25rem' }} />
                    <h2 className="text-dark ms-3 fs-5 fs-sm-4 fw-bold text-uppercase">
                        Overall Schedule
                    </h2>
                </div>

                {/* Tabs */}
                <div className="overflow-auto mb-4 pb-1">
                    <div className="d-flex flex-nowrap gap-2">
                        {days.map((day) => (
                            <button
                                key={day}
                                onClick={() => setActiveDay(day)}
                                className={`
                                    btn btn-sm rounded-pill shadow-sm text-nowrap
                                    ${activeDay === day
                                        ? "btn-info text-info border-info shadow-lg"
                                        : "btn-outline-info text-secondary"
                                    }
                                `}
                                style={{ minWidth: 'fit-content' }}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-3 shadow-lg p-3 p-sm-4">
                    {scheduleData?.[activeDay]?.length > 0 ? (
                        <DataTable
                            columns={columns}
                            data={scheduleData?.[activeDay]}
                            pagination
                            responsive
                            striped
                            highlightOnHover
                            persistTableHead
                            noHeader
                            customStyles={customTableStyles}
                        />
                    ) : (
                        <div className="text-center text-muted py-5">
                            No schedule available for {activeDay}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}