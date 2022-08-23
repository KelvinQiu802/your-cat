import { getRandInt } from '../../utils/tools';

const Result = ({ result }) => {
  const cat = result[getRandInt(0, result.length - 1)];
  console.log(cat);
  return <h1>{cat.name}</h1>;
};

export default Result;
