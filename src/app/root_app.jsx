import React, { useEffect, useState, useRef } from 'react';
import { getResourcesPage } from './../state/store'
import { connect } from 'react-redux';
import './root_style.scss';
import {
  BlockSkills,
  BlockAboutMe,
  BlockEducation,
  BlockContact,
  BlockCarousel,
  BlockBlog,
  BlockWork,
  SubBlockMainDescription
} from './index';


function RootApp({ imageCarousel, imageBackground, getResourcesPage, loading, ...props }) {

  const listAllSection = {
    startRender: false,
    renderBlockAboutMe: false,
    renderBlockEducation: false,
    renderBlockBlog: false,
    renderBlockPortfolio: false,
    renderBlockSkills: false,
    renderBlockContact: false,
    renderBlockWork: false,
  }
  
  const currentBlockAboutMe = useRef(null)
  const [renderElement, setRenderElement] = useState(listAllSection)

  const switchElement = (whatElementSwitch) => {
    setRenderElement({ ...listAllSection, startRender: true, [!whatElementSwitch ? 'renderBlockAboutMe' : whatElementSwitch]: true })
  }
  const followingElement = () => {
    const keysRenderElement = Object.keys(renderElement).filter((value) => value !== 'startRender')
    for (let i = 0; i < keysRenderElement.length; i++) {
      if (renderElement[keysRenderElement[i]]) {
        switchElement(((i + 1) === keysRenderElement.length) ? keysRenderElement[0] : keysRenderElement[(i + 1)])
        break;
      } else continue;
    }
  }
  const handlerBlockAddEffectParallax = (event) => {
    currentBlockAboutMe.current.style.top = `${event.target.scrollTop / 2}px`
  }

  useEffect(() => {
    if (!imageCarousel.length && !imageBackground.length && !loading) getResourcesPage()
  }, [imageCarousel, imageBackground, getResourcesPage, loading])

  const {
    renderBlockAboutMe,
    renderBlockEducation,
    renderBlockContact,
    renderBlockBlog,
    renderBlockPortfolio,
    renderBlockSkills,
    renderBlockWork,
    startRender,
  } = renderElement;

  return (
    <section className={`root-wrapper`}>

      <div className={`start-block-title`}>
        <h1>web-developer<br /> dmitry tretyakov</h1>
      </div>

      <header className={`header-nav-block --hnb`}>
        <nav>
          <ul className={`--hnb__nav${startRender ? '--disabled' : '-left'}`}>
            <li>education</li>
            <li>portfolio</li>
            <li>contact</li>
          </ul>
        </nav>
        <div className={`--hnb__logotype${startRender ? '--active-nav' : ''}`}>
          <h1>WG</h1>
        </div>
        <span className="NDu2dn92ND9w8dn293fn"></span>
        <nav>
          <ul className={`--hnb__nav${startRender ? '--disabled' : '-right'}`}>
            <li>aboutme</li>
            <li>blog</li>
            <li>skills</li>
          </ul>
        </nav>

        <div className={`--hnb__slider-switcher --ss`} onClick={() => switchElement('renderBlockAboutMe')}>
          <div className={`--ss__circle-switcher`}></div>
        </div>
      </header>

      <section className={`--sdd section-detail-description--${startRender ? 'active ' : 'disable'}`}>

        <ul className={`--ssd__nav-menu`} onClick={(event) => switchElement(event.target.dataset.name)}>
          <li data-name="renderBlockAboutMe" data-active={renderBlockAboutMe ? 'active' : 'disabled'}>aboutme</li>
          <li data-name="renderBlockPortfolio" data-active={renderBlockPortfolio ? 'active' : 'disabled'}>portfolio</li>
          <li data-name="renderBlockEducation" data-active={renderBlockEducation ? 'active' : 'disabled'}>education</li>
          <li data-name="renderBlockSkills" data-active={renderBlockSkills ? 'active' : 'disabled'}>skills</li>
          <li data-name="renderBlockWork" data-active={renderBlockWork ? 'active' : 'disabled'}>work</li>
          <li data-name="renderBlockContact" data-active={renderBlockContact ? 'active' : 'disabled'}>contact</li>
          <li data-name="renderBlockBlog" data-active={renderBlockBlog ? 'active' : 'disabled'}>blog</li>
        </ul>

        <span className={`--ssd__separator-header`}></span>

        {renderBlockAboutMe ? <div onScroll={handlerBlockAddEffectParallax} className={`--ssd__main-block-description --mbd`}> 
          <BlockAboutMe currentBlockAboutMe={currentBlockAboutMe} />
        </div> : null}
        {renderBlockPortfolio ? <div className={`--ssd__main-block-portfolio --mbp`}>
          <BlockCarousel imageCarousel={imageCarousel} />
        </div> : null}
        {renderBlockEducation ? <div className={`--ssd__main-block-education --mbe`}>
          <BlockEducation />
        </div> : null}
        {renderBlockContact ? <h1 className={`--ssd__main-block-contact --mbc`}>
          <BlockContact />
        </h1> : null}
        {renderBlockBlog ? <div className={`--ssd__main-block-blog --mbb`}>
          <BlockBlog />
        </div> : null}
        {renderBlockSkills ? <div className={`--ssd__main-block-skills --mbs`}>
          <BlockSkills />
        </div> : null}
        {renderBlockWork ? <div className={`--ssd__main-block-work --mbw`}>
          <BlockWork />
        </div> : null}

        <button
          type="button"
          value="following"
          onClick={followingElement}
          className={`--ssd__button-switch-block`} >
          <p>following</p>
        </button>
      </section>

      <div className={`sub-block-ssd--${startRender ? 'active' : 'disabled'} --sbs`} >
        {startRender && <SubBlockMainDescription
          renderElement={renderElement}
          imageBackground={imageBackground} />}
      </div>

    </section>
  )
}


export default connect((state) => ({
  imageCarousel: state.mainState.imageCarousel,
  imageBackground: state.mainState.imageBackground,
  loading: state.mainState.loading,
}), ({ getResourcesPage }))(RootApp);



/**
 *
 * @param {scroll} this block code to do switch block
 */

// function interceptionScrollRoundingCheck() {
//
//   const listBlock = [{ widthScroll: 0, render: false }, { widthScroll: 3000, render: false }, { widthScroll: 6000, render: false }, { widthScroll: 9000, render: false }, { widthScroll: 12000, render: false }, { widthScroll: 15000, render: false }, { widthScroll: 18000, render: false },]
//   const [hiddenBlockAboutMe, setHiddenBlockAboutMe] = useState(false)
//   const [positionScroll, setPositionScroll] = useState(0)
//   const [activeBlock, setActiveBlock] = useState(listBlock)
//  
//   for (let i = 0; i < listBlock.length; i++) {
//     if (listBlock[i].widthScroll === positionScroll && !activeBlock[i].render) {
//       setActiveBlock([...listBlock, listBlock[i].render = true])
//       break;
//     } else if (listBlock[i].widthScroll > positionScroll && activeBlock[i].render) {
//       setActiveBlock([...listBlock, listBlock[i - 1].render = true])
//       break;
//     } else continue;
//   }
//   if (positionScroll === listBlock[1].widthScroll && !hiddenBlockAboutMe) setHiddenBlockAboutMe(true)
//   else if (positionScroll < listBlock[1].widthScroll && hiddenBlockAboutMe) setHiddenBlockAboutMe(false)
//
//   useEffect(() => {
//     const id = setInterval(() => { setPositionScroll(Math.floor(window.pageYOffset) - (Math.floor(window.pageYOffset) % 1000)) }, 100)
//     return () => clearInterval(id)
//   }, [setPositionScroll])
// }
