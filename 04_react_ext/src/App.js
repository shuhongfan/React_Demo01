import {Component, Fragment} from "react";
import Demo from "./components/8_ErrorBoundary/Parent";

export default class App extends Component{
  render() {
    return (
        <Fragment>
          <Demo x="101"/>
        </Fragment>
    );
  }
}