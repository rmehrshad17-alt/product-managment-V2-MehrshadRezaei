const handlers = new Map()
let counter = 0

export const clearHandlers = () => handlers.clear()
export const getHandler = (id) => handlers.get(id)

export const html = (strings, ...values) => {
    let out = ""
    strings.forEach((str, i) => {
        let value = values[i]
        const m = str.match(/\son([A-Za-z]+)=$/)

        if (m && typeof value === "function") {
            const id = `h${counter++}`
            handlers.set(id, value)
            str = `${str.slice(0, m.index)} data-on-${m[1].toLowerCase()}="${id}"`
            value = ""
        } else if (Array.isArray(value)) {
            value = value.join("")
        }
        out += str + (value ?? "")
    })
    return out
}

export const initEvents = (root = document, types = ["click", "input", "change", "submit"]) => {
    types.forEach((type) => {
        root.addEventListener(type, (e) => {
            const attr = `data-on-${type}`
            const el = e.target.closest(`[${attr}]`)
            if (!el) return
            if (type === "submit") e.preventDefault()
            getHandler(el.getAttribute(attr))?.(e, el)
        })
    })
}