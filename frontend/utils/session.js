export const postUser = user =>
  $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user }
  });

export const postSession = user =>
  $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user }
  });

export const deleteSession = () =>
  $.ajax({
    url: "/api/session",
    method: "DELETE"
  });

export const googleLogin = id_token =>
  $.ajax({
    url: "/api/session/google_login",
    method: "GET",
    data: { id_token }
  });
