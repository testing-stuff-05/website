import loc from "./Images/location.png";
import call from "./Images/call.png";
import enquiry from "./Images/queries.png";
import time from "./Images/time.png";

const items = [
  {
    id: "contact_item_1",
    image: loc,
    alt: "Location",
    heading: "Our Office Address",
    description: "Manikonda, Hyderabad ",
    borderStyle: "vertical-line",
  },
  {
    id: "contact_item_2",
    image: enquiry,
    alt: "Enquiries",
    heading: "General Enquiries",
    description: "vivaahplannerpanindia@gmail.com",
    borderStyle: "vertical-line",
  },
  {
    id: "contact_item_3",
    image: call,
    alt: "Call Us",
    heading: "Call Us",
    description: "+91-7981579065",
    borderStyle: "vertical-line",
  },
  {
    id: "contact_item_4",
    image: time,
    alt: "Timings",
    heading: "Our Timings",
    description: "Mon - Sun : Open 24 hrs",
  },
];

export default items;
