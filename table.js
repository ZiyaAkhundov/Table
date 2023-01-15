// Github https://github.com/ZiyaAkhundov
let array=[];
let btn;
arraycall()
$('#submit').click( function fileadd(){
    let username=$('#name').val();
    let userSurname=$('#surname').val();
    let userEmail=$('#email').val();
    let userPassword=$('#password').val();
    if(username!="" && userSurname!="" && userEmail!="" && userPassword!=""){
        let a=Math.floor(Math.random()*10000);
        let b;
        if(array.length==0){
            b=a;
        }
        else{
           array.forEach(item=>{
            if(item.userId!=a){
                b=a;
                console.log(b);
            }
            else{
                alert("Error occured")
            }
        }) 
        }
        
        let user={
            userId: b,
            username:$('#name').val(),
            userSurname:$('#surname').val(),
            userEmail:$('#email').val(),
            userPassword:$('#password').val()
        }
        array.push(user);
        console.log(array);
        $('#name').val("");
        $('#surname').val("");
        $('#email').val("");
        $('#password').val("");
        btn=$(".tablechange");
        $("#tablebody").html("")
        arraycall()
    }
    else{
        alert("Inputs are empty!")
    }

});
function arraycall(){
   $.each(array, function(key,obj) {
    let temp=`
    <tr>
    <td userid="${obj.userId}">${obj.userId}</td>
    <td class="username">${obj.username}</td>
    <td>${obj.userSurname}</td>
    <td>${obj.userEmail}</td>
    <td>${obj.userPassword}</td>
    <td>
    <button id="delete">Delete</button>
    <button id="tablechange" >Change</button>
    </td>
    </tr>
    `;
    $('.table').children().find('tbody').append(temp);
}); 
$(".not-found").removeClass("dblock")
}

$(document).on("click","#delete",function(){
    $(this).parent().parent().remove();
    array.forEach((item,index)=>{
        if(item.userId==$(this).parent().parent().children().eq(0).text()){
            array.splice(index,1);
        }
    })
    console.log(array);
})
var changebutton;
$(document).on("click","#tablechange",function(){
    changebutton =$(this);
        $('#submit').css("display","none");
    $('#change').css("display","inline-block");
    $('#name').val($(this).parent().parent().children().eq(1).text());
    $('#surname').val($(this).parent().parent().children().eq(2).text())
    $('#email').val($(this).parent().parent().children().eq(3).text())
    $('#password').val($(this).parent().parent().children().eq(4).text())
    
})
$(document).on("click","#change",function(){
    console.log(this);
    $('#submit').css("display","inline-block");
    $('#change').css('display','none');
    console.log( $(this).parent().children().eq(0));
    $(changebutton).parent().parent().children().eq(1).text($('#name').val());
    $(changebutton).parent().parent().children().eq(2).text($('#surname').val());
    $(changebutton).parent().parent().children().eq(3).text($('#email').val());
    $(changebutton).parent().parent().children().eq(4).text($('#password').val());
    array.forEach((item,index)=>{
        if(item.username==$(changebutton).parent().parent().children().eq(1).text()){
            item.username=$('#name').val();
            item.userSurname=$('#surname').val();
            item.userEmail=$('#email').val();
            item.userPassword=$('#password').val();
        }
    })
    $('#name').val("");
    $('#surname').val("");
    $('#email').val("");
    $('#password').val("");
    console.log(array);
});
$("#search").click(function(){
    $(".search-block").css("display","block");
})
$("body").click(function(){
    $(".search-block").css("display","none");
})
$("#search").on("keyup", function() {
    var val = $.trim(this.value).toLowerCase();
    let tr=$("#tablebody tr")
    let td,textValue;
    for(let i=0;i<tr.length;i++){
        td = tr.eq(i).children().eq(1) || tr.eq(i).children().eq(2) || tr.eq(i).children().eq(3)
        textValue=td.text()
        if (textValue.toLowerCase().indexOf(val) > -1) {
            tr.eq(i).css("display","")
        } else {
            tr.eq(i).css("display","none")
        } 
    }
});
$("#sortButton").click(function(){
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tablebody");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 0; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[1];
        y = rows[i + 1].getElementsByTagName("td")[1];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
})
// Github https://github.com/ZiyaAkhundov