function sync(el){
  const val = el.value;
  el.parentElement.querySelector(".after").style.width = val + "%";
}