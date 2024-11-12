import { useLocation } from 'react-router-dom';
import { BookingResponse } from '../../Interfaces/interface';

const Confirmation = () => {
  const location = useLocation();
  const bookingData = location.state as BookingResponse;

  const defaultBooking: BookingResponse = {
    when: "No booking date set 📅",
    lanes: 0,
    people: 0,
    price: 0,
    id: "No booking ID",
    shoes: [], 
    active: false,
  };
  
  const {
    when = defaultBooking.when,
    lanes = bookingData?.lanes ? `${bookingData.lanes} lane(s)` : "No lanes booked 🎳",
    people = bookingData?.people ? `${bookingData.people} person(s)` : "No bowlers booked 🎳",
    price = bookingData?.price ? `${bookingData.price} sek` : "-",
    id = bookingData?.id || defaultBooking.id,
  } = bookingData || defaultBooking;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-pink">
      <h1 className="font-title text-6xl text-textpink">SEE YOU SOON</h1>
      <h2 className="text_line">BOOKING DETAILS</h2>

      <fieldset className="border border-menuBlack p-2.5 rounded-md mt-2">
        <legend className="p-1.5 text-xs">WHEN</legend>
        <input
          type="text"
          id="when"
          name="when"
          value={when}
          className="bg-pink focus:outline-none w-80"
          readOnly
        />
      </fieldset>

      <fieldset className="border border-menuBlack p-2.5 rounded-md mt-2">
        <legend className="p-1.5 text-xs">WHO</legend>
        <input
          type="text"
          id="who"
          name="who"
          value= {people}
          className="bg-pink focus:outline-none w-80"
          readOnly
        />
      </fieldset>

      <fieldset className="border border-menuBlack p-2.5 rounded-md mt-2">
        <legend className="p-1.5 text-xs">NUMBER OF LANES</legend>
        <input
          type="text"
          id="lanes"
          name="lanes"
          value={lanes}
          className="bg-pink focus:outline-none w-80"
          readOnly
        />
      </fieldset>

      <fieldset className="border border-menuBlack p-2.5 rounded-md mt-2">
        <legend className="p-1.5 text-xs">BOOKING NUMBER</legend>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          className="bg-pink focus:outline-none w-80"
          readOnly
        />
      </fieldset>

      <fieldset className="border-2 border-textpink p-2.5 rounded-md mt-20 w-80">
      <div className="flex justify-between w-full bg-pink p-2">
        <span className='text-2xl font-text font-bold text-red-500'>Total</span>
        <span className='text-2xl font-text text-red-500'>{price}</span>
      </div>
    </fieldset>


      <button 
      className="bg-textpink text-white p-2.5 rounded-md mt-4 w-80"
      onClick={() => window.location.href = "/"}
      
      >SWEET, LET'S GO!</button>
    </div>
  );
};

export default Confirmation;
