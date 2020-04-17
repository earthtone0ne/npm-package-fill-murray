import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconArrowRight from 'assets/images/icon_arrow.svg'
import iconArrowUp from 'assets/images/icon_up_arrow.svg'
import iconCheckmarkInCircle from 'assets/images/icon_checkmark_in_circle.svg'
import iconDiscardCircle from 'assets/images/icon_discard_circle.svg'
import styles from './Icon.less'

const nameToSvg = {
  'arrow-right': iconArrowRight,
  arrowUp: iconArrowUp,
  checkmarkInCircle: iconCheckmarkInCircle,
  'discard-circle': iconDiscardCircle,
}

class Icon extends React.Component {
  state = { hasError: false }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    const {
      name,
      className,
      label,
      onClick,
      style,
      active,
      disabled,
      containerClassName,
    } = this.props
    const svg = nameToSvg[name]

    const accessibilityLabel = label || name.replace(/-/g, ' ')

    if (this.state.hasError) {
      return null
    }
    const conditionalStyles = {
      [styles.active]: active,
      [styles.disabled]: disabled,
    }

    return (
      <span onClick={disabled ? null : onClick} className={containerClassName}>
        <SVGInline
          style={style}
          className={classNames(styles[name], className, conditionalStyles)}
          svg={svg}
          accessibilityLabel={accessibilityLabel}
        />
      </span>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  containerClassName: PropTypes.string,
}

Icon.defaultProps = {
  className: null,
  label: null,
  onClick: () => {},
  style: {},
  active: false,
  disabled: false,
  containerClassName: '',
}

export default Icon
