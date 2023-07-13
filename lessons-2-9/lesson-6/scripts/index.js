// Task 1
// Function palindrome in one line
const palindrome = (word) => word === word.split('').reverse().join('');
console.log(palindrome('abba')); // true
console.log(palindrome('test')); // false

// Task 2, without for loop
const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

// Solution 1
const searchForKey = (keyword) => {
  const result = [];
  data.forEach((obj) => {
    const values = Object.values(obj);
    // console.log(values);
    if (values.join(' ').toLowerCase().match(keyword.toLowerCase())) {
      result.push(obj.country + ', ' + obj.city + ', ' + obj.hotel);
    }
  });
  return result;
};

// Solution 2
const searchForKey2 = (keyword) => {
  return data
    .filter((obj) => {
      const { country, city, hotel } = obj;
      const searchText = `${country} ${city} ${hotel}`.toLowerCase();
      if (searchText.match(keyword.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => {
      return `${obj.country}, ${obj.city}, ${obj.hotel}`;
    });
};

// Solution 3
const searchForKey3 = (keyword) => {
  return data.reduce((acc, obj) => {
    const searchText = `${obj.country} ${obj.city} ${obj.hotel}`;
    if (searchText.toLowerCase().includes(keyword.toLowerCase())) {
      // const res = [...acc, searchText];
      // return res;
      acc.push(searchText);
    }
    return acc;
  }, []);
};

// Solution 1
console.log(searchForKey('Germany'));
console.log(searchForKey('Germa'));
console.log(searchForKey('Slowakia'));
console.log(searchForKey('Ourika'));
console.log(searchForKey('Hotel Leopold'));
console.log(searchForKey('Rotterdam'));
console.log(searchForKey('Bali'));
console.log(searchForKey('bali'));
console.log(searchForKey('Indonesia'));
console.log(searchForKey('Indone'));
console.log(searchForKey('Ubud Bali Resort&SPA'));

// Solution 2
console.log(searchForKey2('Germany'));
console.log(searchForKey2('Germa'));
console.log(searchForKey2('Slowakia'));
console.log(searchForKey2('Ourika'));
console.log(searchForKey2('Hotel Leopold'));
console.log(searchForKey2('Rotterdam'));
console.log(searchForKey2('Bali'));
console.log(searchForKey2('bali'));
console.log(searchForKey2('Indonesia'));
console.log(searchForKey2('Indone'));
console.log(searchForKey2('Ubud Bali Resort&SPA'));

// Solution 3
console.log(searchForKey3('Germany'));
console.log(searchForKey3('Germa'));
console.log(searchForKey3('Slowakia'));
console.log(searchForKey3('Ourika'));
console.log(searchForKey3('Hotel Leopold'));
console.log(searchForKey3('Rotterdam'));
console.log(searchForKey3('Bali'));
console.log(searchForKey3('bali'));
console.log(searchForKey3('Indonesia'));
console.log(searchForKey3('Indone'));
console.log(searchForKey3('Ubud Bali Resort&SPA'));

// Task 3

// Сопоставьте страны с городами из массива:
//   дан массив;
//   напишите функцию, которая выберет все уникальные страны и сопоставит с ними города;
//   в консоли должен быть выведен примерно такой результат:

// {
//   Australia: ['Sydney'],
//   Germany: ['Berlin', 'Hamburg'],
//   Italy: ['Florence', 'Rome'],
//   USA: ['Chicago', 'Hawaii', 'Miami'],
//   Ukraine: ['Kyiv']
// }

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];
// Solution 1
const filterCountriesAndCities = (arr) => {
  // console.log(arr);
  return arr.reduce((acc, obj) => {
    if (!(obj.country in acc)) {
      acc[obj.country] = [];
    }
    if (!acc[obj.country].includes(obj.city)) {
      acc[obj.country].push(obj.city);
    }
    return acc;
  }, {});
};
console.log(filterCountriesAndCities(hotels));

// Solution 2
const filterCountriesAndCities2 = (arr) => {
  const result = {};
  arr.forEach((obj) => {
    // eslint-disable-next-line no-prototype-builtins
    if (!result.hasOwnProperty(obj.country)) {
      result[obj.country] = [];
    }
    if (!result[obj.country].includes(obj.city)) {
      result[obj.country].push(obj.city);
    }
  });
  return result;
};

console.log(filterCountriesAndCities2(hotels));

// Solution 3 (not optimal though)

function getUniqueCountriesCities(arr) {
  const res = {};
  const arrCountries = [];
  arr.forEach((obj) => {
    arrCountries.push(obj.country);
  });

  arrCountries
    .filter((country, i, arr) => {
      return arr.indexOf(country) === i;
    })
    .forEach((country) => {
      const cities = [];
      hotels.forEach((hotel) => {
        if (hotel.country === country) {
          if (!cities.includes(hotel.city)) {
            cities.push(hotel.city);
          }
        }
      });
      res[country] = cities;
    });

  return res;
}

console.log(getUniqueCountriesCities(hotels));

// Task 4

/* result:
[
  [27, 28, 29, 30, 1, 2, 3]
  [4, 5, 6, 7, 8, 9, 10]
  [11, 12, 13, 14, 15, 16, 17]
  [18, 19, 20, 21, 22, 23, 24]
  [25, 26, 27, 28, 29, 30, 1]
]
 */

const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 4;

// startingDate = 30 - 4 + 1
// if > 30 then start current day from 1
// how many weekRows I need is Math.ceil(daysInMonth (30) / daysInWeek (7)) = 5
// and iterations = 5 rows * 7 days = 35 cells

const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  const result = [];
  let currentWeek = [];
  let startingDay = daysInMonth - dayOfWeek + 1; // 30 - 4 + 1 = 27 (start)
  const overallQuantityOfCells =
    Math.ceil(daysInMonth / daysInWeek) * daysInWeek;

  if (dayOfWeek >= daysInWeek) {
    throw new Error('Переданный день недели больше, чем количество дней.');
  }

  for (let i = 1; i <= overallQuantityOfCells; i++) {
    currentWeek.push(startingDay);
    startingDay++;

    if (startingDay > daysInMonth) {
      startingDay = 1;
    }

    if (currentWeek.length === daysInWeek) {
      result.push(currentWeek);
      currentWeek = [];
    }
  }
  return result;
};

console.log(getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek));
