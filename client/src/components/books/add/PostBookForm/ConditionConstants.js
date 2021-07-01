import Poor_condition_default from '../../images/conditions/Poor_condition_default.png'
import Poor_condition from '../../images/conditions/Poor_condition.png'
import Fair_condition_default from '../../images/conditions/Fair_condition_default.png'
import Fair_condition from '../../images/conditions/Fair_condition.png'
import Good_condition_default from '../../images/conditions/Good_condition_default.png'
import Good_condition from '../../images/conditions/Good_condition.png'
import Verygood_condition_default from '../../images/conditions/Verygood_condition_default.png'
import Verygood_condition from '../../images/conditions/Verygood_condition.png'
import Likenew_condition_default from '../../images/conditions/Likenew_condition_default.png'
import Likenew_condition from '../../images/conditions/Likenew_condition.png'

export const CONDITION_TYPES = {
  POOR: 'POOR',
  FAIR: 'FAIR',
  GOOD: 'GOOD',
  VERY_GOOD: 'VERY_GOOD',
  LIKE_NEW: 'LIKE_NEW'
}

export default [
  {
    text: 'POOR',
    type: CONDITION_TYPES.POOR,
    description: 'Heavily worn, all text are still legible.',
    imageUrl: Poor_condition_default,
    imgSelected: Poor_condition
  },
  {
    text: 'FAIR',
    type: CONDITION_TYPES.FAIR,
    description: 'Lots of wear and tear.',
    imageUrl: Fair_condition_default,
    imgSelected: Fair_condition
  },
  {
    text: 'GOOD',
    type: CONDITION_TYPES.GOOD,
    description: 'Some signs of wear, includes markings.',
    imageUrl: Good_condition_default,
    imgSelected: Good_condition
  },
  {
    text: 'VERY GOOD',
    type: CONDITION_TYPES.VERY_GOOD,
    description: 'Minimal signs of wear, no markings.',
    imageUrl: Verygood_condition_default,
    imgSelected: Verygood_condition
  },
  {
    text: 'LIKE NEW',
    type: CONDITION_TYPES.LIKE_NEW,
    description: 'No damage, lightly used, no markings.',
    imageUrl: Likenew_condition_default,
    imgSelected: Likenew_condition
  }
]
