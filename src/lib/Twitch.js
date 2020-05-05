import axios from 'axios';

const endpoint =
  'https://serve.onegraph.com/graphql?app_id=d2627198-06bf-4df5-944f-3a4decf24e15';
const docId = '097b1f97-3864-402f-bbf3-f867b583d1e8';

async function fecthChannelStatus() {
  const config = {
    method: 'post',
    url: endpoint,
    data: {doc_id: docId},
  };
  let res = await axios(config);
  let {data} = res.data;
  return data;
}

export async function channelStatus() {
  const data = await fecthChannelStatus();
  return data
}
