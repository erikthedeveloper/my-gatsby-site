import React from 'react'
import {rhythm} from '../utils/typography'
import {Header} from './Header'
import {Footer} from './Footer'
import {useSiteMetadata} from '../graphql/component-queries'

export default function Page({location, children}) {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  const {title} = useSiteMetadata()
  if (location.pathname !== rootPath) {
    header = <Header title={title} />
  }
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {header}
      {children}
      <Footer />
    </div>
  )
}