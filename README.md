# j1Lib_ToothChart 
Dental Record Models

The element specifies a way to embed a tooth chart in a web page.

###Element
Example:

    <j1Lib_ToothChart width="500px" height="500px" data="json/sample.json">
		
    </j1Lib_ToothChart>
![img](https://i.imgur.com/YOSPDzH.png)

###DOM Reference

####Methods  on each Teeth
- render()
 render two type of teeth, 5 parameter![img](http://i.imgur.com/P97hAFY.png) or 4 parameter![img](http://i.imgur.com/rtVdBkS.png)
    
 j1Lib_ToothChart.getElementsByTagName("IMG")[0].render(left,top,right,bottom,middle)

####Properties on j1Lib_ToothChart
 - width
 - height
 - data 
  the **path** of json for data binding on init
  
   *getter*: return the Teeth Array
   
   *setter*: set the json path

####Properties on each Teeth
- index

####Events on j1Lib_ToothChart
- onmouseover

   Fire when moving the mouse pointer over of a **Teeth**

- onmouseout

   Fire when moving the mouse pointer out of a **Teeth**

- onclick

   Fire when moving the mouse pointer click of a **Teeth**
