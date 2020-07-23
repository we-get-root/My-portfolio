import React from 'react';

function StartContainer({ switchElement, renderElement, followingElement, ...props }) {
  return (
    <article className={`--cbi container-basic-information--${renderElement.startRender ? 'active ' : 'disable'}`}>

      <nav className={`--cbi__menu-basic-container --mbc`}>
        <ul className={`--mbc__nav-menu`} onClick={(event) => switchElement(event.target.dataset.name)}>
          <li data-name="renderBlockAboutMe" data-active={renderElement.renderBlockAboutMe ? 'active' : 'disabled'}>aboutme</li>
          <li data-name="renderBlockPortfolio" data-active={renderElement.renderBlockPortfolio ? 'active' : 'disabled'}>portfolio</li>
          <li data-name="renderBlockEducation" data-active={renderElement.renderBlockEducation ? 'active' : 'disabled'}>education</li>
          <li data-name="renderBlockSkills" data-active={renderElement.renderBlockSkills ? 'active' : 'disabled'}>skills</li>
          <li data-name="renderBlockWork" data-active={renderElement.renderBlockWork ? 'active' : 'disabled'}>work</li>
          <li data-name="renderBlockContact" data-active={renderElement.renderBlockContact ? 'active' : 'disabled'}>contact</li>
          <li data-name="renderBlockBlog" data-active={renderElement.renderBlockBlog ? 'active' : 'disabled'}>blog</li>
        </ul>
      </nav>
      <span className={`--cbi__separator-header`}></span>

      {props.children}

      <button
        type="button"
        value="following"
        onClick={followingElement}
        className={`--cbi__button-switch-block`} >
        <p>following</p>
      </button>
    </article>
  )
}

export default StartContainer;