import { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Platform (app.carecore.io)')
        .child(
          S.list()
            .title('Platform Content')
            .items([
              S.documentTypeListItem('productImage')
                .title('Product Images'),
              S.documentTypeListItem('categoryImage')
                .title('Category Images'),
            ])
        ),
      S.listItem()
        .title('Website (carecore.io)')
        .child(
          S.list()
            .title('Website Content')
            .items([
              S.documentTypeListItem('marketingPage')
                .title('Marketing Pages'),
              S.documentTypeListItem('websiteHero')
                .title('Hero Sections'),
            ])
        ),
      S.divider(),
      // Add any items that should be available at the root
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['productImage', 'categoryImage', 'marketingPage', 'websiteHero'].includes(
            listItem.getId() ?? ''
          )
      ),
    ])