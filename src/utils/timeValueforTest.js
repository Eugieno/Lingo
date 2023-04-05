export default function timeValueforTest(difficulty) {
  const easy = ["1","2","3","4"];
  const medium = ["5","6","7","8"];
  const hard = ["9","10"];

  if (easy.includes(difficulty)) {
      return 70;
  } 
  if (medium.includes(difficulty)) {
      return 50;
  } 
  if (hard.includes(difficulty)) {
      return 30;
  }


}