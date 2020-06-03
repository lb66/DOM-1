window.dom = {
    create(string) {    //新增节点
        const container = document.createElement("template");
        container.innerHTML = string.trim();    //trim除去字符串两侧的空格
        return container.content.firstChild;
    },
    after(node, node2) {    //新增弟弟
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before(node, node2) {   //新增哥哥
        node.parentNode.insertBefore(node2, node);
    },
    append(parent, node) {  //新增儿子
        parent.appendChild(node)
    },
    wrap(node, parent) {    //新增爸爸
        dom.before(node, parent)
        dom.append(parent, node)
    },
    remove(node) {   //删除节点
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {   //删除后代
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    attr(node, name, value) {   //读写属性
        if (arguments.length === 3) {   //写
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {   //读
            return node.getAttribute(name)
        }
    },
    text(node, string) {   //读写文本内容
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string
            } else {
                node.textContent = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },
    html(node, string) {    //读写HTML内容
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {   // dom.style(div, 'color', 'red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') { // dom.style(div, 'color')
                return node.style[name]
            } else if (name instanceof Object) {    // dom.style(div, {color: 'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {   //添加事件监听
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {  //删除事件监听
        node.removeEventListener(eventName, fn)
    },
    find(selector, scope) {    //获取选择器
        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.children)
            .filter(n => n !== node)
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }
};