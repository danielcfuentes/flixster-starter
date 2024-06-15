## Unit Assignment: Flixster

Submitted by: **Daniel Camilo Fuentes**

Estimated time spent: 24 hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://flixster-starter-oxw2.onrender.com/)

### Application Features

#### CORE FEATURES


- [X] **Display Movies**
  - [X] Users can view a list of current movies from The Movie Database API.
  - [X] For each movie displayed, users can see its title, poster image, and votes.
  - [X] Users can load more current movies by clicking a button at the bottom of the list (page should not be reloaded).
- [X] **Search Functionality**
  - [X] Users can search for movies and view the results in a grid.
  - [X] Users can clear results and view previous current movies displayed.
- [X] **Accessibility Features**
  - [X] Website implements accessibility features (semantic HTML, color contrast, font sizing, alt text for images).
- [X] **Responsive Design**
  - [X] Website implements responsive web design.
- [X] **Movie Details**
  - [X] Users can view more details about a movie in a popup, such as runtime in minutes, backdrop poster, release date, genres, and/or an overview.
- [X] **Sorting Options**
  - [X] Users can click on a filter by drop down to sort product by type (alphabetic, release date, rating).
- [X] **Layout**
  - [X] Website displays header, banner, search, movie grid, about, contact, and footer section.

#### STRETCH FEATURES

- [X] **Deployment**
  - [X] Website is deployed via Render.
- [X] **Embedded Movie Trailers**
  - [X] Within the popup displaying a movie's details, users can play the movie trailer.
- [X] **Watched Checkbox**
  - [X] For each movie displayed, users can mark the movie as watched.
- [X] **Favorite Button**
  - [X] For each movie displayed, users can favorite the movie.
- [ ] **Sidebar**
  - [ ] Users can open a sidebar
  - [ ] The sidebar displays the user's favorited and watched movies

### Walkthrough Video

https://www.loom.com/share/e2b917d46b7a409b8d15f81110ab723e?sid=18c8c74d-1953-4673-8c90-51cbdb180e6b

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

- I feel the topic on lab 4 on milestones 3 and 4 really helped me with completeing the assignment. From lab 4 i learned how to fetch data from an API andhow to pass data from a parent to a child component.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
- If i had more time, i would have gone back to restructure the way my code works. This is because i ended up fetching data for each case like searching, sorting, for the modal and for the moviecards. After finishing, i realized and easier and more efficent way would have been to fetched once from the App.jsx file in which then i could pass the movie into the child components. This would have made my website faster and remove those short delays when clicking a moviecard or when sorting. I would have also added more components for each feature in order to have cleaner and more readable code.
- If i could have added a feature, i would have liked to have made it so when the user clicks on the backdrop image in the modal the trailer plays in the same postion in which the backdrop was. I also would have liked that the moviecards would display the genre and you can click arrows on the side that "loaded more" movies, but having several genres and the corresponding movies to that genre show as well. (sort of like Netflix)

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

- During my project demo, everything went really well. Everybody seemed to love the css and layout of my website. I was able to explain the different choices i made when designing and building the website, bugs i encountered along the way, as well as further things i wanted to implement given more time.
- Somethings i really liked that i saw one of my peers, Devin, do was his logo for his website. He shwowed me how to create a logo and format it the way i wanted. As well as when he hovered over the movie card a brief description would show already even before clicking the card, which i thought was super unique and liked it a lot.

### Open-source libraries used

- https://www.youtube.com/watch?v=nwJQBDPfGEk
- https://stackoverflow.com/questions/15292708/text-overflow-css-truncation
- https://tw-elements.com/docs/react/navigation/footer/
- https://meta.discourse.org/t/sticky-footer-to-the-bottom-pure-css-solution/180509
- https://www.geeksforgeeks.org/how-to-implement-search-filter-functionality-in-reactjs/
- https://dev.to/utsavmavani/load-more-button-in-a-reactjs-5dgo
- https://www.shecodes.io/athena/125174-difference-between-usestate-and-useeffect-in-react
- https://builtin.com/software-engineering-perspectives/react-api
- https://developer.themoviedb.org/reference/search-movie
- https://www.youtube.com/watch?v=ZCvemsUfwPQ
- https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/

### Shout out
  - I want to give a shoutout to my intern manager, Janice, who added comments to my commits as well as provided feedback to things i could be doing better. I want to give a shoutout to Brian who really grinded this out with me and worked together to solve bugs and really helped me to think outside of the box when solving issues. Finally, I want to give a shoutout to my CodePath instructor, Makayla, who really guided and me and gave her opinions and suggestions when i came to the CSS part!
