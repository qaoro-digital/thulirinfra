## Project architecture

- Keep shared company content and reusable page sections accessible via `src/components/site.tsx` so all public routes present one consistent source of truth.
- Treat all generated architectural media as representative imagery, never as documentary photography of completed Thulir Infra projects.
- Use the shared Button variants for architectural controls and IntersectionObserver for progressive scroll reveals; keep motion browser-only and respect reduced-motion preferences for accessible SSR-safe presentation.
- Reuse the shared package catalogue for Products and Packages, shared leadership records for portraits and contacts, and the shared service catalogue for enquiry options, to prevent pricing, identity, and service drift across pages.
- Define section spacing and heading scales as responsive shared CSS tokens and reuse the shared container across pages, so presentation refinements stay consistent without changing company content.
