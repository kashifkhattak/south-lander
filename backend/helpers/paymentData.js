const { PackageVariant } = require('../models/packageVariant.model');
const { AccomodationDetail } = require('../models/accommodationDetail.model');
const { EventPlanningDetail } = require('../models/eventPlanningDetail.model');
const { RentalDetail } = require('../models/rentalDetail.model');
const { TourDetail } = require('../models/tourDetail.model');
const { EventTicketDetail } = require('../models/eventTicketDetail.model');

async function paymentData(booking) {
  const adultsCount = parseInt(booking.adultsCount);
  const childrenCount = parseInt(booking.childrenCount);
  const infantCount = parseInt(booking.infantCount);

  let totalPrice = 0;
  const paymentData = [];

  if (booking.type === 'Packages') {
    const packageVariant = await PackageVariant.findById(booking.package);

    booking.package = packageVariant.title;

    if (adultsCount > 0) {
      totalPrice += packageVariant.price * adultsCount;
      paymentData.push({
        name: `${packageVariant.title} (${booking.type} - Adults)`,
        priceInCents: packageVariant.price * 100,
        quantity: adultsCount,
      });
    }

    if (childrenCount > 0) {
      totalPrice += (packageVariant.price * 0.5) * childrenCount;
      paymentData.push({
        name: `${packageVariant.title} (${booking.type} - Children)`,
        priceInCents: (packageVariant.price * 0.5) * 100,
        quantity: childrenCount,
      });
    }

    if (infantCount > 0) {
      totalPrice += (packageVariant.price * 0.1) * infantCount;
      paymentData.push({
        name: `${packageVariant.title} (${booking.type} - Infants)`,
        priceInCents: (packageVariant.price * 0.1) * 100,
        quantity: infantCount,
      });
    }

    return { totalPrice, paymentData, booking };
  } else if (booking.type === 'Accommodation') {
    const accomodationDetailId = booking.facilitiesList.split('|')[0];
    const appartment = booking.facilitiesList.split('|')[1];

    const accommodationDetail = await AccomodationDetail.findById(
      accomodationDetailId
    );

    const selectedAppartment = accommodationDetail.appartments.find(
      (item) => item.title === appartment
    );

    booking.facilitiesList = selectedAppartment.title;

    if (adultsCount > 0) {
      totalPrice += selectedAppartment.pricePerNight * adultsCount;
      paymentData.push({
        name: `${selectedAppartment.title} (${booking.type} - Adults)`,
        priceInCents: selectedAppartment.pricePerNight * 100,
        quantity: adultsCount,
      });
    }

    if (childrenCount > 0) {
      totalPrice += (selectedAppartment.pricePerNight * 0.5) * childrenCount;
      paymentData.push({
        name: `${selectedAppartment.title} (${booking.type} - Children)`,
        priceInCents: (selectedAppartment.pricePerNight * 0.5) * 100,
        quantity: childrenCount,
      });
    }

    if (infantCount > 0) {
      totalPrice += (selectedAppartment.pricePerNight * 0.1) * infantCount;
      paymentData.push({
        name: `${selectedAppartment.title} (${booking.type} - Infants)`,
        priceInCents: (selectedAppartment.pricePerNight * 0.1) * 100,
        quantity: infantCount,
      });
    }

    return { totalPrice, paymentData, booking };
  } else if (booking.type === 'Event Planning') {
    const eventPlanningDetailId = booking.eventType.split('|')[0];
    const venue = booking.eventType.split('|')[1];

    const eventPlanningDetail = await EventPlanningDetail.findById(
      eventPlanningDetailId
    );

    const selectedVenue = eventPlanningDetail.pricePerPerson.find(
      (item) => item.title === venue
    );

    booking.eventType = selectedVenue.title;

    if (adultsCount > 0) {
      totalPrice += selectedVenue.rate * adultsCount;
      paymentData.push({
        name: `${selectedVenue.title} (${booking.type} - Adults)`,
        priceInCents: selectedVenue.rate * 100,
        quantity: adultsCount,
      });
    }

    if (childrenCount > 0) {
      totalPrice += (selectedVenue.rate * 0.5) * childrenCount;
      paymentData.push({
        name: `${selectedVenue.title} (${booking.type} - Children)`,
        priceInCents: (selectedVenue.rate * 0.5) * 100,
        quantity: childrenCount,
      });
    }

    if (infantCount > 0) {
      totalPrice += (selectedVenue.rate * 0.1) * infantCount;
      paymentData.push({
        name: `${selectedVenue.title} (${booking.type} - Infants)`,
        priceInCents: (selectedVenue.rate * 0.1) * 100,
        quantity: infantCount,
      });
    }

    return { totalPrice, paymentData, booking };
  } else if (booking.type === 'Rentals') {
    const rentalDetail = await RentalDetail.findById(booking.rental);

    booking.rental = rentalDetail.title;

    if (adultsCount > 0) {
      totalPrice += rentalDetail.pricePerNight * adultsCount;
      paymentData.push({
        name: `${rentalDetail.title} (${booking.type} - Adults)`,
        priceInCents: rentalDetail.pricePerNight * 100,
        quantity: adultsCount,
      });
    }

    if (childrenCount > 0) {
      totalPrice += (rentalDetail.pricePerNight * 0.5) * childrenCount;
      paymentData.push({
        name: `${rentalDetail.title} (${booking.type} - Children)`,
        priceInCents: (rentalDetail.pricePerNight * 0.5) * 100,
        quantity: childrenCount,
      });
    }

    if (infantCount > 0) {
      totalPrice += (rentalDetail.pricePerNight * 0.1) * infantCount;
      paymentData.push({
        name: `${rentalDetail.title} (${booking.type} - Infants)`,
        priceInCents: (rentalDetail.pricePerNight * 0.1) * 100,
        quantity: infantCount,
      });
    }

    return { totalPrice, paymentData, booking };
  } else if (booking.type === 'Tours') {
    const tourDetail = await TourDetail.findById(booking.tour);

    booking.tour = tourDetail.title;

    if (adultsCount > 0) {
      totalPrice += tourDetail.price * adultsCount;
      paymentData.push({
        name: `${tourDetail.title} (${booking.type} - Adults)`,
        priceInCents: tourDetail.price * 100,
        quantity: adultsCount,
      });
    }

    if (childrenCount > 0) {
      totalPrice += (tourDetail.price * 0.5) * childrenCount;
      paymentData.push({
        name: `${tourDetail.title} (${booking.type} - Children)`,
        priceInCents: (tourDetail.price * 0.5) * 100,
        quantity: childrenCount,
      });
    }

    if (infantCount > 0) {
      totalPrice += (tourDetail.price * 0.1) * infantCount;
      paymentData.push({
        name: `${tourDetail.title} (${booking.type} - Infants)`,
        priceInCents: (tourDetail.price * 0.1) * 100,
        quantity: infantCount,
      });
    }

    return { totalPrice, paymentData, booking };
  } else if (booking.type === 'Event Tickets') {
    const eventTicketDetail = await EventTicketDetail.findById(booking.event);

    booking.event = eventTicketDetail.title;

    if (adultsCount > 0) {
      totalPrice += eventTicketDetail.price * adultsCount;
      paymentData.push({
        name: `${eventTicketDetail.title} (${booking.type} - Adults)`,
        priceInCents: eventTicketDetail.price * 100,
        quantity: adultsCount,
      });
    }

    if (childrenCount > 0) {
      totalPrice += (eventTicketDetail.price * 0.5) * childrenCount;
      paymentData.push({
        name: `${eventTicketDetail.title} (${booking.type} - Children)`,
        priceInCents: (eventTicketDetail.price * 0.5) * 100,
        quantity: childrenCount,
      });
    }

    if (infantCount > 0) {
      totalPrice += (eventTicketDetail.price * 0.1) * infantCount;
      paymentData.push({
        name: `${eventTicketDetail.title} (${booking.type} - Infants)`,
        priceInCents: (eventTicketDetail.price * 0.1) * 100,
        quantity: infantCount,
      });
    }

    return { totalPrice, paymentData, booking };
  } else if (booking.type === 'Transfers') {
    return { totalPrice: 0, paymentData, booking };
  } else {
    return { totalPrice: null, paymentData: null, booking: null };
  }
}

module.exports = paymentData;
