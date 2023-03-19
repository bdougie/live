/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Box} from 'grommet';
import Avatar from './Avatar';
import Link from 'next/link';
import config from './config';
import {PostBox} from './Post';
import {useRouter} from 'next/router';

function Header({gitHub, adminLinks}) {
  return null;
  // const {pathname} = useRouter();

  // return (
  //   <>

  //     {/* removed until I can move it to the Nav 
  //     <Box margin="medium" style={{position: 'absolute', top: 0, right: 0}}>
  //       <Avatar gitHub={gitHub} adminLinks={adminLinks} />
  //     </Box>
  //     <PostBox>
  //       <Box
  //         pad={{horizontal: 'medium'}}
  //         border={{
  //           size: 'xsmall',
  //           side: 'bottom',
  //           color: 'rgba(0,0,0,0.1)',
  //         }}>
  //       </Box>
  //     </PostBox>
  //   */}
  //   </>
  // );
}

export default Header;
