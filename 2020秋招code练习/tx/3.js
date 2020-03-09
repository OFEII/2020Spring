#!/usr/bin/env node

const buff = [];
const lString = function(str, limit, lastMsg){
  if (!lastMsg) {
    lastMsg = "\n\nToo large to show...";
  }

  if (limit < lastMsg.length) {
    throw Error(`限制的长度应该大于 ${lastMsg.length}`);
  }else{
    if(limit < str.length){
      return str.substring(0,limit)
  }else{
      return str;
  }
  }

    

  // TODO...

}


console.log(lString('hello world!',2))