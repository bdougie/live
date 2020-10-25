/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Box, Heading} from 'grommet';
import Avatar from './Avatar';
import Link from 'next/link';
import config from './config';
import {PostBox} from './Post';
import {useRouter} from 'next/router';

function Header({gitHub, adminLinks}) {
  const {pathname} = useRouter();

  return (
    <>
     <section className="text-white">
        <div className="max-w-3xl mx-auto text-center ">
          <h1 className="mb-5 text-3xl font-bold mt-15">
            Please replace this text with a heading.
          </h1>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
          </p>
        </div>
      </section>

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
            <Link href="/">
              <a
                style={
                  pathname === '/'
                    ? {
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: 'auto',
                      }
                    : {color: 'inherit'}
                }>
                {config.title || 'OneBlog'}
              </a>
            </Link>
          </Heading>
        </Box>
      </PostBox>
    </>
  );
}

export default Header;
