/* drena.co.kr — 설치형 앱(홈 화면 추가) 요건을 위한 최소 서비스 워커.
   캐시하지 않고 네트워크 응답을 그대로 씁니다. (오프라인 저장 없음) */
self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function () {
  /* 비어 있는 fetch 핸들러: 브라우저가 평소처럼 네트워크에서 받아옵니다. */
});
