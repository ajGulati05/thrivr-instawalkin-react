#!/bin/bash
set -e
REGISTRY_DSO=$1
REGISTRY_AWS=$2
VERSION=$3
TAG=$4
PROXY_URL=${PROXY_URL:="http://172.30.1.41:5001"}

echo "Registries: $REGISTRY_DSO, $REGISTRY_AWS | Version: $VERSION | Tag: $TAG"

docker build -f Dockerfile.prod -t "backoffice-v2-web:$VERSION" .

#yarn install
#export REACT_APP_API_URL=$PROXY_URL
#sed -i "s/\"version\": .*,/\"version\": \"$VERSION\",/g" package.json
#yarn build

#cp docker/Dockerfile build/Dockerfile
#cp -r server build/.
#cp scripts/init.sh build/.

#docker build build/. -t "back-office/web-client:$VERSION"

docker tag "back-office/web-client:$VERSION" "$REGISTRY_DSO/back-office/web-client:$VERSION"
docker push "$REGISTRY_DSO/back-office/web-client:$VERSION"

#docker tag "back-office/web-client:$VERSION" "$REGISTRY_AWS/back-office/web-client:$VERSION"
#docker push "$REGISTRY_AWS/back-office/web-client:$VERSION"

git add -A
if [ -n "$(git diff-index HEAD)" ]
then
  git commit -m "Release"
fi
git tag -am "Release" $TAG
git push origin master --tags
