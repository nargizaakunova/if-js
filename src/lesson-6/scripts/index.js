// function palindrome in one line
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
