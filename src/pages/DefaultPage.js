import React from 'react';
import { PageLayout } from 'layouts/PageContainer';

const Page = () => (
  <PageLayout pageClass="page">
    <section className="section">
      <div className="container">
        <h3 className="heading">Page</h3>
        <p className="paragraph">This is a generic page</p>
      </div>
    </section>
  </PageLayout>
);

export default Page;
