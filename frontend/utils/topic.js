export const fetchTopics = () =>
  $.ajax({
    url: "/api/topics",
    method: "GET"
  });
