import { useEffect, useState } from 'react';
 
// const GOLD = '#A38332';

// --- Star rating (accessible) -------------------------------------------------
function Stars({ rating, label }) {
  const filled = Math.round(rating);
  return (
    <span
      className="inline-flex items-center"
      role="img"
      aria-label={label ?? `${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          aria-hidden="true"
          fill="currentColor"
          className={`h-4 w-4 ${i <= filled ? 'text-[#A38332]' : 'text-white/20'}`}
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77 4.8 17.5l.99-5.78L1.58 7.62l5.82-.85L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}
 
// --- Reviews section ------
export default function GoogleReviews() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'
 
  useEffect(() => {
    let active = true;
    fetch('/api/reviews')
      .then((res) => {
        if (!res.ok) throw new Error('Request failed');
        return res.json();
      })
      .then((json) => {
        if (!active) return;
        setData(json);
        setStatus('ready');
      })
      .catch(() => active && setStatus('error'));
    return () => {
      active = false;
    };
  }, []);
 
  // If reviews can't load, render nothing rather than an empty/broken block.
  if (status === 'error') return null;
  if (status === 'ready' && (!data?.reviews || data.reviews.length === 0)) return null;
 
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-[#0f172a] px-4 py-16 sm:px-6 lg:px-8"
      // className="py-16 scroll-mt-24 bg-[#0f172a] relative overflow-hidden"
    >
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(201,162,77,0.15),transparent_40%)]"></div> */}
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 id="reviews-heading" className="text-3xl font-bold text-white">
            What Our Clients Say
          </h2>
          {/* <p className="text-xl text-slate-300">
            Real reviews from our clients on Google
          </p> */}
 
          {status === 'ready' && data?.rating != null && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-slate-300">
              <Stars rating={data.rating} label={`Average rating ${data.rating} out of 5`} />
              <span className="font-semibold text-white">{data.rating.toFixed(1)}</span>
              <span className="text-slate-400">
                ({data.userRatingCount} Google review{data.userRatingCount === 1 ? '' : 's'})
              </span>
            </div>
          )}
        </div>
 
        {/* Loading skeleton */}
        {status === 'loading' && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-44 rounded-2xl border border-white/10 bg-white/5 animate-pulse" />
            ))}
          </div>
        )}
 
        {/* Reviews (Google returns up to 5) */}
        {status === 'ready' && (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.reviews.map((review) => (
              <li
                key={review.id}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  {review.author.photoUri ? (
                    <img
                      src={review.author.photoUri}
                      alt=""
                      width={40}
                      height={40}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-semibold text-slate-200">
                      {review.author.displayName.charAt(0)}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-white">
                      {review.author.uri ? (
                        <a
                          href={review.author.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {review.author.displayName}
                        </a>
                      ) : (
                        review.author.displayName
                      )}
                    </p>
                    {review.relativeTime && (
                      <p className="text-xs text-slate-400">{review.relativeTime}</p>
                    )}
                  </div>
                </div>
 
                <div className="mt-3">
                  <Stars rating={review.rating} label={`${review.rating} out of 5 stars`} />
                </div>
 
                {review.text && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 line-clamp-6">
                    {review.text}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
 
        {/* Attribution / link back to Google */}
        {status === 'ready' && data?.googleMapsUri && (
          <div className="mt-12 text-center">
            <a
              href={data.googleMapsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#A38332] px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-[#b8923a] hover:shadow-lg"
            >
              Leave Us A Review
            </a>
          </div>
        )}
      </div>
    </section>
  );
}