export const idGenerator = (jsonData) => {
    if (!jsonData.length) return 1

    return Math.max(...jsonData.map((item) => Number(item.id) || 0)) + 1
}