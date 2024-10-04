
const getDateThreeDaysAgo = () => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0'); 
    
    return `${year}-${month}-${day}`;
  };
    
  export const latestTrans = [
    {
        "first_name": "Ashley",
        "last_name": "Anderson",
        "user_image": require('../assets/images/chris.png'),
        "date_of_purchase": "2024-04-12",
        "amount": 150.79,
        "made_payment": false,
        "nudged": false 
    },
    {
        "first_name": "Aaron",
        "last_name": "Gray",
        "user_image": "",
        "date_of_purchase": "2000-08-24",
        "amount": 495.32,
        "made_payment": false, 
        "nudged": false 
    },
    {
        "first_name": "Tara",
        "last_name": "Patrick",
        "user_image": "",
        "date_of_purchase": "2020-01-26",
        "amount": 236.42,
        "made_payment": true,
        "nudged": false 
    },
    {
        "first_name": "Bryan",
        "last_name": "Cooper",
        "user_image": require('../assets/images/jerry.png'),
        "date_of_purchase": getDateThreeDaysAgo(),
        "amount": 509.02,
        "made_payment": false, 
        "nudged": true 
    },
    {
        "first_name": "Steven",
        "last_name": "Woods",
        "user_image": "",
        "date_of_purchase": "1989-11-28",
        "amount": 952.43,
        "made_payment": true,
        "nudged": false 
    },
    {
        "first_name": "Kelsey",
        "last_name": "Suarez",
        "user_image": "",
        "date_of_purchase": "1982-01-07",
        "amount": 582.43,
        "made_payment": false, 
        "nudged": false 
    },
    {
        "first_name": "Nathan",
        "last_name": "Holmes",
        "user_image": "",
        "date_of_purchase": "1991-01-11",
        "amount": 784.0,
        "made_payment": true,
        "nudged": false 
    },
    {
        "first_name": "Mckenzie",
        "last_name": "Robles",
        "user_image": "",
        "date_of_purchase": "2000-06-25",
        "amount": 977.65,
        "made_payment": false, 
        "nudged": false 
    },
    {
        "first_name": "Mary",
        "last_name": "Dyer",
        "user_image": "",
        "date_of_purchase": "1975-05-24",
        "amount": 149.49,
        "made_payment": true,
        "nudged": false 
    },
    {
        "first_name": "Sandra",
        "last_name": "Griffin",
        "user_image": "",
        "date_of_purchase": "2009-08-20",
        "amount": 463.51,
        "made_payment": false, 
        "nudged": false 
    }
];

export const usertransactions = [
    {
        "user": {
          "name": "Chris Johnson",
          "avatar": require('../assets/images/lgChris.png'),
          "username": "@ChrisJ",
          "createdDate": "January 21, 2025",
          "amount": "$6.00",
          "image": "lgChris.png"
        }
    }
      
]

export const userpurchases = [
    {
        "merchant": "Best Buy",
        "date": "January 24, 2024",
        "amount": "$150.87",
        "image": require('../assets/images/bestbuy.png')
    }
]

export const userdetails = {
    "title": "January 24, 2024",
    "amount": "$6.00",
    "source": "Visa",
    "identifier": "45FKG3W",
    "to": "@ChrisJ",
    "from": "@JohnnyBoy",
    "supportText": "Mun-e support"
  }