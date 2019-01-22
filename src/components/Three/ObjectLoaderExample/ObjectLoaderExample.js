import React, { Component } from 'react'
import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'

                
class ObjectLoaderExample extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    
    //scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color( 0x8FBCD4 );

    //camera
    const camera = new THREE.PerspectiveCamera(10, width / height, 0.1, 2000)
    camera.position.z = 4

    //renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio( window.devicePixelRatio );
    
    //add light
    const ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 );
    scene.add( ambientLight );

    const frontLight = new THREE.DirectionalLight( 0xffffff, 1 );
    frontLight.position.set( 10, 10, 10 );

    const backLight = new THREE.DirectionalLight( 0xffffff, 1 );
    backLight.position.set( -10, 10, -10 );

    scene.add( frontLight, backLight );


    //Load model
    new MTLLoader().load('models/bench.mtl', (materials) => {
        materials.preload()
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials)
        objLoader.load('models/bench.obj', (object) => {
          scene.add(object)
        })
      })

    //add orbit
    const orbit = new OrbitControls( camera, renderer.domElement );
    scene.add(orbit);


    //set this. valuable
    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    
    //response for changing window size
    window.addEventListener('resize', this.handleResize)

    this.mount.appendChild(this.renderer.domElement)
    this.start()
    console.log(this.scene);
  }

  componentWillUnmount() {
    window.removeEventListener('resize',  this.handleResize)
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  handleResize = () => {
    
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    
    this.renderer.setSize(width, height)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }

  animate = () => {
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        style={{ width: '100%', height: 'calc(100vh - 100px)' }}
        ref={mount => {
          this.mount = mount
        }}
      />
    )
  }
}

export default ObjectLoaderExample
