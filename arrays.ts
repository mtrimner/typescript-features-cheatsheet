const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const emptyArr: string[] = [];

const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [['mustang'], ['colorado'], ['camaro']];

// Help with inference when extracting values
const cars = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); // Prevents

// Help with 'map'

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

const importantDates = [new Date(), '2030-10-10'];
