import { React, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import bookingService from '../services/booking-service';
import variantService from '../services/variant-service';
import toast from 'react-hot-toast';
import packageService from '../services/package-service';
import accomodationService from '../services/accomodation-service';
import eventService from '../services/event-service';
import rentalService from '../services/rental-service';
import tourService from '../services/tour-service';
import ticketService from '../services/ticket-service';

const BookingForms = ({ setTab, tabs }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const { register, control, handleSubmit } = useForm({ mode: 'all' });
  const [packages, setPackages] = useState([]);
  const [packageOptions, setPackageOptions] = useState([]);
  const [accommodationOptions, setAccommodationOptions] = useState([]);
  const [eventPlanningOptions, setEventPlanningOptions] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [rentalOptions, setRentalOptions] = useState([]);
  const [tours, setTours] = useState([]);
  const [tourOptions, setTourOptions] = useState([]);
  const [eventTickets, setEventTickets] = useState([]);
  const [eventTicketOptions, setEventTicketOptions] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookingId = urlParams.get('bookingId');
    const statusValue = urlParams.get('status');
    if (statusValue && statusValue === 'success') {
      bookingService.updateBooking(bookingId);
      toast.success('Payment Successful! Your booking has been received.');
    } else if (statusValue && statusValue === 'error') {
      bookingService.deleteBooking(bookingId);
      toast.error('Something went wrong. Please try again!');
    }
  }, []);

  useEffect(() => {
    packageService.getPackages().then((response) => {
      setPackages(response);
    });
    variantService.getPackageVariant().then((response) => {
      setPackageOptions(response);
    });
    accomodationService.getAccomodationDetails().then((response) => {
      setAccommodationOptions(response);
    });
    eventService.getEventPlanningDetail().then((response) => {
      setEventPlanningOptions(response);
    });
    rentalService.getRentals().then((response) => {
      setRentals(response);
    });
    rentalService.getrentalDetail().then((response) => {
      setRentalOptions(response);
    });
    tourService.getTours().then((response) => {
      setTours(response);
    });
    tourService.getTourDetails().then((response) => {
      setTourOptions(response);
    });
    ticketService.getEventTickets().then((response) => {
      setEventTickets(response);
    });
    ticketService.getEventTicketDetail().then((response) => {
      setEventTicketOptions(response);
    });
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  let type = 'Packages';

  switch (tabs) {
    case 1:
      type = 'Packages';
      break;
    case 2:
      type = 'Accommodation';
      break;
    case 3:
      type = 'Event Planning';
      break;
    case 4:
      type = 'Rentals';
      break;
    case 5:
      type = 'Tours';
      break;
    case 6:
      type = 'Event Tickets';
      break;
    case 7:
      type = 'Transfers';
      break;
    default:
      type = 'Packages';
  }

  useEffect(() => {
    setTab(activeIndex);
  }, [activeIndex, setTab]);

  const onFormSubmit = (data) => {
    const payload = {
      ...data,
      type: type,
    };

    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([key, value]) => value !== '')
    );

    bookingService.bookingPayment(filteredPayload).then((response) => {
      if (response.status === 201) {
        toast.success(response.data.message);
      }
      else if (response.status === 200) {
        // window.open(response.data.stripeURL, '_blank');
        window.location = response.data.stripeURL;
      } else {
        toast.error(response.response.data.error);
      }
    });
  };

  const getOptionsForPackage = (packageId) => {
    return packageOptions.filter((option) => option.packageId === packageId);
  };

  const getOptionsForRental = (rentalId) => {
    return rentalOptions.filter((option) => option.rentalId === rentalId);
  };

  const getOptionsForTour = (tourId) => {
    return tourOptions.filter((option) => option.tourId === tourId);
  };

  const getOptionsForEventTicket = (eventTicketId) => {
    return eventTicketOptions.filter(
      (option) => option.eventTicketId === eventTicketId
    );
  };

  return (
    <div className='bookingforms-main'>
      <div className='bf-tabs'>
        <div className='bf-tab'>
          <span
            className={`${activeIndex === 1 ? 'active' : 'inactive'}`}
            onClick={() => handleClick(1)}
          >
            Packages
          </span>
        </div>
        <div className='bf-tab'>
          <span
            className={`${activeIndex === 2 ? 'active' : 'inactive'}`}
            onClick={() => handleClick(2)}
          >
            Accommodation
          </span>
        </div>
        <div className='bf-tab'>
          <span
            className={`${activeIndex === 3 ? 'active' : 'inactive'}`}
            onClick={() => handleClick(3)}
          >
            Event Planning
          </span>
        </div>
        <div className='bf-tab'>
          <span
            className={`${activeIndex === 4 ? 'active' : 'inactive'}`}
            onClick={() => handleClick(4)}
          >
            Rentals
          </span>
        </div>
        <div className='bf-tab'>
          <span
            className={`${activeIndex === 5 ? 'active' : 'inactive'}`}
            onClick={() => handleClick(5)}
          >
            Tours
          </span>
        </div>
        <div className='bf-tab'>
          <span
            className={`${activeIndex === 6 ? 'active' : 'inactive'}`}
            onClick={() => handleClick(6)}
          >
            Event Tickets
          </span>
        </div>
        <div className='bf-tab'>
          <span
            className={`${activeIndex === 7 ? 'active' : 'inactive'}`}
            onClick={() => handleClick(7)}
          >
            Transfers ✈️|🚍
          </span>
        </div>
      </div>

      {activeIndex === 1 && (
        <div className='bf-card'>
          <div className='bf-header'>
            <p>All-Inclusive Vacation Packages</p>
            <span>
              Choose from the 9 perfect destination packages to travel around
              Ecuador and get the most out of your time and money.
            </span>
          </div>
          <form onSubmit={handleSubmit(onFormSubmit)} className='bf-form'>
            <div className='bf-row-single'>
              <input
                type='text'
                id='name'
                placeholder='Enter your Name'
                required
                {...register('name')}
              />
            </div>
            <div className='bf-row-single'>
              <input
                type='text'
                id='nationality'
                placeholder='Nationality'
                required
                {...register('nationality')}
              />
            </div>
            <div className='bf-row'>
              <select id='idType' required {...register('idType')}>
                <option value='' disabled selected>
                  Type of ID
                </option>
                <option value='Passport'>Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value='Other Government Issued ID'>
                  Other Government Issued ID
                </option>
              </select>
              <input
                type='text'
                name='idNumber'
                id='idNumber'
                placeholder='Enter your ID number'
                required
                {...register('idNumber')}
              />
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Enter your Email'
                required
                {...register('email')}
              />
              <input
                type='text'
                id='phone'
                placeholder='Enter your phone'
                required
                {...register('phone')}
              />
            </div>
            <div className='bf-row-single'>
              <select id='package' required {...register('package')}>
                <option value='' disabled selected>
                  Select your package
                </option>
                {packages.map((packageItem) => (
                  <optgroup key={packageItem._id} label={packageItem.title}>
                    {getOptionsForPackage(packageItem._id).map((option) => (
                      <option key={option._id} value={option._id}>
                        {option.title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <div className='in-out-header'>
              <p>Adults (Ages 13+)</p>
              <p>Children (Ages 4-12)</p>
              <p>Infants or Toddlers (Ages 0-3)</p>
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='adultsCount'
                name='adultsCount'
                placeholder='0-200'
                required
                {...register('adultsCount')}
              />
              <input
                type='text'
                id='childrenCount'
                name='childrenCount'
                placeholder='0-200'
                required
                {...register('childrenCount')}
              />
              <input
                type='text'
                id='infantCount'
                name='infantCount'
                placeholder='0-200'
                required
                {...register('infantCount')}
              />
            </div>
            <div className='in-out-header'>
              <p>- Check In -</p>
              <p>- Check Out -</p>
            </div>
            <div className='bf-row-date'>
              <input
                type='date'
                id='checkIn'
                required
                {...register('checkIn')}
              />
              <input
                type='date'
                id='checkOut'
                placeholder='Enter your Email'
                required
                {...register('checkOut')}
              />
            </div>
            <div className='bf-row'>
              <button type='submit'>Buy Now</button>
            </div>
          </form>
        </div>
      )}

      {activeIndex === 2 && (
        <div className='bf-card'>
          <div className='bf-header'>
            <p>Accomodation Facilities</p>
            <span>
              Top 4-star infraestructure around Ecuador, from modern resorts,
              small cruise-ships, to fully restored old hacienda houses on the
              andean highlands or choose from our stock of vacation-perfect
              certified properties up for rent all around continental Ecuador
              and the Galapagos.
            </span>
          </div>
          <form onSubmit={handleSubmit(onFormSubmit)} className='bf-form'>
            <div className='bf-row-single'>
              <input
                type='text'
                id='name'
                placeholder='Enter your First Name'
                required
                {...register('name')}
              />
            </div>
            <div className='bf-row-single'>
              <input
                type='text'
                id='nationality'
                placeholder='Nationality'
                required
                {...register('nationality')}
              />
            </div>
            <div className='bf-row'>
              <select id='idType' required {...register('idType')}>
                <option value='' disabled selected>
                  Type of ID
                </option>
                <option value='Passport'>Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value='Other Government Issued ID'>
                  Other Government Issued ID
                </option>
              </select>
              <input
                type='text'
                name='idNumber'
                id='idNumber'
                placeholder='Enter your ID number'
                required
                {...register('idNumber')}
              />
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='phone'
                placeholder='Enter your phone'
                required
                {...register('phone')}
              />
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Enter your email'
                required
                {...register('email')}
              />
            </div>
            <div className='bf-row-single'>
              <select
                id='facilitiesList'
                required
                {...register('facilitiesList')}
              >
                <option value='' disabled selected>
                  Facilities List
                </option>
                {accommodationOptions.map((accommodationOption) => (
                  <optgroup
                    key={accommodationOption._id}
                    label={accommodationOption.title}
                  >
                    {accommodationOption.appartments.map((appartment) => (
                      <option
                        key={`${accommodationOption._id} | ${appartment.title}`}
                        value={`${accommodationOption._id} | ${appartment.title}`}
                      >
                        {appartment.title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <div className='in-out-header'>
              <p>Number of Rooms:</p>
              <p>People per Room:</p>
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='roomsCount'
                name='roomsCount'
                placeholder='1-50'
                required
                {...register('roomsCount')}
              />
              <input
                type='text'
                id='roomOccupants'
                name='roomOccupants'
                placeholder='1-50'
                required
                {...register('roomOccupants')}
              />
            </div>
            <div className='in-out-header'>
              <p>Adults (Ages 13+)</p>
              <p>Children (Ages 4-12)</p>
              <p>Infants or Toddlers (Ages 0-3)</p>
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='adultsCount'
                name='adultsCount'
                placeholder='0-200'
                required
                {...register('adultsCount')}
              />
              <input
                type='text'
                id='childrenCount'
                name='childrenCount'
                placeholder='0-200'
                required
                {...register('childrenCount')}
              />
              <input
                type='text'
                id='infantCount'
                name='infantCount'
                placeholder='0-200'
                required
                {...register('infantCount')}
              />
            </div>
            <div className='in-out-header'>
              <p>- Check In -</p>
              <p>- Check Out -</p>
            </div>
            <div className='bf-row'>
              <input
                type='date'
                id='checkIn'
                required
                {...register('checkIn')}
              />
              <input
                type='date'
                id='checkOut'
                required
                {...register('checkOut')}
              />
            </div>
            <div className='bf-row'>
              <button type='submit'>Buy Now</button>
            </div>
          </form>
        </div>
      )}

      {activeIndex === 3 && (
        <div className='bf-card'>
          <div className='bf-header'>
            <p>Event Planning</p>
            <span>
              Our all-inclusive vacation packages are perfect for you, but tell
              us more about your ideal vacation experience and let us customize
              you the perfect vacation package.
            </span>
          </div>
          <form onSubmit={handleSubmit(onFormSubmit)} className='bf-form'>
            <div className='bf-row-single'>
              <input
                type='text'
                id='name'
                placeholder='Enter your First Name'
                required
                {...register('name')}
              />
            </div>
            <div className='bf-row-single'>
              <input
                type='text'
                id='nationality'
                placeholder='Nationality'
                required
                {...register('nationality')}
              />
            </div>
            <div className='bf-row'>
              <select id='idType' required {...register('idType')}>
                <option value='' disabled selected>
                  Type of ID
                </option>
                <option value='Passport'>Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value='Other Government Issued ID'>
                  Other Government Issued ID
                </option>
              </select>
              <input
                type='text'
                name='idNumber'
                id='idNumber'
                placeholder='Enter your ID number'
                required
                {...register('idNumber')}
              />
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='phone'
                placeholder='Enter your phone'
                required
                {...register('phone')}
              />
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Enter your email'
                required
                {...register('email')}
              />
            </div>
            <div className='bf-row-single'>
              <select
                id='event'
                required
                name='eventType'
                {...register('eventType')}
              >
                <option value='' disabled selected>
                  Event Type
                </option>
                {eventPlanningOptions.map((eventPlanningOption) => (
                  <optgroup
                    key={eventPlanningOption._id}
                    label={eventPlanningOption.title}
                  >
                    {eventPlanningOption.pricePerPerson.map((option) => (
                      <option
                        key={`${eventPlanningOption._id} | ${option.title}`}
                        value={`${eventPlanningOption._id} | ${option.title}`}
                      >
                        {option.title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            {activeIndex === 3 && (
              <div
                style={{
                  display: 'flex',
                  paddingBottom: '10px',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <label
                  style={{
                    fontSize: '14.5px',
                    fontFamily: 'poppins',
                    color: '#333',
                  }}
                  htmlFor='event-description'
                >
                  Briefly describe the event you want us to customize:
                </label>
                <textarea
                  rows={10}
                  style={{
                    width: '100%',
                    height: 'auto',
                    border: '1px solid #efefef',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    paddingTop: '5px',
                    fontSize: '16px',
                  }}
                  required
                  id='event-description'
                  name='event-description'
                  {...register('eventDescription')}
                />
              </div>
            )}
            <div className='in-out-header'>
              <p>Adults (Ages 13+)</p>
              <p>Children (Ages 4-12)</p>
              <p>Infants or Toddlers (Ages 0-3)</p>
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='adultsCount'
                name='adultsCount'
                placeholder='0-200'
                required
                {...register('adultsCount')}
              />
              <input
                type='text'
                id='childrenCount'
                name='childrenCount'
                placeholder='0-200'
                required
                {...register('childrenCount')}
              />
              <input
                type='text'
                id='infantCount'
                name='infantCount'
                placeholder='0-200'
                required
                {...register('infantCount')}
              />
            </div>
            <div className='bf-row'>
              <label
                style={{
                  fontSize: '14.5px',
                  fontFamily: 'poppins',
                  color: '#333',
                }}
              >
                Will you require Ticket Sale Management?
              </label>
              <Controller
                name={'requireTicketSalesManagement'}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <label htmlFor='yes' className='checkbox-label'>
                      <input
                        type='checkbox'
                        id='yes'
                        onChange={(e) => onChange(e.target.value)}
                        value='Yes'
                        checked={value === 'Yes'}
                      />
                      <span className='checkbox-text'>Yes</span>
                    </label>

                    <label htmlFor='no' className='checkbox-label'>
                      <input
                        type='checkbox'
                        id='no'
                        onChange={(e) => onChange(e.target.value)}
                        value='No'
                        checked={value === 'No'}
                      />
                      <span className='checkbox-text'>No</span>
                    </label>
                  </>
                )}
              />
            </div>
            <div className='in-out-header'>
              <p>- Check In -</p>
              <p>- Check Out -</p>
            </div>
            <div className='bf-row'>
              <input
                type='date'
                id='checkIn'
                required
                {...register('checkIn')}
              />
              <input
                type='date'
                id='checkOut'
                required
                {...register('checkOut')}
              />
            </div>
            <div className='bf-row'>
              <button type='submit'>Buy Now</button>
            </div>
          </form>
        </div>
      )}

      {activeIndex === 4 && (
        <div className='bf-card'>
          <div className='bf-header'>
            <p>Exclusive Vacation Rentals</p>
            <span>
              Top 4-star infraestructure around Ecuador, from modern resorts,
              small cruise-ships, to fully restored old hacienda houses on the
              andean highlands or choose from our stock of vacation-perfect
              certified properties up for rent all around continental Ecuador
              and the Galapagos.
            </span>
          </div>
          <form onSubmit={handleSubmit(onFormSubmit)} className='bf-form'>
            <div className='bf-row-single'>
              <input
                type='text'
                id='name'
                placeholder='Enter your First Name'
                required
                {...register('name')}
              />
            </div>
            <div className='bf-row-single'>
              <input
                type='text'
                id='name'
                placeholder='Nationality'
                required
                {...register('nationality')}
              />
            </div>
            <div className='bf-row'>
              <select id='idType' required {...register('idType')}>
                <option value='' disabled selected>
                  Type of ID
                </option>
                <option value='Passport'>Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value='Other Government Issued ID'>
                  Other Government Issued ID
                </option>
              </select>
              <input
                type='text'
                name='idNumber'
                id='idNumber'
                placeholder='Enter your ID number'
                required
                {...register('idNumber')}
              />
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='phone'
                placeholder='Enter your phone'
                required
                {...register('phone')}
              />
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Enter your email'
                required
                {...register('email')}
              />
            </div>
            <div className='bf-row-single'>
              <select id='rental' required {...register('rental')}>
                <option value='' disabled selected>
                  Choose your rental
                </option>
                {rentals.map((rental) => (
                  <optgroup key={rental._id} label={rental.title}>
                    {getOptionsForRental(rental._id).map((option) => (
                      <option key={option._id} value={option._id}>
                        {option.title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <div className='in-out-header'>
              <p>Adults (Ages 13+)</p>
              <p>Children (Ages 4-12)</p>
              <p>Infants or Toddlers (Ages 0-3)</p>
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='adultsCount'
                name='adultsCount'
                placeholder='0-200'
                required
                {...register('adultsCount')}
              />
              <input
                type='text'
                id='childrenCount'
                name='childrenCount'
                placeholder='0-200'
                required
                {...register('childrenCount')}
              />
              <input
                type='text'
                id='infantCount'
                name='infantCount'
                placeholder='0-200'
                required
                {...register('infantCount')}
              />
            </div>
            <div className='in-out-header'>
              <p>- Check In -</p>
              <p>- Check Out -</p>
            </div>
            <div className='bf-row'>
              <input
                type='date'
                id='checkIn'
                required
                {...register('checkIn')}
              />
              <input
                type='date'
                id='checkOut'
                required
                {...register('checkOut')}
              />
            </div>
            <div className='bf-row'>
              <button type='submit'>Buy Now</button>
            </div>
          </form>
        </div>
      )}

      {activeIndex === 5 && (
        <div className='bf-card'>
          <div className='bf-header'>
            <p>Tours and Activities</p>
            <span>
              Modern infraestructure, cultural splendor, wildlife watching,
              sublime scenery, snowed peaked volcanoes, waves splashing
              white-sand beaches and more! wrapped-up in an easy-access compact
              territory the size of Nevada!
            </span>
          </div>
          <form onSubmit={handleSubmit(onFormSubmit)} className='bf-form'>
            <div className='bf-row-single'>
              <input
                type='text'
                id='name'
                placeholder='Enter your First Name'
                required
                {...register('name')}
              />
            </div>
            <div className='bf-row-single'>
              <input
                type='text'
                id='nationality'
                placeholder='Nationality'
                required
                {...register('nationality')}
              />
            </div>
            <div className='bf-row'>
              <select id='idType' required {...register('idType')}>
                <option value='' disabled selected>
                  Type of ID
                </option>
                <option value='Passport'>Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value='Other Government Issued ID'>
                  Other Government Issued ID
                </option>
              </select>
              <input type='text' placeholder='Enter your ID number' />
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='phone'
                placeholder='Enter your phone'
                required
                {...register('phone')}
              />
              <input
                type='text'
                id='email'
                placeholder='Enter your email'
                required
                {...register('email')}
              />
            </div>
            <div className='bf-row-single'>
              <select id='tour' required {...register('tour')}>
                <option value='' disabled selected>
                  Select your tour of interest
                </option>
                {tours.map((tour) => (
                  <optgroup key={tour._id} label={tour.title}>
                    {getOptionsForTour(tour._id).map((option) => (
                      <option key={option._id} value={option._id}>
                        {option.title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div className='in-out-header'>
              <p>Adults (Ages 13+)</p>
              <p>Children (Ages 4-12)</p>
              <p>Infants or Toddlers (Ages 0-3)</p>
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='adultsCount'
                name='adultsCount'
                placeholder='0-200'
                required
                {...register('adultsCount')}
              />
              <input
                type='text'
                id='childrenCount'
                name='childrenCount'
                placeholder='0-200'
                required
                {...register('childrenCount')}
              />
              <input
                type='text'
                id='infantCount'
                name='infantCount'
                placeholder='0-200'
                required
                {...register('infantCount')}
              />
            </div>

            <div className='bf-row-single'>
              <p style={{ color: 'black' }}>- Pick-Up -</p>
            </div>

            <div className='bf-row'>
              <input
                type='text'
                name='pickUpLocation'
                id='location'
                placeholder='Pick up location'
                required
                {...register('pickUpLocation')}
              />
              <select id='carType' required {...register('carType')}>
                <option value='' disabled selected>
                  Select car type
                </option>
                <option value='Micro'>Micro</option>
                <option value='Mini'>Mini</option>
                <option value='Prime'>Prime</option>
                <option value='Prime SUV'>Prime SUV</option>
                <option value='Luxury Cars'>Luxury Cars</option>
                <option value='Mini Van'>Mini Van</option>
                <option value='Small Bus'>Small Bus</option>
                <option value='Luxury Bus'>Luxury Bus</option>
              </select>
            </div>
            <div className='bf-row'>
              <input type='date' id='date' required {...register('date')} />
              <select id='time' required {...register('time')}>
                <option value='' disabled selected>
                  Pick Up time
                </option>
                <option value='1AM'> 01:00 AM</option>
                <option value='2AM'> 02:00 AM</option>
                <option value='3AM'> 03:00 AM</option>
                <option value='4AM'> 04:00 AM</option>
                <option value='5AM'> 05:00 AM</option>
                <option value='6AM'> 06:00 AM</option>
                <option value='7AM'> 07:00 AM</option>
                <option value='8AM'> 08:00 AM</option>
                <option value='9AM'> 09:00 AM</option>
                <option value='10AM'> 10:00 AM</option>
                <option value='11AM'> 11:00 AM</option>
                <option value='12PM'> 12:00 noon</option>
                <option value='13PM'> 13:00 PM</option>
                <option value='14PM'> 14:00 PM</option>
                <option value='15PM'> 15:00 PM</option>
                <option value='16PM'> 16:00 PM</option>
                <option value='17PM'> 17:00 PM</option>
                <option value='18PM'> 18:00 PM</option>
                <option value='19PM'> 19:00 PM</option>
                <option value='20PM'> 20:00 PM</option>
                <option value='21PM'> 21:00 PM</option>
                <option value='22PM'> 22:00 PM</option>
                <option value='23PM'> 23:00 PM</option>
                <option value='24AM'> 24:00 midnight</option>
              </select>
            </div>
            <div className='bf-row'>
              <button type='submit'>Buy Now</button>
            </div>
          </form>
        </div>
      )}

      {activeIndex === 6 && (
        <div className='bf-card'>
          <div className='bf-header'>
            <p>Event Tickets</p>
            <span>
              Enjoy a lifetime of Ecuador to its fullest, search for
              location/size/price availability within our exclusive Interval®
              backed, lifetime offer: a unique destination experience, hop
              around continental Ecuador and its Galapagos Archipelago!
            </span>
          </div>
          <form onSubmit={handleSubmit(onFormSubmit)} className='bf-form'>
            <div className='bf-row-single'>
              <input
                type='text'
                id='name'
                placeholder='Enter your Name'
                required
                {...register('name')}
              />
            </div>
            <div className='bf-row-single'>
              <input
                type='text'
                id='nationality'
                placeholder='Nationality'
                required
                {...register('nationality')}
              />
            </div>
            <div className='bf-row'>
              <select id='idType' required {...register('idType')}>
                <option value='' disabled selected>
                  Type of ID
                </option>
                <option value='Passport'>Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value='Other Government Issued ID'>
                  Other Government Issued ID
                </option>
              </select>
              <input
                type='text'
                name='idNumber'
                id='idNumber'
                placeholder='Enter your ID number'
                required
                {...register('idNumber')}
              />
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='phone'
                placeholder='Enter your phone'
                required
                {...register('phone')}
              />
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Enter your email'
                required
                {...register('email')}
              />
            </div>
            <div className='bf-row-single'>
              <select id='event' required name='event' {...register('event')}>
                <option value='' disabled selected>
                  Choose your event
                </option>
                {eventTickets.map((eventTicket) => (
                  <optgroup key={eventTicket._id} label={eventTicket.title}>
                    {getOptionsForEventTicket(eventTicket._id).map((option) => (
                      <option key={option._id} value={option._id}>
                        {option.title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <div className='bf-row'>
              <select id='location' required {...register('location')}>
                <option value='' disabled selected>
                  Seat Location
                </option>
                <option value='Non Applicable'>Non Applicable</option>
                <option value='General'>General</option>
                <option value='Palco'>Palco</option>
                <option value='Tribuna'>Tribuna</option>
                <option value='Black Box'>Black Box</option>
              </select>
              <select id='ticketsCount' required {...register('ticketsCount')}>
                <option value='' disabled selected>
                  No. of Tickets
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <div className='bf-row'>
              <button type='submit'>Buy Now</button>
            </div>
          </form>
        </div>
      )}

      {activeIndex === 7 && (
        <div className='bf-card'>
          <div className='bf-header'>
            <p>Local Flights and Transfers</p>
            <span>
              Traveling around Ecuador requires planning and affordable flying
              and transfers in between destinations, book all your local needs
              of transportation with Southlander®.
            </span>
          </div>
          <form onSubmit={handleSubmit(onFormSubmit)} className='bf-form'>
            <div className='bf-row-single'>
              <input
                type='text'
                id='name'
                placeholder='Enter your First Name'
                required
                {...register('name')}
              />
            </div>
            <div className='bf-row-single'>
              <input
                type='text'
                id='nationality'
                placeholder='Nationality'
                required
                {...register('nationality')}
              />
            </div>
            <div className='bf-row'>
              <select id='idType' required {...register('idType')}>
                <option value='' disabled selected>
                  Type of ID
                </option>
                <option value='Passport'>Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value='Other Government Issued ID'>
                  Other Government Issued ID
                </option>
              </select>
              <input
                type='text'
                name='idNumber'
                id='idNumber'
                placeholder='Enter your ID number'
                required
                {...register('idNumber')}
              />
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='phone'
                placeholder='Enter your phone'
                required
                {...register('phone')}
              />
              <input
                type='text'
                id='email'
                placeholder='Enter your email'
                required
                {...register('email')}
              />
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='origin'
                placeholder='Place/City/Port of Origin'
                required
                {...register('origin')}
              />
              <input
                type='text'
                id='destination'
                placeholder='Place/City/Port of Origin'
                required
                {...register('destination')}
              />
            </div>

            <div className='transport'>
              <Controller
                name={'transportType'}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <label
                      htmlFor='transport1'
                      style={{ fontSize: '14px', color: '#333333' }}
                    >
                      <input
                        type='checkbox'
                        className='checkbox-label'
                        id='transport1'
                        onChange={(e) => onChange(e.target.value)}
                        value='Flight (If Available b/w Locations)'
                        checked={
                          value === 'Flight (If Available b/w Locations)'
                        }
                      />
                      <span className='checkbox-text'>
                        Flight (If Available b/w Locations)
                      </span>
                    </label>
                    <label
                      htmlFor='transport2'
                      className='checkbox-label'
                      style={{ fontSize: '14px', color: '#333333' }}
                    >
                      <input
                        type='checkbox'
                        id='transport2'
                        onChange={(e) => onChange(e.target.value)}
                        value='Exclusive Land Transport'
                        checked={value === 'Exclusive Land Transport'}
                      />
                      <span className='checkbox-text'>
                        Exclusive Land Transport
                      </span>
                    </label>

                    <label
                      htmlFor='transport3'
                      className='checkbox-label'
                      style={{ fontSize: '14px', color: '#333333' }}
                    >
                      <input
                        type='checkbox'
                        id='transport3'
                        onChange={(e) => onChange(e.target.value)}
                        value='Public Land Transport'
                        checked={value === 'Public Land Transport'}
                      />
                      <span className='checkbox-text'>
                        Public Land Transport
                      </span>
                    </label>
                  </>
                )}
              />
            </div>

            <div
              style={{
                display: 'flex',
                paddingBottom: '10px',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <textarea
                style={{
                  width: '100%',
                  height: 'auto',
                  border: '1px solid #efefef',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  paddingTop: '5px',
                  fontSize: '16px',
                }}
                required
                id='transportDescription'
                placeholder='Briefly describe your transport needs...'
                rows={10}
                {...register('transportDescription')}
              />
            </div>
            <div className='in-out-header'>
              <p>Adults (Ages 13+)</p>
              <p>Children (Ages 4-12)</p>
              <p>Infants or Toddlers (Ages 0-3)</p>
            </div>
            <div className='bf-row'>
              <input
                type='text'
                id='adultsCount'
                name='adultsCount'
                placeholder='0-200'
                required
                {...register('adultsCount')}
              />
              <input
                type='text'
                id='childrenCount'
                name='childrenCount'
                placeholder='0-200'
                required
                {...register('childrenCount')}
              />
              <input
                type='text'
                id='infantCount'
                name='infantCount'
                placeholder='0-200'
                required
                {...register('infantCount')}
              />
            </div>
            <div className='bf-row'>
              <input type='date' id='date' required {...register('date')} />
              <input
                type='text'
                id='time'
                placeholder='Time'
                required
                {...register('time')}
              />
            </div>
            <div className='bf-row'>
              <button type='submit'>Buy Now</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookingForms;
