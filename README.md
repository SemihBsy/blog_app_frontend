# Blog Lyfe

##### This is going to be a full CRUD blog application with a couple of interesting features implemented:

1. The blog posts will have a category, and in the application you will be able to filter the blog posts by category.
2. A slug automatically generated for you based on the title you provided.
3. Avoids having duplicate slugs so that you can even have posts in your application with the same title.
4. You will see how to have a featured blog that will be displayed at the top of the blog page.
5. You will see how to have it so that when you set another blog post to be featured, the previously featured blog post will be automatically removed from being featured.

### Technologies Used

#### Backend

- Python
- Django
- Postgres
- render.com

#### Frontend

- React
- CSS
- Bootstrap
- netlify.com

### Routes 

|      Route      |    Element      |                                        
| --------------- | --------------- | 
|      /          |      Home       |    
|     /blog       |      Index      |  
|   /blog/post    |       Show      |   
|  /blog/category |   Filter posts  |        
| /admin/blog/blogpost/add | Create | 

### User Stories

- As a user, I want to be able to see a list of my posts.
- As a user, I want to click on one of the posts and see the description and image of the post on the show page.
- As a user, I want to be able to add, edit, and delete posts.

### Model

<img src="https://i.imgur.com/EvpXeXe.png" width="600px" style="border: 2px solid black">

### Wireframes

#### Index Page 

<img src="https://i.imgur.com/zvaCVYD.png" width="600px">

<!-- prettier-ignore-start -->
### Daily Plan

| Day | Goal |
|-----|------|
| 2/17 | Finish readme, repos, and deploy, then get project approved.|
| 2/18 | Work on all frontend functionality.|
| 2/19 | Learn the basics of Tailwind CSS and start styling app.|
| 2/20 - 2/24 | Continue working on styling. |
| 2/25 | Make final changes, test app, check/test deployed site.|
| 2/26 | Practice presentation.|
| 2/28 | Presentation day! |
<!-- prettier-ignore-end -->

### Link to Project

[Backend Deployed Project Page](https://blog-app-backend-wimx.onrender.com)  
[Frontend Deployed Project Page](https://resonant-kitten-cf592a.netlify.app)






### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
