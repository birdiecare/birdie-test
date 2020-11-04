import React, { useEffect, useState } from 'react';
import Layout from 'components/layout';
import SEO from 'components/seo';
import Loading from 'components/loading';
import LandingView from 'views/landing';

import { useDataContext } from 'contexts/data-context';

const IndexPage = () => {
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(true);

  const { getMood } = useDataContext();

  const fetchMood = async () => {
    try {
      setLoading(true);
      const apiMood = await getMood();
      setMood(apiMood);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMood();
    // eslint-disable-next-line
  }, []);

  return (
      <Layout>
        <SEO title="Mood" />
          {loading ? <Loading/> : <LandingView mood={mood} loading={loading}/>}
      </Layout>
  );
};

export default IndexPage;
