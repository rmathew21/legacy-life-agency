// const FIELD_MASK = [
//     'displayName',
//     'rating',
//     'userRatingCount',
//     'googleMapsUri',
//     'reviews.rating',
//     'reviews.text',
//     'reviews.relativePublishTimeDescription',
//     'reviews.authorAttribution',
//     'reviews.publishTime',
//   ].join(',');
   
//   export default async function handler(req, res) {
//     const apiKey = process.env.GOOGLE_PLACES_API_KEY;
//     const placeId = process.env.GOOGLE_PLACE_ID;
   
//     if (!apiKey || !placeId) {
//       return res.status(500).json({ error: 'Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID env var.' });
//     }
   
//     const url = `https://places.googleapis.com/v1/places/${placeId}?languageCode=en`;
   
//     try {
//       const googleRes = await fetch(url, {
//         headers: {
//           'X-Goog-Api-Key': apiKey,
//           'X-Goog-FieldMask': FIELD_MASK,
//         },
//       });
   
//       if (!googleRes.ok) {
//         const detail = await googleRes.text();
//         console.error('Places API error:', googleRes.status, detail);
//         return res.status(googleRes.status).json({ error: 'Failed to fetch reviews from Google.' });
//       }
   
//       const data = await googleRes.json();
   
//       // Trim to exactly what the UI needs (smaller payload, no leaking of extra fields).
//       const payload = {
//         name: data.displayName?.text ?? 'Legacy Life Agency',
//         rating: data.rating ?? null,
//         total: data.userRatingCount ?? 0,
//         googleUrl: data.googleMapsUri ?? null,
//         reviews: (data.reviews ?? []).map((r) => ({
//           author: r.authorAttribution?.displayName ?? 'Google user',
//           photo: r.authorAttribution?.photoUri ?? null,
//           profileUrl: r.authorAttribution?.uri ?? null,
//           rating: r.rating ?? 0,
//           text: r.text?.text ?? '',
//           relativeTime: r.relativePublishTimeDescription ?? '',
//           publishTime: r.publishTime ?? null,
//         })),
//       };
   
//       // Cache at Vercel's edge: serve cached for 24h, revalidate in the background.
//       // Keeps Google API calls (and billing) low — reviews rarely change.
//       res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=43200');
//       return res.status(200).json(payload);
//     } catch (err) {
//       console.error('Reviews handler error:', err);
//       return res.status(500).json({ error: 'Unexpected error fetching reviews.' });
//     }
//   }
   
export default async function handler(req, res) {
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    const PLACE_ID = process.env.LEGACY_LIFE_PLACE_ID;
   
    if (!API_KEY || !PLACE_ID) {
      return res
        .status(500)
        .json({ error: 'Server is missing Google Places configuration.' });
    }
   
    const fieldMask = ['rating', 'userRatingCount', 'googleMapsUri', 'reviews'].join(',');
   
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;
   
    try {
      const googleRes = await fetch(url, {
        headers: {
          'X-Goog-Api-Key': API_KEY,
          'X-Goog-FieldMask': fieldMask,
          'Accept-Language': 'en-US',
        },
      });
   
      if (!googleRes.ok) {
        const detail = await googleRes.text();
        console.error('Places API error', googleRes.status, detail);
        return res.status(502).json({ error: 'Failed to fetch reviews from Google.' });
      }
   
      const data = await googleRes.json();
   
      const payload = {
        rating: data.rating ?? null,
        userRatingCount: data.userRatingCount ?? 0,
        googleMapsUri: data.googleMapsUri ?? null,
        writeReviewUri: `https://search.google.com/local/writereview?placeid=${PLACE_ID}`,
        reviews: (data.reviews ?? []).map((r) => ({
          id: r.name,
          rating: r.rating ?? 0,
          text: r.text?.text ?? r.originalText?.text ?? '',
          relativeTime: r.relativePublishingTimeDescription ?? '',
          publishTime: r.publishTime ?? null,
          author: {
            displayName: r.authorAttribution?.displayName ?? 'Google user',
            uri: r.authorAttribution?.uri ?? null, // link to reviewer's profile
            photoUri: r.authorAttribution?.photoUri ?? null,
          },
          reviewUri: r.googleMapsUri ?? null, 
        })),
      };
   
      
      // caching every 24 hours
      res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');
      return res.status(200).json(payload);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Unexpected error fetching reviews.' });
    }
  }