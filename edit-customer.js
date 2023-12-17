const API_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://qa2.sunbasedata.com/sunbase/portal/api';
function updateCustomer() {
    // Retrieve the UUID from the URL query parameters
    var urlParams = new URLSearchParams(window.location.search);
    var uuid = urlParams.get('uuid');
    const token = localStorage.getItem('jwt');
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const street = document.getElementById('street').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    var requestBody = {
        "first_name": firstName,
        "last_name": lastName,
        "street": street,
        "address": address,
        "city": city,
        "state": state,
        "email": email,
        "phone": phone
      };

      if (firstName === '' || lastName === '') {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'First name and last name are mandatory fields.',
        });
        return false;
      }
    
      // Make the API call
      fetch(`${API_BASE_URL}/assignment.jsp?cmd=update&uuid=${uuid}`, {
        method: 'POST',
        
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody
        )
      })
      .then(response => {
        if (response.status === 200) {
            // Handle success
            Swal.fire({
                title: 'Success',
                text: 'Customer updated successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then(() => {
                // Redirect to the customer list page
                window.location.href = 'customer-list.html';
              });
            }else if (response.status === 500) {
            // Handle UUID not found
            Swal.fire('Error', 'UUID not found', 'error');
          } else if (response.status === 400) {
            // Handle empty body
            Swal.fire('Error', 'Body is empty', 'error');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          Swal.fire('Error', 'An error occurred while updating the customer', 'error');
        });
      
        // Prevent form submission
        return false;
      }