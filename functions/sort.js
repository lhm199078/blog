/** 
 * 冒泡排序 demo
 */
function sort(arr){
  arr.forEach((value, key) => {
    for(var i = key+1; i< arr.length; i++ ){
      if(arr[key] > arr[i]){
        [arr[key], arr[i]] = [arr[i], arr[key]]
      }
    }
  });
  return arr
}

/**
 * 归并 demo
 */
function sort(arr){
  let length = arr.length
  if(length < 2){
    return arr
  }
  let middle = Math.floor(length/2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(sort(left), sort(right))
}
function merge(left, right){
  let result = []
  while(left.length && right.length){
    if(left[0] < right[0]){
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  result.push(...left)
  result.push(...right)
  return result
}
sort([3, 4, 3, 4, 2, 1, 5, 4, 2, 4, 6, 7, 8, 6, 4, 5, 3, 2, 5])

/**
 * 快速排序 
 */
function quickSort(arr, left = 0, right = arr.length-1){
  if(left < right){
    let index = operate(arr, left, right)
    quickSort(arr, left, index - 1)
    quickSort(arr, index + 1, right)
  }
  return arr
}

function operate(arr, start, end){
    let index = start + 1
    for(var i = index; i < end + 1; i++){
      if(arr[i] < arr[start]){
        [arr[i], arr[index]] = [arr[index], arr[i]]
        index++
      } 
    }
    [arr[start], arr[index-1]] =[arr[index - 1], arr[start]]
    return index - 1
}
quickSort([3, 4, 3, 4, 2, 1, 5, 4, 2, 4, 6, 7, 8, 6, 4, 5, 3, 2, 5])
