/* Shuffles the items in the input array
 Source: https://javascript.info/task/shuffle */
export default arr => {
  return arr.sort(() => Math.random() - 0.5);
};
