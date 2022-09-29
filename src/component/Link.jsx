function Link(props) {
    return (
      <div>
        <a href={props.url}>{props.title}</a>
        <div>
          <h3>{props.shortUrl}</h3>
        </div>
        <div>{props.excerpt}</div>
      </div>
    );
  }