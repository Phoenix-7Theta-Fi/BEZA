
'use server';
import { PEXELS_API_KEY, FALLBACK_IMAGE_URL } from '@/lib/config';

interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

interface PexelsSearchResponse {
  total_results: number;
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  next_page?: string;
}

export async function fetchPexelsImage(
  query: string,
  width: number = 800,
  height: number = 600
): Promise<string | null> {
  if (!PEXELS_API_KEY) {
    console.error('Pexels API key is not configured.');
    return null;
  }

  const orientation = width > height ? 'landscape' : 'portrait';
  const apiUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=${orientation}&size=large`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      cache: 'no-store', // Consider 'force-cache' or revalidate options for production
    });

    if (!response.ok) {
      console.error(`Pexels API error: ${response.status} ${response.statusText}`);
      const errorBody = await response.text();
      console.error('Error body:', errorBody);
      return null;
    }

    const data = (await response.json()) as PexelsSearchResponse;

    if (data.photos && data.photos.length > 0) {
      const photo = data.photos[0];
      // Use the original image URL and append query parameters for specific dimensions
      // Pexels allows w, h, fit=crop, auto=compress, cs=tinysrgb
      return `${photo.src.original}?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop&dpr=1`;
    } else {
      console.warn(`No Pexels image found for query: ${query}`);
      return null;
    }
  } catch (error) {
    console.error('Failed to fetch image from Pexels:', error);
    return null;
  }
}
