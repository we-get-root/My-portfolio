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
        <div className={`--sds__reverse-background`} style={{ backgroundImage: `url(${imageBackground[lastBackground]})`, zIndex: 0 }} ></div>
        <div className={`--sds__main-reverse-background`} style={{ backgroundImage: `url(${imageBackground[nextBackground]})`, zIndex: 1 }} ></div>

        {renderElement.renderBlockAboutMe &&
          <>
            <div className={`--sds__block-user-avatar`}>
              {/* <img src={avatar} alt='my avatar' /> */}
            </div>
            <div className={`--sds__wrap-title`}>
              <h2>This is block about me</h2>
              <span>in this section you can learn more about me</span>
            </div>
          </>
        }
        {renderElement.renderBlockContact &&
          <>

            <div className={`--sds__block-user-avatar`}>
              {/* <img src={avatar} alt='my avatar' /> */}
            </div>
            <div className={`--sds__wrap-title`}>
              <h2>This is block about me</h2>
              <span>in this section you can learn more about me</span>
            </div>
          </>
        }

        {renderElement.renderBlockWork &&
          <>

            <div className={`--sds__block-user-avatar`}>
              {/* <img src={avatar} alt='my avatar' /> */}
            </div>
            <div className={`--sds__wrap-title`}>
              <h2>This is block about me</h2>
              <span>in this section you can learn more about me</span>
            </div>
          </>
        }

      </>
    )
  }
}

export default SubBlockMainDescription;

