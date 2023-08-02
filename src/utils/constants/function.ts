import { IExercise } from "@/components/modules/record/MyExercise";

export const guidGenerator = () => {
  const S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
};

export function randomIndex(length: number) {
  return Math.floor((Math.random()*length));
}

export const generateArray = (length: number, item: IExercise) => {
  const array = [];
  for (let index = 0; index < length; index++) {
    array.push(item)
  }

  return array;
}
