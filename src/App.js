import React from 'react';
import './App.css'
const data = [
  {
    "name": "Desk",
    "category": "Living Area"
  },
  {
    "name": "Dryer",
    "category": "Kitchen"
  },
  {
    "name": "Cleaning products",
    "category": "Kitchen"
  },
  {
    "name": "Dining table",
    "category": "Kitchen"
  },
  {
    "name": "Electric kettle",
    "category": "Kitchen"
  },
  {
    "name": "Refrigerator",
    "category": "Kitchen"
  },
  {
    "name": "Suit press",
    "category": "General"
  },
  {
    "name": "Ironing facilities",
    "category": "General"
  },
  {
    "name": "Air conditioning",
    "category": "General"
  },
  {
    "name": "Safe",
    "category": "General"
  },
  {
    "name": "Tea/Coffee maker",
    "category": "Food & Drink"
  },
  {
    "name": "Minibar",
    "category": "Food & Drink"
  },
  {
    "name": "Alarm clock",
    "category": "Bedroom"
  },
  {
    "name": "Wardrobe/Closet",
    "category": "Bedroom"
  },
  
  {
    "name": "Newspaper",
    "category": "General"
  },
  {
    "name": "Flat-screen TV",
    "category": "Media & Technology"
  },
  {
    "name": "Sitting area",
    "category": "Living Area"
  },
  {
    "name": "Dining area",
    "category": "Living Area"
  },
  {
    "name": "Health Faucet",
    "category": "Room Amenities"
  },
  {
    "name": "Mini Bar In Room",
    "category": "Food & Drink"
  },
  {
    "name": "Electronic Room Keys",
    "category": "General"
  },
  {
    "name": "Cable/satellite TV",
    "category": "Media & Entertainment"
  },
  {
    "name": "Hot/cold Water",
    "category": "Bathroom"
  },
  {
    "name": "Attached Bathroom",
    "category": "Bathroom"
  },
  {
    "name": "Western Toilet",
    "category": "Bathroom"
  },{
    "name": "Linens",
    "category": "Bathroom"
  },
  {
    "name": "Clothes rack",
    "category": "Bathroom"
  }, {
    "name": "Free toiletries",
    "category": "Bathroom"
  },
  {
    "name": "Bathrobe",
    "category": "Bathroom"
  },
  {
    "name": "Hairdryer",
    "category": "Bathroom"
  },
  {
    "name": "Shower",
    "category": "Bathroom"
  },
  {
    "name": "Towels",
    "category": "Bathroom"
  },
  {
    "name": "Slippers",
    "category": "Bathroom"
  }
]

function separateArrayByCategory(data) {
  const result = {};

  data.forEach((item) => {
    const { category, ...rest } = item;
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(rest);
  });
  console.log(result)
  return result;
}




// function separateArrayByCategory(data) {
  
//   return data.reduce((result, item) => {
//     const { category, ...rest } = item;
//     if (!result[category]) {
//       result[category] = [];
//     }
//     result[category].push(rest);
//     return result;
//   }, {});
// }

function App() {
  const separatedData = separateArrayByCategory(data);
  console.log(Object.entries(data));
  console.log(Object.entries(separatedData))
  console.log(separatedData)
  return (
    <div className='list'>
      {Object.entries(separatedData).map(([category, names]) => (
        <div key={category}>
          <div className='box'>
          <p>{category}</p>
          <ul>
            {names.map((item, index) => (
              <li className='listss' key={index}>{item.name}</li>
            ))}
          </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
