import type { Media } from '../data'

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// The first item spans the full width. The rest sit two to a row.
export function MediaGallery({ media }: { media: Media[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {media.map((item, index) => (
        <figure
          key={item.src}
          className={`overflow-hidden rounded-xl border border-neutral-200 bg-neutral-950 dark:border-neutral-800 ${index === 0 ? 'sm:col-span-2' : ''}`}
        >
          <MediaItem item={item} />
          <figcaption className="sr-only">{item.alt}</figcaption>
        </figure>
      ))}
    </div>
  )
}

function MediaItem({ item }: { item: Media }) {
  const className = 'block h-auto w-full'
  if (item.kind === 'video') {
    return (
      <video
        src={item.src}
        poster={item.poster}
        width={item.width}
        height={item.height}
        aria-label={item.alt}
        className={className}
        autoPlay={!reducedMotion}
        controls={reducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
      />
    )
  }
  return (
    <a href={item.src}>
      <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" className={className} />
    </a>
  )
}
