## Landing Page

This project intention is to aplly the aquired knowledge during the Udacity course and the main focus is on JavaScript.
Overall, it has a dinamic navbar that reacts to scroll position.
When clicked, the links in the navbar jumps to the corresponding section based on its id.

The project has the following event handlers:
- an onScroll event that applies a CSS class to my li elements depending on its distance to the top, showing wich one is active;
- click event on the burger icon to toggle the side menu visibility;
- click event on the body, excluding the sidebar itself, to hide it to improve user experience;
- click on the sidebar to stop propagation so it will not trigger the body click event handler so it will not close when you click the sidebar itself
