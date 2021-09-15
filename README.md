# ![ng-web-apis logo](projects/demo/src/assets/logo.svg) Web Storage API for Angular

> Part of <img src="projects/demo/src/assets/web-api.svg" align="top"> [Web APIs for Angular](https://ng-web-apis.github.io/)

[![npm version](https://img.shields.io/npm/v/@ng-web-apis/storage.svg)](https://npmjs.com/package/@ng-web-apis/storage)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ng-web-apis/storage)](https://bundlephobia.com/result?p=@ng-web-apis/storage)
[![Travis (.com)](https://img.shields.io/travis/com/ng-web-apis/storage)](https://travis-ci.com/ng-web-apis/storage)
[![Coveralls github](https://img.shields.io/coveralls/github/ng-web-apis/storage)](https://coveralls.io/github/ng-web-apis/storage?branch=master)
[![angular-open-source-starter](https://img.shields.io/badge/made%20with-angular--open--source--starter-d81676?logo=angular)](https://github.com/TinkoffCreditSystems/angular-open-source-starter)

This is a library to use
[Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
with Angular.

## Install

If you do not have [@ng-web-apis/common](https://github.com/ng-web-apis/common):

```
npm i @ng-web-apis/common
```

Now install the package:

```
npm i @ng-web-apis/storage
```

## How to use

Web Storage API consists of storage synthesis and storage recognition.

1. Use `STORAGE_EVENT` token inject an `Observable` of [`StorageEvent`](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent).
2. Use `filterByKey` and `toValue` utility operators to work with this `Observable`.
3. Native `StorageEvent` only fires when changes are made from another tab. To capture
   events from the same tab use `StorageService` to work with `localStorage`

## See also

Other [Web APIs for Angular](https://ng-web-apis.github.io/) by [@ng-web-apis](https://github.com/ng-web-apis)

## Open-source

Do you also want to open-source something, but hate the collateral work?
Check out this [Angular Open-source Library Starter](https://github.com/TinkoffCreditSystems/angular-open-source-starter)
we’ve created for our projects. It got you covered on continuous integration,
pre-commit checks, linting, versioning + changelog, code coverage and all that jazz.
