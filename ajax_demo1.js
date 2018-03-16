window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}

window.$ = window.jQuery;
window.jQuery.ajax=function({url,method,body,success, fail}){
  let request=new XMLHttpRequest();
  request.open(method,url);  //配置request
  request.onreadystatechange=()=>{
    if(request.readyState==4){
      if(request.status >= 200 && request.status < 300){
        success.call(undefined,request.responseText)
      }else if(request.status >= 400){
        fail.call(undefined, request)
      }
    }
  }
  request.send(body);
}

function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click', (e)=>{
  window.jQuery.ajax({
    url:'/WEIDABAO',
    method:'get',
    body:'helloWorld',
    success:(x)=>{
      f1.call(undefined,x)
      f2.call(undefined,x)
    },
    fail:(x)=>{
      console.log(x)
      console.log(x.status)
      console.log(x.responseText)
    }
  })
})
