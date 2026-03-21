name: Embed Injectors

on:
  push:
    paths:
      - 'js/injector-*.js'
  workflow_dispatch:

jobs:
  embed:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Clone all brand repos
        run: |
          git clone https://github.com/Csmittee/janishammer-home.git
          git clone https://github.com/Csmittee/janis-flow.git
          git clone https://github.com/Csmittee/daje-queencatcher.git
          git clone https://github.com/Csmittee/jade-coffee.git

      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'

      - name: Run embedder
        run: |
          python scripts/embed_injectors.py

      - name: Commit and push changes to each repo
        run: |
          for repo in janishammer-home janis-flow daje-queencatcher jade-coffee; do
            cd $repo
            git config user.name "github-actions[bot]"
            git config user.email "github-actions[bot]@users.noreply.github.com"
            git add .
            git diff --quiet && git diff --staged --quiet || git commit -m "Auto-embed injectors"
            git push https://x-access-token:${{ secrets.GITHUB_TOKEN }}@github.com/Csmittee/$repo.git
            cd ..
          done
