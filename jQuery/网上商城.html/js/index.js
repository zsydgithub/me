$(function(){
    $('#jnBrandTab li').on('click',function(){
        $(this).addClass('chos').siblings().removeClass('chos');
        var width = $('#jnBrandList li').outerWidth(true)*4;
        var index = $(this).index();
        $('#jnBrandList').animate({
            left :-index*width
        },1000)
        
     })
    
     $('#skin li').on('click',function(){
         $(this).addClass('selected').siblings().removeClass('selected');
         var index = $(this).index();
         $('#cssfile').attr('href','skin/skin_'+index+'.css');
         setCookie('skin','skin_'+index,30);
     })



     var skin = getCookie('skin');
     $('#'+skin).triggerHandler('click');
     function setCookie(attr,value,day){
        var str = "";
        str += attr+"="+value+";";  //"age=22;"
        if(day){ //传day   "age=22;expires="+date;
            var date = new Date();
            var today = date.getDate();
            date.setDate(today+day);
            str += "expires="+date;
        }
        document.cookie = str;
    }
    function getCookie(key){
        var str = document.cookie; //"name=zs; haha=1111; nameAA=lisi"
        var arr = str.split('; '); //["name=zs","haha=1111","nameAA=lisi"]
        for(var i=0; i<arr.length; i++){
            var arr1 = arr[i].split('=');   //["name","zs"]
            if(arr1[0] == key){
                return arr1[1];
            }
        }
        return "";
    }


   })
