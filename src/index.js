import UploadVideo from './package/upload-video';

const components = [
  UploadVideo,
];

components.forEach((component) => {
  window.Vue.use(component);
});

export default {
  versoin: '1.0.2',
  UploadVideo,
};
