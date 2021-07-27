<template>
  <div class="traffic-lights">
    <button @tap="handleTap('close')" class="dib traffic-light traffic-light-close" id="close"></button>
    <button @tap="handleTap('minimize')" class="dib traffic-light traffic-light-minimize" id="minimize"></button>
    <button @tap="handleTap('maximize')" class="dib traffic-light traffic-light-maximize" id="maximize"></button>
  </div>
</template>

<script>
export default {
  methods: {
    handleTap(action) {
      this.$emit('action', action)
    }
  }
}
</script>

<style scoped>
.dib {
  display: inline-block;
}
.traffic-lights {
  top: 1px;
  left: 8px;
}
.focus .traffic-lights > .traffic-light-close, .traffic-lights:hover > .traffic-light-close, .traffic-lights:active > .traffic-light-close {
  background-color: #ff6159;
}
.focus .traffic-lights > .traffic-light-close:active:hover, .traffic-lights:hover > .traffic-light-close:active:hover, .traffic-lights:active > .traffic-light-close:active:hover {
  background-color: #bf4942;
}
.focus .traffic-lights > .traffic-light-minimize, .traffic-lights:hover > .traffic-light-minimize, .traffic-lights:active > .traffic-light-minimize {
  background-color: #ffbd2e;
}
.focus .traffic-lights > .traffic-light-minimize:active:hover, .traffic-lights:hover > .traffic-light-minimize:active:hover, .traffic-lights:active > .traffic-light-minimize:active:hover {
  background-color: #bf8e22;
}
.focus .traffic-lights > .traffic-light-maximize, .traffic-lights:hover > .traffic-light-maximize, .traffic-lights:active > .traffic-light-maximize {
  background-color: #28c941;
}
.focus .traffic-lights > .traffic-light-maximize:active:hover, .traffic-lights:hover > .traffic-light-maximize:active:hover, .traffic-lights:active > .traffic-light-maximize:active:hover {
  background-color: #1d9730;
}
.traffic-lights > .traffic-light:before, .traffic-lights > .traffic-light:after {
  visibility: hidden;
}
.traffic-lights:hover > .traffic-light:before, .traffic-lights:active > .traffic-light:before, .traffic-lights:hover > .traffic-light:after, .traffic-lights:active > .traffic-light:after {
  visibility: visible;
}
.traffic-light {
  border-radius: 100%;
  padding: 0;
  height: 12px;
  width: 12px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  margin-right: 3.5px;
  background-color: #ddd;
  position: relative;
  outline: none;
}
.example {
  margin: 0 0 30px;
}
.container {
  width: 300px;
  margin: 0 auto;
}
</style>