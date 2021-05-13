import React from 'react';
import { useCurrentUser } from '@/hooks/index';
import Source from '@/components/source/source';
import SEO from '@/components/SEO';

const IndexPage = () => {
  const [user] = useCurrentUser();

  return (
    <>

<SEO title={"underline Jobs"}
         description={"Find remote jobs for digial nomaid"}
         image={""}
         />
      <style jsx>
        {`
          p {
            text-align: center;
            color: #888;
          }
          h3 {
            color: #555;
          }
        `}
      </style>

      <div class="site-banner">
      <div class="wrapper wrapper--main wrapper--narrow">

        <div class="site-banner__barr">

          <h1 class="headline headline--b-margin-large">
            Remote Jobs for Digital Nomads
          </h1>

          <p
            class="headline headline__text headline__text-gap headline--dull
            headline--b-margin-large">
            Info
          </p>

        </div>

      </div>

    </div>



      <div style={{ marginBottom: '2rem' }}>
        <Source />
      </div>
    </>
  );
};

export default IndexPage;

