# Deployment Instructions

This guide will help you deploy this repository to GitHub under the organization/user `ikignosis` and set up a custom domain `ikignosis.org`.

## 1. Push to GitHub

1. [Create a new repository](https://github.com/new) under the `ikignosis` account. Name it as desired (e.g., `ikignosis.org`).
2. Initialize your local repo (if not already):
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Add the GitHub remote and push:
   ```sh
   git remote add origin https://github.com/ikignosis/<REPO_NAME>.git
   git branch -M main
   git push -u origin main
   ```
   Replace `<REPO_NAME>` with your chosen repository name.

## 2. Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click on **Settings** > **Pages**.
3. Under **Source**, select the branch to deploy (usually `main`) and the root (`/`) folder.
4. Save.

## 3. Set Custom Domain

1. In the **Pages** settings, enter `ikignosis.org` as your custom domain and save.
2. Add a `CNAME` file to your repository (if not automatically created) with the following content:
   ```
   ikignosis.org
   ```

## 4. Configure DNS

1. Go to your domain registrar where `ikignosis.org` is managed.
2. Set the following DNS records:
   - **A records** (for apex domain):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME record** (for `www`):
     - Name: `www`
     - Value: `<your-github-username>.github.io.`

   For more details, see [GitHub Pages Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages).

## 5. Verify

- After DNS changes propagate, visit https://ikignosis.org to verify your site is live.
- GitHub Pages will automatically provide HTTPS via Let's Encrypt.

---

For troubleshooting, consult the [GitHub Pages documentation](https://docs.github.com/en/pages).
