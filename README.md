# AllTechSolutions — GitHub Pages ready

Next.js 15 + TypeScript + Tailwind CSS. WhatsApp enquiries go to +91 9368397332 after the visitor taps Send.

## Run locally (Windows PowerShell)
```powershell
npm.cmd install
npm.cmd run dev
```
Open http://localhost:3000.

## Deploy with GitHub Actions (recommended)
1. Create a **public** GitHub repository, e.g. `alltechsolutions`.
2. Upload/push **all files in this folder** (including `.github/workflows/deploy.yml` and `package.json`) to the repository root on the `main` branch. Do NOT upload node_modules, .next, or out.
3. Open repository **Settings → Pages → Build and deployment → Source: GitHub Actions**. Do not select Deploy from a branch.
4. Open **Actions** tab and wait for the `Deploy AllTechSolutions to GitHub Pages` workflow to succeed (or manually run it via Run workflow).
5. Website URL without custom domain: `https://YOUR_USERNAME.github.io/REPO_NAME/`. The workflow automatically configures the Next.js base path for project Pages.

## Add custom domain later
1. Decide your actual domain, e.g. `www.example.com`. You must own it; we cannot fill it in without the real name.
2. In GitHub repository **Settings → Secrets and variables → Actions → Variables → New repository variable**, create `CUSTOM_DOMAIN` with the hostname (no https://, no slash), e.g. `www.example.com`.
3. In **Settings → Pages → Custom domain**, enter the **same** hostname and Save.
4. In your DNS provider, add `CNAME` for `www` pointing to `YOUR_USERNAME.github.io` (not your repo path). For apex/root `example.com`, use four A records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Do not remove email DNS records.
5. Re-run workflow (Actions → Deploy AllTechSolutions → Run workflow) or push a new commit. The workflow removes the project base path and creates `out/CNAME` for the custom domain.
6. Wait for DNS and certificate provisioning, then enable **Enforce HTTPS** in Settings → Pages. Verify both `www` and root domain behavior.

**Important:** If you set `CUSTOM_DOMAIN` before DNS works, the original project URL may not render correctly because the build switches to root-relative assets. Set it when you're ready to connect the domain.

## Build for other static hosting (Hostinger etc.)
```powershell
npm.cmd install
npm.cmd run build
```
Upload the **contents** of `out` to the web root (`public_html` on Hostinger). For local production build with a custom-domain/root deployment, leave `NEXT_PUBLIC_SITE_BASE_PATH` unset.

## Limits
- GitHub Pages serves static files; no server-side Next.js features.
- WhatsApp requires the visitor to tap Send; the form does not automatically send messages or store enquiries.
- GitHub Pages is not intended for hosting an online business/e-commerce operation; use a commercial host for your permanent business website.
