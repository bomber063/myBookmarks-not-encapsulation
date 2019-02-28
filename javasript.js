var keys = {
    0: {
        0: 'q',
        1: 'w',
        2: 'e',
        3: 'r',
        4: 't',
        5: 'y',
        6: 'u',
        7: 'i',
        8: 'o',
        9: 'p',
        'length': 10
    },
    1: {
        0: 'a',
        1: 's',
        2: 'd',
        3: 'f',
        4: 'g',
        5: 'h',
        6: 'j',
        7: 'k',
        8: 'l',
        'length': 9
    },
    2: {
        0: 'z',
        1: 'x',
        2: 'c',
        3: 'v',
        4: 'b',
        5: 'n',
        6: 'm',
        'length': 7
    },
    'length': 3
}

var hash = {
    'q': 'qq.com',
    'w': 'weibo.com',
    'e': 'ele.me',
    'r': 'renren.com',
    't': 'tianya.com',
    'y': 'youtube.com',
    'u': 'uc.com',
    'i': 'iqiyi.com',
    'o': 'opera.com',
    'p': undefined,
    'a': 'acfun.tv',
    's': 'sohu.com',
    'z': 'zhihu.com',
    'm': 'www.mcdonalds.com.cn'
}

var hashInlocalStorage=JSON.parse(localStorage.getItem('zzz') || 'null')
// 取出 localStorage 中的 zzz 对应的 hash
if(hashInlocalStorage){
    hash=hashInlocalStorage
}

index = 0;
while (index < keys['length']) {
    div1 = document.createElement('div')
    a = mark1.appendChild(div1)

    index2 = 0;
    while (index2 < keys[index]['length']) {
        kbd = document.createElement('kbd')//创建一个kbd//
        // b.textContent(keys[index][index2])
        kbd.textContent=keys[index][index2];//kbd遍历//
        button=document.createElement('button')//创建button//
        button.textContent='编辑'//button上写字为e//
        button.id=keys[index][index2]
        button.onclick=function(xx){
            key=xx['target']['id']
            wangzhi=prompt('给我一个网址')
            hash[key]=wangzhi
            localStorage.setItem('zzz',JSON.stringify(hash))//把改变的hash存到本地//
            console.log(hash)
        //    xx.target=keys[index][index2]
        }
        kbd.appendChild(button)//把button放到kbd里面//
        a.appendChild(kbd);//把kbd放到div里面//

        index2 = index2 + 1;
    }
    index = index + 1;
}

document.onkeypress=function(x){
    x=x['key']
    website=hash[x]
    // location.href='http://'+website /当前网站打开/
    window.open('http://'+website, '_blank')  //在新窗口打开地址//

}

