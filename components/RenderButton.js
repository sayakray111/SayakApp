import React from 'react'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

const ButtonLink = ({ className, href, hrefAs, children, prefetch }) => (
  <Link href={href} as={hrefAs} prefetch>
    <a className={className}>
      {children}
    </a>
  </Link>
)

// https://material-ui.com/demos/buttons/#third-party-routing-library
const RenderButton = () => <Button component={ButtonLink} href={'/api/login'}>Normal User</Button>
export default RenderButton