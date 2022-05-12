# GitHub Actions


## 브랜치 프로텍션 처리
- Settings > Branches에서 Rule 추가
  - Require status checks to pass before merging 체크
  - `unit-test` check status 추가

## 유닛 테스트 PR Hook test
- 트리거 : push, pull_request - reopened