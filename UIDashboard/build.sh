npm run build
rm -rf ../One-Mock/src/main/resources/templates/index.html
rm -rf ../One-Mock/src/main/resources/static/static
rm -rf ../One-Mock/src/main/resources/static/favicon.ico
mv ./dist/index.html ../One-Mock/src/main/resources/templates/index.html
mv ./dist/static ../One-Mock/src/main/resources/static/static
mv ./dist/favicon.ico ../One-Mock/src/main/resources/static/favicon.ico
rm -rf dist