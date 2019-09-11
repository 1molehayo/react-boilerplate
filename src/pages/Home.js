import React, { Component } from 'react';
import { Header, Footer } from 'components';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="page-body">
          <section className="section">
            <div className="container">
              <h3 className="heading">Home</h3>
              <p className="paragraph">This is the home page</p>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
