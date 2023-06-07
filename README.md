Key technologies:
1. React
2. React bootstrap
3. React-router
4. Axios
5. Redux
6. Redux-saga
7. Git

Task description
You need to create a site with posts, where there will be 3 pages (routes):
1. List of posts (main page), where all posts will be located.
2. About me, where brief information about you will be located.
3. Details about the user (where you need to display information about the user and a list of his posts)
You need to get the data through the fake api https://jsonplaceholder.typicode.com.

Detailed description
1. List of posts (main page)
1.1. Should contain a list of all posts
1.2 Each post consists of a title, text, author's avatar and a list of comments
1.3 Take title and text from api
1.4 The avatar must be one image for all users, but when you click on it, you must go to the User Details page.
1.5 The list of comments is initially hidden, only the Comments button is available
1.6 When you click on the Comments button, it should be loaded from api and a list of comments to this post should be displayed. The list should hide when clicked again.
1.7 A comment consists of a title (email) and text
1.8. When loading data from the server, you need to display the loader first, and only then the loaded content (create an additional artificial delay of 0.5 seconds so that the loader hangs longer).
1.9. There should be a header with a "burger menu". When you click on it, a navigation menu should pop up on the left, where there will be 2 links (List of posts and About me), as well as your avatar, name and mailing address.
1.10 There should be the ability to search by the title of the post, with the ability to clear the field through the cross.
1.11 It should be possible to sort by post title.
1.12 There must be pagination.
2. About me
2.1. It's simple, tell us a little about yourself. Make this page a separate route while keeping the header and menu burger.
3. Details about the user (transition by clicking on the avatar next to the post)
3.1. It is necessary to create a card where to display brief information about the user. The information must match the author of the post.
3.2 Display a list of posts belonging only to this user, the structure of the posts themselves is completely identical to p.1.2.
3.3. Add a loader by analogy with p.1.8.
3.4. Make a "Back" button, when clicked, it will take you to the main page.

P.S.
1. As a basis, you can take the React App template.
2. Move the logic of working with the server into saga effects.
3. Be sure to break logically independent page elements into components.
4. On the User Details page, data should be loaded even after refreshing this page.
5. Implement the entire interface using the React-bootstrap ui-library (use the components that this library provides).
6. While writing code, commit often (for each significant interface feature).
7. Make error handling in case an error comes from the server.
8. The layout should look good for small and large device screens.
