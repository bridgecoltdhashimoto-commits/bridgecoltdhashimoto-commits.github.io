(function(){
  const path = location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.nav a[data-path]').forEach(a=>{
    const ap = a.getAttribute('data-path');
    const ok = (ap === '/' && (path === '/' || path.endsWith('/index.html')))
            || (ap !== '/' && path.endsWith('/'+ap));
    if (ok) a.classList.add('active');
  });
})();
