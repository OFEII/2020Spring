var trap = function(height) {
    if(height.length<=0){
       return 0;
    }
    var count=0;
    var maximum=Math.max.apply(Math,height);
    var len=height.length;
    for(var t=0;t<maximum;t++){
        var i=0;
        var j=len-1;
        for(;i<len;i++){
            if(height[i]>t){
                break;
            }
        }
        for(;j>=0;j--){
            if(height[j]>t){
                break;
            }
        }
        count+=j-i+1;
    }
    return count-eval(height.join('+'));
};
