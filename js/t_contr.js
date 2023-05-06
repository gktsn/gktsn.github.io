var size;
function setup(){
       size = readCookie("font");
       if (size == 0) size = 11;
       document.all["content"].style.fontSize=size;
}

function exit(){
       writeCookie("font", size, 24, "/");
}

function rollon(tag){
       tag.style.cursor = 'hand';
}

function smaller(){
       if (size > 11){
            size--;
            document.all["content"].style.fontSize=size;
       }
}

function bigger(){
       if (size < 15){
            size++;
            document.all["content"].style.fontSize=size;
       }
}

function writeCookie(name, value, hours, root)
{
  var expire = "";
  var path = "";
  if(hours != null)
  {
    expire = new Date((new Date()).getTime() + hours * 3600000);
    expire = "; expires=" + expire.toGMTString();
  }
  path = "; path=" + root;
  document.cookie = name + "=" + escape(value) + expire + path;
}

function readCookie(name)
{
  var cookieValue = 0;
  var search = name + "=";
  if(document.cookie.length > 0)
  {
    offset = document.cookie.indexOf(search);
    if (offset != -1)
    {
      offset += search.length;
      end = document.cookie.indexOf(";", offset);
      if (end == -1) end = document.cookie.length;
      cookieValue = unescape(document.cookie.substring(offset, end))
    }
  }
  return cookieValue;
}
