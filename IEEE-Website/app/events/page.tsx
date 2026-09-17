"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useMemo } from "react";
import { Calendar, MapPin, Clock, Search } from "lucide-react";

/* 
================================================================================
                    HOW TO MANAGE EVENTS - DETAILED GUIDE
================================================================================

This guide will help you add, remove, and manage events on the Events page.

LOCATION OF EVENT DATA:
- Upcoming Events: Look for the "const events: Event[] = [" array (around line 22)
- Past Events: Look for the "const pastEvents: Event[] = [" array (around line 58)

================================================================================
                        HOW TO ADD A NEW UPCOMING EVENT
================================================================================

STEP 1: Find the "events" array
   - Scroll down to find: const events: Event[] = [
   - This array contains all upcoming events

STEP 2: Add a new event object
   - Copy one of the existing event objects (the code between { and }, including the comma)
   - Paste it after the last event in the array
   - Make sure there's a comma after the previous event and after your new event

STEP 3: Fill in the event information
   Replace the placeholder values with your actual event details:
   
   id: "unique-number" 
      - Give it a unique number (e.g., "4", "5", "6")
      - Make sure it's different from all other event IDs
   
   title: "Your Event Title"
      - The name of your event (e.g., "IEEE Spring Social")
   
   date: "Month Day, Year"
      - Format: "September 15, 2024" or "March 20, 2025"
   
   time: "Start Time - End Time"
      - Format: "6:00 PM - 8:00 PM" or "2:00 PM - 4:00 PM"
   
   location: "Event Location"
      - Where the event takes place (e.g., "IEEE Lab", "Engineering Quad")
   
   description: "Your event description here..."
      - A short description of what the event is about
      - This will appear below the poster on the event card
   
   poster: "/your-poster-image.jpg"
      - The path to your poster image
      - Images must be placed in the /public folder
      - Example: If you put "event-poster.jpg" in /public, use "/event-poster.jpg"
      - Supported formats: .jpg, .jpeg, .png, .webp
   
   category: "social" (OPTIONAL)
      - Can be: "social", "tech", "workshop", or "collaboration"
      - If you don't want a category, remove this line entirely

EXAMPLE OF A COMPLETE NEW EVENT:
  {
    id: "4",
    title: "IEEE Spring Social",
    date: "April 10, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "IEEE Lab",
    description: "Join us for our spring social! Meet new members, enjoy food, and participate in fun activities.",
    poster: "/spring-social-poster.jpg",
    category: "social"
  },

IMPORTANT NOTES:
- Always end your event object with a comma (,) if there are more events after it
- The last event in the array should NOT have a comma after it
- Make sure all quotes are straight quotes (") not curly quotes (" or ")
- Make sure all opening braces { have matching closing braces }

================================================================================
                          HOW TO ADD A PAST EVENT
================================================================================

STEP 1: Find the "pastEvents" array
   - Scroll down to find: const pastEvents: Event[] = [
   - This array contains all past events

STEP 2: Follow the same steps as adding an upcoming event
   - Copy an existing past event object
   - Paste it into the pastEvents array
   - Fill in all the information (same format as upcoming events)
   - Use a unique ID (you can use "past-1", "past-2", etc., or any unique string)

STEP 3: Make sure the date is in the past
   - Past events should have dates that have already occurred
   - Example: "March 20, 2024" (if today is later than that date)

================================================================================
                    HOW TO REMOVE AN UPCOMING EVENT
================================================================================

STEP 1: Find the event you want to remove
   - Look in the "events" array
   - Find the event object you want to delete

STEP 2: Delete the entire event object
   - Delete everything from the opening brace { to the closing brace }
   - Also delete the comma after it (if it's not the last event)
   - If it's the last event, make sure the previous event doesn't have a trailing comma

STEP 3: Check for syntax errors
   - Make sure there are no extra commas
   - Make sure all braces { } are properly matched
   - The array should still be valid JavaScript

EXAMPLE - Removing an event:
   BEFORE:
     {
       id: "2",
       title: "Event to Remove",
       ...
     },
     {
       id: "3",
       title: "Keep This Event",
       ...
     }
   
   AFTER:
     {
       id: "3",
       title: "Keep This Event",
       ...
     }

================================================================================
                        HOW TO REMOVE A PAST EVENT
================================================================================

STEP 1: Find the event in the "pastEvents" array
   - Look for the event you want to remove

STEP 2: Delete the entire event object
   - Follow the same steps as removing an upcoming event
   - Delete from { to } including the comma

================================================================================
                          POSTER IMAGE SETUP GUIDE
================================================================================

HOW TO ADD A POSTER IMAGE:

STEP 1: Save your poster image
   - Save your poster image file (e.g., "my-event-poster.jpg")
   - Recommended formats: .jpg, .jpeg, .png, or .webp
   - Recommended size: 800x600 pixels or larger (for best quality)

STEP 2: Place the image in the public folder
   - Navigate to the /public/Events folder in your project
   - Copy your poster image into this folder
   - Example: /public/Events/spring-social-poster.jpg

STEP 3: Reference it in your event
   - In your event object, set: poster: "/Events/spring-social-poster.jpg"
   - Always start with a forward slash /
   - Use the exact filename (case-sensitive)

EXAMPLE FILE STRUCTURE:
   /public/
     ├── spring-social-poster.jpg
     ├── workshop-poster.png
     └── welcome.jpg

================================================================================
                          TROUBLESHOOTING
================================================================================

PROBLEM: Event doesn't show up on the page
   - Check that you saved the file
   - Check for syntax errors (missing commas, unmatched braces)
   - Make sure the event is in the correct array (events vs pastEvents)
   - Refresh your browser

PROBLEM: Poster image doesn't show
   - Make sure the image is in the /public/Events folder
   - Check that the path starts with a forward slash /
   - Verify the filename matches exactly (including case)
   - Check the file extension matches (.jpg vs .jpeg)

PROBLEM: Page shows an error
   - Check for missing commas between events
   - Make sure all quotes are straight quotes "
   - Verify all opening braces { have closing braces }
   - Make sure the last event in an array doesn't have a trailing comma

PROBLEM: Can't find where to edit
   - Look for "const events" for upcoming events
   - Look for "const pastEvents" for past events
   - Both are near the top of this file, after the imports

================================================================================
                          QUICK REFERENCE
================================================================================

Event Object Template:
  {
    id: "unique-id",
    title: "Event Title",
    date: "Month Day, Year",
    time: "Start - End",
    location: "Location Name",
    description: "Event description...",
    poster: "/image-name.jpg",
    category: "social"  // Optional: "social", "tech", "workshop", "collaboration"
  }

Categories Available:
  - "social" - Social events and gatherings
  - "tech" - Technical events and talks
  - "workshop" - Hands-on workshops
  - "collaboration" - Collaborative events with other organizations

================================================================================
*/
type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  poster: string; // Path to poster image in /public/Events folder
  category?: "social" | "career" | "workshop" | "collaboration" | "info"; // Optional category
};

// ============================================================================
// UPCOMING EVENTS ARRAY
// ============================================================================
// To ADD a new event: Copy an existing event object below, paste it, and fill in your details
// To REMOVE an event: Delete the entire event object (from { to }, including the comma)
// See the detailed guide at the top of this file for step-by-step instructions
// ============================================================================
const events: Event[] = [
  {
    id: "1",
    title: "Northrop Grunman Career Panel",
    date: "March 4, 2026",
    time: "6:30 PM - 8:00 PM",
    location: "MDEA",
    description: "Join Northrop Grunman for a career panel! Learn about the company, their projects, and their opportunities.",
    poster: "/Events/RS.png", // Replace with your event poster path
    category: "career"
  },
  {
    id: "2",
    title: "SHPE x IEEE Soldering Crash Course",
    date: "March 2, 2026",
    time: "12:00 PM - 1:00 PM",
    location: "ICS 259",
    description: "Learn the essentials of soldering and build your own LED circuit to take home!",
    poster: "/Events/SHPE_x_IEEE_Soldering_Crash_Course.png", // Replace with your event poster path
    category: "workshop"
  },
  {
    id: "3",
    title: "IEEE Board Applications",
    date: "February 25, 2026",
    time: "5:00 PM - 7:00 PM",
    location: "MDEA",
    description: "Join us for our GM where we will explain the process of applying to the IEEE Board, the roles of the Board, and the benefits of doing so!",
    poster: "/Events/IEEE_Board_Apps.png", // Replace with your event poster path
    category: "info"
  },
  // Add more events here by copying the structure above
];

// ============================================================================
// PAST EVENTS ARRAY
// ============================================================================
// To ADD a past event: Copy an existing event object below, paste it, and fill in your details
// To REMOVE a past event: Delete the entire event object (from { to }, including the comma)
// See the detailed guide at the top of this file for step-by-step instructions
// ============================================================================
const pastEvents: Event[] = [
  {
    id: "past-1",
    title: "Spring Quarter Kickoff",
    date: "April 3, 2024",
    time: "5:00 PM - 7:00 PM",
    location: "IEEE Lab",
    description: "We kicked off Spring Quarter with an amazing social event! Members got to meet the new board, learn about upcoming projects, and enjoy some great food.",
    poster: "/Events/welcome.jpg", // Replace with your event poster path
    category: "social"
  },
  {
    id: "past-2",
    title: "PCB Design Workshop",
    date: "March 20, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "IEEE Lab",
    description: "A hands-on workshop covering PCB design fundamentals using KiCad. Participants learned to design their own circuit boards and got to see the manufacturing process.",
    poster: "/Events/welcome.jpg", // Replace with your event poster path
    category: "workshop"
  },
  // Add more past events here by copying the structure above
];

// Helper function to filter events by search query
const filterEventsBySearch = (eventsList: Event[], query: string): Event[] => {
  if (!query.trim()) return eventsList;
  const lowerQuery = query.toLowerCase().trim();
  return eventsList.filter(
    (event) =>
      event.title.toLowerCase().includes(lowerQuery) ||
      event.description.toLowerCase().includes(lowerQuery) ||
      event.location.toLowerCase().includes(lowerQuery) ||
      event.date.toLowerCase().includes(lowerQuery) ||
      (event.category && event.category.toLowerCase().includes(lowerQuery))
  );
};

// Helper function to get category color
const getCategoryColor = (category?: string) => {
  switch (category) {
    case "social":
      return "bg-ieee-accent";
    case "tech":
      return "bg-ieee-blue";
    case "workshop":
      return "bg-ieee-dark";
    case "collaboration":
      return "bg-purple-500";
    default:
      return "bg-gray-500";
  }
};

function EventCard({ event }: { event: Event }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 group"
    >
      {/* Event Poster - Main Focus */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src={event.poster}
          alt={`${event.title} Poster`}
          width={800}
          height={800}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Category Badge */}
        {event.category && (
          <div className="absolute top-4 right-4 z-10">
            <span className={`${getCategoryColor(event.category)} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg`}>
              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
            </span>
          </div>
        )}

        {/* Event Title and Details Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            {event.title}
          </h3>

          {/* Event Details */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white/95">
              <Calendar className="w-5 h-5 text-ieee-accent flex-shrink-0 drop-shadow-md" />
              <span className="text-base font-medium drop-shadow-md">{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-white/95">
              <Clock className="w-5 h-5 text-ieee-accent flex-shrink-0 drop-shadow-md" />
              <span className="text-base font-medium drop-shadow-md">{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-white/95">
              <MapPin className="w-5 h-5 text-ieee-accent flex-shrink-0 drop-shadow-md" />
              <span className="text-base font-medium drop-shadow-md">{event.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Event Description - Separate Section Below Poster */}
      <div className="p-6 bg-white">
        <p className="text-gray-700 leading-relaxed text-base">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredEvents = useMemo(() => filterEventsBySearch(events, searchQuery), [searchQuery]);
  const filteredPastEvents = useMemo(() => filterEventsBySearch(pastEvents, searchQuery), [searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-ieee-blue text-white py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-5xl md:text-6xl font-bold mb-6"
          >
            Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed"
          >
            Find all IEEE related events here! Whether it be IEEE socials, ESO x IEEE socials, or tech related events that you&apos;d find our officers at, make sure to keep tabs on this page for the details!
          </motion.p>
          <div className="w-24 h-1 bg-ieee-accent mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-16 bg-ieee-gray">
        <div className="container">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events by title, location, date, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-ieee-gray bg-white text-ieee-slate placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-ieee-slate transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>

          {filteredEvents.length > 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-ieee-slate mb-4">
                  Upcoming Events
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Stay updated with our latest events and activities
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </>
          ) : filteredPastEvents.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="font-heading text-2xl font-bold text-ieee-slate mb-8">
                {searchQuery ? "No upcoming events match your search" : "No Upcoming Events"}
              </h2>
              <p className="text-gray-600 mb-8">
                {searchQuery ? "Try a different search or check out past events below." : "Check back soon for upcoming events!"}
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <Calendar className="w-16 h-16 text-ieee-blue mx-auto mb-4 opacity-50" />
              <h3 className="font-heading text-2xl font-bold text-ieee-slate mb-2">
                {searchQuery ? "No events match your search" : "No events scheduled"}
              </h3>
              <p className="text-gray-600">
                {searchQuery ? "Try a different search term." : "Check back soon for upcoming events!"}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Past Events Section */}
      {filteredPastEvents.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-ieee-slate mb-4">
                Past Events
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {searchQuery
                  ? `Showing ${filteredPastEvents.length} past event${filteredPastEvents.length === 1 ? "" : "s"} matching your search`
                  : "Take a look at some of our previous events and activities"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredPastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="py-16 bg-ieee-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ieee-slate mb-6">
              Want to Stay Updated?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Follow us on social media and join our Discord server to get notified about all upcoming events and activities!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/get-involved/"
                className="bg-ieee-blue hover:bg-ieee-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                Get Involved
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

