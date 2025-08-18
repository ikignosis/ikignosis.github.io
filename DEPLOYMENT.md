# nine.ch Git Deployment Guide

This repository is configured for automatic deployment to nine.ch using their Git integration feature.

## Quick Start

1. **Connect your repository to nine.ch:**
   - Log into your nine.ch customer portal
   - Navigate to "Apps" or "Application Hosting"
   - Click "Create New App" or "Deploy from Git"
   - Select "Import from Git Repository"
   - Connect your GitHub/GitLab/Bitbucket account or provide repository URL

2. **Configure the deployment:**
   - Repository URL: `https://github.com/your-username/ikignosis.github.io.git`
   - Branch: `main` (or your preferred branch)
   - The `.nine.ch.yml` file will be automatically detected and used for configuration

3. **Domain setup:**
   - Choose your domain name during app creation
   - nine.ch will automatically provision SSL certificates

## Configuration Files

### `.nine.ch.yml`
- Main configuration file for nine.ch app deployment
- Defines build process, routing, scaling, and security settings
- Automatically detected by nine.ch platform

### `Dockerfile`
- Alternative deployment method using containerization
- Uses nginx-alpine for optimal static file serving
- Includes security hardening and performance optimizations

### `nginx.conf`
- Custom nginx configuration optimized for this static site
- Handles language-specific routing (/en_US/, /de_DE/, etc.)
- Includes gzip compression and security headers

### `.dockerignore`
- Excludes unnecessary files from Docker build context
- Reduces build time and image size

## Deployment Features

### Automatic Deployment
- Every push to the configured branch triggers a new deployment
- Zero-downtime deployments with rolling updates
- Automatic rollback on failure

### Language Support
The configuration supports all language versions:
- English (`/en_US/`)
- German (`/de_DE/`)
- French (`/fr_FR/`)
- Portuguese (`/pt_PT/`)
- Russian (`/ru_RU/`)
- Kazakh (`/kk_KZ/`)

### Performance Optimizations
- Gzip compression for all text-based assets
- Long-term caching for static assets (images, CSS, JS)
- Optimized nginx configuration
- Security headers included

### SSL/HTTPS
- Automatic SSL certificate provisioning via Let's Encrypt
- HTTP to HTTPS redirect enabled
- Security headers configured

## Environment Variables

You can override default settings using environment variables in the nine.ch dashboard:

- `NGINX_WORKER_PROCESSES`: Number of nginx worker processes (default: auto)
- `NGINX_CLIENT_MAX_BODY_SIZE`: Maximum upload size (default: 10m)

## Monitoring

- Health checks configured on `/` endpoint
- Automatic restart on failure
- Resource usage monitoring in nine.ch dashboard

## Troubleshooting

### Build Issues
- Check the build logs in nine.ch dashboard
- Ensure all files are committed to git
- Verify `.nine.ch.yml` syntax

### Deployment Issues
- Check application logs in nine.ch dashboard
- Verify domain DNS settings
- Check SSL certificate status

### Performance Issues
- Monitor resource usage in nine.ch dashboard
- Consider scaling up resources if needed
- Check browser developer tools for asset loading issues

## Manual Deployment (Alternative)

If you prefer manual deployment over FTP/SFTP:

1. Use the original `deploy.md` file for FTP-based deployment
2. The configuration files in this repository are optimized for Git-based deployment

## Support

For nine.ch-specific issues:
- Check nine.ch documentation: https://docs.nine.ch
- Contact nine.ch support through your customer portal
- Check application logs and build logs in the dashboard

For repository-specific issues:
- Check this repository's issues section
- Review the configuration files for any customizations needed