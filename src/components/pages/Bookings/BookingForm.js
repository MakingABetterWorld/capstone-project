import { useState } from 'react';
import FormField from './FormField';

const BookingForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData
}) => {
  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ['Birthday', 'Anniversary'];
  const invalidDateErrorMessage = 'Please choose a valid date';
  const invalidTimeErrorMessage = 'Please choose a valid time';
  const invalidOccasionErrorMessage = 'Please choose a valid occasion';
  const invalidNumberOfGuestsErrorMessage = 
    'Please enter a number between 1 and 10';
  const [firstname,setFirstname]=useState("");
  const [lastname,setLastname]=useState("");
  const [mailadd,setMailadd]=useState("");
  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [
    numberOfGuests, 
    setNumberGuests
  ] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(occasions[0]);


  const isDateValid = () => date !== '';
  const isTimeValid = () => time !== '';
  const isNumberOfGuestsValid = () => numberOfGuests !== '';
  const isOccasionValid = () => occasion !== '';

  const areAllFieldsValid = () => 
    isDateValid() 
    && isTimeValid() 
    && isNumberOfGuestsValid() 
    && isOccasionValid();
  
  const handleDateChange = e => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = e => setTime(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();
    submitData({ firstname,lastname,mailadd,date, time, numberOfGuests, occasion, });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormField 
        label="First Name" 
        htmlFor="place-for-first-name" 
      >
        <input 
          type="text" 
          id="place-for-first-name" 
          name="place-for-first-name" 
          value={firstname} 
          
          onChange={e => setFirstname(e.target.value)}
        />
      </FormField>
      <FormField
        label="Last Name" 
        htmlFor="place-for-last-name" 
      >
        <input 
          type="text" 
          id="place-for-last-name" 
          name="place-for-last-name" 
          value={lastname} 
          
          onChange={e=>setLastname(e.target.value)}/>
      </FormField>
      <FormField
        label="Email Address" 
        htmlFor="place-for-email" 
      >
        <input 
          type="email" 
          id="place-for-email" 
          name="place-for-email" 
          value={mailadd} 
          
          onChange={e=>setMailadd(e.target.value)}/>
      </FormField>
      <FormField
        label="Date" 
        htmlFor="booking-date" 
        hasError={!isDateValid()} 
        errorMessage={invalidDateErrorMessage}
      >
        <input 
          type="date" 
          id="booking-date" 
          name="booking-date" 
          min={minimumDate} 
          value={date} 
          required={true} 
          onChange={handleDateChange}
        />
      </FormField>
      <FormField 
        label="Time" 
        htmlFor="booking-time" 
        hasError={!isTimeValid()} 
        errorMessage={invalidTimeErrorMessage}
      >
        <select 
          id="booking-time" 
          name="booking-time" 
          value={time} 
          required={true} 
          onChange={handleTimeChange}
        >
          {availableTimes.map(times => 
            <option data-testid="booking-time-option" key={times}>
              {times}
            </option>
          )}
        </select>
      </FormField>
      <FormField 
        label="Number of guests" 
        htmlFor="booking-number-guests" 
        hasError={!isNumberOfGuestsValid()} 
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input 
          type="number" 
          id="booking-number-guests" 
          name="booking-number-guests" 
          value={numberOfGuests} 
          min={minimumNumberOfGuests} 
          max={maximumNumberOfGuests} 
          required={true} 
          onChange={e => setNumberGuests(e.target.value)}
        />
      </FormField>
      <FormField 
        label="Occasion" 
        htmlFor="booking-occasion" 
        hasError={!isOccasionValid()} 
        errorMessage={invalidOccasionErrorMessage}
      >
        <select 
          id="booking-occasion" 
          name="booking-occasion" 
          value={occasion} 
          required={true} 
          onChange={e => setOccasion(e.target.value)}
        >
          {occasions.map(occasion => 
            <option data-testid="booking-occasion-option" key={occasion}>
              {occasion}
            </option>
          )}
        </select>
      </FormField>
      <button 
        className="button-primary" 
        type="submit" 
        disabled={!areAllFieldsValid()}
      >
        Book Your Table
      </button>
    </form>
  );
};

export default BookingForm;
