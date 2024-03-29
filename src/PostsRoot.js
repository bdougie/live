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
import Feature from './components/Feature.js';

import type {
  PostsRoot_Query,
  PostsRoot_QueryResponse,
} from './__generated__/PostsRoot_Query.graphql';

export const query = graphql`
  # repoName and repoOwner provided by fixedVariables
  query PostsRoot_Query($repoName: String!, $repoOwner: String!)
  @persistedQueryConfiguration(
    fixedVariables: {environmentVariable: "REPOSITORY_FIXED_VARIABLES"}
    cacheSeconds: 300
  ) {
    ...Avatar_gitHub @arguments(repoName: $repoName, repoOwner: $repoOwner)
    repository(name: $repoName, owner: $repoOwner) {
      ...Posts_repository
    }
  }
`;

const BlogButton = ({name, onClick}) => {
  return (
    <button
      className="py-2 text-sm text-gray-400 border rounded-md px-7 focus:outline-none"
      onClick={onClick}>
      {name}
    </button>
  );
};

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

  const respository = data?.repository;
  if (!respository) {
    return <ErrorBox error={new Error('Repository not found.')} />;
  } else {
    return (
      <>
        <section className="text-white">
          <div className="max-w-3xl mx-auto text-center ">
            <h1 className="mb-5 text-3xl font-bold mt-15">
              Keeping it 💯 on the internet.
            </h1>
            <p>A digital garden for finding out what bdougie is working on.</p>
          </div>
        </section>
        <Header adminLinks={[]} />
        {asyncHero.error && <div>Error: {asyncHero.error.message}</div>}
        <section className="max-w-4xl mx-auto mt-16 bg-black h-96">
          {!asyncResultBool ? <TwitchStream /> : <TwitchVOD />}
        </section>
        <section className="my-16">
          <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
            <h1 className="text-2xl text-center">Work Work</h1>
            <p className="text-center">
              Below is list of things I am working on.
            </p>
            <br />
            {/* TODO: work on filtering posts by labels
            <div className="flex flex-col justify-center my-5 space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
              <BlogButton name="BLOG" />
              <BlogButton name="VIDEO" />
              <BlogButton name="PROJECT" />
              <BlogButton name="PODCAST" />
            </div>
            */}
            <Posts repository={respository} />
          </div>
        </section>
        <section className="text-white bg-purple-500">
          <div className="py-12">
            <div className="max-w-xl px-4 mx-auto text-center sm:px-6 lg:max-w-screen-xl lg:px-8">
              <h1 className="text-4xl">Who is this bdougie?</h1>
              <p className="max-w-5xl py-4 mx-auto">
                Brian Douglas is a Developer Advocate at GitHub where he works on increasing use of the GitHub’s platform specific features (Ask him about GitHub Actions!) through technical content distributed on the internet. In addition to that, Brian has a passion open source and loves mentoring new contributors.
              </p>
            </div>
            <div className="max-w-xl px-4 py-4 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <Feature
                  link="https://twitch.tv/bdougieYO"
                  title="Twitch"
                  description="I stream code Tuesday and Fridays. Watch me build GitHub Actions and contribute to Open Source projects."
                />
                <Feature
                  link="https://www.youtube.com/ilikerobot?sub_confirmation=1"
                  title="Youtube"
                  description="Developer focused videos every Tuesday and Thursdays. Learn how to grow your career and git action traction."
                />
                <Feature
                  link="https://twitter.com/bdougieYO"
                  title="Twitter"
                  description="I tweet sometimes. Find out what I tweet by following my every word as it happens on Twitter."
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};
