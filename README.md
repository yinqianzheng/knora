# Overview
[Knora](https://knora.herokuapp.com) is a clone of Quora. Knora was built with Ruby on Rails backend and React with Redux on the frontend.

Live demo: https://knora.herokuapp.com
![](login.jpeg)
## 
![](content.jpeg)

# Technology Used

### Backend
- Rails
- jBuilder
- PostgreSQL

### Frontend
- React
- Redux
- React router
- Quill

# Features

- user can create a new accout or login with google account
- User can post and answer questions
- User can edit/delete one's own questions/answers
- User can specify topics when posting question
- User can search questions and search results are listed in most relevant order.
  
  Knora supports real-time searching for questions. As user entering their search keywords, Knora will query the database for   the most word-matching titles. To avoid unnecessary queries and reduce server workload, I implemented a throttling function     to enforces a maximum number of search requests can be made over a predetermined amount of time.
```javascript
  function throttle(func, limit){
    let timeoutId;
    let startTime;
    return function() {
      const args = arguments;
      if (!startTime) {
        func.apply(this, args);
        startTime = Date.now();
      } else {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(function() {
          func.apply(this, args)
          startTime = Date.now()
        }, limit - (Date.now() - startTime))
      }
    }
  }
```
  
- User can follow a question
- User can vote to a answer
- Show related questions when viewing a question

  To determine the most related questions, I query the database with a case statement to count the number of matching words     between each question and search keywords or current question. Then I ordered them by counts and select the first 10.

```ruby
  class Question < ApplicationRecord
    # ...
    def related_questions()
        words = self.title.split("'").join(" ").downcase
        caseQuery = words.split(" ").map{|w| "(case when LOWER(title) like '%#{w}%' then 1 else 0 end)"}.join("+")
        results = ActiveRecord::Base.connection.exec_query(
          "select id, title 
           from (select id, title, (" + caseQuery + ") as count 
           from questions 
           where id != #{self.id} 
           order by count desc) as t where t.count > 0 limit 10"
        )
        return results
    end
  end
```
- Automatically load more questions when hitting bottom
  
  In order to keep visitors to stay on Knora longer, I added the infinite scroll to automatically load more question when user arrives the bottom of the page. This is done by calculating the user's view position of the page, and fetching for more questions when the view position is at the bottom of the page.
```javascript
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    // do something
  }
```

# Libraries

### react-quill
- Knora utilized Quill.Js to enrich text editing experience. When user tries to create/edit an answer, they can add images, change font weight/size, format text(bullet point, identation) and more. 

![](quillEdit.png)


### Google API OAuth2

- Knora allows user to login with their google account, making the login workflow much easier. On client-side, I retrieve user ID token from Google API console. On server-side, I utilized GoogleIDToken to verify login authenticity using id token. After validation succeeded, a new account will be created for first time user.

client
```javascript 
// frontend/components/session/google_signin.jsx
export default class GoogleSignIn extends React.Component {
  // ...
  componentDidMount() {
      // Keep checking until Google API is loaded successfully. Then render login button.
      const intervalId = setInterval(() => {
        if (gapi) {
          this.renderGoogleLoginButton();
          clearInterval(intervalId);
        }
      }, 100);
  }
  
  onSuccess(googleUser) {
    // Send id_token retrieved from Google login to server
    this.props.loginWithGoogle(googleUser.getAuthResponse().id_token);
  }
  
  renderButton() {
    gapi.signin2.render(GOOGLE_BUTTON_ID, {
      // ...
      onsuccess: this.onSuccess,
    });
  }
}
```

server
```ruby
  # app/controllers/api/sessions_controller.rb
  def handle_google_login
    validator = GoogleIDToken::Validator.new
    begin
      # ...
      # Validate user credential using GoogleIDToken
      payload = validator.check(params[:id_token], JWT.decode(params[:id_token], nil, false)[0]["aud"], client_id)
      email = payload['email']
      @user = User.find_by(email:email)
      # Verified current user credential, log user in.
      # ...
    rescue GoogleIDToken::ValidationError => e
      report "Cannot validate: #{e}"
    end
  end
```
