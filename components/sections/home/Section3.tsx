import Link from "next/link";

const events = [
    {
        name: "Track & Field",
        slug: "track-and-field",
        location: "ISD Dubai Sports City",
        time: "6:00–9:00",
        image: "/assets/track.jpg",
        coordinatorName: "John Doe",
        coordinatorContact: "+971-55-123-4567"
    },
    {
        name: "Golf",
        slug: "golf",
        location: "Jumeirah Golf Estates",
        time: "7:30–11:00",
        image: "/assets/golf.jpg",
        coordinatorName: "John Doe",
        coordinatorContact: "+971-55-123-4567"
    },
    {
        name: "Pickleball",
        slug: "pickleball",
        location: "Pickleturf",
        time: "8:00–15:00",
        image: "/assets/pickle.jpg",
        coordinatorName: "John Doe",
        coordinatorContact: "+971-55-123-4567"
    },
    {
        name: "Football",
        slug: "football",
        location: "DWTC & ISD Dubai Sports City",
        time: "8:00–00:00",
        image: "/assets/football.jpg",
        coordinatorName: "John Doe",
        coordinatorContact: "+971-55-123-4567"
    },
    {
        name: "Tennis",
        slug: "tennis",
        location: "Rackets Academy Dubai Hills",
        time: "8:00–23:00",
        image: "/assets/tennis.jpg",
        coordinatorName: "John Doe",
        coordinatorContact: "+971-55-123-4567"
    },
    {
        name: "Swimming",
        slug: "swimming",
        location: "Hamdan Sports Complex",
        time: "9:00–13:00",
        image: "/assets/swimming.jpg",
        coordinatorName: "John Doe",
        coordinatorContact: "+971-55-123-4567"
    },
    {
        name: "Squash",
        slug: "squash",
        location: "Emirates Golf Club",
        time: "9:00–14:00",
        image: "/assets/squash.jpg",
        coordinatorName: "John Doe",
        coordinatorContact: "+971-55-123-4567"
    },
    {
        name: "Multi-Sports",
        slug: "multi-sports",
        location: "DWTC",
        time: "8:00–23:00",
        image: "/assets/multisports.jpg",
        coordinatorName: "John Doe",
        coordinatorContact: "+971-55-123-4567"
    },
    {
        name: "Cricket",
        slug: "cricket",
        location: "ISD Dubai Sports City & Stadium",
        time: "20:00–6:00",
        image: "/assets/cricket.jpg",
        coordinatorName: "John Doe",
        coordinatorContact: "+971-55-123-4567"
    }
];

export default function Section3() {
    return (
        <section className="ai-solutions-home-section-3 position-relative overflow-hidden pt-120 pb-120">
            <div className="container position-relative z-1">
                <div className="row align-items-center mb-4">
                    <div className="col-12 d-flex align-items-center gap-3">
                        <span className="small-line" />
                        <h2 className="btn-text text-primary fs-5 fw-semibold m-0">Events / Sports</h2>
                    </div>
                </div>

                <div className="row g-4">
                    {events.map((event) => (
                        <div key={event.name} className="col-12 col-sm-6 col-lg-4">
                            <Link href={`/events/${encodeURIComponent(event.slug)}`} passHref legacyBehavior>
                                <a className="text-decoration-none text-dark h-100 d-block hover-shadow transition">
                                    <article className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                                        <figure className="m-0">
                                            <img
                                                src={event.image}
                                                alt={`Image of ${event.name}`}
                                                className="card-img-top"
                                                style={{
                                                    height: "250px",
                                                    objectFit: "cover",
                                                    width: "100%",
                                                }}
                                            />
                                        </figure>
                                        <div className="card-body p-4">
                                            <h6 className="card-title fw-bold mb-2">{event.name}</h6>
                                            <p className="card-text mb-1">
                                                <strong>Location:</strong> {event.location}
                                            </p>
                                            <p className="card-text mb-1">
                                                <strong>Coordinator:</strong> {event.coordinatorName}
                                            </p>
                                            <p className="card-text mb-1">
                                                <strong>Contact:</strong> {event.coordinatorContact}
                                            </p>
                                            <p className="card-text mb-0 text-muted small">
                                                Tap to view more details →
                                            </p>
                                        </div>
                                    </article>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
