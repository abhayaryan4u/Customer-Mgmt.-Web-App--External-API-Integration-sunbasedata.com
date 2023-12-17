
const API_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://qa2.sunbasedata.com/sunbase/portal/api';
const token = localStorage.getItem('jwt');
let customerDetails = {};


//delete function
async function deleteCustomer(uuid) {
    const API_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://qa2.sunbasedata.com/sunbase/portal/api';
    const token = localStorage.getItem('jwt');

    try {
        const response = await fetch(`${API_BASE_URL}/assignment.jsp?cmd=delete&uuid=${uuid}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.ok) {
            console.log('Successfully deleted');
            getCustomerList();
            
        } else if (response.status === 400) {
            console.error('UUID not found');
        } else {
            console.error('Error not deleted');
        }
    } catch (error) {
        console.error('Error deleting customer:', error);
    }
}

var currentUuid = null;
//edit customer function
function editCustomer(uuid) {
    // Redirect to the edit-customer.html page with the uuid as a query parameter
    window.location.href = `./edit-customer.html?uuid=${uuid}`;
}





//get customer list function
async function getCustomerList() {
    try {
        const response = await fetch(`${API_BASE_URL}/assignment.jsp?cmd=get_customer_list`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            const customerListElement = document.getElementById('customerList');
            customerListElement.innerHTML = ''

            data.forEach(customer => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    
                    <td>${customer.first_name}</td>
                    <td>${customer.last_name}</td>
                    <td>${customer.street}</td>

                    <td>${customer.address}</td>
                    <td>${customer.city}</td>
                    <td>${customer.state}</td>
                    <td>${customer.email}</td>
                    <td>${customer.phone}</td>
                    <td><button class="btn btn-sm btn-danger" onclick="deleteCustomer('${customer.uuid}')">Delete</button></td>
                    <td><button class="btn btn-sm btn-success" onclick="editCustomer('${customer.uuid}')">Edit</button></td>
                `;

                customerListElement.appendChild(row);
            });
        } else {
            alert('Failed to get customer list. Please check your request.');
        }
    } catch (error) {
        console.error('Error getting customer list:', error);
    }
}


function redirectToCreateCustomerPage() {
    window.location.href = './new-customer.html';
}


document.addEventListener('DOMContentLoaded', function () {
    const addCustomerButton = document.querySelector('.btn-primary');

    if (addCustomerButton) {
        addCustomerButton.addEventListener('click', redirectToCreateCustomerPage);
    }


// Call the function to load customer list when the page loads
window.onload = getCustomerList;
}

);
