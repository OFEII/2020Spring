let arr = []
function Init()
{
    arr = []
}
//Insert one char from stringstream
function Insert(ch)
{
    arr.push(ch)
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    for (let i = 0; i < arr.length; i++) {
        if(arr.lastIndexOf(arr[i]) === arr.indexOf(arr[i])){
            return arr[i]
        }
    }
    return '#'

}