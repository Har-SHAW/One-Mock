npx prettier --write src
npm run build
rm -rf ../Server/src/main/resources/templates/index.html
rm -rf ../Server/src/main/resources/static/static
rm -rf ../Server/src/main/resources/static/favicon.ico
mv ./dist/index.html ../Server/src/main/resources/templates/index.html
mv ./dist/static ../Server/src/main/resources/static/static
mv ./dist/favicon.ico ../Server/src/main/resources/static/favicon.ico
rm -rf dist