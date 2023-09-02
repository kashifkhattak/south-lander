import React from "react";

const AboutPackage = () => {
  return (
    <>
      <div className="tour_head1">
        <table>
          <tbody>
            <tr>
              <th>Places covered</th>
              <th className="event-res">Description</th>
              <th className="event-res">Activities</th>
              <th>Island</th>
            </tr>
            <tr>
              <td>Itabaca Channel</td>
              <td className="event-res">Narrow water crossing</td>
              <td className="event-res">Cross the channel by boat</td>
              <td>Baltra</td>
            </tr>
            <tr>
              <td>Rancho Primicias</td>
              <td className="event-res">Giant tortoise ranch</td>
              <td className="event-res">Hike along giant tortoises</td>
              <td>Santa Cruz</td>
            </tr>
            <tr>
              <td>Upper Part</td>
              <td className="event-res">Island vantage point</td>
              <td className="event-res">Complete island lookout</td>
              <td>Santa Cruz</td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          <strong>Inclusions</strong>
        </p>
        <p>
          - Roundtrip plane tickets Quito-Baltra-Isabela
          <br />
          - Roundtrip transfer to Baltra airport at the time of arrival and
          departure
          <br />
          - All meals detailed in the itinerary
          <br />
          - Softdrinks mentioned in the itinerary
          <br />
          - 4-Star Accomodation Facilities: single, double or triple
          <br />
          - Certified Galapagos National Park guidance - English/Spanish
          <br />
          - All activities described in the itinerary
          <br />- All equipment needed for water activities: masks, snorkels,
          fins, life jackets, etc.
        </p>
        <p>
          <strong>Exclusions</strong>
        </p>
        <p>
          - Alcoholic beverages
          <br />
          - Specific foods and beverages not mentioned in the itinerary.
          <br />
          - Entrance fee to the Galapagos National Park: $ 100 per person (cash
          only)
          <br />
          - Immigration control card / INGALA transit card: $ 20 per person
          (cash only)
          <br />- Personal travel and health insurance
        </p>
      </div>
    </>
  );
};

export default AboutPackage;
