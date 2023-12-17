function createCustomer() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const street = document.getElementById('street').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const token = localStorage.getItem('jwt');

    // Validation: Check if first name and last name are provided
    if (firstName === '' || lastName === '') {
      Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: 'First name and last name are mandatory fields.',
      });
      return false;
    }

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://cors-anywhere.herokuapp.com/https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Authorization", `Bearer ${token}`);

    xhttp.send(JSON.stringify({
        "first_name": firstName,
        "last_name": lastName,
        "street": street,
        "address": address,
        "city": city,
        "state": state,
        "email": email,
        "phone": phone
    }));

    xhttp.onreadystatechange = function () {
        if (this.status == 201) {
                Swal.fire({
                  icon: 'success',
                  text: 'New Customer Created Successfully',
                  confirmButtonText: 'OK'
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = './customer-list.html';
                  }
                });  
        } else {
            console.error('Error:', this.status, this.statusText);
        }
    };
    return false;
}


// function createCustomer() {
//   const firstName = document.getElementById('firstName').value;
//   const lastName = document.getElementById('lastName').value;
//   const street = document.getElementById('street').value;
//   const address = document.getElementById('address').value;
//   const city = document.getElementById('city').value;
//   const state = document.getElementById('state').value;
//   const email = document.getElementById('email').value;
//   const phone = document.getElementById('phone').value;
//   const token = localStorage.getItem('jwt');

//   const xhttp = new XMLHttpRequest();
//   xhttp.open("POST", "https://cors-anywhere.herokuapp.com/https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create");
//   xhttp.setRequestHeader("Content-Type", "application/json");
//   xhttp.setRequestHeader("Authorization", `Bearer ${token}`);

//   xhttp.send(JSON.stringify({
//       "first_name": firstName,
//       "last_name": lastName,
//       "street": street,
//       "address": address,
//       "city": city,
//       "state": state,
//       "email": email,
//       "phone": phone
//   }));

//   xhttp.onreadystatechange = function () {
//       if (this.status == 201) {
//               Swal.fire({
//                 icon: 'success',
//                 title: 'Success',
//                 text: 'Customer Created successfully!',
//                 confirmButtonText: 'OK'
//               }).then((result) => {
//                 if (result.isConfirmed) {
//                   window.location.href = './customer-list.html';
//                 }
//               });  
//       } else {
//           console.error('Error:', this.status, this.statusText);
//       }
//   };
//   return false;
// }




