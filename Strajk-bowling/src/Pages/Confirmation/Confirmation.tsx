import { BookingResponse } from '../../Interfaces/interface';

interface ConfirmationProps {
  data: BookingResponse;
}

const Confirmation = ({ data }: ConfirmationProps) => {
  const { when, lanes, people, shoes, price, id, active } = data;

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
            className="w-96 bg-pink focus:outline-none"
            readOnly
          />
        </fieldset>

      <fieldset className="border border-menuBlack p-2.5 rounded-md mt-2">
          <legend className="p-1.5 text-xs">WHO</legend>
          <input
            type="text"
            id="who"
            name="who"
            value={people}
            className="w-96 bg-pink focus:outline-none"
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
            className="w-96 bg-pink focus:outline-none"
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
            className="w-96 bg-pink focus:outline-none"
            placeholder="STR812744"
            readOnly
          />
        </fieldset>

        <fieldset className="border-2 border-textpink p-2.5 rounded-md mt-20">
          <input
            type="text"
            id="time"
            name="time"
            value={`${price} SEK`}
            className="w-96 bg-pink focus:outline-none"
            placeholder="total"
          />
        </fieldset>

      <fieldset>
        <legend>Status</legend>
        <input type="text" value={active ? 'Active' : 'Inactive'} readOnly />
      </fieldset>

      <button className="bg-textpink text-white p-2.5 rounded-md mt-4 w-full">SWEET, LET'S GO!</button>

    </div>
  );
};


export default Confirmation;


