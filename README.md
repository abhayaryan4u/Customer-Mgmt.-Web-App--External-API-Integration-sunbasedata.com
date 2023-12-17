# Customer-Mgmt.-Web-App--External-API-Integration-sunbasedata.com
The web app can perform CRUD Operations by calling external API provided by https://www.sunbasedata.com . It runs fine using CORS handler provided by https://cors-anywhere.herokuapp.com . The client(Sunbasedata) server needs to allow the requests from any domain if we want to use it directly.

I have created a web app as per the problem statement given by client. The web app has 3 screens- Login Page, Customer List, New Customer Registration. One additional page is added where we can update the existing customer details.

Tech Stacks Used:
* HTML
* CSS
* JavaScript

  At login page, when we enter the credentials provided by client, a request is sent to the API for login authentication and after receiving response, the page redirects to Customer List page. Here, all the customers with their details are listed alongwith action buttons in their respective rows by which we can edit or delete the customer details.
  There is also a "Add Customer" button by which we can get redirected to enter new customer details page for new details entry.

  So, basically I am using API calls during 'Login", "New Customer Registration", "Delete", "Editing/Updating" and all these operations are performed and get reflected in the customer list.

  Note- The whole project will encounter CORS error issue during API calls. This is because the API client needs to allow API requests from other domains which is missing in this case. We can handle this error using herokuapp api as mentioned at the top i.e by adding heroku link to the api call method in our code and appending client API link together but this is only a temporary solution as during running our web app and initiating first call, we need to open inspect element window and click on the error link and then click on allow demo CORS handling button. This works for few hours and then the demo expires.
  
  I have removed the heroku link from the code as it is not appreciated for development purpose. We can rather use it for testing. Also we will rely on client side CORS handling method i.e allowing the API call requests from any domain.
