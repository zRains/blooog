// 定义连接类型
export function defineTypeLinks(link) {
  return link.map(item => {
    if (item.hasOwnProperty('items')) {
      item.type = 'links'
    } else item.type = 'link'
    return item
  })
}

// 确认路由
export function ensurePath(url, path) {
  return new RegExp(path, 'g').test(url)
}

// 标题提取
export function getDefaultTitle(path) {
  return path.split('/').pop() || '🌌 暂无标题'
}

// 字符分割器
export function letterSlicer(content, ignore_space = false) {
  return ignore_space
    ? `<span><i>${content}</i></span>`
    : content
        .split(' ')
        .map((item, index) => {
          return `<span><i style="--i:${index * 0.05}s">${item}</i></span>`
        })
        .join(' ')
}

// Tag提取器
export function tagSort(items) {
  let result = {}
  items.forEach(item => {
    item.frontmatter.tag.forEach(tag => {
      if (!(tag in result)) {
        result[tag] = {
          _length: 1,
        }
      } else result[tag]._length++
    })
  })
  return result
}

// 标题提取器
export function getHeaders(el) {
  const titles = [...el.querySelectorAll('.abyss h1,h2,h3,h4,h5,h6')].filter(
    title => !!title.innerText.trim()
  )
  const sortTitles = [...new Set(titles.map(title => title.tagName))].sort()
  if (!titles.length) return []
  return titles.map(el => ({
    title: el.innerText,
    indent: sortTitles.indexOf(el.tagName),
    target: '#' + el.getAttribute('id'),
    offset: el.offsetTop,
  }))
}

