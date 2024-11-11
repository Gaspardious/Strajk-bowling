import { useState } from 'react';
import { createBooking } from '../../API/api';
import { BookingRequest } from '../../Interfaces/interface';
import { ShoeSizes } from '../../Components/Shoes/Shoes';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [people, setPeople] = useState<number>(1);
  const [lanes, setLanes] = useState<number>(1);
  const [shoes, setShoes] = useState<number[]>(Array(people).fill(0));
  
  // Separate error states for each field
  const [dateError, setDateError] = useState<string | null>(null);
  const [timeError, setTimeError] = useState<string | null>(null);
  const [peopleError, setPeopleError] = useState<string | null>(null);
  const [lanesError, setLanesError] = useState<string | null>(null);
  const [shoeError, setShoeError] = useState<string | null>(null);
  
  const navigate = useNavigate();

  const handlePeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    setPeopleError(null); // Reset error on change

    if (/[^0-9]/.test(value)) {
      setPeopleError('Please enter only numbers');
    } else {
      const peopleCount: number = parseInt(value);
      setPeople(peopleCount);

      // Adjust the shoes array to match the number of people
      if (peopleCount > shoes.length) {
        setShoes([...shoes, ...Array(peopleCount - shoes.length).fill(0)]);
      } else {
        setShoes(shoes.slice(0, peopleCount));
      }
    }
  };

  const handleShoeSizeChange = (index: number, size: number) => {
    const newShoes = [...shoes];
    newShoes[index] = size;
    setShoes(newShoes);
  };

  const handleSubmit: any = async () => {
    // Reset all errors before validation
    setDateError(null);
    setTimeError(null);
    setPeopleError(null);
    setLanesError(null);
    setShoeError(null);

    let hasError: any = false;

    if (!date) {
      setDateError("Please select a DATE.");
      hasError = true;
    }
    if (!time) {
      setTimeError("Please select a TIME.");
      hasError = true;
    }
    if (!people || people < 1) {
      setPeopleError("Please enter the number of people.");
      hasError = true;
    }
    if (!lanes || lanes < 1) {
      setLanesError("Please select the number of lanes.");
      hasError = true;
    }
    if (shoes.some(size => !size)) {
      setShoeError("Please select a shoe size for each person.");
      hasError = true;
    }

    // Validate lane capacity
    if ((lanes === 1 && people > 4) || (lanes === 2 && people > 8)) {
      setLanesError("1 lane supports up to 4 people, and 2 lanes support up to 8 people. Please adjust the lanes or the number of people.");
      hasError = true;
    }

    if (hasError) return;

    // Proceed with booking if no errors
    const bookingData: BookingRequest = {
      when: `Date: ${date} / Time: ${time}`,
      lanes,
      people,
      shoes,
    };

    try {
      const response: any = await createBooking(bookingData);
      
      if ("when" in response) {
        // Navigate to Confirmation with booking data in state
        navigate("/confirmation", { state: response });
      } else {
        // If response has a message, display it as a generic error
        setLanesError(response.message);
      }
    } catch (error) {
      console.error("Booking failed:", error);
      setLanesError("Failed to create booking. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-pink">
        <h1 className="font-title text-6xl text-textpink">BOOKING</h1>

        <form className="m-3">
          <section className="flex gap-5 justify-center">
            <div className='flex justify-center flex-col items-center'>
              <fieldset className={`border ${dateError ? 'border-red-500' : 'border-menuBlack'} p-2.5 rounded-md w-48`}>
                <legend className="p-1.5 text-xs">DATE</legend>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="bg-pink focus:outline-none text-xs"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </fieldset>
              {dateError && <p className="text-xs text-white bg-red-500 p-1 text-center w-48 rounded-md mt-1">{dateError}</p>}
            </div>

            <div className='flex justify-center flex-col items-center'>
            <fieldset className={`border ${timeError ? 'border-red-500' : 'border-menuBlack'} p-2.5 rounded-md w-48`}>
              <legend className="p-1.5 text-xs">TIME</legend>
              <input
                type="time"
                id="time"
                name="time"
                className="bg-pink focus:outline-none text-xs"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
            </fieldset>
            {timeError && <p className="text-xs text-white bg-red-500 p-1 text-center w-48 rounded-md mt-1">{timeError}</p>}
            </div>
          </section>

          <div className='flex justify-center flex-col items-center'>
          <fieldset className={`border ${peopleError ? 'border-red-500' : 'border-menuBlack'} p-2.5 rounded-md mt-2 w-96`}>
            <legend className="p-1.5 text-xs">NUMBER OF AWESOME BOWLERS</legend>
            <input
              type="number"
              id="people"
              name="people"
              className="bg-pink focus:outline-none w-96"
              value={people}
              min={1}
              onChange={handlePeopleChange}
            />
          </fieldset>
          {peopleError && <p className="text-xs text-white bg-red-500 p-1 text-center w-32 rounded-md w-96 mt-1">{peopleError}</p>}
          </div>

          <div className='flex justify-center flex-col items-center'>
          <fieldset className={`border ${lanesError ? 'border-red-500' : 'border-menuBlack'} p-2.5 rounded-md mt-2 w-96`}>
            <legend className="p-1.5 text-xs">NUMBER OF LANES</legend>
            <input
              type="number"
              id="lanes"
              name="lanes"
              className="bg-pink focus:outline-none w-96"
              value={lanes}
              min={1}
              onChange={(event) => setLanes(parseInt(event.target.value))}
            />
          </fieldset>
          {lanesError && <p className="text-xs text-white bg-red-500 p-1 text-center w-32 rounded-md w-96 mt-1">{lanesError}</p>}
          </div>

          <div className="flex items-center justify-center">
            <h2 className="text_line">SHOES</h2>
          </div>

          <div className='flex justify-center flex-col items-center'>
          {shoes.map((shoeSize, index) => (
            <fieldset
              key={index}
              className={`border ${shoeError ? 'border-red-500' : 'border-menuBlack'} p-2.5 rounded-md mt-2 w-96`}
            >
              <legend className="p-1.5 text-xs">SHOE SIZE / PERSON {index + 1}</legend>
              <select
                id={`shoeSize-${index}`}
                name={`shoeSize-${index}`}
                className="bg-pink focus:outline-none w-96"
                value={shoeSize}
                onChange={(event) =>
                  handleShoeSizeChange(index, parseInt(event.target.value))
                }
              >
                {Object.values(ShoeSizes).map((size, sizeIndex) => (
                  <option key={sizeIndex} value={sizeIndex}>
                    {size}
                  </option>
                ))}
              </select>
            </fieldset>
          ))}
          {shoeError && <p className="text-xs text-white bg-red-500 p-1 text-center w-32 rounded-md w-96 mt-1">{shoeError}</p>}

          <button
            type="button"
            className="bg-textpink text-2xl text-white p-2.5 rounded-md mt-9 w-96 items-center justify-center"
            onClick={handleSubmit}
          >
            STRIIIIIIIKE
          </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Booking;
