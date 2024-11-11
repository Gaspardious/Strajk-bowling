import { BookingResponse, BookingRequest } from "../Interfaces/interface";

export const createBooking = async (reqbody: BookingRequest): Promise<BookingResponse | { message: string }> => {
  try {
    const response = await fetch("https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com", {
      method: "POST",
      headers: {
        "x-api-key": "738c6b9d-24cf-47c3-b688-f4f4c5747662",
      },
      body: JSON.stringify(reqbody),
    });

    if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
    
    return await response.json();
  } catch {
    return { message: "Booking failed. Please try again later." };
  }
};