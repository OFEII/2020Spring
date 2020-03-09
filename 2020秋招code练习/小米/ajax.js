let xhr = new XMLHttpRequest()
xhr.open('get', url, true)
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4){
        console.log('请求完成')
        if(this.status >= 200 && this.status<300){
            console.log('success')
        }else{
            console.log('failed')
        }
    }
}
xhr.onerror = function (e) {
    console.log('connect failed')
}
xhr.send()