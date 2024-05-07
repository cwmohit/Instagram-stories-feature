## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Instagram Stories Feature using Tailwind CSS and Next.js

## Design Approach

### Technology Stack:
- **Next.js**: Next.js provides server-side rendering, routing, and other features that make building React applications easier and more efficient.
- **Tailwind CSS**: Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes to quickly build user interfaces.

### Components:
1. **Story Component**: Represents an individual story with the user's profile picture and username.
2. **Story Viewer Component**: Displays the current story with options for navigation and interaction.
3. **Header Component**: Displays the header of the application, typically containing the app logo, user profile picture, and additional navigation links.
4. **Posts Component**: Renders a feed of posts, including images, captions, and user interactions such as likes and comments.

### Workflow:
1. **Data Fetching**: Not done (as of time constraints)
2. **Rendering Stories**: Render the list of stories using the Story Component.
3. **Story Navigation**: Implement navigation between stories, allowing users to tap or swipe to move between them.
4. **Story Viewer**: Display the current story in the Story Viewer Component.
5. **Animations**: Enhance the user experience with smooth animations when transitioning between stories.
6. **Interaction**: Implement interactions such as tapping on the left and to change stories or pause/play animations.

## Possible Improvements

1. **Optimized Components**: Refactor components to improve performance and maintainability.
1. **Upload Components**: Can add upload components to get the stories.
3. **Additional Features**:
   - **Interactive Navigation**: Allow users to tap on the screen to move between stories.
   - **Enhanced Animations**: Improve animations for a more polished user experience.
   - **Customization Options**: Provide users with options to customize their stories, such as adding filters or text overlays.
   - **User Interactions**: Implement features like polls, questions, or swipe-up links within stories.
4. **Accessibility**: Ensure that the feature is accessible to all users, including those with disabilities, by following best practices for web accessibility.
5. **Testing**: Conduct thorough testing to identify and fix any bugs or issues.
6. **Performance Optimization**: Optimize the performance of the application, especially concerning loading times and animations, to provide a smooth user experience across devices and network conditions.

## Deployment

The application is deployed on Vercel. You can access it [here](https://imstories.vercel.app/).


## Tasks Pending Due to Time Constraints

Unfortunately, due to time constraints, the following tasks were not completed:

1. **Test Cases**: Test cases are essential for verifying the functionality of the application and catching bugs early. Due to time limitations, test cases were not implemented. It's recommended to incorporate test cases using a testing framework such as Jest or Testing Library to ensure the reliability of the application.

2. **CI/CD (Continuous Integration/Continuous Deployment)**: CI/CD pipelines automate the process of building, testing, and deploying the application. Setting up CI/CD helps streamline the development process and ensures the quality of the deployed application. Due to time constraints, CI/CD was not implemented. It's recommended to configure CI/CD using platforms like GitHub Actions, Travis CI, or Vercel's built-in CI/CD capabilities.

3. **Testing Framework**: A testing framework provides tools and utilities for writing and running tests. Integrating a testing framework allows for automated testing of the application's components and functionality. Due to time limitations, a testing framework was not integrated. It's recommended to choose a testing framework such as Jest or Testing Library and write test cases to validate the behavior of the application.