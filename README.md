# Interactive Functionality

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)


## Beschrijving
In the last meeting I had received feedback about the styling of both the gallery and the home page. I Have now styled the homepage hero container and removed the unfinished part underneath the museum container. 

In the hero container there is a link to the gallery page.

### Gallery
On the Gallery page I have fixed the styling as well;

This was the design sketch
![Image](https://github.com/user-attachments/assets/3d87c6de-348f-446b-81f5-fe857f4f4301)

Instead of using` display grid` and `grid-template-column`, I have used` column-count`. What this does is it creates the column but instead of having a fixed height and width per column and row (which created the gaps) it now creates the columns only and each object gets placed right under each object in a column.

For visuals; this is the before:

![Image](https://github.com/user-attachments/assets/e36447d2-3544-40e3-ab88-06284e94c41d)

And this is the after:
![Image](https://github.com/user-attachments/assets/92e524c6-4a6c-48ed-b53d-9d9c9da3db9c)

As u can see here there is no more big gaps anymore.


### POST and filter

Last sprint I made a like button with POST and unlike with DELETE, however it was not complete. The button missed states and also the feedback fot the user to see if the like or unlike had worked. 
I have now given the like button a state for liked, unliked and hover. 

Another bit of feedback received was that it would be nice to be able to see all liked object together somewhere.

To fix this I worked on filter buttons that when u click on this button shows u all liked objects. 
In my issues u can find video's of ![server side](https://github.com/Tindyy/user-experience-enhanced-website/issues/3#issuecomment-2864146361) and ![Client side](https://github.com/Tindyy/user-experience-enhanced-website/issues/3#issuecomment-2864148447)

Lastly I have created a searchbar to look through the art, however this is still made with JS and will not work when a user has their JS turned off. 

For both the searchbar and the filter buttons I used ```<form> ```



```
            <ul class="filter-container">
                <li class="filter-button">
                  <form method="GET" action="" >
                    <button type="submit" name="filter" value="all">All objects</button>
                  </form>
                </li>
                <li class="filter-button">
                  <form method="GET" action="">
                    <button type="submit" name="filter" value="liked">Liked objects</button>
                  </form>
                </li>
              </ul>
```

```
            <form role="search" action="" class="search-bar" >
                <label for="search"></label>
                <input class="search-input" type="search" name="search" placeholder="Look through the art" aria-label="Search for 
                artwork">
            </form>
```

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
