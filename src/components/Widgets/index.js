import React from 'react'
import Search from '@mui/icons-material/Search'
import { Widget, Header, DivIcon, DivContent} from "./styles"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'

export const Widgets = () => {
  return (
    <Widget>
      <Header>
        <DivIcon>
          <Search className="SearchIcon"/>
          <input placeholder='Buscar en Twitter'></input>
        </DivIcon>
      </Header>
      <DivContent>

        <h2>What's happening</h2>
        <TwitterTweetEmbed
          tweetId={'1617003632746172416'}
        />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ArielAriasOk"
          options={{height: 400}}
        />

        <TwitterShareButton
          url={'https://facebook.com/saurabhnemade'}
          options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
        />

      </DivContent>
    </Widget>
  )
}
