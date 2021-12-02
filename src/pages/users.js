export default function Users() {
return (

<div>

  <div>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
    <meta name="description" content />
    <meta name="author" content="KDG" />
    <link rel="icon" href="../../favicon.ico" />
    <title>Admin Area | Users</title>
    {/* Bootstrap core CSS */}
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet" />
    {/* IE10 viewport hack for Surface/desktop Windows 8 bug */}
    {/* <link href="../../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet"> */}
    {/* Custom styles for this template */}
    {/* <link href="starter-template.css" rel="stylesheet">*/}
    {/* Just for debugging purposes. Don't actually copy these 2 lines! */}
    {/*[if lt IE 9]><![endif]*/}
    {/*  */}
    {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
    {/*[if lt IE 9]>


    <![endif]*/}
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">AdminStrap</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="index.html">Dashboard</a></li>
            <li><a href="pages.html">Pages</a></li>
            <li><a href="posts.html">Posts</a></li>
            <li className="active"><a href="users.html">Users</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Welcome, Gillvend</a></li>
            <li><a href="login.html">Logout</a></li>
          </ul>
        </div>{/*/.nav-collapse */}
      </div>
    </nav>
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h1><span className="glyphicon glyphicon-cog" aria-hidden="true" /> Users<small>Manager Site Users</small></h1>
          </div>
          <div className="col-md-2">
            <div className="dropdown create">
              <button type="button" className="btn btn-default dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Create Content
                <span className="caret" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a type="button" data-toggle="modal" data-target="#addPage">Add Page</a></li>
                <li><a href="#">Add Post</a></li>
                <li><a href="#">Add User</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section id="breadcrumb">
      <div className="container">
        <ol className="breadcrumb">
          <li><a href="index.html">Dashboard</a></li>
          <li className="active">Users</li>
        </ol>
      </div>
    </section>
    <section id="main">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <a href="index.html" className="list-group-item active main-color-bg">
                <span className="glyphicon glyphicon-cog" aria-hidden="true" /> Dashboard
              </a>
              <a href="pages.html" className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true" /> Pages <span className="badge">12</span></a>
              <a href="posts.html" className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true" /> Posts <span className="badge">33</span></a>
              <a href="users.html" className="list-group-item"><span className="glyphicon glyphicon-user" aria-hidden="true" /> Users <span className="badge">203</span></a>
            </div>
            <div className="well">
              <h4>Disk Space Used</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                  60%
                </div>
              </div>
              <h4>Bandwidth Used</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                  40%
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            {/* Website Overview */}
            <div className="panel panel-default">
              <div className="panel-heading main-color-bg">
                <h3 className="panel-title">Users</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="Filter Users..." />
                  </div>
                  <br />
                  <table className="table table-striped table-hover">
                    <tbody><tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined</th>
                        <th />
                      </tr>
                      <tr>
                        <td>Budi prastol</td>
                        <td>budiprastol@gmail.com</td>
                        <td>Dec 12, 2021</td>
                        <td><a href="edit.html" className="btn btn-default">Edit</a> <a href="#" className="btn btn-danger">Delete</a></td>
                      </tr>
                      <tr>
                        <td>Gilvend Lumba</td>
                        <td>gilvendlumba@gmail.com</td>
                        <td>Dec 12, 2021</td>
                        <td><a href="edit.html" className="btn btn-default">Edit</a> <a href="#" className="btn btn-danger">Delete</a></td>
                      </tr>
                      <tr>
                        <td>angel Manua</td>
                        <td>angelmanua@gmail.com</td>
                        <td>Dec 12, 2021</td>
                        <td><a href="edit.html" className="btn btn-default">Edit</a> <a href="#" className="btn btn-danger">Delete</a></td>
                      </tr>
                      <tr>
                        <td>Maikel Johanes</td>
                        <td>maikeljohanes@gmail.com</td>
                        <td>Dec 12, 2021</td>
                        <td><a href="edit.html" className="btn btn-default">Edit</a> <a href="#" className="btn btn-danger">Delete</a></td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
            </div>
            {/* Latest Users */}
          </div>        
        </div>
      </div>
    </section>
    <footer id="footer">
      <p>Front End Web Development,2021</p>
    </footer>
    {/* Modals */}
    {/* Add Page */}
    <div className="modal fade" id="addPage" tabIndex={-1} role="dialog" aira-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="close"><span aria-hidden="true" /></button>
              <h4 className="modal-title" id="myModalLabel">Add Page</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Page Title</label>
                <input type="text" className="form-control" placeholder="Page Title" />
              </div>
              <div className="form-group">
                <label>Page Body</label>
                <textarea name="editor1" className="form-control" placeholder="Page Body" defaultValue={""} />
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Published
                </label>
              </div>
              <div className="form-group">
                <label>Meta Tags</label>
                <input type="text" className="form-control" placeholder="Add Some Tags..." />
              </div>
              <div className="form-group">
                <label>Meta Description</label>
                <input type="text" className="form-control" placeholder="Add Meta Description..." />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* <div class="container">

<div class="starter-template">
  <h1>Bootstrap starter template</h1>
  <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
</div>

    </div> */}{/* /.container */}
    {/* Bootstrap core JavaScript
    ================================================== */}
    {/* Placed at the end of the document so the pages load faster */}
    {/*  */}
    {/* IE10 viewport hack for Surface/desktop Windows 8 bug */}
    {/*  */}
  </div>
  
  {'}'}
</div>)}
