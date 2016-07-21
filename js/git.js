var xmlhttp_a = new window.XMLHttpRequest();  
var path = window.location.pathname
if (path=='/')
{
var url_a= '/.git/config';
}
else
{var url_a = window.location.pathname + '/.git/config';  
}
xmlhttp_a.onreadystatechange = get_a;       
xmlhttp_a.open("get",url_a,true);    
xmlhttp_a.send(null);      
function get_a()
{    
  if (xmlhttp_a.readyState == 4)
    {
     if (xmlhttp_a.status==200)
        { var str = xmlhttp_a.responseText;
           if(str.indexOf('repositoryformatversion')>-1)
           {
            alert(path+'发现git泄露');
           }
         else{

         };
             
             }
      else{

      };
    }
}

