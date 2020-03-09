//浅拷贝
// function clone(tag) {
//     let clonetag = {};
//     for (const key in tag) {
//         clonetag[key] = tag[key];
//     }
//     return clonetag;
// };

function clone(tag) {
    if (typeof tag === 'object') {
        let clonetag = Array.isArray(tag) ? [] : {};
        for (const key in tag) {
            clonetag[key] = clone(tag[key]);
        }
        return clonetag;
    } else {
        return tag;
    }
};
const tag = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
console.log(clone(tag))
