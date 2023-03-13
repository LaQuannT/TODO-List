export const arrAdd = (arr, item) => {
  arr.push(item)
}

export const arrDel = (arr, key, value) => {
  arr.forEach((item, index) => {
    if (arr[index][key] === value) {
      arr.splice(index, 1)
    }
  })
}
