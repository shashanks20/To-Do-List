var i=1;

$(".btn").click(function(){

    var x = $("input").val();

    if (x!=="")
    { 
        var chk = document.createElement("input");
        chk.setAttribute("type", "checkbox");
        chk.classList.add('task'+i);

        var para = document.createElement("span");
        para.classList.add('task'+i);

        var bttn = document.createElement("button");
        bttn.classList.add('task'+i);
        bttn.addEventListener("click",function(){
            var y = $(this).attr('class');
           $("."+y).remove();
        });

        var node = document.createTextNode(x);
        var inb = document.createTextNode("X");
        para.appendChild(node);
        bttn.appendChild(inb);

        var ele = document.getElementById("div2");
        ele.appendChild(chk)
        ele.appendChild(para);
        ele.appendChild(bttn);

        chk.addEventListener("click",function(){
            if ($(this).is(':checked')) {
                var z = $(this).attr('class');               
                $("span."+z).css("text-decoration","line-through");
            }
            else{
                var z = $(this).attr('class');  
                $("span."+z).css("text-decoration","none");
            }
        });
        
        var brk = document.createElement("br");
        brk.classList.add('task'+i);
        ele.appendChild(brk);
        document.querySelector("input").value="";
        i++;
    }
    else
    {
        alert("Task is empty")
    }
})




