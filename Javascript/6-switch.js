'use strict';

const getDay = (n) => {
  switch (n) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return ('Invalid number!');
  }
};

console.log(getDay(2));


const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday', 'Sunday'
];

const getDayWithoutSwitch1 = (n) => (
  (n >= 1) && (n <= 7) ? days[n - 1] : 'Invalid number!'
);

console.log(getDayWithoutSwitch1(2));
