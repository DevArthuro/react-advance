export const fizzbuzz = (number: number) => {
  if (typeof number !== "number") throw new Error("Number is not a number");
  if (Number.isNaN(number)) throw new Error("Not must to be NaN parameter");

  const multipes: { [num: number]: string } = {
    3: "fizz",
    5: "buzz",
    7: "worf",
  };

  const word = Object.entries(multipes).reduce(
    (prev, [numberMultiply, word]) => {
      if (number % Number(numberMultiply) === 0) return (prev += word);
      return prev;
    },
    ""
  );

  return !!word ? word : number;
};
