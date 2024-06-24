const PIA = {
  airline: "Pakistan International Airline",
  code: "PK",
  bookings: [],
  book(passenger, flightNumber) {
    this.bookings.push({
      flight: `${this.code} ${flightNumber}`,
      bookedBy: `${passenger}`,
    });
  },
};

PIA.book("Yaseen", 2342);
PIA.book("Abdullah", 9423);
PIA.book("Umer", 6373);
console.log(PIA.bookings);

const book = PIA.book;
//this derefenced from the PIA object

const Emirates = {
  airline: "Emirates Airline",
  code: "EM",
  bookings: [],
};

//call method takes first argument for this
book.call(Emirates, "Usman", "9898");
console.log(Emirates.bookings);

//bind method => it returns a function with a stoned arguments like you fixed some paramters that can be this or any other argument

const EMbook = book.bind(Emirates);
EMbook("Nazir", 8242);
console.log(Emirates.bookings);

//you can also bind object with DOM elements so *this donot adapt the environment of DOM element. It adapt the this for the objects
