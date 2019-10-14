import React, { Component } from 'react';
import { PageLayout } from 'layouts/PageContainer';

class Home extends Component {
  render() {
    return (
      <PageLayout pageClass="home">
        <>
          <section className="section">
            <div className="container">
              <h3 className="heading">Home</h3>
              <p className="paragraph">This is the home page</p>
            </div>
          </section>
        </>
      </PageLayout>
    );
  }
}

export default Home;
