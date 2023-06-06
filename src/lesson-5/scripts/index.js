// Task 1
// Преобразование формата даты:
//   в переменной date лежит дата в формате '2020-11-26';
//   преобразуйте эту дату в формат '26.11.2020';
//   функция должна быть универсальной, т.е. принимать любую дату и приводить ее к поставленному в задании формату.

// Solution 1
const date = '2020-11-26';
const changeDateFormat = (str) => {
  const strIntoArr = str.split('-');
  const finalArr = [];

  const regex = /^(?<year>\d{4})-(?<month>\d{1,2})-(?<day>\d{1,2})$/;

  if (!str.match(regex)) {
    console.log(
      'Incorrect format. Please provide a date string in the format "YYYY-MM-DD".',
    );
    return;
  }

  if (strIntoArr[1] > 12) {
    console.log(
      'Month should be <= 12. Please enter correct date in the format "YYYY-MM-DD',
    );
    return;
  }
  if (strIntoArr[2] > 31) {
    console.log(
      'Day should be <= 31. Please enter correct date in the format "YYYY-MM-DD',
    );
    return;
  }

  for (let i = 0; i < strIntoArr.length; i++) {
    if (strIntoArr[i].length < 2) {
      strIntoArr[i] = strIntoArr[i].padStart(2, '0');
    }
    finalArr.push(strIntoArr[i]);
  }
  const phrase = finalArr.join('-');
  return phrase.replace(regex, `$<day>.$<month>.$<year>`);
};

// Solution 2
const date2 = '2025-10-18';
const changeDateFormat2 = (str) => {
  const regex = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
  if (!str.match(regex)) {
    console.log(
      'Incorrect format. Please provide a date string in the format "YYYY-MM-DD".',
    );
    return;
  }
  function padWithZero(num) {
    return num.length < 2 ? `0${num}` : num;
  }
  function formatDate(matched, year, month, day) {
    if (month > 12) {
      console.log(
        'Month should be <= 12. Please enter correct date in the format "YYYY-MM-DD',
      );
      return;
    }
    if (day > 31) {
      console.log(
        'Day should be <= 31. Please enter correct date in the format "YYYY-MM-DD',
      );
      return;
    }
    return `${padWithZero(day)}.${padWithZero(month)}.${padWithZero(year)}`;
  }
  return str.replace(regex, formatDate);
};

console.log('-----Solution 1-------');
console.log(changeDateFormat(date));
console.log(changeDateFormat('2023-1-3'));
console.log(changeDateFormat('20266-8-122'));
console.log(changeDateFormat('2023-17-2'));
console.log(changeDateFormat('2023-12-32'));

console.log('-----Solution 2-------');
console.log(changeDateFormat2(date2));
console.log(changeDateFormat2('20266-8-122'));
console.log(changeDateFormat2('2023-7-6'));
console.log(changeDateFormat2('2023-17-2'));
console.log(changeDateFormat2('2023-12-32'));

// Task 2
// Поиск объектов размещения:
//   дан массив;
//   напишите функцию поиска, которая будет принимать строку;
//   по полученной строке найдите все совпадения в массиве;
//   верните список строк в формате: страна, город, отель.

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
const searchForKey = (val) => {
  let result = '';
  for (let i = 0; i < data.length; i++) {
    const lowerVal = val.toLowerCase();
    const country = data[i].country.toLowerCase();
    const city = data[i].city.toLowerCase();
    const hotel = data[i].hotel.toLowerCase();
    if (
      country.match(lowerVal) ||
      city.match(lowerVal) ||
      hotel.match(lowerVal)
    ) {
      result += `${data[i].country} ${data[i].city} ${data[i].hotel}; `;
    }
  }
  return result;
};

// Solution 2
const searchForKey2 = (str) => {
  const res = [];
  for (let i = 0; i < data.length; i++) {
    for (const key in data[i]) {
      if (data[i][key].toLowerCase().match(str.toLowerCase())) {
        res.push([data[i].country, data[i].city, data[i].hotel].join(', '));
      }
    }
  }
  return [...new Set(res)];
};

console.log('-------Solution 1 (String)----------');
console.log(searchForKey('Germany'));
console.log(searchForKey('Slowakia'));
console.log(searchForKey('Ourika'));
console.log(searchForKey('Hotel Leopold'));
console.log(searchForKey('Rotterdam'));
console.log(searchForKey('Bali'));
console.log(searchForKey('bali'));
console.log(searchForKey('Indonesia'));
console.log(searchForKey('Ubud Bali Resort&SPA'));
console.log(searchForKey('Germa'));
console.log(searchForKey('Indone'));

console.log('-------Solution 2 (Array)----------');
console.log(searchForKey2('Germany'));
console.log(searchForKey2('Slowakia'));
console.log(searchForKey2('Ourika'));
console.log(searchForKey2('Hotel Leopold'));
console.log(searchForKey2('Rotterdam'));
console.log(searchForKey2('Bali'));
console.log(searchForKey2('bali'));
console.log(searchForKey2('Indonesia'));
console.log(searchForKey2('Ubud Bali Resort&SPA'));
console.log(searchForKey2('Germa'));
console.log(searchForKey2('Indone'));
