function solution(d, budget) {
  var answer = 0;
  let request = d.sort();
  // 이 부분을 sort()로 하면 사실상 오름차순 정렬이 되지 않는다.
  // [1, 1000, 20]
  // 정확하게 숫자의 크기대로 오름차순 하려면 sort((a,b) -> a-b); 로 사용할 것.
  let asset = budget;
  for (let i = 0; i < request.length; i++) {
    if (request[i] <= asset) {
      answer += 1;
      asset = asset - request[i];
    }
  }
  return answer;
}
