# GitHub Pages Repository Naming Requirements

## User/Organization Sites
If you want your GitHub Pages site to be served at `https://ikignosis.github.io` (or with a custom domain like `ikignosis.org`), the repository **must** be named:

```
ikignosis.github.io
```

- This applies to both users and organizations.
- The main branch (usually `main` or `master`) will be published.

## Project Sites
If you want to publish a project site at a subpath, e.g., `https://ikignosis.github.io/myproject`, the repository can be named anything (e.g., `myproject`).
- In this case, the site will be available at `https://ikignosis.github.io/<repo-name>/`.
- You can still set a custom domain for a project site, but it's less common.

## Custom Domain
If you set a custom domain (like `ikignosis.org`), you can use either a user/organization site or a project site. However, for the root domain (`ikignosis.org`), it's recommended to use the `ikignosis.github.io` repository name for simplicity and compatibility.

## Summary Table
| Site Type             | Repo Name              | URL Example                          |
|----------------------|-----------------------|--------------------------------------|
| User/Org site (root) | ikignosis.github.io   | https://ikignosis.github.io/         |
| Project site         | any                   | https://ikignosis.github.io/myrepo/  |
| Custom domain        | any (see note)        | https://ikignosis.org                |

**Note:** For custom domains, the repo name does not strictly matter, but using `ikignosis.github.io` is standard for root-level sites.

---

For more details, see [GitHub Docs: About GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)
