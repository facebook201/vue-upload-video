<script>


export default {
  props: {
    type: String,
  },

  render(h) {
    let {

    },

    const data = {
      class: {
        'dm-upload-video': true,
      },
      on: {
        click: handleClick,
      }
    };

    data.class[`dm-upload-video`] = true;

    return (
      <div {...data} tabindex="0">
        {
          // 是否有其他功能比如拖拽
          this.$slots.default
        }
        <input class="dm-upload-video" type="file" ref="input" on-change={handleChange} multiple={multiple} accept={accept}></input>
      </div>
    );
  }
};
</script>
