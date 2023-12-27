import { test } from 'sample-library';

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    console.log(test);
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
