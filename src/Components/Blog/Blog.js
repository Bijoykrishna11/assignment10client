import React from 'react';

const Blog = () => {
    return (
        <div className='w-50 mx-auto'>
            <h3>1.what is cors?</h3>

            <h4>Ans: <br />
                In ReactJS, Cross-Origin Resource Sharing refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there. </h4>
            <h3 className='mt-5'>2.Why are you using firebase? What other options do you have to implement authentication?</h3>

            <h4>Ans: <br />
                a.  Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. <br />
                b. Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication,
            </h4>

            <h3 className='mt-5'>3. How does the private route work?</h3>

            <h4>Ans: <br />
                Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it.</h4>
            <h3 className='mt-5'>4. What is Node? How does Node work?</h3>

            <h4>Ans: <br />
                a.  Node.js, a JavaScript runtime for building server-side or desktop applications. <br />
                b. Node. js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend.Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function.
            </h4>

        </div>
    );
};

export default Blog;