export interface BookingRequest {
    when: string; 
    lanes: number; 
    people: number; 
    shoes: number[]; 
  }
  
  // Define the Booking Response interface
  export interface BookingResponse {
    when: string; 
    lanes: number; 
    people: number; 
    shoes: number[]; 
    price: number; 
    id: string; 
    active: boolean;
  }