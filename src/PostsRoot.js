// @flow

import React from 'react';
import Header from './Header';
import {useLazyLoadQuery} from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';
import Posts from './Posts';
import ErrorBox from './ErrorBox';
import {useAsync} from 'react-async-hook';
import {channelStatus} from './lib/Twitch';
import {Anchor} from 'grommet';
import {TwitchStream, TwitchVOD} from './TwitchStream';

import type {
  PostsRoot_Query,
  PostsRoot_QueryResponse,
} from './__generated__/PostsRoot_Query.graphql';

export const query = graphql`
  # repoName and repoOwner provided by fixedVariables
  query PostsRoot_Query($repoName: String!, $repoOwner: String!)
  @persistedQueryConfiguration(
    accessToken: {environmentVariable: "OG_GITHUB_TOKEN"}
    fixedVariables: {environmentVariable: "REPOSITORY_FIXED_VARIABLES"}
    cacheSeconds: 300
  ) {
    gitHub {
      ...Avatar_gitHub @arguments(repoName: $repoName, repoOwner: $repoOwner)
      repository(name: $repoName, owner: $repoOwner) {
        ...Posts_repository
      }
    }
  }
`;

export const PostsRoot = () => {
  const data: ?PostsRoot_QueryResponse = useLazyLoadQuery<PostsRoot_Query>(
    query,
    // $FlowFixMe: expects variables that were persisted
    {},
    {fetchPolicy: 'store-and-network'},
  );

  if (!data) {
    return null;
  }

  const asyncHero = useAsync(channelStatus, []);
  const asyncResultBool =
    asyncHero.result &&
    asyncHero.result.twitchTv.makeRestCall.get.jsonBody.stream === null;

  const respository = data?.gitHub ? data?.gitHub.repository : null;
  if (!respository || !data.gitHub) {
    return <ErrorBox error={new Error('Repository not found.')} />;
  } else {
    return (
      <>
        <Header gitHub={data.gitHub} adminLinks={[]} />
        <nav style={{margin: 16, textAlign: 'center'}}>
          <Anchor
            style={{color: '#8b8b8b', textDecoration: 'none', marginRight: 16}}
            href="https://github.com/bdougie/live">
            GitHub
          </Anchor>
          <Anchor
            style={{color: '#8b8b8b', textDecoration: 'none', marginRight: 16}}
            href="https://twitch.tv/bdougieYO">
            Twitch
          </Anchor>
          <Anchor
            style={{color: '#8b8b8b', textDecoration: 'none', marginRight: 16}}
            href="https://twitter.com/bdougieyo">
            Twitter
          </Anchor>
          <Anchor
            style={{color: '#8b8b8b', textDecoration: 'none', marginRight: 16}}
            href="https://discord.com/invite/gZMKK5q">
            Discord
          </Anchor>
          <Anchor
            style={{color: '#8b8b8b', textDecoration: 'none', marginRight: 16}}
            href="https://www.youtube.com/ilikerobot?sub_confirmation=1">
            Youtube
          </Anchor>
        </nav>
        {asyncHero.error && <div>Error: {asyncHero.error.message}</div>}
        {!asyncResultBool ? <TwitchStream /> : <TwitchVOD />}
        <Posts repository={respository} />
      </>
    );
  }
};
