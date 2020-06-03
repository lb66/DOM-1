const div1 = dom.create(`<div>newDiv</div>`);
console.log(div1);

dom.after(test, div1);

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)

const nodes = dom.empty(empty)
console.log(nodes)

dom.attr(test, 'title', '你好')
const title = dom.attr(test, 'title')
console.log(`title:${title}`)

dom.text(test, '新内容文本')
dom.text(test)

dom.style(test, { border: '1px solid red', color: 'blue' })
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
console.log(dom.class.has(test, 'blue'))

const fn = () => {
    console.log('点击了')
}
dom.on(test, 'click', fn)
//dom.off(test, 'click', fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv)
console.log(dom.find('.red', test2)[0])

console.log(dom.parent(test))

const s2 = dom.find('#s2')[0]
console.log(dom.siblings(s2))
console.log(dom.next(s2))
console.log(dom.previous(s2))

const t = dom.find('#travel')[0]
console.log(t)
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

console.log(dom.index(s2))
