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
  SubBlockMainDescription,
  StartContainer,
} from './index';


function RootApp({ imageCarousel, imageBackground, getResourcesPage, listAllSection, loading, ...props }) {

  const currentBlockAboutMe = useRef(null)
  const [renderElement, setRenderElement] = useState(listAllSection)

  const switchElement = (whatElementSwitch) => {
    if(renderElement[whatElementSwitch]) return false
    else   setRenderElement({ ...listAllSection, startRender: true, [whatElementSwitch]: true })
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

  window.onscroll = () => {
    if (window.pageYOffset > 50 && !renderElement.startRender) {
      setRenderElement({ ...listAllSection, startRender: true, renderBlockAboutMe: true })
    } else return false
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

      <StartContainer
        switchElement={switchElement}
        followingElement={followingElement}
        renderElement={renderElement}>
        {renderBlockAboutMe ? <section onScroll={handlerBlockAddEffectParallax} className={`--ssd__main-block-description --mbd`}>
          <BlockAboutMe currentBlockAboutMe={currentBlockAboutMe} />
        </section> : null}
        {renderBlockPortfolio ? <section className={`--ssd__main-block-portfolio --mbp`}>
          <BlockCarousel imageCarousel={imageCarousel} />
        </section> : null}
        {renderBlockEducation ? <section className={`--ssd__main-block-education --mbe`}>
          <BlockEducation />
        </section> : null}
        {renderBlockContact ? <section className={`--ssd__main-block-contact --mbc`}>
          <BlockContact />
        </section> : null}
        {renderBlockBlog ? <section className={`--ssd__main-block-blog --mbb`}>
          <BlockBlog />
        </section> : null}
        {renderBlockSkills ? <section className={`--ssd__main-block-skills --mbs`}>
          <BlockSkills />
        </section> : null}
        {renderBlockWork ? <section className={`--ssd__main-block-work --mbw`}>
          <BlockWork />
        </section> : null}

      </StartContainer>

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
  listAllSection: state.mainState.listAllSection,
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
