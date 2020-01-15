export const postAnswer = answer =>
  $.ajax({
    url: `/api/questions/${answer.question_id}/answers`,
    method: "POST",
    data: { answer }
  });

export const destroyAnswer = answerId =>
  $.ajax({
    url: `/api/answers/${answerId}`,
    method: "DELETE"
  });

export const updateAnswer = answer =>
  $.ajax({
    url: `/api/answers/${answer.id}`,
    method: "PATCH",
    data: { answer }
  });

export const upvote = vote =>
  $.ajax({
    url: `/api/answers/${vote.answerId}/votes`,
    method: "POST",
    data: { vote }
  });

export const downvote = vote =>
  $.ajax({
    url: `/api/answers/${vote.answerId}/votes/${vote.userId}`,
    method: "DELETE",
    data: { vote }
  });
