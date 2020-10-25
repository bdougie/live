// @flow

import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {createPaginationContainer, type RelayPaginationProp} from 'react-relay';
import Post from './Post';
import PostCard from './PostCard';
import type {Posts_repository} from './__generated__/Posts_repository.graphql';
import LoadingSpinner from './loadingSpinner';
import {Box} from 'grommet/components/Box';
import {useInView} from 'react-intersection-observer';
import config from './config';
import 'intersection-observer';

type Props = {|
  relay: RelayPaginationProp,
  repository: Posts_repository,
|};

// TODO: pagination. Can do pages or infinite scroll
const Posts = ({relay, repository}: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [inViewRef, inView] = useInView({threshold: 0});

  React.useEffect(() => {
    if (inView && !isLoading && !relay.isLoading() && relay.hasMore()) {
      setIsLoading(true);
      relay.loadMore(10, (x) => {
        setIsLoading(false);
      });
    }
  }, [relay, isLoading, setIsLoading, inView]);

  const issues = [];
  for (const edge of repository.issues.edges || []) {
    if (edge && edge.node) {
      issues.push(edge.node);
    }
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {issues.map((node, i) => (
        <div className="flex flex-col h-full overflow-hidden border border-gray-200 rounded-lg">
          <PostCard
            context="list"
            post={node}
            ref={!isLoading && i === issues.length - 1 ? inViewRef : null}
            key={node.id}
          />
        </div>
      ))}
      {isLoading ? (
        <Box
          align="center"
          margin="medium"
          style={{
            maxWidth: 704,
          }}>
          <LoadingSpinner width="48px" height="48px" />
        </Box>
      ) : null}
    </div>
  );
};

export default createPaginationContainer(
  Posts,
  {
    repository: graphql`
      fragment Posts_repository on GitHubRepository
      @argumentDefinitions(
        count: {type: "Int", defaultValue: 10}
        cursor: {type: "String"}
        orderBy: {
          type: "GitHubIssueOrder"
          defaultValue: {direction: DESC, field: CREATED_AT}
        }
      ) {
        issues(
          first: $count
          after: $cursor
          orderBy: $orderBy
          labels: ["publish", "Publish"]
        ) @connection(key: "PostsCard_posts_issues") {
          isClientFetched @__clientField(handle: "isClientFetched")
          edges {
            node {
              id
              ...PostCard_post
            }
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.repository && props.repository.issues;
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      return {
        count: count,
        cursor,
        orderBy: fragmentVariables.orderBy,
      };
    },

    query: graphql`
      # repoName and repoOwner provided by fixedVariables
      query PostsPaginationQuery(
        $count: Int!
        $cursor: String
        $orderBy: GitHubIssueOrder
        $repoOwner: String!
        $repoName: String!
      )
      @persistedQueryConfiguration(
        accessToken: {environmentVariable: "OG_GITHUB_TOKEN"}
        freeVariables: ["count", "cursor", "orderBy"]
        fixedVariables: {environmentVariable: "REPOSITORY_FIXED_VARIABLES"}
        cacheSeconds: 300
      ) {
        gitHub {
          repository(name: $repoName, owner: $repoOwner) {
            __typename
            ...Posts_repository
              @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)
          }
        }
      }
    `,
  },
);
