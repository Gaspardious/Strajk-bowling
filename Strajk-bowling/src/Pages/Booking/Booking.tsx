import { useState } from 'react';
import { createBooking } from '../../API/api';
import { BookingRequest, BookingResponse } from '../../Interfaces/interface';
import Confirmation from '../Confirmation/Confirmation';


const Booking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);
  const [lanes, setLanes] = useState(1);
  const [shoes, setShoes] = useState<number[]>([]);
  const [confirmationData, setConfirmationData] = useState<BookingResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
  
    if (/[^0-9]/.test(value)) {
      setError('Please enter only numbers');
    } else {
      setError(null);
      const peopleCount = parseInt(value);
      setPeople(peopleCount);
      setShoes(Array(peopleCount).fill(0));
    }
  };
  
  const handleShoeSizeChange = (index: number, size: number) => {
    const newShoes = [...shoes];
    newShoes[index] = size;
    setShoes(newShoes);
  } 
  
  
  const handleSubmit = async () => {
    const bookingData: BookingRequest = {
      when: `${date}T${time}`,  // Use the current date and time state values
      lanes,
      people,
      shoes,
    };
  
    try {
      const response = await createBooking(bookingData);
      if ('when' in response && 'lanes' in response && 'people' in response && 'shoes' in response) {
        setConfirmationData(response); // Set the confirmation data based on the response
      } else {
        setError('Invalid booking response');
      }
      console.log("Confirmation Data Set:", response); // Confirm the correct data is set
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };
  
  
  


  return (
    <div>
    {confirmationData ? (
      <Confirmation data={confirmationData} />
    ) : (
      <div className="flex flex-col justify-center items-center h-screen bg-pink">
        <svg width="80" height="120" viewBox="0 0 136 196" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 128.154C0 84.3365 58.5556 50.4135 45.3333 0C76.5 0 136 45.2308 136 128.154C136 146.148 128.836 163.405 116.083 176.128C103.331 188.852 86.0347 196 68 196C49.9653 196 32.6692 188.852 19.9167 176.128C7.16426 163.405 0 146.148 0 128.154Z" fill="#F2C94C"/>
        <path d="M113 109.692C113 136.605 94.5 147 76 147C57.5 147 39 136.605 39 109.692C39 82.7795 62.125 69.5865 57.5 50C81.7812 50 113 82.7795 113 109.692Z" fill="#F2994A"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M68 196C97.8234 196 122 171.823 122 142C122 112.177 97.8234 88 68 88C38.1766 88 14 112.177 14 142C14 171.823 38.1766 196 68 196ZM57 107C54.2386 107 52 105.209 52 103C52 100.791 54.2386 99 57 99C59.7614 99 62 100.791 62 103C62 105.209 59.7614 107 57 107ZM72 107C72 109.209 74.2386 111 77 111C79.7614 111 82 109.209 82 107C82 104.791 79.7614 103 77 103C74.2386 103 72 104.791 72 107ZM59 142C54.0294 142 50 138.194 50 133.5C50 128.806 54.0294 125 59 125C63.9706 125 68 128.806 68 133.5C68 138.194 63.9706 142 59 142Z" fill="#EC315A"/>
        </svg>

        <h1 className="font-title text-6xl text-textpink">BOOKING</h1>



        <h2 className="text_line">WHEN, WHAT & WHO</h2>


        <form className="m-3">
          <section className="flex gap-6 justify-center" >
            <fieldset className="border border-menuBlack p-2.5 rounded-md">
              <legend className="p-1.5 text-xs">DATE</legend>
              <input
                type="date"
                id="date"
                name="date"
                className="w-32 bg-pink focus:outline-none text-xs"
                placeholder="3 dec"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </fieldset>
            <fieldset className="border border-menuBlack p-2.5 rounded-md">
              <legend className="p-1.5 text-xs">TIME</legend>
              <input
                type="time"
                id="time"
                name="time"
                className="w-32 bg-pink focus:outline-none text-xs"
                placeholder="21:00"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
            </fieldset>
          </section>

          <fieldset className="border border-menuBlack p-2.5 rounded-md mt-2">
              <legend className="p-1.5 text-xs">NUMBER OF AWESOME BOWLERS</legend>
              <input
                type="number"
                id="time"
                name="time"
                className="w-96 bg-pink focus:outline-none"
                placeholder="3 pers"
                value={people}
                onChange={handlePeopleChange}
              />
            </fieldset>

            <fieldset className="border border-menuBlack p-2.5 rounded-md mt-2">
              <legend className="p-1.5 text-xs">NUMBER OF LANES</legend>
              <input
                type="number"
                id="time"
                name="time"
                className="w-96 bg-pink focus:outline-none"
                placeholder="1 lane"
                value={lanes}
                onChange={(event) => setLanes(parseInt(event.target.value))}
              />
            </fieldset>

            <div className="flex items-center justify-center">
              <h2 className="text_line">SHOES</h2>
            </div>

            <fieldset className="border border-menuBlack p-2.5 rounded-md mt-2">
              <legend className="p-1.5 text-xs">SHOE SIZE / PERSON 1</legend>
              <input
                type="text"
                id="time"
                name="time"
                className="w-96 bg-pink focus:outline-none"
                placeholder="Euro 44"
                value={shoes[0]}
                onChange={(event) => handleShoeSizeChange(0, parseInt(event.target.value))}
              />
            </fieldset>

            <button
            type="button" // Add type="button" to prevent form submission
            className="bg-textpink text-white p-2.5 rounded-md mt-4 w-full"
            onClick={handleSubmit}
          >
            STRIIIIIIIKE
          </button>


       </form>

    </div>

    )}
    </div>
  )
}

export default Booking