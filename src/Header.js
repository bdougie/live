import React from 'react';
import {Box} from 'grommet/components/Box';
import {Heading} from 'grommet/components/Heading';
import Avatar from './Avatar';
import Post, {PostBox} from './Post';
import Link from './PreloadLink';
import config from './config';

export default function Header({gitHub, adminLinks}) {
  return (
    <>
      <Box margin="medium" style={{position: 'absolute', top: 0, right: 0}}>
        <Avatar gitHub={gitHub} adminLinks={adminLinks} />
      </Box>
      <PostBox>
        <Box
          pad={{horizontal: 'medium'}}
          border={{
            size: 'xsmall',
            side: 'bottom',
            color: 'rgba(0,0,0,0.1)',
          }}>
          <Heading style={{fontFamily: "SFMono-Regular", marginTop: 0, textAlign: "center"}} level={1}>
            <Link
              getProps={({isCurrent}) => ({
                style: isCurrent
                  ? {
                      textDecoration: 'none',
                      color: 'inherit',
                      cursor: 'auto',
                    }
                  : {color: 'inherit'},
              })}
              to="/">
              {config.title || 'OneBlog'}
            </Link>
          </Heading>
        </Box>
      </PostBox>
    </>
  );
}
