function App() {
    return (
      <section>
        <Link
          title="React - A JavaScript Library for Building User Interfaces"
          url="https://reactjs.org"
          // props consisting of two or more words must be written in camelcase
          shortUrl="reactjs.org"
          excerpt="React makes it painless to create interactive UIs."
        />
        <Link
          title="React (web framework) - Wikipedia"
          url="https://en.wikipedia.org/wiki/React_(web_framework)"
          shortUrl="en.wikipedia.org › wiki › React_(web_framework)"
          excerpt="React is a JavaScript library for building user interfaces."
        />
        <Link
          title="React (@reactjs) | Twitter"
          url="https://twitter.com/reactjs"
          shortUrl="twitter.com › reactjs"
          excerpt="The latest Tweets from React (@reactjs)."
        />
      </section>
    );
  }

  ReactDOM.render(<App />, document.getElementById("root"));