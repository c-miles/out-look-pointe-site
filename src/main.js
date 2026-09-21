import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import './styles/tokens.css'
import './styles/base.css'

// The production build ships pre-rendered markup, so hydrate it. The dev server
// serves an empty #app, which gets a normal mount.
const container = document.getElementById('app')
const app = container.hasChildNodes() ? createSSRApp(App) : createApp(App)
app.mount(container)
