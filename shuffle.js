// Secret Santa Name Shuffler
// ********INSTRUCTIONS*********

// Input the Names of all the participants in both the buyers and recievers Arrays

// Run it and let the code do what the code do :D

// need to fix one problem, possibility of last buyer equaling the last reciever


let buyers = ['Ricky', 'Bobbie', 'Shelbi', 'Savannah', 'Hailey', 'Madison', 'Candace', 'Jose', 'Haim', 'Alyssa', 'Zaiden', 'Vivian', 'Lexi', 'Damien', 'Brian', 'Nick'];
let recievers = ['Ricky', 'Bobbie', 'Shelbi', 'Savannah', 'Hailey', 'Madison', 'Candace', 'Jose', 'Haim', 'Alyssa', 'Zaiden', 'Vivian', 'Lexi', 'Damien', 'Brian', 'Nick'];

const shuffle = (buyers, recievers) => {
  for (let i = 0; i < buyers.length; i++) {

    let name1 = buyers[i];
    let logic = Math.floor(Math.random() * (0 - recievers.length) + recievers.length)
    let name2 = recievers[logic]

    while (name1 === name2) {
      logic = Math.floor(Math.random() * (0 - recievers.length) + recievers.length)
      name2 = recievers[logic]
    }

    recievers.splice(logic, 1)
    console.log(`${name1} -------> ${name2}`);
  }
}

  shuffle(buyers, recievers)
