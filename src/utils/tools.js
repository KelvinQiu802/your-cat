import data from '../data.json';

export const calcResult = (answer) => {
  let result = data;
  for (let i = 0; i < 7; i++) {
    const temp = result.filter((cat) => {
      switch (i) {
        // Q1
        case 0:
          const { min, max } = getWeight(cat.weight.metric);
          switch (answer[0]) {
            case 'A':
              return min <= 2 && max >= 2;
            case 'B':
              return min <= 5 && max >= 5;
            case 'C':
              return min <= 7 && max >= 7;
            case 'D':
              return true;
          }
        // Q2
        case 1:
          const level = cat.energy_level;
          switch (answer[1]) {
            case 'A':
              return level < 3;
            case 'B':
              return level == 3;
            case 'C':
              return level > 3;
            case 'D':
              return true;
          }
        // Q3
        case 2:
          const inte = cat.intelligence;
          switch (answer[2]) {
            case 'A':
              return inte < 4;
            case 'B':
              return inte == 4;
            case 'C':
              return inte > 4;
            case 'D':
              return true;
          }
        // Q4
        case 3:
          const child = cat.child_friendly;
          switch (answer[3]) {
            case 'A':
              return child < 3;
            case 'B':
              return child == 3;
            case 'C':
              return child > 3;
            case 'D':
              return true;
          }
        // Q5
        case 4:
          const dog = cat.dog_friendly;
          switch (answer[4]) {
            case 'A':
              return dog < 3;
            case 'B':
              return dog == 3;
            case 'C':
              return dog > 3;
            case 'D':
              return true;
          }
        // Q6
        case 5:
          const vol = cat.vocalisation;
          switch (answer[5]) {
            case 'A':
              return vol < 3;
            case 'B':
              return vol == 3;
            case 'C':
              return vol > 3;
            case 'D':
              return true;
          }
        // Q7
        case 6:
          const fur = cat.grooming;
          switch (answer[6]) {
            case 'A':
              return fur < 3;
            case 'B':
              return fur == 3;
            case 'C':
              return fur > 3;
            case 'D':
              return true;
          }
      }
    });

    if (temp.length) {
      result = temp;
    }
  }

  return result;
};

const getWeight = (weightStr) => {
  const weightArr = weightStr.split(' - ');
  return {
    min: +weightArr[0],
    max: +weightArr[1],
  };
};
