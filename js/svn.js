var xmlhttp_b = new window.XMLHttpRequest();
var path = window.location.pathname
if (path == '/')
{
  var url_b = '/.svn/entries';
} 
else
{
  var url_b = window.location.pathname + '/.svn/entries';
}
xmlhttp_b.onreadystatechange = get_b;
xmlhttp_b.open('get', url_b, true);
xmlhttp_b.send(null);
function get_b()
{
  if (xmlhttp_b.readyState == 4)
  {
    if (xmlhttp_b.status == 200)
    {
      var str = xmlhttp_b.responseText;
      if (str.indexOf('dir\n') > -1)
      {
        alert(path + '发现.svn泄露');
      } 
      else {
      };
    } 
    else {
    };
  }
}
