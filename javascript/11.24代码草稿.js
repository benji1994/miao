function ageAndDis(ages) {
  var a = 0,
    b = 0,
    c = 0,
    d = 0
  for (var i = 0; i < ages.length; i++) {
    var age = ages[i]
    if (age >= 61) {
      d++
      continue
    }

    if (age >= 36) {
      c++
      continue
    }

    if (age >= 19) {
      b++
      continue
    }

    a++
  }

  console.log(a + '%', b + '%', c + '%', d + '%')
}


// 把ages按照stops划定的范围分组，给出每组的数量
function ageAndDis(ages, stops = [18, 35, 60]) {
  var result = new Array(stops.length + 1)
}


function trees(l, parts) {
  var t = new Array(l + 1)
    // for(var i = 0; i<t.length; i++) {
    //   t[i] = 1
    // }
  t.fill(1)

  for (var part of parts) {
    var start = part[0]
    var end = part[1]
    for (var j = start; j <= end; j++) {
      t[j] = 0
    }
  }

  var remains = 0
  for (var i = 0; i < t.length; i++) {
    if (t[i]) {
      remains++
    }
  }
  return remains
}

trees(500, [
  [150, 300],
  [100, 200],
  [470, 471]
])


function isJolly(nums) {
  var diffs = new Array(nums.length - 1)

  for (var i = 1; i < nums.length; i++) {
    diffs[i - 1] = Math.abs(nums[i] - nums[i - 1])
  }

  var flags = new Array(nums.length - 1).fill(0)

  for (var i = 0; i < diffs.length; i++) {
    var n = diffs[i]

    flags[n - 1] = 1
  }

  var ones = 0
  for (var i = 0; i < flags.length; i++) {
    if (flags[i]) {
      ones++
    }
  }

  return ones === diffs.length

}



function isJolly2(nums) {
  var diffs = []

  for (var i = 1; i < nums.length; i++) {
    var diff = Math.abs(nums[i] - nums[i - 1])
    if (diffs.indexOf(diff) >= 0) { //出现过的情况
      return false
    } else {
      diffs.push(diff)
    }
  }

  return true
}


function isJolly3(nums) {
  var diffs = {}

  for (var i = 1; i < nums.length; i++) {
    var diff = Math.abs(nums[i] - nums[i - 1])
    if (diffs[diff] === 1) {
      return false
    } else {
      diffs[diff] = 1
    }
  }

  return true
}


function ztf(n, a, b) {
  var an = new Array(n)
  var bn = new Array(n)
  var i = 0
  var j = 0

  for (; j < n; j++, i++) {
    an[j] = a[i % a.length]
  }

  for (i = 0, j = 0; j < n; j++, i++) {
    bn[j] = b[i % b.length]
  }

  var aw = 0
  var bw = 0
  var am
  var bm
  for (var i = 0; i < n; i++) {
    am = an[i]
    bm = bn[i]
    if (am === bm) {

    } else if (am == 0) {
      if (bm == 2) {
        aw++
      } else if (b == 5) {
        bw++
      }
    } else if (am == 2) {
      if (bm == 0) {
        bw++
      } else if (b == 5) {
        aw++
      }
    } else if (am == 5) {
      if (bm == 0) {
        aw++
      } else if (b == 2) {
        bw++
      }
    }
  }

  return aw > bw ? 'A' : 'B'

}



function ztf(n, a, b) {
  var aw = 0 //a赢的次数
  var bw = 0 //b同上
  var am //a出拳
  var bm

  for (var i = 0, j = 0, k = 0; k < n; i++, j++, k++) {
    am = a[i % a.length]
    bm = b[j % b.length]
    if (am === bm) {

    } else if (am == 0) {
      if (bm == 2) {
        aw++
      } else if (bm == 5) {
        bw++
      }
    } else if (am == 2) {
      if (bm == 0) {
        bw++
      } else if (bm == 5) {
        aw++
      }
    } else if (am == 5) {
      if (bm == 0) {
        aw++
      } else if (bm == 2) {
        bw++
      }
    }
  }

  return aw > bw ? 'A' : 'B'

}


function plus(a, b) {
  var result = new Array(a.length > b.length ? a.length + 1 : b.length + 1)
  var i = a.length - 1
  var j = b.length - 1
  var k = result.length - 1

  var s, r, carry = 0
  while (a[i] !== undefined || b[j] !== undefined) {
    s = (a[i] ? a[i] : 0) + (b[j] ? b[j] : 0) + carry
    r = s % 10
    carry = (s - r) / 10
    result[k] = r
    i--, j--, k--
  }
  result[0] = carry
  if (result[0] == 0) {
    result.shift()
  }
  return result
}