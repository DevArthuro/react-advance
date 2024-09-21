export const canConfigure = (from: string, to: string) => {
  if (typeof from !== "string") throw Error("from parameter is not provided");
  if (typeof to !== "string") throw new Error("to parameter is not provided");

  const isSameLength = from.length === to.length;
  if (!isSameLength) return false;

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size;
  if (!hasSameUniqueLetters) return false;

  const transformation: { [value: string]: string } = {};
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    const storedLetter = transformation[fromLetter];

    if (storedLetter ?? storedLetter !== toLetter) return false;

    transformation[fromLetter] = toLetter;
  }

  return true;
};
