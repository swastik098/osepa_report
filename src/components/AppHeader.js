import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CContainer, CHeader, CHeaderNav, CHeaderToggler } from '@coreui/react'
import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
  const headerRef = useRef()
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <CHeader position="sticky" className="mb-4 p-0 bg-white" ref={headerRef}>
      <CContainer
        className="border-bottom px-4 d-flex justify-content-between align-items-center position-relative"
        fluid
      >
        {/* Sidebar toggler on the left */}
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          className="me-3"
        >
          <i className="fas fa-bars fs-5 text-primary"></i>
        </CHeaderToggler>

        {/* Centered title */}
        <div
          className="position-absolute start-50 translate-middle-x text-center"
          style={{ zIndex: 0 }}
        >
          <h4
            className="mb-0 fw-bold text-primary-emphasis"
            style={{ fontSize: '1.6rem', letterSpacing: '1px' }}
          >
            WA-GA REPORT
          </h4>
        </div>

        {/* Profile dropdown on the right */}
        <CHeaderNav className="ms-auto d-flex align-items-center">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
