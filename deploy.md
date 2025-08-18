# Deployment Instructions for nine.ch

This guide will help you deploy this static website to nine.ch hosting services.

## Prerequisites

- You have a nine.ch account
- You have access to your nine.ch customer portal
- Your domain is managed through nine.ch or you can update DNS records

## 1. Prepare Your Files

Ensure your website files are ready for deployment:

```bash
# Make sure all files are committed
git add .
git commit -m "Prepare for nine.ch deployment"

# Create a deployment package
zip -r website.zip . -x "*.git*" "node_modules/*" "*.DS_Store*"
```

## 2. Upload to nine.ch

### Option A: Via FTP/SFTP

1. Log into your nine.ch customer portal
2. Navigate to your hosting package
3. Find your FTP credentials (host, username, password)
4. Upload files using your preferred FTP client:
   - **Host**: Usually `ftp.yourdomain.com` or provided by nine.ch
   - **Username**: Provided by nine.ch
   - **Password**: Provided by nine.ch
   - **Port**: Usually 21 (FTP) or 22 (SFTP)

5. Upload all files to the `public_html` or `www` directory

### Option B: Via File Manager

1. Log into your nine.ch customer portal
2. Navigate to your hosting package
3. Open the File Manager
4. Navigate to the `public_html` or `www` directory
5. Upload your files (you can upload the zip and extract it on the server)

## 3. Configure Domain

### If your domain is managed by nine.ch:

1. In your nine.ch customer portal, go to DNS settings
2. Ensure your domain points to your hosting package
3. The A record should point to your hosting IP (provided by nine.ch)

### If your domain is managed elsewhere:

1. Get your hosting IP from nine.ch customer portal
2. Update your domain's DNS A record to point to this IP
3. Or update nameservers to nine.ch's nameservers if preferred

## 4. Verify Deployment

1. Wait for DNS propagation (5-30 minutes)
2. Visit your domain in a browser
3. Check that all pages load correctly
4. Test different language versions:
   - `/` (main page)
   - `/en_US/` (English)
   - `/de_DE/` (German)
   - `/fr_FR/` (French)
   - `/pt_PT/` (Portuguese)
   - `/ru_RU/` (Russian)
   - `/kk_KZ/` (Kazakh)

## 5. SSL Certificate (HTTPS)

nine.ch typically provides free SSL certificates:

1. In your nine.ch customer portal
2. Navigate to SSL/TLS settings
3. Enable SSL for your domain
4. The certificate will be automatically provisioned

## 6. Troubleshooting

### Common Issues:

- **404 errors**: Check that files are in the correct directory (`public_html`)
- **CSS/JS not loading**: Ensure file paths are correct and files uploaded
- **Language switching not working**: Verify all language subdirectories exist
- **Domain not resolving**: Check DNS settings and propagation

### Support:

If you encounter issues:
- Check nine.ch documentation: https://docs.nine.ch
- Contact nine.ch support through your customer portal
- Check server error logs in your hosting control panel

## 7. Maintenance

For future updates:
1. Make changes locally
2. Test thoroughly
3. Upload changed files via FTP/SFTP or File Manager
4. Clear browser cache if changes don't appear immediately

---

**Note**: The `CNAME` file has been removed as it's specific to GitHub Pages and not needed for nine.ch hosting.