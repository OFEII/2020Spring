function template(source){
    var temp=source;
    return function(obj){
        for(var prop in obj){
               var tpl="<%="+prop+"%>";
               temp=temp.replace(tpl,obj[prop]);
        }
        console.log(temp);
    }
}
