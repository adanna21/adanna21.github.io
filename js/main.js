function navClick(){
  const sidenav = document.getElementById('realSidenav');
  const sidenavContents = document.getElementById('sidenav-contents');
  const aboutme = document.getElementById('main-aboutme');

  sidenav.classList.toggle('active');
  sidenav.classList.toggle('hover');
  sidenavContents.classList.toggle('active');
  aboutme.classList.toggle('active');

}
