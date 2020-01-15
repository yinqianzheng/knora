export const getWatchedQuestions = id =>
  $.ajax({
    url: `api/users/${id}/getWatchList`,
    method: "GET"
  });

export const getVoteList = id =>
  $.ajax({
    url: `api/users/${id}/getVoteList`,
    method: "GET"
  });
