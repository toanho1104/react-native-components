import {takeLatest} from 'redux-saga/effects';

export default function* categorySaga() {
  yield takeLatest('sss', login);
}
function* login(action: any) {
  const {data, callback} = action?.payload;

  try {
    callback();
  } catch (error) {
    callback();
  }
}
