
# Perfil

## GitHub Pages Deployment

This project is configured for GitHub Pages deployment. To deploy:

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to Pages section (under "Code and automation")
4. Under "Build and deployment", select:
   - Source: "GitHub Actions"
   - Then choose the "Deploy static content to Pages" workflow
5. If needed, create a new workflow file (.github/workflows/deploy.yml) with the following content:

```yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

After setting up the workflow, your site will be deployed to GitHub Pages on each push to the main branch.
