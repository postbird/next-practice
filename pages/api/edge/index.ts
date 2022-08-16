import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

const handler = (req: NextRequest) => {
  const { searchParams, host, hostname, search } = new URL(req.url);

  const data = {
    timestamp: Date.now(),
    urL: req.url,
    name: searchParams.get('name'),
    names: searchParams.getAll('name'),
    host,
    hostname,
    search,
    login_token: req.cookies.get('login_token'),
  };

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
      'Set-Cookie': 'login_token' + Date.now() + '=' + Date.now(),
    },
  });
};

export default handler;
