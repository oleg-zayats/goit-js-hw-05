const clients = [
	{    name: "Moore Hensley",    gender: "male",    balance: 2811
  },
  {    name: "Sharlene Bush",    gender: "female",    balance: 3821
  },
  {    name: "Ross Vazquez",    gender: "male",    balance: 3793
  },
  {    name: "Elma Head",    gender: "female",    balance: 2278
  },
  {    name: "Carey Barr",    gender: "male",    balance: 3951
  },
  {    name: "Blackburn Dotson",    gender: "male",    balance: 1498
  },
  {    name: "Sheree Anthony",    gender: "female",    balance: 2764
  }
];

/**
 * Повертає загальний баланс користувачів вказаної статі, використовуючи ланцюжок методів.
 * @param {object[]} users - Масив об'єктів користувачів.
 * @param {string} gender - Стать для фільтрації.
 * @returns {number} Загальний баланс.
 */
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender) 
    .reduce((totalBalance, user) => totalBalance + user.balance, 0); 
};

console.log(getTotalBalanceByGender(clients, "male")); 

console.log(getTotalBalanceByGender(clients, "female")); 