import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";
import React from "react";

const page = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br></br> Even You Can't Must
      </h1>
      <p className="text-center mt-5">
        Hackatons, Meetups, and Conferences, All in One Place
      </p>
      <ExploreBtn></ExploreBtn>

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard
                image={event.image}
                title={event.title}
                slug={event.slug}
                location={event.location}
                date={event.date}
                time={event.time}
              ></EventCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
