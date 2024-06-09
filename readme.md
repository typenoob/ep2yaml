# Generate clash profile from cloudflare endpoint speedtest result

1. Use [warpgo-profile-generator](https://replit.com/@misaka-blog/warpgo-profile-generator) script to extract key from cloudflare WARP;
2. Edit template.yaml, fill in private-key and public-key;
3. Use [warp-yxip](https://gitlab.com/Misaka-blog/warp-script/-/tree/main/files/warp-yxip?ref_type=heads) script to generate result.csv;
4. Run `npm install && node main.js`.