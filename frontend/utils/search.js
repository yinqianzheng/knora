export const searchQuestion = words =>
  $.ajax({
    url: "/api/search",
    method: "GET",
    data: { words }
  });
