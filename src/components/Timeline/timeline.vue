<template>
<div id="visualization">
  <div class="menu">
    <div id="timeline" style="height:100%">
      <div class="tools vs-btn-group" v-if="hideTools!=true">
        <i class="material-icons dp48 buttons-menu" @click="goToday()">home</i>
        <i class="material-icons dp48 buttons-menu" @click="zoomIn()">arrow_back</i>
        <i class="material-icons dp48 buttons-menu" @click="zoomOut()">arrow_forward</i>
      </div>
    </div>
  </div>
</div>    
</template>

<style src="./style.css"></style>

<script>
import vis from 'vis'

export default {
  name: 'timeline',
  props: {
    items: {required: true},
    groups: {required: false},
    option: {required: false},
    start: {required: false},
    end: {required: false},
    hideTools:{required: false}
  },
  data: function () {
    return {
      timeline: null,
      timelineData: {
        items: [],
        groups: [],
        option: {
					onMove: item => { this.$emit('item-move', item)},
					editable: {
						add: false,
						updateTime: true,
						updateGroup: false,
						remove: false,
						overrideItems: false
					},
					orientation: 'top',
					height: '100%',
					verticalScroll: true,
					horizontalScroll: true,
					zoomKey: 'ctrlKey',
					zoomMax: 160000000000,
					zoomMin: 100000000,
					showTooltips: true
				}
      }
    }
  },
  watch: { 
    items: function(items) {
      this.timelineData.items = new vis.DataSet(items)
      this.updateTimeline()
    },
    groups: function(groups) {
      this.timelineData.groups = groups
      this.updateTimeline()
    }
  },
  methods: {
    goToday: function() {
      this.timeline.moveTo(this.$moment());
    },
    zoomIn: function () {
      this.timeline.zoomIn(0.4);
    },
    zoomOut: function () {
      this.timeline.zoomOut(0.4);
    },
    initTimeline: function () {
      var container = document.getElementById('timeline');
    
      // Create a Timeline
      if (!this.timeline) {
        this.timeline = new vis.Timeline(container, this.timelineData.items, this.timelineData.groups, this.timelineData.option);
        this.timeline.on('rangechanged', e => {this.$emit('range-changed', e)});
      }
    },
    updateTimeline: function () {
      if (this.timeline) {
        this.timeline.setData({groups: this.timelineData.groups, items: this.timelineData.items})
      }
    }
  },
  mounted: function() {
    // If not present use default
    if (this.option) {
      this.timelineData.option = this.option
      this.timelineData.option.onMove = item => { this.$emit('item-move', item)}
    }
    this.timelineData.items = this.items
    this.timelineData.groups = this.groups

    this.timelineData.option.start = this.start
    this.timelineData.option.end = this.end
    this.initTimeline()
  }
}

</script>