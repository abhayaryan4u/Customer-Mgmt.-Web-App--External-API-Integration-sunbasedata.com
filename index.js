// var jwt = localStorage.getItem("jwt");
// if (jwt != null) {
//   window.location.href = './login.html';
// }

function login() {
  const login_id = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();

  xhttp.open("POST", "https://cors-anywhere.herokuapp.com/https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify({
    "login_id": login_id,
    "password": password
  }));
  
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        const objects = JSON.parse(this.responseText);
        console.log(objects);
        if (objects['access_token'] != 'null') {
          localStorage.setItem("jwt", objects['access_token']);
          Swal.fire({
            text: objects['message'],
            icon: 'success',
            title: 'Success',
            text: 'Logged In successfully!',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = './customer-list.html';
            }
          });
        } else {
          Swal.fire({
            text: objects['message'],
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      } else {
        console.error('Error:', this.status, this.statusText);
      }
    }
  };
  return false;
}
