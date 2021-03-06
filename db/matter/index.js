const text = require('./media/text')
const image = require('./media/image')
const gallery = require('./media/gallery')
const video = require('./media/video')
const file = require('./media/file')
// const widget = require('./media/widget')

module.exports = {
  id: 1,
  slug: 1,
  type: 'NewsItem',
  rubric: 'tech',
  published_date: '2020-02-27',
  title: 'Действительно легкий старт: регистрировать бизнес со Сбербанком стало намного проще',
  lead: 'ПАО «Сбербанк» и АО «Деловая среда» расширяют географию и формы оказания услуг по бесплатной регистрации бизнеса.',
  img: 'https://avatars.mds.yandex.net/get-zen_doc/153246/pub_5c9c3cc67825b400af148e37_5c9c7c35687bdd00b34dc423/scale_600',
  content_blocks: [text, image, text, gallery, text, video, text, file, text, text],
}
