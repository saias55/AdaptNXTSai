import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa'

import './index.css'

const PageSection = props => {
  const {increasingEnd, num, decreasingEnd} = props

  const onDecreasing = () => decreasingEnd()

  const onIncreasing = () => increasingEnd()
  return (
    <div className="display-end">
      <button
        type="button"
        className="pagePerMatterButton"
        onClick={onDecreasing}
      >
        <FaLongArrowAltLeft />
      </button>
      <button type="button" className="pagePerMatterButton">
        {num}
      </button>
      <button type="button" className="pagePerMatterButton">
        <FaLongArrowAltRight onClick={onIncreasing} />
      </button>
      <button type="button" className="matter-section-button">
        20/page
      </button>
    </div>
  )
}

export default PageSection
