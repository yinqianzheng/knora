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
