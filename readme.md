# Podcaster

Welcome to Podcaster, an iTunes podcast explorer app designed to help you discover and enjoy a wide variety of podcasts available on iTunes.

<h2>App description</h2>
This is a web application that displays a list of podcasts from iTunes. The application has three views:

<h3>View 1: Podcast List</h3>
The first view displays a list of podcasts from iTunes, allowing the user to navigate to each podcast. Clicking on a podcast will redirect the user to view 2.

<h3>View 2: Podcast Details</h3>
In view 2, the user can see detailed information about a specific podcast, including a list of episodes. Clicking on an episode will redirect the user to view 3.

<h3>View 3: Episode Details and Playback</h3>
View 3 displays information about a specific episode, including the option to play it using the HTML5 native player. The user can listen to the episode directly from this view.

<h2>Launching the App and Building for Production</h2>
<ul>
  <li>To launch the app in development mode, use the command <b>npm run dev</b>.</li>
  <li>To generate the production build, run <b>npm run build</b>.</li>
  <li>The build command will produce a .dist folder that can be deployed by executing the <b>npm run deploy</b> command.</li>
</ul>

<h2>Project Specifications</h2>
This project was developed using Vite, a high-speed and lightweight build tool that's ideal for build react applications. The app's codebase is completely typed using TypeScript and the styles for the app were crafted using SASS.

<ul>
  <li><strong>React Router DOM</strong> for client-side routing</li>
  <li><strong>DOMPurify</strong> for neutralizing malicious scripts</li>
  <li><strong>Axios</strong> for handling HTTP requests</li>
  <li><strong>Jest</strong>, <strong>Vitest</strong> and <strong>React Testing Library</strong> for unit and integration testing</li>
  <li><strong>Mock Service Worker</strong> for mocking API requests in tests</li>
</ul>


<h4><b>Visit the page: https://milamgm.github.io/podcaster/</b></h4>
