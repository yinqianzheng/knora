export const searchQuestion = (words) =>
  $.ajax({
    url: "/api/search",
    method: "GET",
    data: { words },
  });

export function throttle(func, limit) {
  let timeoutId;
  let startTime;
  return function () {
    const args = arguments;
    if (!startTime) {
      func.apply(this, args);
      startTime = Date.now();
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        func.apply(this, args);
        startTime = Date.now();
      }, limit - (Date.now() - startTime));
    }
  };
}
