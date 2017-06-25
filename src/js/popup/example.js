import React                from 'react';

const App = () => {
    return (
        <div>
          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Brand</a>
            </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">
                    <i className="glyphicon glyphicon-thumbs-up"></i>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                    <li>
                      <a href="#">One more separated link</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>

          <section>
            <table className="table table-hover">
              <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              </tbody>
            </table>
          </section>
        </div>
    );
    return null;
}

export default App;