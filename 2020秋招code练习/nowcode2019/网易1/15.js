var line = readline().split(' ');
    var n = parseInt(line[0]),
        m = parseInt(line[1]),
        k = parseInt(line[2]);
    var str = '';
    while(n && m){
        var cnt = 1;
        for(var i=0;i<n-1;i++){
            cnt *= n-1+m-i;
            cnt /= i+1;  //计算n-1+m个位置放n-1个a
            if(cnt > k) break; //防止越界。count>k就可以退出计算了
        }
        if(cnt >= k) {
            //说明首字母就是'a'
            str += 'a';
            n--;  //问题缩减为 n-1个a和m个z 中找第k个单词
        }else{
            str += 'z';
            m--;   //问题缩减为 n个a和m-1个z 中找第k-cnt个单词
            k -= cnt;
        }
    }
    //循环结束后，剩余子序列只存在"aa..aaa" 或 "zz..zzz"1种情况
    if(k!=1){
        print(-1);
    }else{
        while(n--){
            str += 'a';
        }
        while(m--){
            str += 'z';
        }
        print(str);
    }   
