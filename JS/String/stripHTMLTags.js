// 删除字符串中的 HTMl 标签
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '')

stripHTMLTags('<p><em>Hello</em> <strong>World</strong></p>') // 'Hello World!'


