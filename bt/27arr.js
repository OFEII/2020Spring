var result = [];    // 存放结果
var queue = [data]; // 用于遍历
var item;           // 临时值
// 从队列里取出要转换的数据数组
while (item = queue.shift()) {
    item.forEach(i => {
        // 遍历数组，转换数据，放入结果中
        result.push({
            id: i.id,
            title: i.title,
        });
        // 如果有子数据的，放到队列最后等待处理
        i.child && queue.push(i.child);
    })
}

   // 存放结果
   var result = [];    // 存放结果
   (function traverse(node) {
       node.forEach(i => {
           result.push({
               id: i.id,
               title: i.title,
           });
           // 有子数据的先遍历子数据
           i.child && traverse(i.child)
       })
   })(data);

console.log(traverse(data))

var data = [
    {
      id: '1', 
      title: 'A1', 
      child: [
        {
          id: '4',
          title: 'B1'
        }
      ]
    },
    { 
      id: '2', 
      title: 'A2',
      child: [
        {
          id: '5',
          title: 'B2',
          child: [
            {
              id: '7',
              title: 'C1',
              child: [
                {
                  id: '8',
                  title: 'D1'
                }
              ]
            }
          ]
        },
        {
          id: '6',
          title: 'B3'
        }
      ] 
    },
    { 
      id: '3', 
      title: 'A3' 
    }
  ]
  
  // 结果应该为：
  // [{id:'1',title:'A1'},{id:'4',title:'B1'},{id:'2',title:'A2'},{id:'5',title:'B2'}...]