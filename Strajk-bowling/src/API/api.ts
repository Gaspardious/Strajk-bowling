import { BookingResponse, BookingRequest } from "../Interfaces/interface";

// Function to handle the booking request
export const createBooking = async (reqbody: BookingRequest): Promise<BookingResponse | { message: string, error?: string }> => {
  const { when, lanes, people, shoes } = reqbody;

  try {
    // Input validation
    if (when !== "" && lanes !== 0 && people !== 0 && shoes.length === people) {
      if (lanes / people < 0.25) {
        return { message: "Max 4 players per lane!" };
      }

      // Making the API request to the booking endpoint
      const response = await fetch("https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "738c6b9d-24cf-47c3-b688-f4f4c5747662",
        },
        body: JSON.stringify({ when, lanes, people, shoes }),
      });

      // Process the API response
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Response:", data);

      return data as BookingResponse;
    } else {
      return { message: "Invalid booking" };
    }
  } catch (error) {
    console.error("Booking error:", error);
    return { message: "Error", error: (error as Error).message };
  }
};

