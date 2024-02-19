import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa'

import './index.css'

const PageSection = () => (
  <div className="display-end">
    <button type="button" className="pagePerMatterButton">
      <FaLongArrowAltLeft />
    </button>
    <button type="button" className="pagePerMatterButton">
      1
    </button>
    <button type="button" className="pagePerMatterButton">
      <FaLongArrowAltRight />
    </button>
    <button type="button" className="matter-section-button">
      20/page
    </button>
  </div>
)

export default PageSection
