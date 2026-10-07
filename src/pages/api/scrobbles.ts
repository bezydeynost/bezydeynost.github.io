import type { APIRoute } from 'astro';

const USER = import.meta.env.LASTFM_USER;
const API_KEY = import.meta.env.LASTFM_API_KEY;

export const GET: APIRoute = async () => {
  try {
    const url = new URL('https://ws.audioscrobbler.com/2.0/');

    url.searchParams.set('method', 'user.getrecenttracks');
    url.searchParams.set('user', USER);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('format', 'json');
    url.searchParams.set('limit', '25');

    const response = await fetch(url);

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Last.fm request failed' }),
        { status: 500 }
      );
    }

    const data = await response.json();

    const tracks = data.recenttracks.track.map((track: any) => {
      return {
        name: track.name,
        artist: track.artist['#text'],
        image:
          track.image?.find(
            (img: any) => img.size === 'large'
          )?.['#text'] ?? '',
        url: track.url,
        isPlaying:
          track['@attr']?.nowplaying === 'true'
      };
    });

    return new Response(JSON.stringify(tracks), {
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    return new Response(
      JSON.stringify({
        error: String(error)
      }),
      {
        status: 500
      }
    );
  }
};
