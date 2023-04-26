var dom = document.getElementById("Author");
var myChart = echarts.init(dom, "dark", {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {

  title: {
    text: 'Authors'
  },
  tooltip: {
    trigger: 'item'
  },
 
  
  legend: {
    top: '6%',
    left: 'center'
  },
  series: [
    {
      // name: 'Access From',
      type: 'pie',
      radius: ['30%', '60%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 10,
        // borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      // emphasis: {
      //   label: {
      //     show: false,
      //     fontSize: 40,
      //     fontWeight: 'bold'
      //   }
      // },
      // labelLine: {
      //   show: true,
      // },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
        { value: 300, name: 'Vtet' },
        { value: 300, name: 'Vasdfasd' },
        { value: 300, name: 'Vsfda' },
        { value: 300, name: 'Vsfava' },
        { value: 300, name: 'asda' },
        { value: 300, name: 'asdew' },
        { value: 300, name: '23dsd' },
        { value: 300, name: 't5w' },
        { value: 300, name: 'asda' },
        { value: 300, name: 'asfv' },
        { value: 300, name: 'vfad' },
        { value: 300, name: 'asdfas' },
        { value: 300, name: 'asdfa' },
        
      ]
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);