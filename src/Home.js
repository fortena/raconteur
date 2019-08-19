import React from 'react';
import styled from 'styled-components';
import PodcastSearch from './PodcastSearch';
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
          slides={[
            {
              imageUrl:
                'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2015/09/dan_carlin_-_h_2015.jpg',
              title: 'Dan Carlin',
              podcasts: [
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
              ]
            },
            {
              imageUrl:
                'http://pics.yatpay.net/17-10-27/1200/20171027-0016.jpg',
              title: 'Mike Duncan',
              podcasts: [
                {
                  id: 'ed7b7197dba8478bae1e8ab6ea412d81',
                  image:
                    'https://cdn-images-1.listennotes.com/podcasts/revolutions-mike-duncan-dOrPaDkfLUo.300x300.jpg',
                  publisher_original: 'Mike Duncan',
                  title_original: 'Revolutions'
                },
                {
                  id: '0796ebc1a6874c05a7eb3a8b5beba450',
                  image:
                    'https://cdn-images-1.listennotes.com/podcasts/the-history-of-rome-mike-duncan-zLe-i7FbwnA.300x300.jpg',
                  publisher_original: 'Mike Duncan',
                  title_original: 'The History of Rome'
                }
              ]
            },
            {
              imageUrl:
                'https://timedotcom.files.wordpress.com/2016/04/jad-abumrad.jpg?quality=85&w=1012&h=569&crop=1',
              title: 'Jad Abumrad',
              podcasts: [
                {
                  id: '535815a492a941d79b95be6ae1c5cc9c',
                  image:
                    'https://cdn-images-1.listennotes.com/podcasts/radiolab-wnyc-studios-LcwYyVzfJx9.300x300.jpg',
                  publisher_original: 'WNYC Studios',
                  title_original: 'Radiolab'
                },
                {
                  id: 'bda17730014841048b374b102c1cf187',
                  image:
                    'https://cdn-images-1.listennotes.com/podcasts/radiolab-presents-more-perfect-wnyc-studios-Clw1Jjf4Bry.300x300.jpg',
                  publisher_original: 'WNYC Studios',
                  title_original: 'Radiolab Presents: More Perfect'
                }
              ]
            },
            {
              imageUrl:
                'https://www.sundaypost.com/wp-content/uploads/sites/13/2019/07/5d3abdaf8ee852.79749622.jpg',
              title: 'Alex Goldman and PJ Vogt',
              podcasts: [
                {
                  id: '3909a2c0c06c47d2a30422d62fe969be',
                  image:
                    'https://cdn-images-1.listennotes.com/podcasts/reply-all-gimlet-BNLxkVvzfKP-U8JoNCP62gM.300x300.jpg',
                  publisher_original: 'Gimlet',
                  title_original: 'Reply All'
                }
              ]
            },
            {
              imageUrl:
                'https://1omv27318zyr1hkzinzz4e4u-wpengine.netdna-ssl.com/wp-content/uploads/2014/09/malcolm-gladwell-945x540.jpg',
              title: 'Malcolm Gladwell',
              podcasts: [
                {
                  id: 'e023bce0d56d458b99775cbed7e50f3a',
                  image:
                    'https://cdn-images-1.listennotes.com/podcasts/revisionist-history-pushkin-industries-iCe4S7HnXP9-dnIGUict_ZQ.300x300.jpg',
                  publisher_original: 'Pushkin Industries',
                  title_original: 'Revisionist History'
                },
                {
                  id: '1cdda6016c0143d9993d7382f69e237d',
                  image:
                    'https://cdn-images-1.listennotes.com/podcasts/broken-record-with-malcolm-gladwell-rick-le3I0pCMrDb.300x300.jpg',
                  publisher_original: 'Pushkin Industries',
                  title_original:
                    'Broken Record with Malcolm Gladwell, Rick Rubin, and Bruce Headlam'
                },
                {
                  id: '4474938df00745d79abb9759387a06f3',
                  image:
                    'https://cdn-images-1.listennotes.com/podcasts/solvable-pushkin-industries-O_SAFm3Gery-gZfsqC9wyxi.300x300.jpg',
                  publisher_original: 'Pushkin Industries',
                  title_original: 'Solvable'
                }
              ]
            },
            {
              imageUrl:
                'https://assets.about.me/background/users/d/a/v/davidmcraney_1402869126_68.jpg',
              title: 'David McRaney',
              podcasts: [
                {
                  id: 'e9928c2a58ae46268460af9293446f72',
                  image:
                    'https://cdn-images-1.listennotes.com/podcasts/you-are-not-so-smart-you-are-not-so-smart-R0bxgrDycUj.300x300.jpg',
                  publisher_original: 'You Are Not So Smart',
                  title_original: 'You Are Not So Smart'
                }
              ]
            }
          ]}
          history={history}
        />
        <Title>raconteur</Title>
      </TitleWrapper>
      <PodcastSearch history={history} location={location} />
    </Wrapper>
  );
};
