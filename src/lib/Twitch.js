const endpoint =
  'https://serve.onegraph.com/graphql?app_id=d2627198-06bf-4df5-944f-3a4decf24e15';
const docId = '097b1f97-3864-402f-bbf3-f867b583d1e8';
const body = {doc_id: docId}

async function fecthChannelStatus() {
  let response = await fetch(
    endpoint,
    {method: 'POST', body: JSON.stringify(body)},
  )
    .then(res => res.json())
    .then(json => json);

  let {data} = response.data;
  return data;
}

export async function channelStatus() {
  const data = await fecthChannelStatus();
  return data
}
