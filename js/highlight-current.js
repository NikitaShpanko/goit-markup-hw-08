(() => {
  const highlightLink = function (className) {
    var url = document.URL;
    if (url[url.length - 1] == '/') url += 'index.html';
    const elems = document.querySelectorAll('a.' + className);
    for (i = 0; i < elems.length; i++)
      if (elems[i].href == url) {
        elems[i].classList.add(className + '_current');
        //return; //may have many
      }
  };

  highlightLink('nav__link');
  highlightLink('mob-nav__link');
})();
