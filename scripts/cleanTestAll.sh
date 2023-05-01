#!/bin/bash
set -e
yarn install
yarn test $@
# yarn coverage
