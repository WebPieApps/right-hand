import { Switch, Route } from "react-router-dom";

import './App.css';
import RandomUsers from "./components/random_users/RandomUsers";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

import Home from "./components/Home/Home";

import Github from "./components/github/Github";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import CDN from "./components/CDN/CDN";
import LibraryDetails from "./components/CDN/LibraryDetails";

const App = () => {
  const extraProps = { color: 'red' }

  return (
    <main className="app-init">
     
      <Header />
      <section className="content-holder-section container">

        <Switch>
          <Route exact path='/' component={Home} />
          {/* both /roster and /roster/:number begin with /roster */}
          <Route path='/github' component={Github} />

          <Route path='/cdn' render={(props) => (
            <CDN {...props} data={{ title: 'Get CDN of any libraries' }} />
          )} />

          <Route path='/details' render={(props) => (
            <LibraryDetails {...props} data={{ title: 'Get details of any libraries' }} />
          )} />

          <Route path='/lib/:name' component={LibraryDetails} />

          <Route path='/about' component={About} />

          <Route path="/random-user" component={RandomUsers} />

          <Route path='/contact' render={(props) => (
            <Contact {...props} data={extraProps} />
          )} />


          {/* <Route path='/page' children={(props) => (
              props.match
                ? <Page {...props} />
                : <EmptyPage {...props} />
            )} /> */}

        </Switch>

      </section>
      {/* Content holder section end here */}

      <Footer />
    </main>
  )
}

export default App;
