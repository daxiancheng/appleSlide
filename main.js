let $img = $('#images>img')
let $imgs = $('#images')
let current = 0
//$imgs.css({transform:'translateX(-920PX)'})
cloneImg()
function cloneImg(){
    let fistimg = $img.eq(0).clone(true)
    let lastimg = $img.eq($img.length-1).clone(true)
    $imgs.append(fistimg)
    $imgs.prepend(lastimg)
}
console.log($img.length)
function gotoIndex(index){
    if(index>$img.length-1){
        index = 0
    }else if(index<0){
        index = $img.length-1
    }
    if(current===$img.length-1&&index===0){
        $imgs.css({transform:`translateX(${-(current+2)*920}px)`})
        .one('transitionend',function(){
            $imgs.hide()
            $imgs.offset()
            $imgs.css({transform:`translateX(${-(index+1)*920}px)`}).show()
        })
    }else if(current===0&&index===$img.length-1){
        $imgs.css({transform:`translateX(${-(current)*920}px)`})
        .one('transitionend',function(){
            $imgs.hide()
            $imgs.offset()
            $imgs.css({transform:`translateX(${-(index+1)*920}px)`}).show()
        })
    }else{
        $imgs.css({transform:`translateX(${-(index+1)*920}px)`})
    }
    current = index
}
$('#pre').on('click',function(){
    gotoIndex(current-1)
    console.log(current-1)
})
$('#next').on('click',function(){
    gotoIndex(current+1)
    console.log(current+1)
})




