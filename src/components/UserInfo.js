import React, { Component } from 'react'
import lavaldi from '../../content/images/vickyubaldo.jpg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={lavaldi} alt="Victoria Ubaldo" />
            </div>
            <div>
              <p>
                {`Software Engineer & Designer of Things`}
              </p>
              <div>
                <a
                  className="twitter-follow-button"
                  href="https://twitter.com/vikyale"
                  data-size="large"
                  data-show-screen-name="false"
                >
                  @vikyale
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
