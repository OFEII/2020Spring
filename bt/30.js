tree = [{
    tree_id: 'root_0',
    children:[
        {
            tree_id:'1_0',
            children:[
                {
                    tree_id:'1_0_1'
                },
                {
                    tree_id:'1_0_2'
                },
                {
                    tree_id:'1_0_3'
                },
            ]
        },{
            tree_id:'1_1',
            children:[
                {
                    tree_id: '1_1_1'
                }
            ]
        }
    ]

}]
// treeIds = ['root_0', '1_0', '1_0_1', '1_0_2', '1_1', '1_1_1']
// const getTreeId = arr =>[].concat(...arr.map(v=>!!v.children?getTreeId(v.children):v.tree_id));
// console.log(getTreeId(tree))
// tree为唯一标识,可代表对应节点
//如何过滤这棵树能获得 ['1_0_1', '1_0_2', '1_1', '1_1_1']
// 1、如果一个节点的后代节点全部在 treerds中,则过滤出来
// 2、如果节点为叶子节点且在treelds中,则过滤出来

let treeArr = []
const filterTreeId=(arr)=>{
    arr.forEach(item => {
        if(item.tree_id){
            treeArr.push(item.tree_id)
        }
        if(item.children && item.children.length >0){
            filterTreeId(item.children)
        }
        
    })
}
filterTreeId(tree)
console.log(treeArr)