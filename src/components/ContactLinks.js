import React from 'react';

class ContactLinks extends React.PureComponent {
  render() {
    return (
      <div className="contact-links">
        <span>
          <a rel="noopener" target="_blank" href="mailto:alex@awmathis.com">
            alex@awmathis.com
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/awmathis/"
          >
            LinkedIn
          </a>
        </span>
        <span>
          <a rel="noopener" target="_blank" href="https://github.com/alexm327">
            github
          </a>
        </span>
      </div>
    );
  }
}

export default ContactLinks;
