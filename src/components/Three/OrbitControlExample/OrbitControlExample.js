import React, { Component } from 'react'
import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'

class OrbitControlExample extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    
    //scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color( 0x8FBCD4 );
    
    //camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 4

    //rendere
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)

    //geometry
    const geometry = new THREE.BoxBufferGeometry(1, 1, 1)
    const material = new THREE.MeshStandardMaterial({ color: 0xff2200 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    //add Directlight
    const light = new THREE.DirectionalLight( 0xffffff, 5.0 );
    light.position.set( 0, 3, 3 );
    scene.add( light );

    //set this. valuable
    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.material = material
    this.cube = cube

    //add orbit controller
    const orbit = new OrbitControls( camera, renderer.domElement );
    scene.add(orbit);

    //response for changing window size
    window.addEventListener('resize', this.handleResize)

    this.mount.appendChild(this.renderer.domElement)
    this.start()
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
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01

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

export default OrbitControlExample
