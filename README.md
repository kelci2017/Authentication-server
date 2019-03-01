## Idea

* The authentication server is mainly for app servers
* The authentication server is independent with the app server, it could be shared with many app servers
* The app server call the getToken to fetch token and call the vertifyToken for authentication
* The token use the Bearer scheme
* The token expiration time is 2 days, it can be changed in the auth/auth_config.js
* The authentication server and the app server has the same auth_config key (Pls refer to another repo https://github.com/kelci2017/App-server for the app server)

## Instructions
If you would like to download the code and try it for yourself:

* Install packages: npm install
* Change out auth keys in auth/auth_connfig.js
* Launch: npm start
* call the webservice in restclient with:<br/>
  http://localhost:8080/auth/getToken<br/>
  notes: with headers: "requestkey" & "applicationid"<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the requestkey could be gernerated with the auth_config key and "email" in the payload with https://jwt.io/<br/>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the applicationid is any numbers you like<br/>
  http://localhost:8080/auth/verifyToken<br/>
  notes: with headers: "authentication": Bearer JwtToken