"use client";

import { getEventBySlug } from "@/lib/events";
import { notFound } from "next/navigation";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

export default function EventPage({ params }: { params: { slug: string } }) {
    const event = getEventBySlug(params.slug);
    if (!event) return notFound();

    const [search, setSearch] = useState("");

    // useEffect(() => {
    //     import("bootstrap/dist/js/bootstrap.bundle.min.js");
    // }, []);

    const filteredSchedule = event.schedule?.filter((match) =>
        `${match.teamA} ${match.teamB} ${match.time}`.toLowerCase().includes(search.toLowerCase())
    );

    const filteredResults = event.results?.filter((match) =>
        `${match.teamA} ${match.teamB} ${match.time}`.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Layout>
            <div className="container py-5">
                <h1 className="display-5 fw-bold mb-4">{event.name}</h1>

                <div className="mb-4">
                    <Image
                        src={event.image}
                        alt={event.name}
                        width={500}
                        height={300}
                        className="img-fluid rounded shadow"
                    />
                </div>

                {/* Tabs */}
                <ul className="nav nav-tabs mb-3" id="eventTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="details-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#details"
                            type="button"
                            role="tab"
                        >
                            Details
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="schedule-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#schedule"
                            type="button"
                            role="tab"
                        >
                            Schedule
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="results-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#results"
                            type="button"
                            role="tab"
                        >
                            Results
                        </button>
                    </li>
                </ul>

                {/* Search Input (shown only for schedule/results) */}
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search teams or time..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="tab-content" id="eventTabContent">
                    {/* Details Tab */}
                    <div className="tab-pane fade show active" id="details" role="tabpanel">
                        <div className="row">
                            <div className="col-md-6">
                                <p><strong>📍 Location:</strong> {event.location}</p>
                                <p><strong>🕒 Time:</strong> {event.time}</p>
                            </div>
                            <div className="col-md-6">
                                <p><strong>👤 Coordinator:</strong> {event.coordinatorName}</p>
                                <p><strong>📞 Contact:</strong> {event.coordinatorContact}</p>
                            </div>
                        </div>
                    </div>

                    {/* Schedule Tab */}
                    <div className="tab-pane fade" id="schedule" role="tabpanel">
                        {filteredSchedule?.length ? (
                            <div className="row row-cols-1 row-cols-md-2 g-4">
                                {filteredSchedule.map((match, i) => (
                                    <div className="col" key={i}>
                                        <div className="card h-100 shadow-sm">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {match.teamA} vs {match.teamB}
                                                </h5>
                                                <p className="card-text text-muted"><strong>Time:</strong> {match.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-muted">No matches found.</p>
                        )}
                    </div>

                    {/* Results Tab */}
                    <div className="tab-pane fade" id="results" role="tabpanel">
                        {filteredResults?.length ? (
                            <div className="row row-cols-1 row-cols-md-2 g-4">
                                {filteredResults.map((match, i) => (
                                    <div className="col" key={i}>
                                        <div className="card h-100 shadow-sm bg-light">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {match.teamA} <strong>{match.scoreA}</strong> vs{" "}
                                                    <strong>{match.scoreB}</strong> {match.teamB}
                                                </h5>
                                                <p className="card-text text-muted"><strong>Time:</strong> {match.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-muted">No results found.</p>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
