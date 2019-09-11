import React from 'react';
import { Header, Footer } from 'components';

const Page = () => (
  <>
    <Header />
    <main className="page-body">
      <section className="section">
        <div className="container">
          <h3 className="heading">Page</h3>
          <p className="paragraph">This is a generic page</p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Page;
