$(document).ready(function(){
  $('img').click(function(){
    var pic =this;
    pickswap(pic);
  });
});
function pickswap(pic)
{
  var source=$(pic).attr('src');
  var alternate=$(pic).attr('data-alt-src');
  $(pic).attr('src',alternate);
  $(pic).attr('data-alt-src',source);
}
