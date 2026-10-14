(function(){
var d=document.getElementById('lockdlg');
function openD(){ if(d&&d.showModal){d.showModal();} else if(d){d.setAttribute('open','');} }
document.addEventListener('click',function(ev){
  var t=ev.target.closest('[data-lock]'); if(t){ev.preventDefault();openD();return;}
  if(d&&ev.target===d){d.close();}
  var tb=ev.target.closest('[data-tab]');
  if(tb){
    document.querySelectorAll('[data-tab]').forEach(function(x){x.classList.remove('on');x.setAttribute('aria-selected','false')});
    tb.classList.add('on');tb.setAttribute('aria-selected','true');
    var n=document.getElementById('tabnote'); if(n&&window.__notes){n.textContent=window.__notes[tb.getAttribute('data-tab')]||window.__notes.occ;}
  }
});
})();
