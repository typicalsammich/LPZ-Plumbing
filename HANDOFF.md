# LPZ website handoff

The website is in this directory. The local preview uses `node scripts/run-framework.mjs dev` (currently port 3000). Production: `node scripts/run-framework.mjs build`.

## September 26 visual revisions
- Five interactive Three.js scenes: construction rough-in, bathroom remodel, burst pipe and shutoff, inspection camera, water filtration. Scenes load near the viewport, pause rendering off-screen, dispose GPU resources when unmounted, cap pixel ratio, and respect reduced motion.
- Camera-inspection reveal transitions from an exterior pipe to a cutaway showing the probe, lighting cone and an illustrative root intrusion. Drag rotates the models; touch devices retain page scrolling.
- Geographic Leaflet map with live OpenStreetMap tiles, official Census municipal boundaries, and the City of Phoenix Laveen Village boundary. City selection shades the polygon and flies to its bounds. Reset returns to the Valley view. Geography does not guarantee service availability.
- Removed decorative arrow glyphs across application pages and components.
- Native SVG water-droplet cursor and valve-wheel hover cursor on fine-pointer devices. Text fields retain their text cursor, and touch devices retain normal behavior.
- Transparent logo integrated into header, footer and intro.

## Logo asset
Original retained: `public/assets/lpz-logo.png`.
Transparent full-resolution edit: `public/assets/lpz-logo-transparent.png`.
Optimized asset used by site: `public/assets/lpz-logo-web.png`.
Created with the built-in image-generation editing tool, then resized for web use without removing alpha.
Final editing prompt: "Edit target: supplied authentic LPZ Plumbing Solutions logo. Background extraction only. Remove the white exterior background and white negative-space background gaps, output true transparent alpha PNG. Preserve ALL logo lettering, blue gradient, red wrench, black outlines and silver/white metallic parts exactly, with unchanged proportions and complete uncropped logo. Do not redesign, redraw, substitute text, or add effects. Keep original aspect ratio."

## Geographic sources
- U.S. Census TIGERweb Places layers 4 and 5: https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Places_CouSub_ConCity_SubMCD/MapServer
- Laveen Village: https://maps.phoenix.gov/pub/rest/services/public/Villages/MapServer/0
- Data downloaded September 26, 2026; WGS84 GeoJSON simplified by source API with a 0.0002-degree tolerance. All 11 requested locations have a polygon.
- Basemap: https://www.openstreetmap.org/copyright (visible attribution retained).

## Scheduling delivery
The six-step request form validates service, address, preferred date/time, contact details and issue description. Preferences are not appointments. The server validates again, checks same-origin requests and a honeypot, caps input size, uses provider idempotency, and reports success only after the provider accepts delivery.
Set `RESEND_API_KEY` and `SERVICE_REQUEST_FROM` (verified sender) in runtime secrets to activate delivery. Requests go to `lpzplumbing1@gmail.com`; no credentials are embedded in browser code. Without those settings the API returns 503, the form states the request was not sent, and the visitor can call or open a prefilled email. Email acceptance is not an appointment confirmation. Production provider configuration and actual delivery have not been tested because no credentials were supplied.

## Content and production notes
- Business information and all 35 services verified against LPZ's current website. Testimonials are attributed to that site; no fabricated ratings or aggregate review schema.
- Existing coupons expired March 2025 and are not promoted as current offers.
- San Tan Valley and Fountain Hills copy discloses the original site's narrower naming and asks visitors to confirm their address.
- No team or completed-project photos were supplied. The cinematic hero is conceptual artwork, and model scenes are illustrative, not claimed LPZ projects. Instagram links lead to actual company media.
- Set `NEXT_PUBLIC_SITE_URL` for the final canonical domain. Current canonical URLs use https://lpzplumbing.com.
- No external website has been published. The GitHub ZIP uses neutral hosting settings and is ready for independent repository setup.
- Do not publish a Lighthouse score unless a production audit has actually been run. Automated route checks are stored in `qa-routes.json`.

## Review presentation
Customer testimonials now use an editorial layout with initials, clear attribution, keyboard-accessible customer tabs and responsive mobile selectors. Full original quotes are retained without fabricated ratings.
