<html>
    <body>
      <div class="container">
        <div class="jumbotron text-center">
          <h1>Image Search Abstraction Layer</h1>
        </div>
        <div class="well">
          <p>This is a web application that allows user to search for images using query string. I used express to get the query string and
          used that to get JSON from google search images. Then I displayed the JSON and put them into the mongo database. The most recent
          information that was put into the database can be used by the client to display most recent search. 
          </p>
          <blockquote>
            <h2>Here are some examples:</h2>
            <a href="https://wanjongkim-image-search.herokuapp.com/api/imagesearch?searchInput=cats&offset=1">https://wanjongkim-image-search.herokuapp.com/api/imagesearch?searchInput=cats&offset=1</a>
            <p>Change the offset to display more/less searches and searchInput for a topic of your choice.</p>
            <a href="https://wanjongkim-image-search.herokuapp.com/api/most-recent-search">https://wanjongkim-image-search.herokuapp.com/api/most-recent-search</a> <br/>
            <a href="https://wanjongkim-image-search.herokuapp.com/api/imagesearch?searchInput=cats">https://wanjongkim-image-search.herokuapp.com/api/imagesearch?searchInput=cats</a>
          </blockquote>
        </div>
      </div>
  </body>
</html>
