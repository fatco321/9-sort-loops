/** Алгоритм: перестановка пар символов. Обратим — тот же набор перестановок. */
const SWAP_PAIRS = [
  [0, 3],
  [1, 2],
  [4, 7],
];

function crypto(password) {
  const arr = password.split("");
  for (const [i, j] of SWAP_PAIRS) {
    if (i < arr.length && j < arr.length) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr.join("");
}

function check(encrypted, password) {
  return crypto(encrypted) === password;
}
