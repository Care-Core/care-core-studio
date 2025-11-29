import { productImageType } from './productImage'
import { categoryImageType } from './categoryImage'
import { marketingPageType } from './marketingPage'
import { websiteHeroType } from './websiteHero'

export const schemaTypes = [
  // Platform schemas (app.carecore.io)
  productImageType,
  categoryImageType,

  // Website schemas (carecore.io)
  marketingPageType,
  websiteHeroType,
]
