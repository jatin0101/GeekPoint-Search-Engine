# GeekPoint

GeekPoint is a search engine designed specifally to search DSA (data sturctures and algorithms) problems across various CP platforms.
It has a nice user experience and it finds search results in few seconds. The search engine uses BM 25 similarity function to estimate the relevance of documents in database to the given search query.
The search engine is run by a Node.js + Express server. The frontend is written using HTML, BootStrap CSS and EJS. The database is created by scrapping web using Beautiful Soup and Selenium in python and is stored in MongoDB.

Check out GeekPoint @ https://geekpoint-search-engine.herokuapp.com/search

The main page:

<img src="https://user-images.githubusercontent.com/86053879/170692180-a1bb86f4-cb91-4cbe-836f-28965b19108c.png" width="600">

The search result page:

<img src="https://user-images.githubusercontent.com/86053879/170692238-2a516962-2d95-487c-8a71-7e6dd250b86d.png" width="600">

On opening a problem, a new page will display the problem statement:

<img src="https://user-images.githubusercontent.com/86053879/170692366-ff9d3126-8572-4c16-81c8-819235261956.png" width="600">
Click on the 'Go to Problem website' button at the end of this page to visit the problem source.

### Steps to build the code locally

* Download and extract all the files from the git repo.
* open the downloaded folder inside the terminal.
* Run the following code:
```
npm install
npm run start
```
* Wait for some time untill the localhost port is setup and is connected to the database. Once the port is setup, 'connected' will be displayed on the terminal.
* The localhost port is ready to use. You can visit 'localhost:3000/' in your browser to visit the site.
