<script setup lang="ts">
import { QrcodeStream } from 'vue-qrcode-reader'
import { ScannerInput } from "./Models/ScannerInput";
import { ref } from "vue";

const cameraIsLoading = ref(true);

let nextId = 1;
const codes = ref( {} as ScannerInput );

const onCameraReady = () =>{
  console.error("onCameraReady");
  cameraIsLoading.value = false;
}

const onDetect = (detectedCodes:ScannerInput[]) =>{
  console.warn("Input received");

  detectedCodes.forEach(code => {

    const toAdd = {
      id: nextId++, 
      format:code.format, 
      rawValue:code.rawValue
    } as ScannerInput
    
    codes.value = toAdd;



  });

}

</script>
<template>
  <div id="root" class="app-container">
    <!--==== Content ====================================================-->

    <div class="content-wrapper">
      
      <div v-if="cameraIsLoading">Preparing Camera...</div>

      <QrcodeStream 
        @detect="onDetect"
        @camera-on="onCameraReady"
      />

      <table v-if="codes.id > 0">
        <tr>
          <th style="width:3em">Id</th>
          <th style="width:5em">Format</th>
          <th style="width:100%">Value</th>
        </tr>
        <tr>
          <td>{{ codes.id }}</td>
          <td>{{ codes.format }}</td>
          <td>{{ codes.rawValue }}</td>
        </tr>
      </table>

    </div>
  </div>
</template>

<style scoped lang="scss">

// .debug-border{
//   border:1px dotted grey;
// }

table, th, td {
  background-color: black;
  border: 1px solid darkgreen;
  border-collapse: collapse;
}
th, td {
  padding: 5px;
}
th {
  text-align: left;
}

.app-container {
  height: 100vh;
  width:100%;
  display: grid;
  overflow: hidden;

  grid-template-rows: 0em 2.5em 1fr 2.5em 0em;
  grid-template-columns: 0em 2.5em 1fr 2.5em 0em;

  transition: 150ms;
  transition-timing-function: ease-out;
}

.content-wrapper{
  grid-row:3/4;
  grid-column:3;
  
  color: greenyellow;
  margin:auto;
}

.drawer{
  position: absolute;
  z-index: 10;
  overflow: hidden;
  top:0;
  bottom:0;
  max-width:250px;
  display: grid;
  grid-template-rows: 0em 2.5em 1fr 2.5em 0em;
  

  transition: 150ms;
  transition-timing-function: ease-out;

}
.drawer-open{
  width:100%;
  background-color: black;
  border-right: 4px double grey;

}
.drawer-shut{
  width:0%;
  border-right: none;

}



.drawer-header{  
  grid-row:2;
  display: flex;
  margin-left: 1em;
}

.drawer-content{
  grid-row:3;
  max-width:250px;
  
}

.drawer-button{
  font-size:x-large;
  background-color: transparent;
  border: none;
  color: white;
  width:100%
  
}
.drawer-button:hover{
  color: goldenrod;
  
}
.drawer-button:active{
  color: gold;
}

.flex-button{
  display: flex;
  height:100%;  
  width:100%;
  max-width:220px;
  font-size:xx-large;
  background-color: transparent;
  border: none;
  
  align-items:flex-end;
  margin-left:.75em;

  border-radius: 50%;

}
.flex-button:hover{
  box-shadow:
    -14px -5px 5px rgb(65, 46, 0),
    14px 5px 5px goldenrod; 
  
}
.flex-button:active{
  box-shadow:
    -14px -5px 5px rgb(53, 14, 0),
    14px 5px 5px rgb(86, 23, 0),
}

</style>
