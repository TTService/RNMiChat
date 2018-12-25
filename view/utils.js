// obtained from react native tutorials

import React from 'react';
import { PixelRatio } from 'react-native';
import Dimensions from 'Dimensions';

const Util = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  post(url, data, callback) {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
    .then((response) => {
      return response.json()
    })
    .then((responseData) => {
      callback(responseData);
    });
  },
  key: 'BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE',

    color: {
        aliceblue : "#F0F8FF",  	    //	艾莉斯蓝
        antiquewhite  : "#FAEBD7",	//	古董白
        aqua : "#00FFFF",       	    //	水蓝
        aquamarine  : "#7FFFD4",    	//	蓝晶
        azure : "#F0FFFF",          	//	天蓝
        beige : "#F5F5DC",          	//	米色
        bisque  : "#FFE4C4",	        //	浓汤
        black : "#000000",          	//	黑色
        blanchedalmond  : "#FFEBCD",	//	杏仁白
        blue  : "#0000FF",          	//	蓝色
        blueviolet  : "#8A2BE2",    	//	紫罗兰色
        brown : "#A52A2A",          	//	棕色
        burlywood : "#DEB887",      	//	原木色
        cadetblue : "#5F9EA0",      	//	藏青
        chartreuse  : "#7FFF00",    	//	黄绿色
        chocolate : "#D2691E",      	//	巧克力
        coral : "#FF7F50",          	//	珊瑚
        cornflowerblue : "#6495ED", 	//	矢菊花
        cornsilk  : "#FFF8DC",      	//	玉米穗黄
        crimson : "#DC143C",        	//	赤红
        cyan  : "#00FFFF",          	//	青色
        darkblue  : "#00008B",      	//	深蓝
        darkcyan  : "#008B8B",      	//	深青绿
        darkgoldenrod : "#B8860B",  	//	深金黄
        darkgray  : "#A9A9A9",     	//	深灰色
        darkgreen : "#006400",      	//	深绿色
        darkgrey  : "#A9A9A9",      	//	深灰色
        darkkhaki : "#BDB76B",      	//	深卡其色
        darkmagenta : "#8B008B",    	//	深洋红
        darkolivegreen  : "#556B2F",	//	深橄榄绿
        darkorange  : "#FF8C00",    	//	深橙
        darkorchid  : "#9932CC",    	//	深兰花紫
        darkred : "#8B0000",        	//	深红
        darksalmon  : "#E9967A",    	//	深橙红
        darkseagreen  : "#8FBC8F",  	//	海藻绿
        darkslateblue : "#483D8B",  	//	深青蓝
        darkslategray : "#2F4F4F",  	//	深青灰
        darkslategrey : "#2F4F4F",  	//	黑暗的晚灰色
        darkturquoise : "#00CED1",  	//	深粉蓝
        darkviolet  : "#9400D3",    	//	深紫
        deeppink  : "#FF1493",      	//	深粉红
        deepskyblue : "#00BFFF",    	//	深天蓝
        dimgray : "#696969",        	//	暗灰
        dimgrey : "#696969",        	//	昏暗的灰色
        dodgerblue  : "#1E90FF",    	//	宝蓝
        firebrick : "#B22222",      	//	耐火砖
        floralwhite : "#FFFAF0",    	//	花白
        forestgreen : "#228B22",    	//	森林绿
        fuchsia : "#FF00FF",        	//	紫红色
        gainsboro : "#DCDCDC",      	//	亮灰
        ghostwhite  : "#F8F8FF",    	//	鬼白
        gold  : "#FFD700",          	//	金
        goldenrod : "#DAA520",      	//	黄花
        gray  : "#808080",          	//	灰色
        green : "#008000",	        //	绿色
        greenyellow : "#ADFF2F",    	//	黄绿色
        grey  : "#808080",          	//	灰色
        honeydew  : "#F0FFF0",      	//	甘露
        hotpink : "#FF69B4",        	//	亮粉色
        indianred : "#CD5C5C",      	//	印地安
        indigo  : "#4B0082",        	//	靛青
        ivory : "#FFFFF0",          	//	象牙
        khaki : "#F0E68C",          	//	黄褐色
        lavender  : "#E6E6FA",      	//	薰衣草
        lavenderblush : "#FFF0F5",  	//	淡紫
        lawngreen : "#7CFC00",      	//	草绿
        lemonchiffon  : "#FFFACD",  	//	粉黄
        lightblue : "#ADD8E6",      	//	浅蓝
        lightcoral  : "#F08080",    	//	浅珊瑚红
        lightcyan : "#E0FFFF",      	//	浅青绿
        lightgoldenrodyellow  : "#FAFAD2", 	//	浅金黄
        lightgray : "#D3D3D3",      	//	浅灰
        lightgreen  : "#90EE90",    	//	浅绿
        lightgrey : "#D3D3D3",      	//	浅灰色
        lightpink : "#FFB6C1",      	//	浅粉红
        lightsalmon : "#FFA07A",    	//	橙红
        lightseagreen : "#20B2AA",  	//	海藻绿
        lightskyblue  : "#87CEFA",  	//	天蓝
        lightslategray  : "#778899",	//	青灰
        lightslategrey  : "#778899",	//	浅灰色
        lightsteelblue  : "#B0C4DE",	//	浅钢
        lightyellow : "#FFFFE0",    	//	浅黄色
        lime  : "#00FF00",          	//	酸橙
        limegreen : "#32CD32",      	//	暗绿
        linen : "#FAF0E6",          	//	麻布
        magenta : "#FF00FF",        	//	品红
        maroon  : "#800000",        	//	栗色
        mediumaquamarine  : "#66CDAA", 	//	草绿
        mediumblue  : "#0000CD",       	//	暗蓝
        mediumorchid  : "#BA55D3",     	//	暗兰花
        mediumpurple  : "#9370DB",     	//	暗紫
        mediumseagreen  : "#3CB371",   	//	暗海藻
        mediumslateblue : "#7B68EE",   	//	青蓝
        mediumspringgreen : "#00FA9A", 	//	嫩绿
        mediumturquoise : "#48D1CC",   	//	粉蓝
        mediumvioletred : "#C71585",   	//	暗紫
        midnightblue  : "#191970",     	//	黑蓝
        mintcream : "#F5FFFA",        	//	薄荷乳白
        mistyrose : "#FFE4E1",        	//	粉玫瑰红
        moccasin  : "#FFE4B5", 	    //	莫卡辛
        navajowhite : "#FFDEAD",  	//	印地安
        navy  : "#000080",     	    //	海军
        oldlace : "#FDF5E6",      	//	旧布黄
        olive : "#808000",   	    //	橄榄
        olivedrab : "#6B8E23",    	//	淡绿褐
        orange  : "#FFA500",   	    //	橙子
        orangered : "#FF4500",	    //	橙红色
        orchid  : "#DA70D6",	        //	兰花
        palegoldenrod : "#EEE8AA",	//	淡金黄
        palegreen : "#98FB98",    	//	淡绿
        paleturquoise : "#AFEEEE",	//	淡蓝绿
        palevioletred : "#DB7093",	//	浅紫红
        papayawhip  : "#FFEFD5",  	//	粉木瓜橙
        peachpuff : "#FFDAB9",    	//	粉桃红
        peru  : "#CD853F",      	    //	秘鲁
        pink  : "#FFC0CB",      	    //	粉
        plum  : "#DDA0DD",	        //	李子
        powderblue  : "#B0E0E6",  	//	粉蓝色
        purple  : "#800080",      	//	紫色
        red : "#FF0000",	            //	红色
        rosybrown : "#BC8F8F",    	//	玫瑰褐
        royalblue : "#4169E1",	    //	宝蓝色
        saddlebrown : "#8B4513",	    //	马鞍棕色
        salmon  : "#FA8072", 	    //	三文鱼
        sandybrown  : "#F4A460",	    //	黄褐
        seagreen  : "#2E8B57",	    //	海绿色
        seashell  : "#FFF5EE",	    //	贝壳
        sienna  : "#A0522D",     	//	黄土
        silver  : "#C0C0C0",	        //	银
        skyblue : "#87CEEB",	        //	天蓝色
        slateblue : "#6A5ACD",	    //	青蓝
        slategray : "#708090",	    //	青灰
        slategrey : "#708090",	    //	板岩灰色
        snow  : "#FFFAFA",	        //	雪
        springgreen : "#00FF7F",	    //	嫩绿
        steelblue : "#4682B4",	    //	钢青
        tan : "#D2B48C",	            //	黄褐色
        teal  : "#008080",	        //	水鸭
        thistle : "#D8BFD8",	        //	蓟
        tomato  : "#FF6347",	        //	番茄
        turquoise : "#40E0D0",	    //	绿松石
        violet  : "#EE82EE",	        //	紫色
        wheat : "#F5DEB3",	        //	小麦
        white : "#FFFFFF",	        //	白色
        whitesmoke  : "#F5F5F5",	    //	白色的烟
        yellow  : "#FFFF00",	        //	黄色
        yellowgreen : "#9ACD36",	    //	黄绿色
    },
    dimension: {
        content_text_size_20: 20,
        content_text_size_18: 18,
        content_text_size_16: 16,
        content_text_size_14: 14,
        content_text_size_15: 15,
        content_text_size_13: 13,
        content_text_size_12: 12,
        content_text_size_10: 10,
        content_text_size_9: 9,
        font_size_xxxsmall: 13,
        font_size_xxsmall: 14,
        font_size_xsmall: 15,
        font_size_small: 16,
        font_size_middle: 17,
        font_size_large: 18,
        font_size_xlarge: 19,
        font_size_xxlarge: 20,
    }
};


// import {StyleSheet, Platform} from 'react-native';

// export function create(styles: Object): {[name: string]: number} {
//   const platformStyles = {};
//   Object.keys(styles).forEach((name) => {
//     let {ios, android, ...style} = {...styles[name]};
//     if (ios && Platform.OS === 'ios') {
//       style = {...style, ...ios};
//     }
//     if (android && Platform.OS === 'android') {
//       style = {...style, ...android};
//     }
//     platformStyles[name] = style;
//   });
//   return StyleSheet.create(platformStyles);
// }

export default Util;
