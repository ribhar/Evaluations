function sidebar() {
  let sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = `<div><h1>Blog Search</h1></div>
  <div>Login</div>
  <div><input type="text" placeholder="Search blog" id="searchbar" ></div>
  <div>Startups</div>
  <div>Blogletters</div>
  <div>Audio</div>
  <div>Video</div>`
}
export default sidebar;
