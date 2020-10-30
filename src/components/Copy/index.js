import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Copy = ({ children, size }) => (
  <div className={`Copy-${size}`}>{children}</div>
)

Copy.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /**
   * small: 12px, medium: 16px, large: 20px
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Copy.defaultProps = {
  size: 'medium',
}

export default Copy
