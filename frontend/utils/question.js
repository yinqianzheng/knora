export const createQuestion = question =>
  $.ajax({
    url: "/api/questions",
    method: "POST",
    data: { question }
  });

export const fetchQuestions = () =>
  $.ajax({
    url: "/api/questions",
    method: "GET"
  });

export const fetchQuestion = id =>
  $.ajax({
    url: `/api/questions/${id}`,
    method: "GET"
  });

export const destroyQuestion = questionId =>
  $.ajax({
    url: `/api/questions/${questionId}`,
    method: "DELETE"
  });

export const updateQuestion = question =>
  $.ajax({
    url: `/api/questions/${question.id}`,
    method: "PATCH",
    data: { question }
  });

export const fetchNewQuestions = range =>
  $.ajax({
    url: "/api/most_recent_questions",
    method: "GET",
    data: { range }
  });

export const followQuestion = watcher =>
  $.ajax({
    url: `/api/questions/${watcher.question_id}/watchers`,
    method: "POST",
    data: { watcher }
  });

export const unfollowQuestion = watcher =>
  $.ajax({
    url: `/api/questions/${watcher.question_id}/watchers/${watcher.watcher_id}`,
    method: "DELETE",
    data: { watcher }
  });
