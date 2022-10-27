import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <h2> Q 01. what is cors?</h2>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </div>
      <div>
        <h2>
          Question 02. Why are you using firebase? What other options do you
          have to implement authentication?
        </h2>
        <p>
          Reliable & Extensive Databases. ... Fast & Safe Hosting. ... Provides
          A Free Start to Newbies. ... Google Analytics. ... Firebase Cloud
          Messaging for Cross-Platform. ... Free Multi-Platform Firebase
          Authentication. ... Firebase Testing Services to Improve App Quality.
          ... Increment in Revenues with App Indexing API.Usually,
          authentication by a server entails the use of a user name and
          password. Other ways to authenticate can be through cards, retina
          scans, voice recognition, and fingerprints
        </p>
      </div>
      <div>
        <h2> Question 03. How does the private route work?</h2>
        <p>
          The react private route component renders child components ( children
          ) if the user is logged in. If not logged in the user is redirected to
          the /login page with the return url passed in the location state
          property
        </p>
      </div>
      <div>
        <h2> Q 04. What is Node? How does Node work?</h2>
        <p>
          Node.js is a platform built on Chrome's JavaScript runtime for easily
          building fast and scalable network applications.It is a used as
          backend service where javascript works on the server-side of the
          application. This way javascript is used on both frontend and backend.
          Node. js runs on chrome v8 engine which converts javascript code into
          machine code, it is highly scalable, lightweight, fast, and
          data-intensive
        </p>
      </div>
    </div>
  );
};

export default Blog;
