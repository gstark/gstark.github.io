import { siGo, siRuby, siRust, siSwift, siZig, type SimpleIcon } from 'simple-icons'

// Rust's official mark is black, so it follows the text color to stay visible in dark mode.
const logos: Record<string, { icon: SimpleIcon; color?: string }> = {
  Ruby: { icon: siRuby, color: `#${siRuby.hex}` },
  Rust: { icon: siRust },
  Zig: { icon: siZig, color: `#${siZig.hex}` },
  Go: { icon: siGo, color: `#${siGo.hex}` },
  Swift: { icon: siSwift, color: `#${siSwift.hex}` },
}

export function LanguageLogo({ language }: { language: string }) {
  const logo = logos[language]
  if (!logo) return null
  return (
    <svg viewBox="0 0 24 24" className="size-3.5 shrink-0" fill={logo.color ?? 'currentColor'} aria-hidden>
      <path d={logo.icon.path} />
    </svg>
  )
}
