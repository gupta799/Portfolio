import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {nodePolyfills} from 'vite-plugin-node-polyfills'
import{createHtmlPlugin} from 'vite-plugin-html'
// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
if(mode == 'development'){
  return {
    server:{
      port:8080,
      open:true
    },
    build:{
      outDir:'build'
    },
    plugins:[
      react(),
      nodePolyfills(),
      createHtmlPlugin({
        minify:true,
        entry:'./src/main.tsx',
        template:'./index.html',
        inject:{
          tags:[
            {
              injectTo:'body-prepend',
              tag:'div',
              attrs:{
                id:'tag'
              }
            }
          ]
        }
      })

    ]
  }
}else{
  return {}
}
})
