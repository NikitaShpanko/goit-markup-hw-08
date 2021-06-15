(() => {
  const highLight = function (className) {
    const url = document.URL;
    const elems = document.querySelectorAll('a.' + className);
    console.log(elems);
    for (i = 0; i < elems.length; i++)
      if (elems[i].href == url) {
        elems[i].classList.add(className + '_current');
        //return; //may have many
      }
  };

  highLight('nav__link');
  highLight('mob-nav__link');
})();
