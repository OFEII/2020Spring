function bytesToSize (bytes) {
    if (bytes === 0) return '0 B'
    var k = 1024 // or 1024
    var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    var i = Math.floor(Math.log(bytes) / Math.log(k))
    // return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
    console.log((bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i])
  }
  
  bytesToSize(12) // 12.0 B
  bytesToSize(683468) // 667 KB
  bytesToSize(4544) // 4.44 KB
  bytesToSize(98223445) // 93.7 MB
  bytesToSize(9822344566) // 9.15 GB
  