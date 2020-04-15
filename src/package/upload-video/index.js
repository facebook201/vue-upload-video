import uploadVideo from './src';

/* istanbul ignore next */
uploadVideo.install = function(Vue) {
  Vue.component(uploadVideo.name, uploadVideo);
};

export default uploadVideo;
