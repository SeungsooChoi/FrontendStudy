export const handleApiError = (error) => {
  if (error.response) {
    // 서버가 2xx 범위를 벗어난 상태 코드로 응답한 경우
    console.error('Response error:', error.response.data);
    return error.response.data.message || '서버 오류가 발생했습니다.';
  } else if (error.request) {
    // 요청이 이루어졌으나 응답을 받지 못한 경우
    console.error('Request error:', error.request);
    return '네트워크 오류가 발생했습니다.';
  } else {
    // 요청을 설정하는 중에 오류가 발생한 경우
    console.error('Error:', error.message);
    return '알 수 없는 오류가 발생했습니다.';
  }
};
