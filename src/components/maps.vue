<template>
  <div>
    <div class="map" id="Map"></div>
  </div>
</template>
<script>
import { MP } from "../map";
export default {
  name: "bdmap",
  mounted() {
    this.baiduMap();
    Map(gMYfzbhaMBMdwSFxVRiknIQPlQDydLKH).than(BMap => {
      var map = new BMap.Map("Map");
      const point = new Bmap.point(104.059024, 30.665996);
      map.centerAndZoom(point, 20);
    });
  }
};
</script>