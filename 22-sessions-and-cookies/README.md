# Rails Quest
We have a pre-built trivia app which presents the user with questions in succession, and allows them to answer.
We can check in our controller whether the user answered correctly or not, but how can we get the server to 'remember' how many questions a user has answered correctly for as long as they are on the site?

## Deliverables
* Add a feature which displays the number of questions a user has answered correctly
* Add a message which tells the user whether or not they got the last answer correct

## External Resources:

- [Rails Docs on Sessions](https://guides.rubyonrails.org/security.html#sessions)
- [Wiki Page on HTTP Headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)


## HTTP Stateless:

The HTTP client, i.e., a browser initiates an HTTP request and after a request is made, the client waits for the response. The server processes the request and sends a response back after which client disconnect the connection. So client and server knows about each other during current request and response only. Further requests are made on new connection like client and server are new to each other.

As mentioned above, HTTP is connectionless and it is a direct result of HTTP being a stateless protocol. The server and client are aware of each other only during a current request. Afterwards, both of them forget about each other. Due to this nature of the protocol, neither the client nor the browser can retain information between different requests across the web pages.


## Cookie:

With a cookie, you can store information on the web browser's system, in form of strings as key-value pairs that the web server has previously sent to this browser. The information is later sent back from the browser to the server in the HTTP header. A cookie (if configured accordingly) is deleted from the browser system neither by restarting the browser nor by restarting the whole system. Of course, the browser's user can manually delete the cookie.


As HTTP is a stateless protocol, we encounter special problems when developing applications. An individual web page has nothing to do with another web page and they do not know of one another. But as you want to register only once on many websites, not over and over again on each individual page, this can pose a problem. The solution is called session and Rails offers it to the programmer transparently as session[] hash. Rails automatically creates a new session for each new visitor of the web page. This session is saved by default as cookie and so it is subject to the 4 kB limit. But you can also store the sessions in the database [see the section called “Saving Sessions in the Database”](http://www.xyzpub.com/en/ruby-on-rails/3.2/sessions.html#sessions_datenbank). An independent and unique session ID is created automatically and the cookie is deleted by default when the web browser is closed.



