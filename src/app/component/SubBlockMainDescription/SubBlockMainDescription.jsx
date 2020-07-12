import React from 'react';

class SubBlockMainDescription extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderElement: this.props.renderElement,
      imageBackground: this.props.imageBackground,
      lastBackground: 0,
      nextBackground: 0,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.renderElement !== prevProps.renderElement) {
      this.setState({
        renderElement: this.props.renderElement,
        imageBackground: this.props.imageBackground,
        lastBackground: (this.state.lastBackground === (this.state.imageBackground.length - 1) ? 0 : this.state.nextBackground),
        nextBackground: (this.state.nextBackground === (this.state.imageBackground.length - 1) ? 0 : (this.state.nextBackground + 1)),
      })
    }
  }

  render() {
    const { renderElement, imageBackground, lastBackground, nextBackground } = this.state
    return (
      <>
        <div className={`--sds__reverse-background`} style={{
          backgroundImage: `url(${imageBackground[lastBackground]})`,
          zIndex: 0
        }} ></div>
        <div className={`--sds__main-reverse-background`} style={{
          backgroundImage: `url(${imageBackground[nextBackground]})`,
          zIndex: 1
        }} ></div>

        {renderElement.renderBlockAboutMe &&
          <>
            <div className={`--sds__wrap-title`}>
              <h2>about me</h2>
              <span>in this section you can learn more about me</span>
            </div>
          </>
        }
        {renderElement.renderBlockPortfolio &&
          <>
            <div className={`--sds__wrap-title`}>
              <h2>portfolio</h2>
              <span>here you can look on my works</span>
            </div>
          </>
        }
        {renderElement.renderBlockEducation &&
          <>
            <div className={`--sds__wrap-title`}>
              <h2>education</h2>
              <span>learn more my education</span>
            </div>
          </>
        }
        {renderElement.renderBlockSkills &&
          <>
            <div className={`--sds__wrap-title`}>
              <h2>skills</h2>
              <span>learn more skills</span>
            </div>
          </>
        }
        {renderElement.renderBlockWork &&
          <>
            <div className={`--sds__wrap-title`}>
              <h2>experience works</h2>
              <span>here described my work experience </span>
            </div>
          </>
        }
        {renderElement.renderBlockContact &&
          <>
            <div className={`--sds__wrap-title`}>
              <h2>my contact</h2>
              <span>receive data for contact me</span>
            </div>
          </>
        }
        {renderElement.renderBlockBlog &&
          <>
            <div className={`--sds__wrap-title`}>
              <h2>my blog</h2>
              <span>here i'm writing about my life and thoughts</span>
            </div>
          </>
        }
        <div className={`--sds__my-link`}>
          <span></span>
          <span></span>
          <a href="https://vk.com/we_get"><i class="fa fa-vk" aria-hidden="true"></i></a>
          <a href="https://www.pinterest.ru/"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
          <a href="https://ru-ru.facebook.com/"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
          <a href="https://mail.rambler.ru/folder/INBOX"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/?hl=ru"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="https://github.com/we-get-root"><i class="fa fa-github" aria-hidden="true"></i></a>
        </div>
      </>
    )
  }
}

export default SubBlockMainDescription;

