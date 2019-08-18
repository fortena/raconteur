import React from 'react';
import styled from 'styled-components';
import PodcastSearch from './PodcastSearch';
import Racounteurs from './Raconteurs';
import Slider from './Slider';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Permanent Marker', cursive;
  font-size: 72px;
  margin: 0px 0px 20px 0px;
  @media (max-width: 400px) {
    font-size: 48px;
    margin: 0px 0px 10px 0px;
  }
`;

export default ({ history, location }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Slider
          podcasts={[
            {
              id: '658b13f1769449f89b937754c17feee4',
              image:
                'https://cdn-images-1.listennotes.com/podcasts/dan-carlins-hardcore-history-dan-carlin-THDlEiZ9tbB.300x300.jpg',
              publisher_original: 'Dan Carlin',
              title_original: "Dan Carlin's Hardcore History"
            },
            {
              id: 'ffb64d537bb14563a648de7772d47334',
              image:
                'https://cdn-images-1.listennotes.com/podcasts/common-sense-with-dan-carlin-dan-carlin-fGTUb53Xxgk.300x300.jpg',
              publisher_original: 'Dan Carlin',
              title_original: 'Common Sense with Dan Carlin'
            },
            {
              id: '74f6f88d4bdc4e5cb2982c50d17295b1',
              image:
                'https://cdn-images-1.listennotes.com/podcasts/dan-carlins-hardcore-history-addendum-dan-isTKMRywPHE.300x300.jpg',
              publisher_original: 'Dan Carlin',
              title_original: "Dan Carlin's Hardcore History: Addendum"
            }
          ]}
          history={history}
          imageUrl="https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2015/09/dan_carlin_-_h_2015.jpg"
          title="Dan Carlin"
        />
        {/* <Racounteurs /> */}
        <Title>raconteur</Title>
      </TitleWrapper>
      <PodcastSearch history={history} location={location} />
    </Wrapper>
  );
};
