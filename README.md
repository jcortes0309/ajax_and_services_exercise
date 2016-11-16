# Ajax and Services Exercises

## Ajax

### Step 0: Sign up for movie API

Sign up for an account at https://www.themoviedb.org/. Once you are logged in, go to https://www.themoviedb.org/account and then click on API on the sidebar to go to the API page and then Request an API key. Fill out the form to get the API key - just fill out bogus information.

You will use the v3 auth version of the API key.


### Step 1: Use postman

Use Postman to make some API calls. For convenience, you can use the "Params" dropdown button in Postman to fill out the request parameters - you will need one for the API key: api_key=YOUR_API_KEY. Try the following:

* http://api.themoviedb.org/3/movie/now_playing
* http://api.themoviedb.org/3/movie/MOVIE_ID - replace MOVIE_ID with an actual movie ID returned from the now_playing API
* http://api.themoviedb.org/3/search/movie

See https://developers.themoviedb.org/3 for detailed documentation for all APIs.

Find two more APIs of interest in the documentation and use Postman to make calls to them.


### Step 2: Now playing API

Create a new AngularJS app from scratch. Make a "now playing" button. When that button is clicked, make a call to the "now playing" API and print it to the console.

### Step 3: Movie Detail API

Now you are going to add code to make a call to the "movie details" API. You will create a text input that takes in a movie ID and a "Get movie details" button. The user will enter the movie ID (you can find a valid ID from the results from the "now playing" API call) and then click on "Get movie details". Then you'll make an API call to get the movie details for the given ID - you should use the ```$http()``` function with the ```params``` configuration property.


### Step 4: Extract Movie Service

Extract the code for the 2 service calls you've made so far into an AngularJS service - call it ```MovieService```. To use it in your existing controller, you will need to specify ```MovieService``` as a parameter to the controller.

### Step 5: Movie Search API

Do the same as step 3 but this time make a call to the movie search API to return all movies that match a particular text query. You may choose to create a new text input or reuse the existing text input created in step 3. You will add the code for the API call as a new method in the MovieService and then your controller will use the new method from the service.

### Bonus: extra movie APIs

For the extra APIs you researched in step 1, also add methods to the MovieService and write code as previous steps to test these APIs.
