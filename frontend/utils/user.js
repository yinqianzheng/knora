export const getWatchedQuestions = id =>
  $.ajax({
    url: `api/users/${id}/getWatchList`,
    method: "GET"
  });
