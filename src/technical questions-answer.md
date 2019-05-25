    									User Stor

As a user I can search a list of restaurants in a City that I'm interested.I can further refine the results by name, address, or area, so that the results are more filterd by spesific place.
I can get a better understanding of the restuarants and pricing. As a user I want to access this application using various devices such as mobile, tablet and desktop.

1.  How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

         I’ve spend 14-15 hours. If I have more time, I would add clickable link, when users click the link it will navigate to another page where users can view full details of the restaurant and make reservation.

2.  What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

         Usefull feature I've used is the middleware called "redux-thunk". This will handle the async ajax calls and retrieve the response and dispatch it to action creator.

    export const fetchRestaurants = city => async dispatch => {
    const response = await axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${city}`);

    dispatch({ type: FETCH_RESTAURANTS, payload: response.data.restaurants });
    };

3) How would you track down a performance issue in production?
   There are many application performance monitoring tools available to track down a performance issues in production(Raygun, New Relic,etc).
   By enabling chrome devtools and react profiler, we can debug application in production mode and figure out which component takes time to render.
   Have you ever had to do this?
   Yes, I have experience in debuging production version code in chrome using Redux Devtools

4. How would you improve the API that you just used?
   I'll use query caching tools such as Redis to avoid the database calls when ever the same query arrives multiple times.
   I'll verify that API sending only the data that will consume by client and use pagination if the data is too much.

5)  Please describe yourself using JSON.

    {
    "firstName":"Mathan",
    "lastName":"Mahalingam",
    "gender":"Male",
    "jobTitle":"Developer",
    "address":{
    "home":{
    "street":"42 Coakwell Dr"
    "city":"Markham",
    "postalcode":"L860L5",
    "country":"Canada"
    },
    "work":{
    "street":"777 Bay Ave"
    "city":"Toronto",
    "postalcode":"L560L5",
    "country":"Canada"
    }
    },
    "phoneNumber":"111-1234567",
    "email":"mm@gmail.com",
    "hobbies":["tennis","movie","bikeride","volleyball]
    },
