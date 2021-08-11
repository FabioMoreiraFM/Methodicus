import React from 'react'

import useMediaQuery from '@material-ui/core/useMediaQuery'

// eslint-disable-next-line react/display-name
export const withMediaQuery = (queries = []) => Component => props => {
  const mediaProps = {}
  queries.forEach(q => {
    mediaProps[q[0]] = useMediaQuery(q[1])
  })
  return <Component {...mediaProps} {...props} />
}