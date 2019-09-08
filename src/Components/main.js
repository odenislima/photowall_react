import React, { Component } from "react";
import Photowall from "./photoWall";
import AddPhoto from "./addPhoto";
import Single from "./single";
import { Route, Link } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props
      .startLoadingPosts()
      .then(() => this.setState({ loading: false }));
    this.props.startLoadingComments();
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Photowall {...this.props} />
            </div>
          )}
        />

        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
        <Route
          path="/single/:id"
          render={params => (
            <Single loading={this.state.loading} {...this.props} {...params} />
          )}
        />
      </div>
    );
  }
}

export default Main;
